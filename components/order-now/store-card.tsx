import Image from 'next/image';
import Link from 'next/link';

interface StoreCardInterface {
  imageSrc: string;
  imageAlt: string;
  storeUrl: string;
}

const StoreCard = ({ imageSrc, imageAlt, storeUrl }: StoreCardInterface) => {
  return (
    <Link
      href={storeUrl}
      className="aspect-w-16 aspect-h-9 relative flex cursor-pointer items-center justify-center overflow-hidden transition-opacity hover:opacity-70"
    >
      <Image src={imageSrc} alt={imageAlt} width={500} height={500} />
    </Link>
  );
};

export default StoreCard;
