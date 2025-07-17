import React, { useId } from "react"

export function PageSection({id, className, badge, badgeClass, heading, headingClass, subheading, subheadingClass, children} :
  {id?:string, className?:string, badge?:string, badgeClass?:string, heading:string, headingClass?:string, subheading?:string, subheadingClass?:string, children:React.ReactNode}
) {
  const generatedID = useId();
  const sectionId = id ?? generatedID;
  return (
    <section id={sectionId} aria-labelledby={`${sectionId}-section`} className={`flex items-center justify-center ${className}`}>
      <div className="container px-6 py-12 md:py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 lg:mb-18">
          {badge && <div className={`inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm mb-3 ${badgeClass}`}>{badge}</div>}
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter ${headingClass}`}>{heading}</h1>
          {subheading && <p className={`text-muted-foreground md:text-2xl lg:text-lg mt-4 lg:mt-6 ${subheadingClass}`}>{subheading}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}