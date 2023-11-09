import { Footer } from "@/components/Footer";
import { ContactForm } from "./components/form";

export default function FaleConosco() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <ContactForm />
        <section className="flex justify-center p-20 bg-main-400 w-full h-screen"></section>
      </main>
      <Footer />
    </>
  );
}
