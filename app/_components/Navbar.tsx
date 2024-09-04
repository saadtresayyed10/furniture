"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Menubar from "./Menubar";

const PHONE = "+917808025050";

const Navbar = () => {
  const [hasBorder, setHasBorder] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      if (progress > 0.04) {
        setHasBorder(true);
      } else {
        setHasBorder(false);
      }
    });
  }, [scrollYProgress]);

  return (
    <nav
      className={`bg-white text-black rounded-full lg:px-10 px-4 lg:py-4 py-3 w-[95%] flex justify-between items-center transition-all duration-300 ${
        hasBorder ? "border border-neutral-400 shadow-md" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "backOut", delay: 0.6 }}
        className="flex items-center lg:gap-x-6 gap-x-4"
      >
        <div>
          <Menubar />
        </div>
        <div className="flex items-center lg:gap-x-2 gap-x-1">
          <div className="p-2 hover:p-3 duration-500 border-neutral-400 border rounded-full">
            <Link
              href="https://www.facebook.com/people/Mohammed-Barvatia/pfbid0esJpKNqRdh2h6V4un7kLB5yaDtXFVo6dmYrqTAYoQe45GV3chEgjQzk5QCvKrErDl/?mibextid=ZbWKwL"
              target="_blank"
            >
              <Facebook className="lg:w-4 w-3 lg:h-4 h-3 cursor-pointer" />
            </Link>
          </div>
          <div className="p-2 hover:p-3 duration-500 border-neutral-400 border rounded-full">
            <Link href="https://www.instagram.com/decorderby" target="_blank">
              <Instagram className="lg:w-4 w-3 lg:h-4 h-3 cursor-pointer" />
            </Link>
          </div>
        </div>
      </motion.div>
      <Link href="/">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "backOut", delay: 0.4 }}
          className="text-center lg:text-3xl text-xl font-harmond font-extra"
        >
          Derby Decor
        </motion.h1>
      </Link>
      <Link
        href={`https://wa.me/${PHONE}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "backOut", delay: 0.6 }}
          className="bg-black text-white lg:text-sm text-xs font-absans text-center lg:px-4 px-2.5 lg:py-2 py-1 rounded-full"
        >
          Connect
        </motion.button>
      </Link>
    </nav>
  );
};

export default Navbar;
