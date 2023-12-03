export const HomeBackground = () => {
  return (
    <section className="homeBackground -z-10 flex items-center justify-center">
      <div>
        <iframe
          src="https://giphy.com/embed/Riu86b28LvzXeXkzF1"
          allowFullScreen
        ></iframe>
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
