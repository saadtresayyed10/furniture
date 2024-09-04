"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface LeftProps {
  title: string;
  image: string;
  desc: string;
  link: string;
}

interface RightProps {
  title: string;
  image: string;
  desc: string;
  link: string;
}

export const HomeMidLeft = ({ desc, image, title, link }: LeftProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="flex mb-10 lg:mb-0 lg:justify-between justify-center lg:flex-row flex-col items-center lg:w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -70 },
        }}
        transition={{ duration: 0.4, ease: "circOut", delay: 0.4 }}
      >
        <Image
          width={400}
          height={600}
          src={image}
          alt={title}
          className="lg:w-auto w-[220px] lg:h-auto h-[300px]"
        />
      </motion.div>
      <div className="font-absans lg:w-[60%] w-full text-center flex justify-center items-center flex-col lg:gap-y-7 gap-y-4">
        <motion.h1
          initial={{ opacity: 0, x: 70 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 70 },
          }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
          className="uppercase lg:text-6xl text-4xl font-bold"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -70 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -70 },
          }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
          className="lg:px-20 px-8 lg:text-lg text-sm"
        >
          {desc}
        </motion.p>

        <Link
          href={link}
          className="flex justify-center items-center hover:gap-x-3 duration-500 gap-x-1 px-4 py-1 hover:bg-black hover:text-warning-300 hover:rounded-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 70 },
            }}
            transition={{ duration: 0.6, ease: "anticipate", delay: 0.8 }}
            className="flex justify-center items-center w-full"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 stroke-[1.5]" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export const HomeMidRight = ({ desc, image, title, link }: RightProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="lg:flex hidden lg:justify-between justify-center lg:flex-row flex-col items-center lg:w-full"
    >
      <div className="font-absans lg:w-[60%] text-center flex justify-center items-center flex-col lg:gap-y-7">
        <motion.h1
          initial={{ opacity: 0, x: 70 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 70 },
          }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
          className="uppercase lg:text-6xl text-4xl font-bold"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -70 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -70 },
          }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
          className="lg:px-20 px-8 lg:text-lg text-sm"
        >
          {desc}
        </motion.p>

        <Link
          href={link}
          className="flex justify-center items-center hover:gap-x-3 duration-500 gap-x-1 px-4 py-1 hover:bg-black hover:text-warning-300 hover:rounded-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 70 },
            }}
            transition={{ duration: 0.6, ease: "anticipate", delay: 0.8 }}
            className="flex justify-center items-center w-full"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 stroke-[1.5]" />
          </motion.div>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 70 },
        }}
        transition={{ duration: 0.4, ease: "circOut", delay: 0.4 }}
      >
        <Image
          width={400}
          height={600}
          src={image}
          alt={title}
          className="lg:w-auto w-[220px] lg:h-auto h-[300px]"
        />
      </motion.div>
    </div>
  );
};
