"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProjectSection from "../_components/ProjectSection";

const ProjectPage = () => {
  return (
    <div className="flex justify-center items-center w-full font-absans min-h-screen bg-warning-200 my-8 text-black border-black border-y-4 flex-col lg:gap-y-5 gap-y-3">
      <motion.h1
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "backOut", delay: 0.8 }}
        className="mt-10 font-absans uppercase font-bold lg:text-6xl text-5xl text-center"
      >
        Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        className="flex justify-center items-center lg:flex-row flex-col lg:gap-x-2 gap-y-5 my-10"
      >
        <ProjectSection
          name="Home Furniture"
          description="Derby Decor Furniture has transformed over 1,400+ homes with its exquisite designs, blending elegance and functionality to create personalized and comfortable living spaces tailored to each client's unique style."
          image="/home.jpg"
          link="/projects/home"
        />
        <ProjectSection
          name="Office Furniture"
          description="With over 1,000+ office projects, Derby Decor Furniture specializes in creating modern, efficient, and aesthetically pleasing workspaces that enhance productivity and reflect the brand identity of each business."
          image="/office.jpg"
          link="/projects/office"
        />
      </motion.div>
    </div>
  );
};

export default ProjectPage;
