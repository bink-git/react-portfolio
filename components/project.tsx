"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="group flex max-w-[48rem] cursor-pointer flex-col-reverse justify-between overflow-hidden rounded-2xl border border-black/5  bg-gray-100 hover:bg-gray-50 hover:shadow-xl sm:h-[20rem] sm:flex-row sm:group-even:flex-row-reverse">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:px-10 sm:pt-10">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap items-end gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-wider text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[16rem] w-full overflow-hidden sm:h-full">
          <Image
            src={imageUrl}
            alt={title}
            className="-right-16 top-9 object-cover
          shadow-2xl 
          transition 
          group-hover:scale-110 
          sm:absolute 
          sm:group-even:-left-16 
          sm:group-hover:-translate-x-3
          sm:group-hover:translate-y-3
          sm:group-hover:-rotate-2 
          sm:group-even:group-hover:translate-x-3
          sm:group-even:group-hover:translate-y-3
          sm:group-even:group-hover:rotate-2"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
