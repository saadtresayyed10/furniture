"use client";

import Image from "next/image";
import HomeImage from "./HomeImage";
import { motion } from "framer-motion";

const HomeHead = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col lg:gap-y-20 mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "backOut", delay: 0.8 }}
          className="text-center lg:text-[5rem] text-5xl tracking-normal font-[600] font-absans w-full"
        >
          Life begins at home
        </motion.h1>
        <div className="lg:flex hidden justify-between lg:text-lg text-xs font-absans items-center lg:w-[65%] lg:gap-x-20 text-center">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "backOut", delay: 1 }}
          >
            Derby Decor is a flagship furniture manufacturer that details in
            sleek modern furniture for your home, offices, dormitories, hotels,
            commercial outlets & more...
          </motion.p>
          <Image src="/logo.jpg" alt="Logo" width={120} height={120} />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "backOut", delay: 1 }}
          >
            Our cosy, artistic and smartly designed furniture will make you feel
            right at home. Make your apartment your home from day one like being
            in paradise.
          </motion.p>
        </div>
      </div>
      <HomeImage />
      <div className="lg:hidden flex justify-between lg:text-lg text-sm font-absans items-center lg:w-[65%] p-10 gap-y-6 flex-col text-center">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "backOut", delay: 1.2 }}
        >
          Derby Decor is a flagship furniture manufacturer that details in sleek
          modern furniture for your home, offices, dormitories, hotels,
          commercial outlets & more...
        </motion.p>
        <div className="flex justify-center items-center w-full lg:hidden">
          <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
        </div>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "backOut", delay: 1.2 }}
        >
          Our cosy, artistic and smartly designed furniture will make you feel
          right at home. Make your home from day one feel like being in
          paradise.
        </motion.p>
      </div>
    </>
  );
};

export default HomeHead;
