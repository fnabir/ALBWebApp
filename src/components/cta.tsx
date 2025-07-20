import GetQuote from "./get-quote";

export default function ClickToAction() {
  return (
    <div className="bg-muted/20 border-t flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 container px-6 py-8 md:py-12 font-semibold text-xl lg:text-3xl">
        <div className="col-span-1 space-y-2 lg:space-y-4 text-center lg:text-left">
          <div>Let&apos;s start your project,</div>
          <div className="flex flex-row lg:-translate-x-2 items-center justify-center lg:justify-start">
            <a href="mailto:contact@asianliftbd.com" className="text-blue-600 dark:text-blue-400 hover:text-foreground hover:bg-accent-foreground/20 px-2 rounded-md" target="_blank">
              Mail Us
            </a>
            <div className="pr-2">or</div>
            <GetQuote />
          </div>
        </div>
        <div className="col-span-1 text-center lg:text-right">
          <a href="mailto:contact@asianliftbd.com" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">
            <div>contact@asianliftbd.com</div>
          </a>
        </div>
      </div>
    </div>
  )
}
