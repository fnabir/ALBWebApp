import Image from "next/image"
import React from "react"
import { Md360, MdSearch } from "react-icons/md"

interface ProductCardProps {
  src: string;
  label: string;
  href?: string;
  type?: string;
  aspectRatio?: string;
  onClick?: () => void;
}

export function ProductCard({src, label, href, type, aspectRatio, onClick} : ProductCardProps) {
  const is360 = type === "360";

  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => {
        if (is360 && href) {
          window.open(href, "_blank");
        } else if (onClick) {
          onClick();
        }
      }}
    >
      <div className={`relative w-full ${aspectRatio}`}>
        <Image
          src={src ?? `/img/products/${label}.webp`}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 scale-102 group-hover:scale-108"
        />

        <div className="absolute bottom-0 left-0 w-full h-full
                        pointer-events-none"
        />

        {
          href && <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {
              is360 ?<Md360 className="size-10"/>
              : <MdSearch className="size-10" />
            }
          </div>
        }

        <div className="absolute w-[80%] py-1 rounded-full left-1/2 transform -translate-x-1/2
                        bottom-[5%] group-hover:opacity-0
                        bg-white/80 dark:bg-black/50
                        transition-all duration-500
                        text-2xl tracking-tight font-semibold text-center">
          {label}
        </div>
      </div>
    </div>
  )
}