import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-700 text-black transition-colors">
      <ShoppingCartIcon
        className={clsx('h-4 transition-all ease-in-out hover:scale-110 ', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-[#ffe75f] text-[11px] font-medium text-black">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
