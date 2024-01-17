// components/ServiceCard.js
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subText: string;
  ctaUrl?: string;
  ctaText?: string;
}

const ServiceCard = ({ imageSrc, imageAlt, title, subText, ctaUrl, ctaText }: ServiceCard) => {
  return (
    <div className="lg:rounded-4xl relative h-[566px] w-full flex-shrink-0 flex-grow-0 basis-[calc(33.3333%-26.6667px)] overflow-hidden rounded-2xl bg-white shadow-md  md:rounded-3xl">
      <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" quality={100} />
      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 flex min-h-[268px] w-full flex-col justify-end bg-[rgba(0,0,0,0.8)]">
        <div className="flex flex-col items-center justify-end p-6 text-center">
          <h3 className="mb-4 text-[24px] font-normal leading-[32] text-white md:text-[28px] md:leading-[36px] xl:text-[32px] xl:leading-[40px]">
            {title}
          </h3>
          <p className="mb-4 text-white text-opacity-80">{subText}</p>
          {ctaUrl && (
            <Link
              href={ctaUrl}
              className="mt-4 rounded-[8px] bg-[rgb(82,191,141)] px-[16px] py-[12px] text-black"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
