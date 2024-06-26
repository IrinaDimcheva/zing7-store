import Image from 'next/image';

export default function Search() {
  return (
    <div className="flex max-w-[453px] w-full bg-natural-10 rounded-md ">
      <input
        type="text"
        placeholder="Search something..."
        className="bg-natural-10 w-full px-4 outline-none rounded-l-md"
      />
      <div className="flex gap-4 justify-between items-center pl-4 pr-8 border-l-[1px] border-l-natural-9">
        <div className="text-natural-1 text-nowrap">All Categories</div>
        <Image src="./icons/up-down.svg" alt="" width={22} height={22} />
      </div>
      <button>
        <div className="w-[44px]">
          <Image src="./icons/search.svg" alt="Search" width={44} height={44} />
        </div>
      </button>
    </div>
  );
}
