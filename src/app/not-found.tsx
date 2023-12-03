import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-main-50 gap-10">
      <h1 className="text-9xl text-white font-normal text-center montserrat">
        4O4
      </h1>
      <h2 className="lg:text-4xl text-xl text-fontcolor-50 font-normal text-center grotesk uppercase px-2">
        Esta página é como um tesouro perdido. <br /> Infelizmente, não a
        encontramos.
      </h2>
      <div className="flex absolute bottom-16">
        <Link
          href="/"
          className="hoverText1 w-fit lg:text-2xl text-base font-normal uppercase"
        >
          <span className="hoverText2">voltar para página inicial</span>
          <span className="hoverText2">voltar para página inicial</span>
        </Link>
      </div>
    </main>
  );
}
