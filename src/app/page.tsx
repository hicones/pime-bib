import { Footer } from "@/components/Footer";
import { SectionCategories } from "@/components/Home/Categories";
import { HomeBackground } from "@/components/Home/HomeBackground";
import { SectionYouKnow } from "@/components/Home/YouKnow";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <HomeBackground />
        <SectionYouKnow />
        <SectionCategories />
      </main>
      <Footer />
    </>
  );
}
