/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMenuTitle } from "@/utils/getBackground";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div className={`flex ${open ? "menu-open" : ""}`}>
      <div onClick={() => setOpen(() => true)}>
        <div
          className={`flex items-center justify-center w-fit h-fit  p-1 cursor-pointer rounded-full border-2 outline-none  border-main-100 bg-main-50`}
        >
          <div
            className={`flex w-20 h-full justify-center items-center rounded-3xl bg-main-100`}
          >
            <img src="/menu_icon.svg" alt="menu-icon" />
          </div>
          <h4 className={`p-2 text1 text-main-100`}>
            {getMenuTitle(pathname)}
          </h4>
        </div>
      </div>

      <div
        aria-hidden="true"
        className={`menu-container bg-main-50 fixed top-0 left-0 w-screen h-screen flex flex-col justify-center  items-center inset-0 overflow-hidden`}
      >
        <section className="w-full max-w-screen-2xl flex gap-12 lg:justify-evenly p-2 flex-wrap justify-center pt-28">
          <div className="flex flex-col gap-12">
            <Link
              href="/"
              className={`flex justify-start items-start gap-2 checkmark`}
              onClick={() => setOpen(() => false)}
            >
              01
              <span className="text-fontcolor-50">início</span>
            </Link>
            <Link
              href="/destaques"
              className={`flex justify-start items-start gap-2 checkmark`}
              onClick={() => setOpen(() => false)}
            >
              02
              <span className="text-fontcolor-50">destaques</span>
            </Link>
            <Link
              href="/bares"
              className={`flex justify-start items-start gap-2 checkmark`}
              onClick={() => setOpen(() => false)}
            >
              03
              <span className="text-fontcolor-50">bares</span>
            </Link>
            <Link
              href="/restaurantes"
              className={`flex justify-start items-start gap-2 checkmark`}
              onClick={() => setOpen(() => false)}
            >
              04
              <span className="text-fontcolor-50">restaurantes</span>
            </Link>
          </div>
          <div className="flex flex-col gap-12">
            <Link
              href="/cultura"
              className={`flex justify-start items-start gap-2 checkmark`}
              onClick={() => setOpen(() => false)}
            >
              05
              <span className="text-fontcolor-50">cultura</span>
            </Link>
            <Link
              href="/historico"
              className={`flex justify-start items-start gap-2 checkmark`}
              onClick={() => setOpen(() => false)}
            >
              06
              <span className="text-fontcolor-50">historico</span>
            </Link>
            <Link
              href="/fale-conosco"
              className={`flex justify-start items-start gap-2 checkmark`}
              onClick={() => setOpen(() => false)}
            >
              07
              <span className="text-fontcolor-50">fale conosco</span>
            </Link>
          </div>
        </section>

        <svg
          viewBox="0 0 64 64"
          fill="none"
          className="absolute top-12 right-10 cursor-pointer hover:opacity-80 transition duration-300 w-[52px] h-[52px] hover:-rotate-90"
          onClick={() => setOpen(() => false)}
        >
          <g clipPath="url(#clip0_978_1861)">
            <path
              d="M32 0C14.327 0 0 14.327 0 32C0 49.674 14.327 64 32 64C49.674 64 64 49.674 64 32C64 14.327 49.674 0 32 0ZM32 60.063C16.561 60.063 4 47.439 4 31.9999C4 16.5609 16.561 3.99988 32 3.99988C47.439 3.99988 60 16.5609 60 31.9999C60 47.4388 47.439 60.063 32 60.063ZM43.313 20.687C42.532 19.906 41.266 19.906 40.485 20.687L32 29.172L23.515 20.687C22.734 19.906 21.468 19.906 20.686 20.687C19.905 21.468 19.905 22.734 20.686 23.515L29.171 32L20.686 40.485C19.905 41.265 19.905 42.5331 20.686 43.3131C21.467 44.0941 22.733 44.0941 23.515 43.3131L32 34.8281L40.485 43.3131C41.266 44.0941 42.532 44.0941 43.313 43.3131C44.094 42.5331 44.094 41.265 43.313 40.485L34.828 32L43.313 23.515C44.095 22.733 44.095 21.467 43.313 20.687Z"
              fill="#FFFEFB"
            />
          </g>
          <defs>
            <clipPath id="clip0_978_1861">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
