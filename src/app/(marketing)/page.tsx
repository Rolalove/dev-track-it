import { FAQList } from "@/features/marketing/components/FAQList";
import Footer from "@/features/marketing/components/Footer";
import Features from "@/features/marketing/components/Features";
import Result from "@/features/marketing/components/Result";
import Tools from "@/features/marketing/components/Tools";
import Testimony from "@/features/marketing/components/Testimony";
import Hero from "@/features/marketing/components/Hero";

const MarketingPage = () => {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <div className="px-6 pt-50 pb-12 sm:pt-62.5 md:px-10 md:pt-82.5 lg:pt-90 space-y-32 max-w-6xl mx-auto">
        <Features />
        <Tools />
        <Testimony />
        <Result />
        <FAQList />
      </div>
      <Footer />
    </main>
  );
};

export default MarketingPage;
