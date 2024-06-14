import Link from 'next/link';
import Image from 'next/image';
import { rubik } from '@/app/fonts';
import { socialLinks } from '@/data/data';
import Divider from '../ui/divider';
import LanguageDropdown from './language-dropdown';
import Search from './search';

export default function Header() {
  return (
    <header className="max-w-screen-wide mx-auto">
      <div className="flex justify-between max-w-screen-fit mx-auto py-5">
        <ul className="flex gap-4">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <Image
                  src={link.iconUrl}
                  alt={link.name}
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-5 items-center">
          <nav>
            <ul
              className={`flex gap-5 ${rubik.className} text-natural-5 leading-[20px] tracking-[0.18px]`}
            >
              <li>
                <Link href="#">Order tracking</Link>
              </li>
              <li>
                <Link href="#">Help</Link>
              </li>
            </ul>
          </nav>
          <LanguageDropdown />
        </div>
      </div>
      <Divider />
      <div className="max-w-screen-fit mx-auto pt-4 pb-8 flex items-center justify-between">
        <div className="flex gap-20">
          <p className="headline-h3">STORE</p>
          <Search />
        </div>
        <div className="flex gap-8">
          <nav>
            <ul className="flex gap-4">
              <li className="flex justify-center items-center w-[48px] h-[48px] rounded-full border-[1px] border-natural-9 relative">
                <Link href="#">
                  <div>
                    <Image
                      src="./icons/cart.svg"
                      alt="cart"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
                <div className="bg-accent-red w-[18px] h-[18px] py-[1px] rounded-full text-center text-xs text-white right-[-2px] top-[-6px] absolute">
                  3
                </div>
              </li>
              <li className="flex justify-center items-center w-[48px] h-[48px] rounded-full border-[1px] border-natural-9">
                <Link href="#">
                  <div>
                    <Image
                      src="./icons/heart.svg"
                      alt="favorites"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              </li>
              <li className="flex justify-center items-center w-[48px] h-[48px] rounded-full border-[1px] border-natural-9">
                <Link href="#">
                  <div>
                    <Image
                      src="./icons/account.svg"
                      alt="account"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`${rubik.className}`}>
            <p className="text-natural-5">Ivan Todorov</p>
            <div className="flex gap-4">
              <p className="text-natural-1">My Account</p>
              <Image src="./icons/down.svg" alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
