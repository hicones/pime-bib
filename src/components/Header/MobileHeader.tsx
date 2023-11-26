"use client";
import { useEffect, useState } from "react";
import { Menu } from "../Menu";

export const MobileHeader = () => {
  const [sticky, setSticky] = useState(false);

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
      } w-full fixed py-6 flex items-center justify-center`}
    >
      <Menu />
    </header>
  );
};
