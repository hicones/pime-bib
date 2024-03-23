import { getEstablishment } from "@/services/requests";
import { getEstablishmentBackground, getFontTheme } from "@/utils";

export default async function EstablishmentsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getEstablishment(params.id);

  const background = await getEstablishmentBackground(
    data?.establishment_by_pk.establishment_types.map((e: any) => e.type)
  );

  const fontTheme = await getFontTheme(
    data?.establishment_by_pk.establishment_types.map((e: any) => e.type)
  );

  return (
    <main
      className={`flex min-h-screen flex-col items-center lg:pt-64 md:pt-52 pt-32 divide-y p-4 ${
        fontTheme === "dark"
          ? "text-fontcolor-100 divide-fontcolor-100"
          : "text-fontcolor-50 divide-fontcolor-50"
      }`}
      style={{
        background: background,
      }}
    >
      <section className="max-w-screen-2xl w-full h-auto mx-auto flex justify-between lg:flex-row flex-col gap-8">
        <div className="flex flex-col justify-between max-w-xl lg:pb-40 pb-12 gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="neutral-face lg:text-[5rem] md:text-6xl text-4xl font-normal uppercase">
              {data?.establishment_by_pk.name}
            </h1>
            <ul className="flex gap-4 flex-wrap">
              {data?.establishment_by_pk.establishment_types.map(
                (e: any, index: any) => (
                  <span
                    key={index}
                    className="filterButton"
                    style={{
                      borderColor: fontTheme === "dark" ? "#010100" : "#FFFEFB",
                    }}
                  >
                    {e.type.name}
                  </span>
                )
              )}
            </ul>
          </div>
          <p className="uppercase font-normal neutral-face lg:text-3xl md:text-2xl text-xl z-0">
            {data?.establishment_by_pk.description}
          </p>
        </div>
        <div className="flex lg:w-3/6 md:w-4/5 w-[85dvw] lg:pb-40 pb-12">
          <div
            className="w-full h-[80dvh] self-center"
            style={{
              backgroundImage: `url(${data?.establishment_by_pk.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "grayScale(30%)",
              boxShadow: "20px 20px 0px 0px rgba(255, 255, 255, 0.2)",
              borderRadius: "0.4375rem",
              zIndex: 0,
            }}
          />
        </div>
      </section>
      <section className="max-w-screen-2xl w-full h-auto mx-auto flex flex-col lg:gap-28 lg:py-24 py-8 gap-8">
        <h2 className="uppercase font-normal lg:text-[5rem] md:text-6xl text-3xl neutral-face">
          quando posso ir?
        </h2>
        <div className="flex w-full items-center justify-end">
          <ul className="w-fit flex flex-col gap-10">
            {data?.establishment_by_pk.opening_hours.map(
              (e: any, index: any) => (
                <li
                  key={index}
                  className="w-fit grotesk font-medium lg:text-[3rem] md:text-3xl text-xl"
                >
                  {e}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-14">
          <span className="flex gap-2 grotesk font-bold lg:text-4xl md:text-2xl text-lg ">
            {data?.establishment_by_pk.payment_options.includes("gratis")
              ? "Gratis"
              : "As formas de pagamento para os ingressos incluem " &&
                data?.establishment_by_pk.payment_options.map(
                  (e: any, index: any) => <p key={index}>{e}</p>
                )}
          </span>
        </div>
      </section>
      <section className="max-w-screen-2xl w-full h-auto mx-auto flex flex-col lg:gap-28 lg:py-24 py-8 gap-8">
        <h2 className="uppercase font-normal lg:text-[5rem] md:text-6xl text-3xl neutral-face">
          contato
        </h2>
        <ul className="flex gap-7 flex-wrap">
          <a
            className="filterButton hover:opacity-75 transition"
            style={{
              borderColor: fontTheme === "dark" ? "#010100" : "#FFFEFB",
            }}
          >
            Instagram
          </a>
          <a
            className="filterButton hover:opacity-75 transition"
            style={{
              borderColor: fontTheme === "dark" ? "#010100" : "#FFFEFB",
            }}
          >
            site
          </a>
          <a
            className="filterButton hover:opacity-75 transition"
            style={{
              borderColor: fontTheme === "dark" ? "#010100" : "#FFFEFB",
            }}
          >
            facebook
          </a>
          <a
            className="filterButton hover:opacity-75 transition"
            style={{
              borderColor: fontTheme === "dark" ? "#010100" : "#FFFEFB",
            }}
          >
            whatsapp
          </a>
        </ul>
        <div className="flex flex-col gap-2">
          <h4 className="grotesk font-bold lg:text-4xl md:text-2xl text-lg">
            Telefone:
          </h4>

          <p className="grotesk font-medium lg:text-4xl md:text-2xl text-lg underline underline-offset-8">
            (11) *****-****
          </p>
        </div>
      </section>
      <section className="max-w-screen-2xl w-full h-auto mx-auto flex flex-col lg:gap-28 lg:py-24 py-8 gap-8">
        <h2 className="uppercase font-normal lg:text-[5rem] md:text-6xl text-3xl neutral-face">
          como chegar?
        </h2>
        <ul className="flex gap-7 flex-wrap">
          <a
            className="filterButton hover:opacity-75 transition"
            style={{
              borderColor: fontTheme === "dark" ? "#010100" : "#FFFEFB",
            }}
          >
            uber
          </a>
          <a
            className="filterButton hover:opacity-75 transition"
            style={{
              borderColor: fontTheme === "dark" ? "#010100" : "#FFFEFB",
            }}
          >
            moovit
          </a>
          <a
            href={data?.establishment_by_pk.coordinates}
            target="_blank"
            className="filterButton hover:opacity-75 transition"
            style={{
              borderColor: fontTheme === "dark" ? "#010100" : "#FFFEFB",
            }}
          >
            google
          </a>
        </ul>

        <p className="grotesk font-bold lg:text-4xl md:text-2xl text-lg">
          {data?.establishment_by_pk.address}
        </p>

        <iframe
          className="rounded-2xl w-full lg:h-[30rem]"
          src={data?.establishment_by_pk.coordinates}
        ></iframe>
      </section>
    </main>
  );
}
