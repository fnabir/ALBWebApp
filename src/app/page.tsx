import GetQuote from "@/components/get-quote";
import PageLayout from "@/components/page-layout";
import PartnerSection from "@/components/pages/home/partners-section";
import PortfolioSection from "@/components/pages/home/portfolio-section";
import ProductsSection from "@/components/pages/home/products-section";
import ServicesSection from "@/components/pages/home/services-section";
import { ScrollToSection } from "@/components/scroll-to-section";
import TypingPromptInput from "@/components/typing-prompt-input";

export default function Home() {
  return (
    <PageLayout>
      <section id="hero" className="h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
        <div className="container px-6 py-16 md:py-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-6">Lift, Elevator & Generator</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Asian Lift Bangladesh
            </h1>
            <p className="text-muted-foreground md:text-2xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed max-w-2xl mb-12">
              Experience unparalleled safety, quality, and expert service with our wide range of custom elevator and escalator solutions for every need.
            </p>

            <TypingPromptInput />

            <div className="flex flex-wrap justify-center gap-3 mt-16">
              <GetQuote />
              <ScrollToSection targetId="products">
                See Products
              </ScrollToSection>
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />
      <PortfolioSection />
      <ServicesSection />
      <PartnerSection />
    </PageLayout>
  );
}
