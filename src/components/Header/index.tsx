"use client";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Logo } from "../Logo";

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
      <div className="w-full flex items-center justify-between">
        <Link
          href="/"
          className="flex-1 flex items-center text-fontcolor-100 gap-2 font-bold text-5xl"
        >
          <Logo />
        </Link>
        <div className="flex justify-center items-center pb-2 border-b border-b-fontcolor-100 w-1/4 focus-within:border-b-background-700 focus-within:border-b-2 transition duration-300">
          <input
            type="search"
            placeholder="O que você quer conhecer hoje?"
            className="w-full bg-transparent border-none outline-none text1 placeholder:text-fontcolor-100"
          />
          <AiOutlineSearch size={28} color="#192536" />
        </div>
        <div className="flex-1 flex justify-end gap-16 items-center">
          <div
            className="hover-underline-animation cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className="text1 flex items-center gap-2">
              Categorias{" "}
              <IoIosArrowDown
                size={20}
                className={`transition ${open ? "rotate-180" : ""}`}
              />
            </span>
          </div>
          <Link href="/#contactUs" className="text1 hover-underline-animation">
            Indique
          </Link>
        </div>
      </div>
      {open && (
        <ul className="mt-6 flex items-center justify-end w-ful gap-14">
          <li className="text2 hover-underline-animation after:bg-background-300">
            <Link href={""}>DESTAQUES</Link>
          </li>
          <li className="text2 hover-underline-animation after:bg-background-400">
            <Link href={""}>GRATUITOS</Link>
          </li>
          <li className="text2 hover-underline-animation after:bg-background-500">
            <Link href={""}>RESTAURANTES</Link>
          </li>
          <li className="text2 hover-underline-animation after:bg-background-600">
            <Link href={""}>BARES</Link>
          </li>
          <li className="text2 hover-underline-animation after:bg-background-700">
            <Link href={""}>LUGARES</Link>
          </li>
        </ul>
      )}
    </header>
  );
};
