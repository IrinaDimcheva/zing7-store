import { socialLinksFooter } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-natural-9">
      <div className="max-w-screen-fit mx-auto p-5 xl:px-0">
        <div className="flex flex-wrap gap-8 justify-between">
          <p className="text-natural-4 text-sm">
            Store © Copyright 2024, Inc. All rights reserved
          </p>
          <ul className="flex gap-4">
            {socialLinksFooter.map((l) => (
              <li key={l.name}>
                <Link href={l.href}>
                  <Image src={l.iconUrl} alt={l.name} width={22} height={22} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
