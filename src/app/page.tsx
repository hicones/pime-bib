import { Footer } from "@/components/Footer";
import { SectionCategories } from "@/components/Home/Categories";
import { HomeBackground } from "@/components/Home/HomeBackground";
import { SectionYouKnow } from "@/components/Home/YouKnow";
import { StickyMenu } from "@/components/Menu/StickyMenu";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <HomeBackground />
        <div className="w-full flex flex-col">
          <StickyMenu />
          <SectionYouKnow />
          <SectionCategories />
        </div>
      </main>
      <Footer />
    </>
  );
}
