import { FAQList } from "@/features/marketing/components/FAQList";
import Footer from "@/features/marketing/components/Footer";
import Features from "@/features/marketing/components/Features";
import Result from "@/features/marketing/components/Result";

const MarketingPage = () => {
  return (
    <main className="px-6 py-12 md:px-12 lg:px-18 space-y-24 mx-auto">
      <Features />
      <Result />
      <FAQList />
      <Footer />
    </main>
  );
};

export default MarketingPage;
