"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import {dark} from "@clerk/themes"
import { Hint } from "./hint";
import { useCurrentTheme } from "@/hooks/use-current-theme";

interface Props {
    showName?: boolean;
};

export const UserControl = ({showName}:Props) => {
    const currentTheme = useCurrentTheme();

    const { user } = useUser();
    const username = user?.username || user?.firstName || "User";

    return (
        <div className="flex items-center gap-2">
            <Hint text={username} side="bottom" align="end">
                <UserButton
                    showName={false}
                    appearance={{
                        elements: {
                            userButtonBox: "rounded-md!",
                            userButtonAvatarBox: "rounded-md! size-8!",
                            userButtonAvatarImage: "rounded-full",
                        },
                        baseTheme : currentTheme === "dark" ? dark:undefined,
                    }}
                />
            </Hint>
        </div>
    );
}