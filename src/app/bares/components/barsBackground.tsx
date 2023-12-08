export const BarsBackground = () => {
  return (
    <section className="barsBackground -z-10 flex items-center justify-center bg-[url(/bg-destaques.png)]">
      <div>
        <h1 className="neutral-face font-normal text-fontcolor-50 lg:text-9xl md:text-7xl text-3xl">
          BARES
        </h1>
      </div>
      <span className="font-normal grotesk absolute -rotate-90 top-1/2 left-0 lg:text-[2rem] md:text-2xl text-base uppercase">
        seu guia
      </span>
      <span className="font-normal grotesk absolute rotate-90 top-1/2 right-0 lg:text-[2rem] md:text-2xl text-base uppercase">
        sua vibe
      </span>
      <span className="font-normal grotesk absolute bottom-5 w-full text-center lg:text-[2rem] md:text-2xl text-base uppercase">
        DESCUBRA BARES
      </span>
    </section>
  );
};
