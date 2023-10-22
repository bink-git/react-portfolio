"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import {
  ActiveSectionContext,
  useActiveSectionContext,
} from "@/context/active-section-context";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium  dark:text-gray-400 sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className={clsx("flex h-3/4 items-center justify-center ", {
                "rounded-full bg-gray-800 leading-none text-gray-500  transition hover:text-gray-800 dark:bg-gray-200 dark:text-gray-900 dark:hover:text-gray-900":
                  activeSection === link.name,
              })}
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              layoutId="activeSection"
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
            >
              <Link
                className={clsx(
                  "relative flex w-full items-center justify-center p-3 transition hover:text-gray-900 dark:hover:text-gray-200",
                  {
                    "text-white hover:text-gray-200 dark:text-gray-900 dark:hover:text-gray-700":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {/* {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  ></motion.span>
                )} */}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
