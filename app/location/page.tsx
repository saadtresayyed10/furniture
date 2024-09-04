"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LocationPage = () => {
  return (
    <div className="flex flex-col lg:gap-y-8 gap-y-5 justify-center items-center bg-warning-200 w-full min-h-screen border-y-4 border-black my-10">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "backInOut", delay: 0.6 }}
        className="lg:mt-10 font-absans uppercase font-bold lg:text-6xl text-4xl text-center"
      >
        Location
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "backInOut", delay: 0.8 }}
        className="lg:w-[60%] w-[80%] font-absans uppercase font-bold lg:base text-xs text-center"
      >
        Visit us at our office at: FW5R+8X Vikas Associates, Handewadi Rd, Uruli
        Devachi, Pune, Maharashtra 412308. Check how we work and book yourself a
        furniture.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "backInOut", delay: 1 }}
      >
        <Image
          src="/map.png"
          alt="Map"
          width={600}
          height={450}
          className="lg:p-0 p-6 rounded-2xl"
        />
      </motion.div>

      <Link href="https://maps.app.goo.gl/cFpSiTn9rmeKszk69" target="_blank">
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "anticipate", delay: 1.2 }}
          className="flex justify-center items-center hover:gap-x-3 duration-500 gap-x-1 px-4 py-1 bg-black text-warning-300 rounded-full mb-10"
        >
          <span>Google Maps</span>
          <ArrowRight className="w-4 h-4 stroke-[1.5]" />
        </motion.button>
      </Link>
    </div>
  );
};

export default LocationPage;
