/* eslint-disable @next/next/no-img-element */
import { toast } from "react-toastify";
export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-background-700 p-8 mt-48 relative">
      <img src="/paulistinho.svg" alt="paulistinho" className="paulistinho" />
      <p className="text-center lg:text-2xl text-xl font-bold text-white">
        TODOS DIREITOS RESERVADOS <br /> @paulistinho
      </p>
    </footer>
  );
};
