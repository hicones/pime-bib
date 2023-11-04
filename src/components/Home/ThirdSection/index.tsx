import { DivideStar } from "@/components/DivideStar";
import ParallaxText from "@/components/ParallaxText";

import Image from "next/image";

export const ThirdSection = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-6 lg:py-12 md:py-8 py-4 -z-10">
      <ParallaxText baseVelocity={-2}>
        <span className="flex gap-2 items-end">
          <strong>98</strong>
          <strong>RESTAURANTES</strong>
        </span>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={76}
          height={76}
          className="rounded-full"
        />
        <span className="flex gap-2 items-end">
          <strong>38</strong>
          <strong>Bares</strong>
        </span>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={76}
          height={76}
          className="rounded-full"
        />
        <span className="flex gap-2 items-end">
          <strong>58</strong>
          <strong>ESTABELECIMENTOS</strong>
        </span>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={76}
          height={76}
          className="rounded-full"
        />
        <span className="flex gap-2 items-end">
          <strong>11</strong>
          <strong>GRATUITOS</strong>
        </span>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={76}
          height={76}
          className="rounded-full"
        />
      </ParallaxText>
    </div>
  );
};
