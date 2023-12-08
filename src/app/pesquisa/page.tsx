"use client";
import { getEstablishmentBySearch } from "@/services/requests";
import { EstablishmentsList } from "./components/establishmentsList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Restaurants() {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const api_key = process.env.NEXT_PUBLIC_API_SECRET;

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [data, setData] = useState<any>({});

  useEffect(() => {
    if (search) {
      (async () => {
        const data = await getEstablishmentBySearch(api_url, api_key, search);

        setData(data);

        console.log(data);
      })();
    }
  }, [api_key, api_url, search]);

  return (
    <main className="flex min-h-screen flex-col bg-main-200 lg:pt-64 md:pt-52 pt-32 px-2">
      <span className="flex max-w-screen-2xl mx-auto w-full items-center gap-3 uppercase grotesk text-black lg:text-4xl md:text-2xl text-xl">
        <h2 className="font-normal">MOSTRANDO RESULTADOS PARA:</h2>
        <p className="font-light border-b border-black">{search}</p>
      </span>

      {data?.establishment && data.establishment?.length > 0 && (
        <>
          <EstablishmentsList data={data.establishment} />
        </>
      )}
      {data?.establishment?.length === 0 && (
        <div className="py-32">
          <p className="text-center grotesk text-black font-normal lg:text-5xl md:text-3xl text-xl">
            NÃO CONSEGUIMOS ENCONTRAR RESULTADOS <br /> PARA ESSA BUSCA :({" "}
            <br />
            QUE TAL TENTAR NOVAMENTE?
          </p>
        </div>
      )}
    </main>
  );
}
