import 'server-only';
import { cache } from "react";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { createTRPCContext } from "./init";
import { makeQueryClient } from "./query_client";
import { appRouter} from "./routers/_app";
// import { httpLink } from "@trpc/client";

export const getQueryClient = cache(makeQueryClient);
export const trpc = createTRPCOptionsProxy({
    ctx : createTRPCContext,
    router : appRouter,
    queryClient: getQueryClient,
});

// createTRPCOptionsProxy({
//     client : createTRPCClient({
//         links: [httpLink({ url : '...'})],
//     }),
//     queryClient: getQueryClient,
// })