/* eslint-disable @next/next/no-img-element */
"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { Menu } from "../Menu";

export const SectionYouKnow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex flex-col w-full lg:min-h-screen min-h-[50dvh]  md:h-screen lg:justify-between justify-center items-center p-4 gap-8 ">
      <div
        ref={ref}
        className="flex flex-col max-w-screen-2xl w-full my-0 mx-auto h-full gap-9 justify-center"
      >
        <h3
          className="text3"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          VOCÊ CONHECE O CENTRO <br /> DE SÃO PAULO?
        </h3>

        <p
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
          className="grotesk lg:text-[2rem] md:text-2xl text-base font-normal"
        >
          E SE A GENTE TE CONTASSE SOBRE <br /> LUGARES QUE VOCÊ (
          <span className="font-bold">PROVAVELMENTE</span>) NUNCA VISITOU?
        </p>
      </div>

      <div className="flex w-full h-1/4 max-w-screen-2xl my-0 mx-auto justify-center">
        <a
          href="#categories"
          className="w-fit h-fit p-4 border-2 rounded-full arrowDown overflow-hidden"
        >
          <img src="/arrow-down.svg" alt="arrowDown" />
        </a>
      </div>
    </section>
  );
};
