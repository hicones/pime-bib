"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      id="desktop"
      className={`flex flex-col w-full pt-24 pb-8 justify-center absolute -z-10`}
    >
      <nav className="w-full flex justify-center my-0 mx-auto max-w-screen-xl">
        <ul
          className={`flex w-full list-none justify-between text-fontcolor-50`}
        >
          <li
            className={`${
              pathname === "/" ? "active" : ""
            } text1 hover-underline-animation after:bg-fontcolor-50`}
          >
            <Link href="/">INÍCIO</Link>
          </li>
          <li
            className={`${
              pathname === "/destaques" ? "active" : ""
            } text1 hover-underline-animation after:bg-fontcolor-50`}
          >
            <Link href="/destaques">DESTAQUES</Link>
          </li>
          <li
            className={`${
              pathname === "/bares" ? "active" : ""
            } text1 hover-underline-animation after:bg-fontcolor-50`}
          >
            <Link href="/bares">BARES</Link>
          </li>
          <li
            className={`${
              pathname === "/restaurantes" ? "active" : ""
            } text1 hover-underline-animation after:bg-fontcolor-50`}
          >
            <Link href="/restaurantes">RESTAURANTES</Link>
          </li>
          <li
            className={`${
              pathname === "/cultura" ? "active" : ""
            } text1 hover-underline-animation after:bg-fontcolor-50`}
          >
            <Link href="/cultura">CULTURA</Link>
          </li>
          <li
            className={`${
              pathname === "/historico" ? "active" : ""
            } text1 hover-underline-animation after:bg-fontcolor-50`}
          >
            <Link href="/historico">HISTÓRICO</Link>
          </li>
          <li
            className={`${
              pathname === "/fale-conosco" ? "active" : ""
            } text1 hover-underline-animation after:bg-fontcolor-50`}
          >
            <Link href="/fale-conosco">CONTATO</Link>
          </li>
          <li
            className={`${
              pathname === "/pesquise" ? "active" : ""
            } text1 hover-underline-animation after:bg-fontcolor-50`}
          >
            <Link href="/pesquise">pesquise</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
