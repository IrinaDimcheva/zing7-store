import Button from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-natural-9 overflow-x-hidden">
      <div className="max-w-screen-fit mx-auto flex items-center justify-between gap-12 px-5 lg:px-0 py-20">
        <div className="w-full flex flex-wrap justify-between items-center">
          <div className="w-[500px] flex flex-col gap-6">
            <p className="text-accent font-medium text-sm">SONY WH-H910N</p>
            <h1 className="headline-h2 md:headline-h1 text-natural-1">
              Best in Hi-Res and Noise Cancelling
            </h1>
            <p className="leading-[28px] text-natural-7">
              Experience finely tuned noise-canceling performance in a
              comfortable headphone. Long-lasting battery life plus quick
              charging keeps you listening for up to 35 hours since start.
            </p>
            <div className="flex max-w-[340px] gap-4 pt-4 pb-12">
              <Button label="Buy Now" />
              <Button label="Learn More" type="outline" />
            </div>
            <div>
              <Image
                src="./icons/arrow-down.svg"
                alt=""
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary-light w-[114px] h-[114px] rounded-full absolute left-[60px] top-[70px]"></div>

            <div className="relative">
              <Image
                src="./images/headphones.svg"
                alt="headphones"
                width={372}
                height={437}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-white mr-[-64px] cursor-pointer">
          <Image
            src="./icons/next.svg"
            alt="next"
            width={26}
            height={26}
            className="m-auto"
          />
        </div>
      </div>
    </section>
  );
}
