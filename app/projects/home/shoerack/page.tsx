"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ShoeRackHome = () => {
  const shoerack = [
    { id: 1, image: "/home/shoerack/shoerack1.jpg" },
    { id: 2, image: "/home/shoerack/shoerack2.jpg" },
    { id: 3, image: "/home/shoerack/shoerack3.jpg" },
    { id: 4, image: "/home/shoerack/shoerack4.jpg" },
  ];

  return (
    <div className="flex justify-center items-center w-full font-absans min-h-screen bg-warning-200 my-8 text-black border-black border-y-4 flex-col lg:gap-y-8 gap-y-5">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "backInOut", delay: 0.4 }}
        className="lg:text-6xl mt-6 text-4xl uppercase font-semibold"
      >
        Shoe Racks
      </motion.h1>
      <div className="flex items-center lg:gap-x-16 gap-x-4">
        <motion.h3
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "anticipate", delay: 0.6 }}
          className="lg:text-2xl underline-offset-4 underline text-sm"
        >
          1000+ Metal Projects
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "anticipate", delay: 0.6 }}
          className="lg:text-2xl underline-offset-4 underline text-sm"
        >
          1400+ Wooden Projects
        </motion.h3>
      </div>
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="lg:my-10 my-6 grid grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6 px-2 lg:px-10"
      >
        {shoerack.map((project) => (
          <motion.div
            variants={gridSquareVariants}
            key={project.id}
            className="bg-black shadow-md rounded-lg overflow-hidden border-2 border-black"
          >
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
      <p className="lg:text-lg text-xs w-[70%] text-center mb-6">
        These were few of are real life projects created by our skilled
        craftsman. Waiting for you to visit and do business with us.
      </p>
    </div>
  );
};

export default ShoeRackHome;
