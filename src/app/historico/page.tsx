import { fetchEstablishments } from "@/services/requests";
import { HistoryBackground } from "./components/historyBackground";
import { Pagination } from "@/components/pagination";
import { EstablishmentsList } from "./components/establishmentsList";

export default async function Highlights() {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const api_key = process.env.NEXT_PUBLIC_API_SECRET;

  const data = await fetchEstablishments(api_url, api_key, {
    type: ["historico"],
  });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HistoryBackground />
      <div className="bg-main-600 w-full h-full flex flex-col">
        <EstablishmentsList data={data?.establishment} />
        {data?.establishment.length > 0 && <Pagination variant="dark" />}
      </div>
    </main>
  );
}
