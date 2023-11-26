"use client";
import { useVariant } from "@/hooks/useVariant";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [cursorVariant, setCursorVariant] = useState("default");

  const { variant } = useVariant();

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: variant === "dark" ? "#fffefb" : "#010100",
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      whileTap={{
        scale: 1.4,
        rotate: -90,
      }}
    />
  );
};
