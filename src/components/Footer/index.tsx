/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ParallaxText from "../ParallaxText";

export const Footer = () => {
  return (
    <footer className={`w-full flex flex-col relative bg-main-50`}>
      <nav className="w-full flex md:flex-row flex-col lg:px-24 md:px-16 px-4 lg:py-20 md:py-10 py-8 place-items-start gap-12 justify-between">
        <div className="flex lg:gap-24 md:flex-row flex-col gap-12">
          <div className="flex flex-col gap-6 ">
            <h4 className="">DIGA OI</h4>
            <ul>
              <li className="text4">
                <a
                  href="mailto:contato.paulistinho@bomibarato.com"
                  target="_blank"
                >
                  contato.paulistinho@bomibarato.com
                </a>
              </li>
              <li className="text4">
                <Link href="/fale-conosco">clique aqui</Link>
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
        </div>

        <img
          src="/logo.jpg"
          alt="logo"
          className="w-48 self-center rounded-full"
        />
      </nav>
      <div className="w-full bg-main-100 flex py-8 -z-10">
        <ParallaxText baseVelocity={-3}>
          <span className="text5 text-main-50 tracking-normal">
            CONHEÇA O CENTRO
          </span>
          <img src="/star_footer.svg" alt="star" />
        </ParallaxText>
      </div>
    </footer>
  );
};
