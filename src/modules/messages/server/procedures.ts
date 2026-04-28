import { protectedProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";
import prisma from "@/lib/db";
import { inngest } from "@/inngest/client";
import { TRPCError } from "@trpc/server";
import { consumeCredits } from "@/lib/usage";

export const messagesRouter = createTRPCRouter({
  getmany : protectedProcedure
   .input(
      z.object({
        ProjectId: z.string().min(1, { message: "ProjectId is required" })
      }),
    )
  .query(async ({ input,ctx }) => {
    // if (!ctx.auth.userId){
      //   throw new TRPCError({})
      // }
    const messages = await prisma.message.findMany({
      where: {
        projectId: input.ProjectId,
        project:{
          userId: ctx.auth.userId
        }
      },
      include:{
        fragment:true,
      },
      orderBy: {
        updateAt: "asc",
      },
    });
    return messages;
  }),
  create: protectedProcedure
    .input(
      z.object({
        Value: z.string()
        .min(1, { message: "Message is required" })
        .max(10000, { message: "Message is too long" }),
        ProjectId: z.string().min(1, { message: "ProjectId is required" })
      }),
    )
    .mutation(async ({ input,ctx }) => {
      const existingProject = await prisma.project.findUnique({
        where: {
          id: input.ProjectId,
          userId: ctx.auth.userId,
        },
      });

      if(!existingProject){
        throw new TRPCError({code:"NOT_FOUND", message: "Project not found"})
      }

      try{
         await consumeCredits();
      }catch (error){
          if(error instanceof Error){
            throw new TRPCError({code : "BAD_REQUEST",message: "something went wrong"})
          }else{
            throw new TRPCError({
              code: "TOO_MANY_REQUESTS",
              message: "You have run out of credits"
            });
          }
        
      }
     

      const createdMessage = await prisma.message.create({
        data: {
          projectId: existingProject.id,
          content: input.Value,
          role: "USER",
          type: "RESULT",
        },
      });
      await inngest.send({
        name: "code-agent/run",
        data: {
          value: input.Value,
          projectId : input.ProjectId,
        },
      });
      return createdMessage;
    }),
});
