import { DivideStar } from "@/components/DivideStar";
import ParallaxText from "@/components/ParallaxText";

export const ThirdSection = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-6 lg:py-12 md:py-8 py-4 -z-10">
      <ParallaxText baseVelocity={-2}>
        <span className="flex gap-2 items-end">
          <strong>98</strong>
          <strong>RESTAURANTES</strong>
        </span>
        <DivideStar color="#192536" />
        <span className="flex gap-2 items-end">
          <strong>38</strong>
          <strong>Bares</strong>
        </span>
        <DivideStar color="#192536" />
        <span className="flex gap-2 items-end">
          <strong>58</strong>
          <strong>ESTABELECIMENTOS</strong>
        </span>
        <DivideStar color="#192536" />
        <span className="flex gap-2 items-end">
          <strong>11</strong>
          <strong>GRATUITOS</strong>
        </span>
        <DivideStar color="#192536" />
      </ParallaxText>
    </div>
  );
};
