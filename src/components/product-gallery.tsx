'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ProductCard } from '@/components/product-card';
import Image from 'next/image';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { ProductInterface } from '@/lib/interfaces';
import { Skeleton } from '@/components/ui/skeleton';
import Loading from './loading';

export function ProductGallery({
  lifts,
  category,
  aspectRatio,
  className,
}: {
  lifts: ProductInterface[];
  category?: string;
  aspectRatio?: string;
  className?: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const close = () => {
    setSelectedIndex(null);
    setIsImageLoaded(false);
  };

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <div className={className}>
        {lifts.map((lift, index) => (
          <ProductCard
            key={index}
            src={lift.src ?? `/img/products/${lift.label}.webp`}
            label={lift.label}
            href={lift.href}
            type={lift.type}
            aspectRatio={aspectRatio}
            onClick={() => {
              if (lift.type !== '360') setSelectedIndex(index);
            }}
          />
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={close}>
        <DialogContent className="border-blue-500 border-2 max-w-none! w-[75%] lg:w-[50%]">
          {selectedIndex !== null && (
            <>
              <DialogTitle className="text-2xl font-semibold text-center">
                {lifts[selectedIndex].label}
              </DialogTitle>
              {category && (
                <DialogDescription className="text-lg text-center -mt-4">
                  {category}
                </DialogDescription>
              )}
              <div className="w-full h-[80vh] mx-auto relative rounded-md">
                {!isImageLoaded && (
                  <Skeleton className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <Loading isPage={false} />
                  </Skeleton>
                )}

                <Image
                  src={
                    lifts[selectedIndex].src ??
                    `/img/products/${lifts[selectedIndex].label}.webp`
                  }
                  alt={lifts[selectedIndex].label}
                  fill
                  onLoadingComplete={() => setIsImageLoaded(true)}
                  className={`object-contain transition-opacity duration-500 ${
                    isImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
