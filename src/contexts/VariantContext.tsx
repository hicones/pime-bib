"use client";
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
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    if (pathname) {
      setVariant("dark");
    }
  }, [pathname]);

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </VariantContext.Provider>
  );
};

export { VariantContext, VariantProvider };
