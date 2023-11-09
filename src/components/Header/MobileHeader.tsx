"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuButton } from "../MenuButton";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getBackground } from "@/utils/getBackground";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
    }
  });

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
        Logo
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
          className={`fixed top-0 right-0 w-full h-screen bg-main-700 flex flex-col items-center justify-center gap-14`}
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
            className="mt-6 flex flex-col justify-end w-ful gap-8"
          >
            <p className="text-5xl font-bold text-fontcolor-50">CATEGORIAS</p>
            <motion.li
              className="text2White w-fit border-b-[3px] border-b-background-300"
              onClick={() => setOpen(false)}
            >
              <Link href={"/destaques"}>DESTAQUES</Link>
            </motion.li>
            <motion.li
              className="text2White w-fit border-b-[3px] border-b-background-400"
              onClick={() => setOpen(false)}
            >
              <Link href={"/gratuitos"}>GRATUITOS</Link>
            </motion.li>
            <motion.li
              className="text2White w-fit border-b-[3px] border-b-background-500"
              onClick={() => setOpen(false)}
            >
              <Link href={"/restaurantes"}>RESTAURANTES</Link>
            </motion.li>
            <motion.li
              className="text2White w-fit border-b-[3px] border-b-background-600"
              onClick={() => setOpen(false)}
            >
              <Link href={"/bares"}>BARES</Link>
            </motion.li>
            <motion.li
              className="text2White w-fit border-b-[3px] border-b-background-100"
              onClick={() => setOpen(false)}
            >
              <Link href={"/historico"}>HISTÓRICO</Link>
            </motion.li>
          </motion.ul>
          <Link
            href={"/#contactUs"}
            onClick={() => setOpen(false)}
            className="text-5xl font-bold text-fontcolor-50"
          >
            INDIQUE
          </Link>
        </motion.div>
      )}
    </header>
  );
};
