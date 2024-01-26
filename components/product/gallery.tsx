'use client';

import Image from 'next/image';

export function Gallery({ imageSrc }: { imageSrc: string }) {
  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {imageSrc && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={'product'}
            src={imageSrc}
            priority={true}
          />
        )}
      </div>
    </>
  );
}
