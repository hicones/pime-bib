import { fetchEstablishments } from "@/services/requests";
import { CultureBackground } from "./components/cultureBackground";
import { EstablishmentsList } from "./components/establishmentsList";
import { Pagination } from "@/components/pagination";

export default async function Culture() {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const api_key = process.env.NEXT_PUBLIC_API_SECRET;

  const data = await fetchEstablishments(api_url, api_key, {
    type: ["cultura"],
  });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <CultureBackground />
      <div className="bg-main-500 w-full h-full flex flex-col">
        <EstablishmentsList data={data?.establishment} />
        {data?.establishment.length > 0 && <Pagination variant="light" />}
      </div>
    </main>
  );
}
