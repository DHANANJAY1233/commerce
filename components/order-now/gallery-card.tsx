import Image from 'next/image';

interface GalleryCardInterface {
  imageSrc: string;
  imageAlt: string;
  pos: string;
}

const GalleryCard = ({ imageSrc, imageAlt, pos }: GalleryCardInterface) => {
  return (
    <div className="lg:rounded-4xl relative min-h-[556px] flex-shrink-0 flex-grow-0 basis-[calc(8.333%)] overflow-hidden rounded-2xl bg-white shadow-md  md:rounded-3xl">
      <div className="overlay absolute z-[100] h-full w-full bg-[rgba(0,0,0,0.4)] backdrop-blur-sm" />
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        objectPosition={pos}
        quality={100}
      />
    </div>
  );
};

export default GalleryCard;
