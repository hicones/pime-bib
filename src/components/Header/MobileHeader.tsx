"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MenuButton } from "../MenuButton";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const MobileHeader = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <header
      id="mobile"
      className={`${
        sticky ? "stickyHeader" : ""
      } w-full fixed py-6 flex items-center justify-between`}
    >
      <Link
        href="/"
        className="ml-4 flex-1 flex items-center text-fontcolor-50 gap-2 font-bold text-5xl"
      >
        <Image
          src="/logo.jpg"
          alt="logo"
          width={64}
          height={64}
          className="rounded-full"
        />
        BiB
      </Link>
      <MenuButton
        isOpen={open}
        onClick={() => setOpen(!open)}
        strokeWidth="6"
        color="#FFFEFB"
        lineProps={{ strokeLinecap: "round" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        width="30"
        height="24"
      />
      {open && (
        <motion.div
          initial={{
            y: -1000,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className={`fixed top-0 right-0 w-full h-screen bg-background-700 flex items-center justify-center`}
        >
          <motion.ul
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="mt-6 flex flex-col items-center justify-end w-ful gap-8"
          >
            <motion.li
              className="text2 hover-underline-animation after:bg-background-300"
              onClick={() => setOpen(false)}
            >
              <Link href={""}>DESTAQUES</Link>
            </motion.li>
            <motion.li
              className="text2 hover-underline-animation after:bg-background-400"
              onClick={() => setOpen(false)}
            >
              <Link href={"/gratuitos"}>GRATUITOS</Link>
            </motion.li>
            <motion.li
              className="text2 hover-underline-animation after:bg-background-500"
              onClick={() => setOpen(false)}
            >
              <Link href={""}>RESTAURANTES</Link>
            </motion.li>
            <motion.li
              className="text2 hover-underline-animation after:bg-background-600"
              onClick={() => setOpen(false)}
            >
              <Link href={""}>BARES</Link>
            </motion.li>
            <motion.li
              className="text2 hover-underline-animation after:bg-background-700"
              onClick={() => setOpen(false)}
            >
              <Link href={"#places"}>LUGARES</Link>
            </motion.li>
            <motion.li
              className="text2 hover-underline-animation after:bg-background-700"
              onClick={() => setOpen(false)}
            >
              <Link href={"/#contactUs"}>INDIQUE</Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </header>
  );
};
