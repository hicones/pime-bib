"use client";
import { Menu } from ".";

export const StickyMenu = () => {
  return (
    <div className="flex w-full h-1/4 items-center justify-center sticky top-10 mt-10">
      <Menu />
    </div>
  );
};
