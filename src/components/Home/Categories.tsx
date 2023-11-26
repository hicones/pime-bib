"use client";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useVariant } from "@/hooks/useVariant";

/* eslint-disable @next/next/no-img-element */
export const SectionCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-450px 0px",
  });
  const { setVariant } = useVariant();

  useEffect(() => {
    if (isInView) {
      setVariant("light");
    } else {
      setVariant("dark");
    }
  }, [isInView, setVariant]);

  return (
    <section
      ref={ref}
      className="bg-main-100 flex flex-col w-full min-h-screen md:h-screen justify-between items-center"
      id="categories"
    >
      <div className="flex w-full h-1/4 items-center lg:px-16 px-4">
        <h3 className="text3 text-main-50">explore as categorias</h3>
      </div>

      <div className="flex flex-col w-full h-3/4 gap-9 justify-center">
        <ul className="divide-y border-t border-b border-main-50 divide-main-50 text-main-50">
          <li>
            <Link
              href="/destaques"
              className="categoryItemList hover:bg-main-200 transition duration-500"
            >
              <span className="w-12 h-12 items-center rounded-full p-2 border-2 border-main-50">
                <img src="/dark-right-arrow.svg" alt="arrow" />
              </span>
              <h5>destaques</h5>
            </Link>
          </li>
          <li>
            <Link
              href="/bares"
              className="categoryItemList hover:bg-main-300 hover:text-fontcolor-50 transition duration-500"
            >
              <span className="w-12 h-12 items-center rounded-full p-2 border-2 border-main-100">
                <img src="/light-right-arrow.svg" alt="arrow" />
              </span>
              <h5>bares</h5>
            </Link>
          </li>
          <li>
            <Link
              href="/restaurantes"
              className="categoryItemList hover:bg-main-400 hover:text-fontcolor-50 transition duration-500"
            >
              <span className="w-12 h-12 items-center rounded-full p-2 border-2 border-main-100">
                <img src="/light-right-arrow.svg" alt="arrow" />
              </span>
              <h5>restaurantes</h5>
            </Link>
          </li>
          <li>
            <Link
              href="/cultura"
              className="categoryItemList hover:bg-main-500 hover:text-fontcolor-50 transition duration-500"
            >
              <span className="w-12 h-12 items-center rounded-full p-2 border-2 border-main-100">
                <img src="/light-right-arrow.svg" alt="arrow" />
              </span>
              <h5>cultura</h5>
            </Link>
          </li>
          <li>
            <Link
              href="/historico"
              className="categoryItemList hover:bg-main-600 transition duration-500"
            >
              <span className="w-12 h-12 items-center rounded-full p-2 border-2 border-main-50">
                <img src="/dark-right-arrow.svg" alt="arrow" />
              </span>
              <h5>histórico</h5>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
