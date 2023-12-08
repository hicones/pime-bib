"use client";
import { usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

type props = {
  children: React.ReactNode;
};

type IVariantContext = {
  variant: string;
  setVariant: React.Dispatch<React.SetStateAction<string>>;
};

//Context
const VariantContext = createContext({} as IVariantContext);

//Provider
const VariantProvider = ({ children }: props) => {
  const [variant, setVariant] = useState("dark");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setVariant("dark");
    }
    if (pathname === "/pesquisa") {
      setVariant("light");
    }
  }, [pathname]);

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </VariantContext.Provider>
  );
};

export { VariantContext, VariantProvider };
