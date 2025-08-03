import Image from "next/image"
import React from "react"
import { Md360, MdSearch } from "react-icons/md"

export function ProductCard({src, label, href, type, aspectRatio} :
  {src:string, label:string, href?:string, type?:string, aspectRatio?:string}
) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300"
    >
      <div className={`relative w-full ${aspectRatio}`}>
        <Image
          src={src ?? `/img/products/${label}.webp`}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 scale-102 group-hover:blur-sm group-hover:scale-108"
        />

        <div className="absolute bottom-0 left-0 w-full h-full
                        bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent
                        group-hover:bg-white/40 dark:group-hover:bg-black/40
                        transition-all duration-500
                        pointer-events-none"
        />

        {
          href && <a className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            href={href}
            target="_blank">
            {
              type == "360" ?<Md360 className="size-10"/>
              : <MdSearch className="size-10" />
            }
          </a>
        }

        <div className="absolute w-full left-1/2 transform -translate-x-1/2
                        bottom-[5%] group-hover:bottom-[40%]
                        transition-all duration-500
                        text-2xl tracking-tight font-semibold text-center">
          {label}
        </div>
      </div>
    </div>
  )
}