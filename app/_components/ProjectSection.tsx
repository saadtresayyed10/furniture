import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectSectionProps {
  image: string;
  name: string;
  description: string;
  link: string;
}

const ProjectSection = ({
  description,
  image,
  link,
  name,
}: ProjectSectionProps) => {
  return (
    <div className=" text-black text-center flex flex-col justify-center items-center lg:gap-y-3 gap-y-2">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="border-2 border-black lg:w-[360px] w-[280px] h-[200px] lg:h-[260px] shadow-md rounded-lg"
      />
      <h1 className="text-2xl font-semibold tracking-wide mt-3">{name}</h1>
      <div className="flex justify-center items-center flex-col gap-y-2 lg:w-[60%] w-[80%] mb-4 lg:mb-2">
        <h3 className="tracking-normal lg:text-sm text-sm">{description}</h3>
        <Link href={link}>
          <button className="flex justify-center items-center hover:gap-x-3 duration-500 gap-x-1 px-4 py-1 bg-black text-warning-300 rounded-full mb-10">
            <span>Check</span>
            <ArrowRight className="w-4 h-4 stroke-[1.5]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
