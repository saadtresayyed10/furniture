import Image from "next/image";
import Link from "next/link";

interface FurnitureProps {
  name: string;
  image: string;
  link: string;
}

const Furniture = ({ name, image, link }: FurnitureProps) => {
  return (
    <>
      <Link href={link}>
        <div className="text-base lg:text-lg font-absans font-bold tracking-wide duration-300 border-2 bg-warning-200 hover:bg-warning-300 border-black text-black lg:px-20 px-8 py-6 lg:py-10 rounded-full">
          <div className="flex justify-center items-center gap-y-2 flex-col">
            {name} <Image src={image} alt={name} width={40} height={40} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Furniture;
