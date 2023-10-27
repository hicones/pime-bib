import { FirstSection } from "@/components/Home/FirstSection";
import { SecondSection } from "@/components/Home/SecondSection";
import { ThirdSection } from "@/components/Home/ThirdSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center h-[150vh]">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
