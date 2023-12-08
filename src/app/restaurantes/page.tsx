import { fetchEstablishments } from "@/services/requests";
import { RestaurantsBackground } from "./components/restaurantsBackground";
import { Pagination } from "@/components/pagination";
import { EstablishmentsList } from "./components/establishmentsList";

export default async function Restaurants() {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const api_key = process.env.NEXT_PUBLIC_API_SECRET;

  const data = await fetchEstablishments(api_url, api_key, {
    type: ["restaurante"],
  });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <RestaurantsBackground />
      <div className="bg-main-400 w-full h-full flex flex-col">
        <EstablishmentsList data={data.establishment} />
        {data.establishment.length > 0 && <Pagination variant="light" />}
      </div>
    </main>
  );
}
