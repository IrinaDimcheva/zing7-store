import Button from '@/components/ui/button';
import Rating from '@/components/ui/rating';
import Image from 'next/image';

type Product = {
  id: number;
  onSale: boolean;
  inFavorites: boolean;
  department: string;
  name: string;
  price: string;
  rating: number;
  imageUrl: string;
};

export default function ProductCard({
  onSale,
  inFavorites,
  department,
  name,
  price,
  rating,
  imageUrl,
}: Product) {
  return (
    <li className="group z-0 hover:z-[1000] hover:mb-[-95px] max-w-[360px] min-w-[255px] flex flex-col gap-4 px-5 py-4 hover:shadow-lg rounded-lg">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center z-0">
          {onSale ? (
            <div className="text-accent-red bg-red-100 text-[12px] leading-[18px] rounded-md h-[24px] w-[48px] flex justify-center items-center">
              SALE
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex justify-center items-center w-[36px] h-[36px] rounded-full border-[1px] border-natural-9">
            {inFavorites ? (
              <Image
                src="./icons/heart-black.svg"
                alt=""
                width={20}
                height={20}
              />
            ) : (
              <Image src="./icons/heart.svg" alt="" width={20} height={20} />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center w-auto h-[180px]">
          <Image src={imageUrl} alt={name} width={170} height={180} />
        </div>
        <div>
          <p className="text-[12px] leading-[18px] text-natural-7">
            {department}
          </p>
          <p className="text-natural-1 font-medium">{name}</p>
          <div className="flex justify-between">
            <span className="text-[14px] text-primary-light font-medium">
              {price}
            </span>
            <Rating />
          </div>
        </div>
      </div>
      <div className=" pt-2">
        <div className="hidden pt-2 group-hover:relative group-hover:block">
          <div className="flex flex-col gap-2">
            <Button
              icon="./icons/cart.svg"
              label="Add to cart"
              className="py-2"
            />
            <Button
              icon="./icons/eye.svg"
              label="Quick view"
              type="outline-gray"
              className="py-2"
            />
          </div>
        </div>
      </div>
    </li>
  );
}
