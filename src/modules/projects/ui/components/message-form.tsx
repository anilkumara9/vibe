import {z} from "zod";
import { toast } from "sonner";
import { useState } from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Plus, Paperclip, Loader2, ArrowUp } from "lucide-react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Usage } from "./usage";

interface Props{
    projectId : string;
};

const formSchema = z.object({
    Value: z.string()
        .min(1, { message: "Message is required" })
        .max(10000, { message: "Message is too long" }),
})

export const MessageForm = ({projectId} : Props) => {
    const trpc = useTRPC();
    const router = useRouter();
    const {data: usage} = useQuery(trpc.usage.status.queryOptions());
    const queryClient = useQueryClient();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            Value:"",
        },
    });

    const createMessage = useMutation(trpc.messages.create.mutationOptions({
        onSuccess : (data) => {
            form.reset();
            queryClient.invalidateQueries(
                trpc.messages.getmany.queryOptions({
                    ProjectId: projectId
                }),
            );
            queryClient.invalidateQueries(
                trpc.usage.status.queryOptions()
            );
        },
        onError: (error) => {
            //TODO : Redirect to pricing page if specific error found
            toast.error(error.message);

            if(error.data?.code === "TOO_MANY_REQUESTS"){
                router.push("/pricing");
            }
        }
    }))

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await createMessage.mutateAsync({
            Value: values.Value,
            ProjectId: projectId,
        });
    };

    const [isFocused,setIsFocused] = useState(false);
    const isPending = createMessage.isPending;
    const isButtonDisabled = isPending || !form.formState.isValid;
    const showUsage = !!usage;

    return (
        <Form {...form}>
            {showUsage && (
                <Usage 
                    points={usage.remainingPoints}
                    msBeforeNext={usage.msBeforeNext}
                />
            )}
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn("relative w-full max-w-4xl mx-auto", showUsage && "mt-0")}
            >
                <div className="bg-gray-600 rounded-2xl p-0.5 shadow-lg">
                    <div className="bg-black rounded-2xl p-4 mb-0.5 relative">
                        <textarea
                            {...form.register("Value")}
                            value={form.watch("Value") || ""}
                            onChange={(e) => {
                                form.setValue("Value", e.target.value);
                                // Auto-resize textarea
                                if (e.target) {
                                    e.target.style.height = "auto";
                                    e.target.style.height = `${e.target.scrollHeight}px`;
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                                    e.preventDefault();
                                    form.handleSubmit(onSubmit)(e);
                                }
                            }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            disabled={isPending}
                            placeholder="What would you like to build?"
                            className="w-full min-h-[80px] max-h-[200px] bg-transparent border-0 text-white placeholder:text-gray-400 resize-none text-base focus:ring-0 focus:outline-none p-0 leading-relaxed"
                            style={{
                                background: "transparent !important",
                                boxShadow: "none !important",
                                outline: "none !important",
                            }}
                        />
                        {form.watch("Value")?.length > 0 && (
                            <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                                {form.watch("Value")?.length}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-600 rounded-2xl">
                        <div className="text-sm text-gray-300 font-mono flex items-center gap-1">
                            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-700 px-1.5 font-mono text-xs font-medium text-gray-300">
                                ⌘
                            </kbd>
                            <span>+</span>
                            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-700 px-1.5 font-mono text-xs font-medium text-gray-300">
                                Enter
                            </kbd>
                            <span>to submit</span>
                        </div>
                        <Button
                            type="submit"
                            size="sm"
                            className={`h-8 px-4 rounded-full shadow-sm transition-all duration-200 flex items-center gap-2 ${
                                form.watch("Value")?.trim()
                                    ? "bg-white text-gray-900 hover:bg-gray-100"
                                    : "bg-gray-500 text-gray-300 cursor-not-allowed"
                            }`}
                            disabled={!form.watch("Value")?.trim() || isPending}
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    <span>Processing</span>
                                </>
                            ) : (
                                <>
                                    <ArrowUp className="h-4 w-4" />
                                    <span>Submit</span>
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}