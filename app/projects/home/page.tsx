"use client";

import Furniture from "@/app/_components/Furniture";
import { motion } from "framer-motion";

const ProjectHousePage = () => {
  return (
    <div className="flex justify-center items-center w-full font-absans min-h-screen bg-white my-10 text-black border-black border-y-4 flex-col lg:gap-y-5 gap-y-3">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, ease: "backOut", duration: 0.6 }}
        className="my-10 font-absans uppercase font-bold lg:text-6xl text-5xl text-center"
      >
        House Projects
      </motion.h1>
      <div className="grid lg:gap-16 grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, ease: "anticipate", duration: 0.8 }}
        >
          <Furniture
            name="Bed"
            image="/covers/bedCover.png"
            link="/projects/home/bed"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, ease: "anticipate", duration: 0.8 }}
        >
          <Furniture
            name="Cabinet"
            image="/covers/cabinetCover.png"
            link="/projects/home/cabinet"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, ease: "anticipate", duration: 0.8 }}
        >
          <Furniture
            name="Table"
            image="/covers/tableCover.png"
            link="/projects/home/table"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, ease: "anticipate", duration: 0.8 }}
        >
          <Furniture
            name="Shoe Rack"
            image="/covers/shoeCover.png"
            link="/projects/home/shoerack"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectHousePage;
