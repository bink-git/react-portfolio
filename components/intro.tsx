"use client";
import Image from "next/image";
import React from "react";
import avatar from "@/public/photo-1633332755192-727a05c4013d.avif";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  return (
    <section
      id="home"
      className="mb-14 max-w-[60rem] scroll-mt-[50rem] rounded-2xl border border-black/10 bg-slate-50 p-10 text-center shadow-2xl sm:mb-28 md:p-14"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, type: "tween" }}
          >
            <Image
              src={avatar}
              alt="avatar"
              width={200}
              height={200}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl "
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 -rotate-[30deg] text-3xl"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -30 }}
            transition={{
              duration: 0.25,
              type: "spring",
              delay: 0.15,
              stiffness: 125,
            }}
          >
            🖐
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-5 px-4 text-lg font-medium md:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex h-12 items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-2" />
        </Link>

        <a
          className="group flex h-12 cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <div className="flex items-center gap-4">
          <a
            className="flex h-12 w-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-black/10 bg-white p-3 text-2xl text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="flex h-12 w-12 cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-3 text-2xl text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://github.com"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
