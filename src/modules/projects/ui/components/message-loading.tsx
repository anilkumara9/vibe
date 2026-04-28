import Image from "next/image";
import { useState, useEffect } from "react";

const messages = [
    "Thinking...",
    "Loading...",
    "Leave to me...",
    "Grab your coffee...",
    "Generating...",
    "Analyzing your request...",
    "Building your website...",
    "Crafting components...",
    "Optimizing layout...",
    "Adding final touches...",
    "Almost ready..."
];

export const MessageLoading = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => {
                setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
                setIsBlinking(false);
            }, 150); // Blink for 150ms before changing message
        }, 2000); // Change message every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col group px-2 pb-4">
            <div className="flex items-center gap-2 pl-2 mb-2">
                <Image 
                    src="/polo1.png"
                    alt="Polo"
                    width={35}
                    height={25}
                    className="shrink-0"
                />
                <span className="text-sm text-muted-foreground font-medium">
                    Vedic
                </span>
            </div>
            <div className="pl-8.5">
                <div className={`relative overflow-hidden transition-opacity duration-150 ${isBlinking ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="text-sm text-muted-foreground">
                        {messages[currentMessageIndex]}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
            </div>
        </div>
    );
};