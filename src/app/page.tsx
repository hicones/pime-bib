import { ContactUs } from "@/components/Home/ContactUs";
import { FirstSection } from "@/components/Home/FirstSection";
import { Footer } from "@/components/Home/Footer";
import { SecondSection } from "@/components/Home/SecondSection";
import { ThirdSection } from "@/components/Home/ThirdSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
