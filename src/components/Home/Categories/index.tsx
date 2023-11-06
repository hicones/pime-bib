"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { GoArrowUpRight } from "react-icons/go";

export const Categories = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="categoryContainer bg-background-300">
        <div className="categoryContainerText items-end justify-end">
          <h2 className="text-left w-full">DESTAQUES</h2>
          <p>
            A curadoria do BiB selecionou alguns estabelecimentos incríveis para
            você desfrutar do melhor do nosso Centro!
          </p>
          <Link href="/categories" className="desktopLink">
            VER TUDO
            <GoArrowUpRight size={52} />
          </Link>
        </div>
        <div className="categoryImage shadowRight">
          <motion.div
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/categories/destaque.png), lightgray 50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
          ></motion.div>
          <span>MUGSP</span>
        </div>
        <Link href="/destaques" className="mobileLink">
          VER TUDO
          <GoArrowUpRight size={52} />
        </Link>
      </div>

      <div className="categoryContainer bg-background-600">
        <div className="categoryImage WhiteShadowLeft">
          <motion.div
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/categories/bares.png), lightgray 50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              zIndex: 0,
              width: "100%",
              height: "100%",
            }}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
          ></motion.div>
          <span>RIVIERA</span>
        </div>

        <div className="categoryContainerText items-end justify-end text-fontcolor-50 -order-1 lg:order-1">
          <h2 className="text-left w-full">BARES</h2>
          <p>
            Um convite para a descoberta de experiências noturnas únicas. De
            coquetéis clássicos a criações ousadas, faça da sua noite uma
            história inesquecível.
          </p>
          <Link href="/categories" className="desktopLink">
            VER TUDO
            <GoArrowUpRight size={52} />
          </Link>
        </div>
        <Link href="/bares" className="mobileLink text-fontcolor-50">
          VER TUDO
          <GoArrowUpRight size={52} />
        </Link>
      </div>

      <div className="categoryContainer bg-background-500">
        <div className="categoryContainerText items-end justify-end text-fontcolor-50">
          <h2 className="text-left w-full">RESTAURANTES</h2>
          <p>
            Onde a tradição se encontra com a inovação para criar experiências
            culinárias memoráveis no coração de São Paulo.
          </p>
          <Link href="/categories" className="desktopLink">
            VER TUDO
            <GoArrowUpRight size={52} />
          </Link>
        </div>

        <div className="categoryImage WhiteShadowRight">
          <motion.div
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/categories/restaurantes.png), lightgray 50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              zIndex: 0,
              width: "100%",
              height: "100%",
            }}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
          ></motion.div>
          <span>A CASA DO PORCO</span>
        </div>

        <Link href="/restaurantes" className="mobileLink text-fontcolor-50">
          VER TUDO
          <GoArrowUpRight size={52} />
        </Link>
      </div>

      <div className="categoryContainer bg-background-400">
        <div className="categoryImage WhiteShadowLeft">
          <motion.div
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/categories/gratuitos.png), lightgray 50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              zIndex: 0,
              width: "100%",
              height: "100%",
            }}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
          ></motion.div>
          <span>PARQUE TRIANON</span>
        </div>

        <div className="categoryContainerText items-end justify-end text-fontcolor-50 -order-1 lg:order-1">
          <h2 className="text-left w-full">GRATUITOS</h2>
          <p>Parques, eventos e passeios que valem a pena conhecer.</p>
          <Link href="/categories" className="desktopLink">
            VER TUDO
            <GoArrowUpRight size={52} />
          </Link>
        </div>
        <Link href="/gratuitos" className="mobileLink text-fontcolor-50">
          VER TUDO
          <GoArrowUpRight size={52} />
        </Link>
      </div>

      <div className="categoryContainer bg-background-700">
        <div className="categoryContainerText items-end justify-end text-fontcolor-50">
          <h2 className="text-left w-full">LUGARES</h2>
          <p>
            Onde museus e pontos turísticos se unem para contar histórias
            fascinantes. Cada obra de arte, cada construção antiga é uma porta
            de entrada para o passado e uma janela para o presente. Mergulhe na
            riqueza da história e da criatividade que moldaram nossa cidade.
          </p>
          <Link href="/categories" className="desktopLink">
            VER TUDO
            <GoArrowUpRight size={52} />
          </Link>
        </div>
        <div className="categoryImage WhiteShadowRight">
          <motion.div
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/categories/lugares.png), lightgray 50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              zIndex: 0,
              width: "100%",
              height: "100%",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
          ></motion.div>
          <span>SAMPA SKY</span>
        </div>
        <Link href="/lugares" className="mobileLink text-fontcolor-50">
          VER TUDO
          <GoArrowUpRight size={52} />
        </Link>
      </div>
    </section>
  );
};
