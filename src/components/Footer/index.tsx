/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import ParallaxText from "../ParallaxText";

export const Footer = () => {
  return (
    <footer className={`w-full flex flex-col relative bg-main-100`}>
      <div className="w-full bg-main-200 flex py-3 -z-10">
        <ParallaxText baseVelocity={-3}>
          <span className="text5 text-main-300 tracking-normal">
            CONHEÇA O CENTRO
          </span>
          <img src="/star_footer.svg" alt="star" />
        </ParallaxText>
      </div>
      <nav className="w-full flex md:flex-row flex-col lg:px-12 md:px-8 px-4 lg:py-20 md:py-10 py-8 justify-evenly place-items-start gap-12">
        <div className="flex flex-col gap-6">
          <h4>CATEGORIAS</h4>
          <ul>
            <li className="text4">
              <Link href="">destaques</Link>
            </li>
            <li className="text4">
              <Link href="">bares</Link>
            </li>
            <li className="text4">
              <Link href="">restaurantes</Link>
            </li>
            <li className="text4">
              <Link href="">cultura</Link>
            </li>
            <li className="text4">
              <Link href="">histórico</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4>SAIBA MAIS</h4>
          <ul>
            <li className="text4">
              <Link href="">sobre</Link>
            </li>
            <li className="text4">
              <Link href="">nos envie uma mensagem</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4>NOS ACOMPANHE</h4>
          <ul>
            <li className="text4">
              <a href="https://instagram.com/opaulistinho" target="_blank">
                instagram
              </a>
            </li>
          </ul>
        </div>
        <img src="/logo.jpg" alt="logo" className="w-48 self-center" />
      </nav>
    </footer>
  );
};
