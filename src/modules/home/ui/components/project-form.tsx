"use client"

import {z} from "zod";
import { toast } from "sonner";
import { useState, useRef } from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Plus, Mic, User, ImageIcon, ArrowUp, Paperclip, Smile, AtSign, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {useMutation, useQueryClient} from "@tanstack/react-query"

import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {PROJECT_TEMPLATES} from "@/modules/home/constants";
import { useClerk } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useCurrentTheme } from "@/hooks/use-current-theme";



// interface Props{
//     projectId : string;
// };

const formSchema = z.object({
    Value: z.string()
        .min(1, { message: "Message is required" })
        .max(10000, { message: "Message is too long" }),
})

export const ProjectForm = () => {
    const clerk = useClerk();
    const trpc = useTRPC();
    const router = useRouter();
    const queryClient = useQueryClient();
    const currentTheme = useCurrentTheme();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            Value:"",
        },
    });

    const createProject = useMutation(trpc.projects.create.mutationOptions({
        onSuccess : (data) => {
            // form.reset();
            queryClient.invalidateQueries(
                trpc.projects.getmany.queryOptions(),
            );
            queryClient.invalidateQueries(
                trpc.usage.status.queryOptions(),
            );
            router.push(`/projects/${data.id}`);
        },
        onError: (error) => {
            if(error.data?.code === "UNAUTHORIZED"){
                clerk.openSignIn({
                    appearance: {
                        baseTheme: currentTheme === "dark" ? dark : undefined,
                        elements: {
                            cardBox: "border! shadow-none! rounded-lg!"
                        },
                    }
                });
            }
            if(error.data?.code === "TOO_MANY_REQUESTS"){
                router.push("/pricing");
            }
            toast.error(error.message);
        }
    }))

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await createProject.mutateAsync({
            Value: values.Value,
        });
    };

    const onSelect = (value:string) => {
        form.setValue("Value", value,{
            shouldDirty:true,
            shouldValidate:true,
            shouldTouch:true,
        });
    };

    const [isFocused,setIsFocused] = useState(false);
    const isPending = createProject.isPending;
    const isButtonDisabled = isPending || !form.formState.isValid;
    // const showUsage = false;


    return (
        <Form {...form}>
            <section className="space-y-6">
            <form 
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative w-full max-w-4xl mx-auto"
            >
              <div className="bg-gray-600 rounded-2xl p-1 shadow-lg">
                <div className="bg-black rounded-2xl p-5 mb-1 relative">
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
                    className="w-full min-h-[100px] max-h-[250px] bg-transparent border-0 text-white placeholder:text-gray-400 resize-none text-base focus:ring-0 focus:outline-none p-0 leading-relaxed"
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
            <div className="flex-wrap justify-center gap-2 hidden md:flex max-w-3xl mt-4">
               {PROJECT_TEMPLATES.map((template) => (
                    <Button
                        key={template.title}
                        variant="outline"
                        size = "sm"
                        className="bg-white dark:bg-sidebar"
                        onClick={() => onSelect(template.prompt)}
                        >
                          {template.title}

                    </Button>
               ))}
            </div>
         </section>
        </Form>
    )
}