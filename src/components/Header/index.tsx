/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuButton } from "../MenuButton";
import { motion } from "framer-motion";

export const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

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
      id="desktop"
      className={`${
        sticky ? "stickyHeader" : ""
      } flex flex-col w-full fixed py-10 px-20`}
    >
      <nav className="w-full flex justify-center">
        <ul
          className={`${
            sticky ? "hidden" : "flex"
          } w-full list-none justify-between text-fontcolor-50`}
        >
          <li className="text1 hover-underline-animation after:bg-fontcolor-50">
            <Link href="/destaques">DESTAQUES</Link>
          </li>
          <li className="text1 hover-underline-animation after:bg-fontcolor-50">
            <Link href="/destaques">BARES</Link>
          </li>
          <li className="text1 hover-underline-animation after:bg-fontcolor-50">
            <Link href="/destaques">RESTAURANTES</Link>
          </li>
          <li className="text1 hover-underline-animation after:bg-fontcolor-50">
            <span>pesquise</span>
          </li>
          <li className="text1 hover-underline-animation after:bg-fontcolor-50">
            <Link href="/destaques">CULTURA</Link>
          </li>
          <li className="text1 hover-underline-animation after:bg-fontcolor-50">
            <Link href="/destaques">HISTÓRICO</Link>
          </li>
          <li className="text1 hover-underline-animation after:bg-fontcolor-50">
            <Link href="/#contactUs">CONTATO</Link>
          </li>
        </ul>
        <details
          onToggle={() => setOpen(() => !open)}
          className={`${sticky ? "flex" : "hidden"} ${open ? "menu-open" : ""}`}
        >
          <summary>
            <div
              className={`flex items-center justify-center p-4 w-36 h-36  cursor-pointer `}
            >
              <img
                src="/menu_star.svg"
                alt="Logo"
                className="relative spinMenu -z-10"
              />
              {sticky ? (
                <MenuButton
                  isOpen={open}
                  strokeWidth="6"
                  color="#000000"
                  lineProps={{ strokeLinecap: "round" }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  width="24"
                  height="20"
                  className={`${
                    open ? "hover:-rotate-90" : ""
                  } fixed transition-all duration-500 ease-in-out`}
                />
              ) : null}
            </div>
          </summary>
          <motion.div className={`menu-container bg-main-500`}>
            TESTE
          </motion.div>
        </details>
      </nav>
    </header>
  );
};
