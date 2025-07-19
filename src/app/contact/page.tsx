import ContactForm from "@/components/contact-form";
import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Contact | Asian Lift Bangladesh",
  description:
    "Get in touch with Asian Lift Bangladesh for elevator sales, installation quotes, maintenance services, or technical support. Reach our expert team via phone, email, or contact form today.",
  keywords:
    "contact Asian Lift, Asian Lift phone number, email Asian Lift Bangladesh, lift service inquiry, elevator installation quote, lift maintenance contact, Bangladesh elevator support, Chittagong lift contact, reach Asian Lift",
  alternates: {
    canonical: "https://asianliftbd.com/contact",
  },
};

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Contact"
  }
]

export default function Contact() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_contact_m.webp)] md:bg-[url(/img/hero_contact.webp)]" 
        badge="Phone, Email or Visit us" 
        heading="Contact Us" 
        breadcrumb={breadcrumb}
      />
      
      <section id="details" className="flex items-center justify-center">
        <div className="container px-4 md:px-6 my-16 md:my-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3 lg:space-y-6">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Info
            </h2>
            <p className="text-muted-foreground lg:text-lg max-w-2xl mb-12">
              We prefer you to make an appointment beforehand to make sure we can serve you best when you will visit us.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="col-span-1 max-w-md mx-auto text-xl text-center gap-4 flex justify-center">
              <CardContent className="space-y-6">
                <div>
                  <div className="text-2xl font-semibold">(+880) 1613 748836</div>
                  <a>contact@asianliftbd.com</a>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">Address</div>
                  <div>
                    Noor Mohal, Anandipur Gate, P.C. Road, <br/>
                    Halishahar, Chittagong-4224
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">Working Hours</div>
                  <div>
                    Saturday - Thursday <br/>
                    09:00 am - 06:00 pm
                  </div>
                </div>
                <div className="text-[15px] text-muted-foreground">Do not use this form for sales related query. <br/>Please email us for other queries.</div>
              </CardContent>
            </Card>
            <ContactForm className="max-w-md"/>
          </div>
        </div>
      </section>  

      <section id="map" className="bg-muted flex items-center justify-center">
        <div className="container px-4 md:px-6 my-16 md:my-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3 lg:space-y-6">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">Visit Us</div>
            <h2 id="features-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Location
            </h2>
            <p className="text-muted-foreground lg:text-lg max-w-2xl mb-12">
              We prefer you to make an appointment beforehand to make sure we can serve you best when you will visit us.
            </p>
          </div>
          <div className="w-full h-[50vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.3898062624894!2d91.7864667758672!3d22.338905641493902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd926f4116789%3A0x49e7b21982bea799!2z4KaP4Ka24Ka_4Kef4Ka-4KaoIOCmsuCmv-Cmq-CmnyDgpqzgpr7gpoLgprLgpr7gpqbgp4fgprY!5e0!3m2!1sen!2suk!4v1751629797251!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
            </div>
        </div>
      </section>
    </PageLayout>
  );
}
