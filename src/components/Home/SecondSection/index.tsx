import { DivideStar } from "@/components/DivideStar";
import ParallaxText from "@/components/ParallaxText";

export const SecondSection = () => {
  return (
    <div className="w-full flex flex-col justify-center pl-2 lg:py-16 md:py-12 py-8 bg-background-700 gap-6 -z-10">
      <p className="text3 lg:px-16 md:px-10 px-4">
        Desbrave o Centro de São Paulo com o Bom i Barato:
        <br />
        seu guia, sua vibe!
      </p>
      <ParallaxText baseVelocity={2}>
        <span className="title">DESCUBRA O CENTRO</span>
        <DivideStar color="#FFFEFB" />
      </ParallaxText>
    </div>
  );
};
