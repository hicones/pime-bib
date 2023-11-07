"use client";
import { Footer } from "@/components/Footer";
import { Bars } from "./components/listItem";

import { useEffect, useState } from "react";

export default function Bares() {
  const bares = [
    {
      id: 1,
      name: "Rivieira",
    },
    {
      id: 2,
      name: "Bar do Zé",
    },
    {
      id: 3,
      name: "Bar do Ney",
    },
    {
      id: 4,
      name: "Bar do Vini",
    },
    {
      id: 5,
      name: "Bardo",
    },
  ];

  const [elementoDestacado, setElementoDestacado] = useState<any>(null); // O elemento destacado atual

  const handleScroll = () => {
    // Determine a posição atual de rolagem
    const scrollPosition = window.scrollY;

    // Calcule qual elemento deve ser destacado com base na posição de rolagem
    const windowHeight = window.innerHeight;
    const itemHeight = windowHeight * 0.2; // Cada elemento ocupa 20% da altura da página
    const index = Math.floor(scrollPosition / itemHeight);

    // Defina o elemento destacado com base no cálculo
    setElementoDestacado(bares[index]);
  };

  useEffect(() => {
    // Adicione um ouvinte de evento de rolagem quando o componente for montado
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remova o ouvinte de evento quando o componente for desmontado
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center ">
        <div className="pageTitle">
          <h1 className="text-background-600">Descubra Bares</h1>
        </div>
        <section className="flex w-full flex-col mb-12">
          <ul className="flex flex-col w-full list-none text-background-600 containerPadding">
            {bares.map((bar, index) => (
              <Bars
                key={index}
                data={bar}
                active={bar.id === elementoDestacado?.id}
              />
            ))}
          </ul>
        </section>
      </main>
      <Footer color="#E0006D" />
    </>
  );
}
