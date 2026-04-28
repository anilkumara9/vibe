"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

export const ProjectList = () => {
  const trpc = useTRPC();
  const {user} = useUser();
  const { data: projects } = useQuery(trpc.projects.getmany.queryOptions());

  if (!user) return null;
    if (!projects) return <div className="text-muted-foreground">Loading...</div>;
  return (
    <div className="w-full bg-white dark:bg-sidebar rounded-xl p-8 border flex flex-col gap-y-6 sm:gap-y-4">
      <h2 className="text-2xl font-semibold ">{user?.firstName}&apos;s projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {projects?.length === 0 && (
          <div className="col-span-3 text-center text-muted-foreground">
            <p className="tex-sm text-shadow-muted-foreground">
              No projects found. Start building something new!
            </p>
          </div>
        )}
        {projects?.map((project) => (
          <Button
            key={project.id}
            variant="outline"
            className="font-normal h-auto justify-start w-full text-start p-4"
            asChild
          >
            <Link href={`/projects/${project.id}`}>
              <div className="flex items-center gap-x-4">
                <Image
                  src="/polo1.png"
                  alt={project.name}
                  width={40}
                  height={40}
                  className="object-contain rounded-md"
                />
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-sm truncate font-medium">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(project.updateAt, { addSuffix: true })}
                  </p>
                </div>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
