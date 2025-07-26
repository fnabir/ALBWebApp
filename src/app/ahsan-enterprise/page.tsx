import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import Navbar from "@/components/navbar";
import { PageSection } from "@/components/page-section";

export const metadata = {
  title: "Ahsan Enterprise | C&F Agent",
  description:
    "Ahsan Enterprise is a leading C&F (Customs & Forwarding) Agent in Bangladesh, providing expert customs clearance, freight forwarding, and logistics solutions for seamless import and export operations.",
  keywords:
    "Ahsan Enterprise, C&F Agent Bangladesh, Customs Agent, Freight Forwarding Bangladesh, Customs Clearance Service, Import Export Solutions, Logistics Company Bangladesh, Shipping Agent, Supply Chain Management, Cargo Forwarding",
  alternates: {
    canonical: "https://asianliftbd.com/ahsan-enterprise",
  },
};

export default function AhsanEnterprise() {

  return (
    <div>
      <Navbar/>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_ae_m.webp)] md:bg-[url(/img/hero_ae.webp)]" 
        badge="C&F Agent"
        heading="Ahsan Enterprise"
      />

      <PageSection heading="Our Location">
        <div className="w-full h-[50vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.387801132463!2d91.78901309999999!3d22.338981399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd93917c3cf17%3A0x64f1f55fc6ccb962!2sAhsan%20Enterprise!5e0!3m2!1sen!2suk!4v1753568095263!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
      </PageSection>
      <Footer />
    </div>
  );
}
