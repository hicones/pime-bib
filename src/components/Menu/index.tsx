/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useVariant } from "@/hooks/useVariant";

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const { variant } = useVariant();

  return (
    <details
      onToggle={() => setOpen(() => !open)}
      className={`flex ${open ? "menu-open" : ""}`}
    >
      <summary>
        <div
          className={`flex items-center justify-center w-fit h-fit  cursor-pointer rounded-[2rem] border-2 transition duration-700 outline-none ${
            variant === "dark"
              ? "border-main-100 bg-main-50"
              : "border-main-50 bg-main-100"
          }  `}
        >
          <div
            className={`flex w-20 h-full justify-center items-center rounded-3xl ${
              variant === "dark" ? "bg-main-100" : "bg-main-50"
            }`}
          >
            {variant === "dark" ? (
              <img src="/menu_icon.svg" alt="menu-icon" />
            ) : (
              <img src="/menu_icon-light.svg" alt="menu-icon" />
            )}
          </div>
          <h4
            className={`p-2 text1 ${
              variant === "dark" ? "text-main-100" : "text-main-50"
            }`}
          >
            Início
          </h4>
        </div>
      </summary>
      <div
        className={`menu-container bg-main-500 fixed top-0 left-0 w-screen h-screen`}
      >
        TESTE
      </div>
    </details>
  );
};
