import { Card } from "@/components/ui/card";
import { Fragment, MessageRole, MessageType } from "@/generated/prisma";
import { cn } from "@/lib/utils";
import { Assistant } from "next/font/google";
import {format} from "date-fns";
import Image from "next/image";
import { Fragment as ReactFragment } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import { fr } from "date-fns/locale";


interface UserMessageProps{
    content: string;
};

const UserMessage = ({content}: UserMessageProps) =>{
    return (
        <div className="flex justify-end pb-4 pr-2 pl-10">
            <Card className="rounded-lg bg-muted p-3 shadow-none border-none max-w-[80%] break-words">
                {content}
            </Card>
        </div>
    );
};

interface FragmentCardProps {
    fragment: Fragment;
    isActiveFragment : boolean
    onFragmentClick : (fragment: Fragment) => void;
};

const FragmentCard = ({
    fragment,
    isActiveFragment,
    onFragmentClick,
}: FragmentCardProps)=>{
    return (
        <div className="w-fit">
            <Button
                variant="ghost"
                className={cn(
                    "flex items-start gap-2 rounded-lg p-3 hover:bg-secondary/80 transition-all h-auto",
                    isActiveFragment && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => onFragmentClick(fragment)}
            >
                <Code2Icon className="h-4 w-4 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium line-clamp-1">
                        {fragment.title}
                    </span>
                    <span className={cn(
                        "text-xs",
                        isActiveFragment ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                        Preview
                    </span>
                </div>
                <div className="flex items-center justify-center mt-0.5">
                    <ChevronRightIcon className="size-4 "/>
                </div>
            </Button>
        </div>
    );
};
interface AssistantMessageProps {
    content: string;
    role : MessageRole;
    fragment : Fragment | null;
    createdAt : Date;
    isActiveFragment : boolean;
    onFragmentClick : (fragment:Fragment) => void;
    type : MessageType;
}

const AssistantMessage = ({
    content,
    role,
    fragment,
    createdAt,
    isActiveFragment,
    onFragmentClick,
    type,
}: AssistantMessageProps) =>{
    const isStatusMessage = content.startsWith("Status: ");
    const displayContent = isStatusMessage ? content.replace(/^Status:\s*/, "") : content;
    return (
        <div className={cn(
            "flex flex-col group px-2 pb-4",
            type === "ERROR" && "opacity-50 text-red-700 dark:text-red-500",
        )}>
            <div className="flex items-center gap-2 pl-2 mb-2">
                <Image 
                 src = "/polo1.png"
                 alt = "Polo"
                 width = {35}
                 height = {25}
                 className="shrink-0"
                />
                <span className="text-sm text-shadow-gray-500 font-medium">
                    Vedic
                </span>
                <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 text-shadow-gray-500">
                    {format(createdAt, "HH:mm 'on' MMMM dd, yyyy")}
                </span>
            </div>
            <div className="pl-8.5 flex flex-col gap-y-4">
                {isStatusMessage ? (
                    <div className="inline-flex w-fit items-center gap-2 rounded-md border bg-muted/70 px-3 py-2 text-sm text-muted-foreground">
                        <span>{displayContent}</span>
                    </div>
                ) : (
                    <span>
                        {displayContent}
                    </span>
                )}
                {fragment && type === "RESULT" &&(
                    <FragmentCard
                      fragment = {fragment}
                      isActiveFragment={isActiveFragment}
                      onFragmentClick = {onFragmentClick}
                    />
                )}
            </div>
        </div>
    )
}
interface MessageCardProps{
    content: string;
    role : MessageRole;
    fragment : Fragment | null;
    createdAt : Date;
    isActiveFragment : boolean;
    onFragmentClick : (fragment:Fragment) => void;
    type : MessageType;
};

export const MessageCard=({
    content,
    role,
    fragment,
    createdAt,
    isActiveFragment,
    onFragmentClick,
    type,
}:MessageCardProps) =>{
    if (role == "ASSISTANT"){
        return (
           <AssistantMessage
             content = {content}
             fragment = {fragment}
             createdAt = {createdAt}
             isActiveFragment = {isActiveFragment}
             onFragmentClick = {onFragmentClick}
             type = {type}
            /> 
        )
    }
    return (
        <UserMessage content={content}/>
    );
};

