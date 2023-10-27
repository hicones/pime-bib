import { DivideStar } from "@/components/DivideStar";
import ParallaxText from "@/components/ParallaxText";

export const SecondSection = () => {
  return (
    <div className="w-full flex flex-col justify-center pl-2 py-6 bg-background-200 gap-6">
      <p className="text3 pl-16">
        Desbrave o Centro de São Paulo com o Bom i Barato:
        <br />
        seu guia, sua vibe!
      </p>
      <ParallaxText baseVelocity={5}>
        <span className="title">DESCUBRA O CENTRO</span>
        <DivideStar color="#FFFEFB" />
      </ParallaxText>
    </div>
  );
};
