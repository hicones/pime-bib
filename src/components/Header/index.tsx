import Link from "next/link";
import { Logo } from "../Logo";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header className="w-full fixed py-10 px-20 flex items-center justify-between">
      <Link
        href="/"
        className="flex-1 flex items-center text-fontcolor-50 gap-2 font-bold text-5xl"
      >
        <Logo color="#FF7525" />
        BiB
      </Link>
      <div className="flex justify-center items-center pb-2 border-b border-b-fontcolor-50 w-1/4">
        <input
          type="search"
          placeholder="O que você quer conhecer hoje?"
          className="w-full bg-transparent border-none outline-none text1 placeholder:text-white"
        />
        <AiOutlineSearch size={28} color="#FFFEFB" />
      </div>
      <div className="flex-1 flex justify-end gap-16 items-center">
        <div className="hover-underline-animation cursor-pointer">
          <span className="text1 flex items-center gap-2">
            Categorias <IoIosArrowDown size={20} />
          </span>
        </div>
        <a href="#contactUs" className="text1 hover-underline-animation">
          Indique
        </a>
      </div>
    </header>
  );
};
