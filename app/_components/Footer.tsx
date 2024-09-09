import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white text-black font-absans lg:mb-2 mb-1">
      <h3 className="lg:text-lg text-sm capitalize text-center font-semibold">
        Derby Decor © Copyright reserved 2024
      </h3>
      <h4 className="lg:text-xs text-[10px] text-center">
        Email: care@derbydecor.com | Phone: +91 78080 25050
      </h4>
      <div className="flex justify-center items-center lg:gap-x-7 gap-x-4">
        <Link href="/regn.pdf" target="_blank">
          <p className="text-[10px] font-sans text-center lg:mt-4 mt-2 underline text-black flex justify-center items-center gap-x-1">
            Trademark Certificate
            <span>
              <ArrowUpRight className="h-2 w-2" />
            </span>
          </p>
        </Link>
        <Link href="/udyam.pdf" target="_blank">
          <p className="text-[10px] font-sans text-center lg:mt-3 mt-1 underline text-black flex justify-center items-center gap-x-1">
            Udyam Certificate
            <span>
              <ArrowUpRight className="h-2 w-2" />
            </span>
          </p>
        </Link>
      </div>
      <p className="lg:text-[8px] text-[8px] text-center lg:mt-6 mt-4 text-neutral-600 flex justify-center items-center gap-x-1">
        Developer: Sayyed Saad
      </p>
    </div>
  );
};

export default Footer;
