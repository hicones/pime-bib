/* eslint-disable @next/next/no-img-element */
export const HomeBackground = () => {
  return (
    <section className="homeBackground -z-10 flex items-center justify-center">
      <div>
        <img
          src="/gif-bib.gif"
          alt="gif"
          className="lg:max-w-xl w-full md:max-w-lg max-w-xs"
        />
      </div>
      <span className="font-normal grotesk absolute -rotate-90 top-1/2 left-0 lg:text-[2rem] md:text-2xl text-base uppercase">
        seu guia
      </span>
      <span className="font-normal grotesk absolute rotate-90 top-1/2 right-0 lg:text-[2rem] md:text-2xl text-base uppercase">
        sua vibe
      </span>
      <span className="font-normal grotesk absolute bottom-5 w-full text-center lg:text-[2rem] md:text-2xl text-base uppercase">
        desbrave o centro de são paulo
      </span>
    </section>
  );
};
