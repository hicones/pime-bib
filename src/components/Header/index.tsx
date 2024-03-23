/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useVariant } from "@/hooks/useVariant";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const { variant } = useVariant();
  const [sticky, setSticky] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const changeSticky = () => {
    if (window.scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const onSearch = () => {
    if (search) {
      router.push(`/pesquisa?${new URLSearchParams({ search })}`);
    }
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeSticky);
    }
  });

  return (
    <header
      id="desktop"
      className={`${
        sticky ? "stickyHeader" : ""
      } flex flex-col w-full pt-24 pb-8 justify-center fixed -z-10`}
    >
      <nav className="w-full flex justify-center my-0 mx-auto max-w-screen-2xl">
        <ul
          className={`flex w-full list-none justify-between  items-center ${
            variant === "dark" ? "text-fontcolor-50" : "text-fontcolor-100"
          }`}
        >
          <li
            className={`${
              pathname === "/"
                ? variant === "dark"
                  ? "active"
                  : "activeDark"
                : ""
            } text1 hover-underline-animation  ${
              variant === "dark"
                ? "after:bg-fontcolor-50"
                : "after:bg-fontcolor-100"
            }`}
          >
            <Link href="/">INÍCIO</Link>
          </li>
          <li
            className={`${
              pathname === "/destaques"
                ? variant === "dark"
                  ? "active"
                  : "activeDark"
                : ""
            } text1 hover-underline-animation ${
              variant === "dark"
                ? "after:bg-fontcolor-50"
                : "after:bg-fontcolor-100"
            }`}
          >
            <Link href="/destaques">DESTAQUES</Link>
          </li>
          <li
            className={`${
              pathname === "/bares"
                ? variant === "dark"
                  ? "active"
                  : "activeDark"
                : ""
            } text1 hover-underline-animation ${
              variant === "dark"
                ? "after:bg-fontcolor-50"
                : "after:bg-fontcolor-100"
            }`}
          >
            <Link href="/bares">BARES</Link>
          </li>
          <li
            className={`${
              pathname === "/restaurantes"
                ? variant === "dark"
                  ? "active"
                  : "activeDark"
                : ""
            } text1 hover-underline-animation ${
              variant === "dark"
                ? "after:bg-fontcolor-50"
                : "after:bg-fontcolor-100"
            }`}
          >
            <Link href="/restaurantes">RESTAURANTES</Link>
          </li>
          <li
            className={`${
              pathname === "/cultura"
                ? variant === "dark"
                  ? "active"
                  : "activeDark"
                : ""
            } text1 hover-underline-animation ${
              variant === "dark"
                ? "after:bg-fontcolor-50"
                : "after:bg-fontcolor-100"
            }`}
          >
            <Link href="/cultura">CULTURA</Link>
          </li>
          <li
            className={`${
              pathname === "/historico"
                ? variant === "dark"
                  ? "active"
                  : "activeDark"
                : ""
            } text1 hover-underline-animation ${
              variant === "dark"
                ? "after:bg-fontcolor-50"
                : "after:bg-fontcolor-100"
            }`}
          >
            <Link href="/historico">HISTÓRICO</Link>
          </li>
          <li
            className={`${
              pathname === "/fale-conosco"
                ? variant === "dark"
                  ? "active"
                  : "activeDark"
                : ""
            } text1 hover-underline-animation ${
              variant === "dark"
                ? "after:bg-fontcolor-50"
                : "after:bg-fontcolor-100"
            }`}
          >
            <Link href="/fale-conosco">CONTATO</Link>
          </li>
          <li
            className={`text1 border-2 rounded-[1.875rem] items-center justify-between flex px-8 py-4 ${
              variant === "dark"
                ? "border-fontcolor-50"
                : "border-fontcolor-100"
            }`}
          >
            <input
              type="search"
              placeholder="pesquisar"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDownCapture={handleKeypress}
              className={`bg-transparent text-xl grotesk outline-none border-none  placeholder:font-light appearance-none ${
                variant === "dark"
                  ? "placeholder:text-fontcolor-50"
                  : "placeholder:text-fontcolor-100"
              }`}
            />
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              onClick={onSearch}
              className="hover:opacity-80 transition cursor-pointer"
            >
              <path
                d="M18 17.5L13.8983 13.3983M13.8983 13.3983C14.5999 12.6967 15.1565 11.8638 15.5362 10.9471C15.9159 10.0304 16.1113 9.04789 16.1113 8.05566C16.1113 7.06344 15.9159 6.08093 15.5362 5.16424C15.1565 4.24754 14.5999 3.41461 13.8983 2.713C13.1967 2.01139 12.3638 1.45485 11.4471 1.07514C10.5304 0.695433 9.54789 0.5 8.55566 0.5C7.56344 0.5 6.58093 0.695433 5.66424 1.07514C4.74754 1.45485 3.91461 2.01139 3.213 2.713C1.79604 4.12996 1 6.05178 1 8.05566C1 10.0596 1.79604 11.9814 3.213 13.3983C4.62996 14.8153 6.55178 15.6113 8.55566 15.6113C10.5596 15.6113 12.4814 14.8153 13.8983 13.3983Z"
                stroke={variant === "dark" ? "#fffefb" : "#010100"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
};
