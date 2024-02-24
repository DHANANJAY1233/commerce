'use client';

import Image from "next/image";


export function Gallery({ imageSrc }: { imageSrc: string }) {
  return (
    <>
      <div className="relative aspect-square h-full max-h-[300px] max-w-[300px] w-full overflow-hidden">
        {imageSrc && (
          <Image
          className="h-full w-full object-cover object-center"
          height={500}
          width={500}
          alt={'product'}
          src={imageSrc}
        />
        )}
      </div>
    </>
  );
}
