import { Pagination } from "@/components/pagination";
import { EstablishmentsList } from "./components/establishmentsList";
import { HighlightsBackground } from "./components/highlightsBackground";
import { fetchEstablishments } from "@/services/requests";

export default async function Highlights() {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const api_key = process.env.NEXT_PUBLIC_API_SECRET;

  const data = await fetchEstablishments(api_url, api_key, {
    type: ["destaque"],
  });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HighlightsBackground />
      <div className="bg-main-200 w-full h-full flex flex-col">
        <EstablishmentsList data={data?.establishment} />
        <Pagination variant="dark" />
      </div>
    </main>
  );
}
