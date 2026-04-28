import { protectedProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";
import prisma from "@/lib/db";
import { inngest } from "@/inngest/client";
import { TRPCError } from "@trpc/server";
import {generateSlug} from "random-word-slugs";
import { consumeCredits } from "@/lib/usage";

export const projectsRouter = createTRPCRouter({
  
   getone : protectedProcedure
   .input(z.object({    
      id: z.string().min(1, { message: "ProjectId is required" }),
    }))
    .query(async ({ input,ctx }) => {
    const existingProject = await prisma.project.findUnique({
      where: {
        id: input.id,
        userId: ctx.auth.userId,
      },
    });

    if (!existingProject) {
      throw new TRPCError({code:"NOT_FOUND", message:"Project not found"});
    }
    return existingProject;      
  }),

  getmany : protectedProcedure.query(async ({ctx}) => {
    const projects = await prisma.project.findMany({
      where: {
        userId: ctx.auth.userId,
      },
      orderBy: {
        updateAt: "desc",
      },
      // include: {
      //   fragment: true,
      // }
    });
    return projects;      
  }),
  create: protectedProcedure
    .input(
      z.object({
        Value: z.string()
        .min(1, { message: "value is required" })
         .max(10000, { message: "given value is too long" })
      }),
    )
    .mutation(async ({ input, ctx }) => {

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
      const createdProject = await prisma.project.create({
        data: {
          userId: ctx.auth.userId,
          name: generateSlug(2,{
            format :"kebab",
          }),
          messages : {
            create : {
              content: input.Value,
              role: "USER",
              type: "RESULT",
            }
          }
        },
      });

      // const createdMessage = await prisma.message.create({
      //   data: {
      //     content: input.Value,
      //     role: "USER",
      //     type: "RESULT",
      //   },
      // });
      await inngest.send({
        name: "code-agent/run",
        data: {
          value: input.Value,
          projectId : createdProject.id,
        },
      });
      return createdProject;
    }),
});
