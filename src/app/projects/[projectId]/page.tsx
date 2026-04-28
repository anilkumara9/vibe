import { ProjectView } from "@/modules/projects/ui/views/project-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

interface Props {
    params: Promise<{
        projectId: string;
    }>
}

const page = async ({params}: Props) => {
    const {projectId} = await params;

    const queryClient = await getQueryClient();
    void queryClient.prefetchQuery(trpc.messages.getmany.queryOptions({
        ProjectId:projectId,
    }));
    void queryClient.prefetchQuery(trpc.projects.getone.queryOptions({
        id:projectId,
    }));

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ErrorBoundary fallback={<p className="text-red-400">Error!</p>}>
                <Suspense fallback={<p>Loading...</p>}>
                    <ProjectView projectId={projectId} />
                </Suspense>
            </ErrorBoundary>
        </HydrationBoundary>
    );
};

export default page;