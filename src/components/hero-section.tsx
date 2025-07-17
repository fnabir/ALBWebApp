import { BreadcrumbInterface } from "@/lib/interfaces";
import BreadcrumbSection from "./breadcrumb-section";

export function HeroSection({className, badge, heading, subheading, breadcrumb} :
  {className?:string, badge?:string, heading:string, subheading?:string, breadcrumb?:BreadcrumbInterface[]}
) {
  return (
    <section id="hero" className={`flex items-center justify-center bg-no-repeat bg-cover bg-center ${className}`}>
      <div className="container px-4 md:px-6 py-16 md:py-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {badge && <div className="inline-block rounded-lg bg-white text-black px-3 py-1 text-sm mb-2">{badge}</div>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">{heading}</h1>
          {subheading && <p className="text-muted-foreground md:text-2xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed max-w-2xl mb-12">{subheading}</p>}
          {breadcrumb && <BreadcrumbSection breadcrumb={breadcrumb} />}
        </div>
      </div>
    </section>
  )
}