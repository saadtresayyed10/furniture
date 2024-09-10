"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, PhoneCall } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:gap-y-5 gap-y-3 text-center w-full min-h-screen bg-warning-200 mt-8 text-black font-absans border-y-4 border-black">
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
        className="my-8 font-absans uppercase font-bold lg:text-6xl text-5xl text-center"
      >
        About Us
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
        className="flex justify-center items-center lg:gap-x-16 gap-x-10"
      >
        <Link
          href="https://www.linkedin.com/in/mohammed-barvatia-b73b32285/"
          target="_blank"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link href={`tel:${+917808025050}`}>
          <PhoneCall className="w-6 h-6" />
        </Link>
        <Link
          href="https://www.facebook.com/people/Mohammed-Barvatia/pfbid0esJpKNqRdh2h6V4un7kLB5yaDtXFVo6dmYrqTAYoQe45GV3chEgjQzk5QCvKrErDl/?mibextid=ZbWKwL"
          target="_blank"
        >
          <Facebook className="w-6 h-6" />
        </Link>
        <Link href="https://instagram.com/decorderby" target="_blank">
          <Instagram className="w-6 h-6" />
        </Link>
      </motion.div>
      <div className="p-6 flex flex-col justify-center items-center gap-y-10 text-center w-full">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "backOut", delay: 0.6 }}
          className="text-sm capitalize lg:text-xl w-[80%] lg:w-[70%]"
        >
          At Derby Decor, we specialize in crafting high-quality, stylish
          furniture that transforms spaces into homes. As a flagship furniture
          manufacturer, we blend traditional craftsmanship with modern design,
          creating pieces that stand the test of time. Each product is made with
          precision, using premium materials that ensure durability and comfort.
          Our commitment to excellence and attention to detail sets us apart.
          Choose Derby Decor for furniture that not only complements your space
          but also reflects your unique style and enhances your living
          experience.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "backOut", delay: 0.8 }}
          className="text-sm capitalize lg:text-xl w-[80%] lg:w-[70%]"
        >
          At Derby Decor, we believe furniture should do more than fill a
          room—it should inspire. Our collections cater to diverse tastes, from
          classic elegance to contemporary chic, allowing you to express your
          personality through your home decor. We are committed to
          sustainability, sourcing eco-friendly materials and employing
          responsible manufacturing practices. With Derby Decor, you not only
          invest in beautiful furniture but also in a brand that values quality,
          sustainability, and customer satisfaction. Elevate your living spaces
          with pieces that are thoughtfully designed to bring comfort, style,
          and joy.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutPage;
