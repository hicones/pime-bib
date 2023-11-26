import { VariantContext } from "@/contexts/VariantContext";
import { useContext } from "react";

export const useVariant = () => {
  const { variant, setVariant } = useContext(VariantContext);

  return { variant, setVariant };
};
