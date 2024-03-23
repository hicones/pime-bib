import { Pagination } from "@/components/pagination";
import { BarsBackground } from "./components/barsBackground";
import { EstablishmentsList } from "./components/establishmentsList";
import { fetchEstablishments } from "@/services/requests";

export default async function Bars() {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const api_key = process.env.NEXT_PUBLIC_API_SECRET;

  const data = await fetchEstablishments(api_url, api_key, {
    type: ["bar"],
  });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <BarsBackground />
      <div className="bg-main-300 w-full h-full flex flex-col">
        <EstablishmentsList data={data?.establishment} />
        <Pagination variant="light" />
      </div>
    </main>
  );
}
