/* eslint-disable @next/next/no-img-element */
import { EstablishmentProps } from "@/types";
import Link from "next/link";

export const EstablishmentsList = (data: any) => {
  return (
    <section className="h-auto w-full flex flex-col gap-24 justify-between">
      {data?.data?.length > 0 && (
        <ul className="mt-12 divide-y border-t border-b border-main-50 divide-main-50 text-main-50">
          {data?.data?.map((item: EstablishmentProps) => {
            return (
              <Link
                href={`/estabelecimento/${item.id}`}
                key={item.id}
                className="establishmentItemList cursor-pointer hover:backdrop-brightness-95 transition duration-300"
              >
                <div>
                  <span className="w-12 h-12 items-center rounded-full p-2 border-2 border-main-50">
                    <img src="/dark-right-arrow.svg" alt="arrow" />
                  </span>
                  <h5>{item.name}</h5>
                </div>
              </Link>
            );
          })}
        </ul>
      )}

      <div className="w-full flex justify-center absolute bottom-10">
        <Link
          href="/fale-conosco"
          className="w-fit mx-auto grotesk text-black font-normal lg:text-2xl md:text-xl border-b border-black hover:opacity-75 cursor-pointer transition"
        >
          não encontrou o que esperava? deixe uma sugestão!
        </Link>
      </div>
    </section>
  );
};
