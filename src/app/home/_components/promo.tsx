import Button from '@/components/ui/button';
import Divider from '@/components/ui/divider';
import Image from 'next/image';

export default function Promo() {
  return (
    <>
      <section className="max-w-screen-fit mx-auto py-12">
        <div className="bg-accent/15 p-2 rounded-lg flex items-center justify-around">
          <div>
            <Image
              src="./images/lenovo.svg"
              alt="Lenovo Yoga X"
              width={350}
              height={340}
              className="mb-[-20px]"
            />
          </div>
          <div className="flex flex-col gap-6 w-[377px]">
            <p className="text-accent text-sm font-medium">FLASH SALE 7.7.7</p>
            <h2 className="headline-h2 text-natural-1">Lenovo Yoga X</h2>
            <p className="text-natural-7 leading-[26px]">
              Smarter and intuitive with the same expert design and detail. Plus
              combine innovative latest AI features
            </p>
            <div className="flex items-center gap-8 w-5/6">
              <Button
                label="Buy Now for $750"
                type="accent"
                className="px-0 text-nowrap"
              />
              <span className="line-through text-natural-7 text-[20px] leading-[28px]">
                $1500,00
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-screen-fit mx-auto">
        <Divider />
      </div>
    </>
  );
}
