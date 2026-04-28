import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectList } from "@/modules/home/ui/components/project-list";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:py-48">
        <div className="flex flex-col items-center">
          <Image
            src="/polo1.png"
            alt="Polo"
            width={70}
            height={70}
            className="shrink-0"
          />
        </div>
        <h1 className="text-2xl font-bold md:text-5xl text-center">
          build something with polo
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">
          create apps and websites by chatting with plop agent
        </p>
        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
        </div>
      </section>
       <ProjectList />
    </div>
  );
};

export default page;