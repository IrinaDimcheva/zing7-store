import { benefits } from '@/data/data';
import Image from 'next/image';

export default function Benefits() {
  return (
    <section className="max-w-screen-fit mx-auto py-20 px-5 lg:px-0">
      <ul className="flex flex-wrap justify-between gap-12">
        {benefits.map((item) => (
          <li
            key={item.title}
            className="flex justify-center items-center gap-4"
          >
            <div>
              <Image
                src={item.iconUrl}
                alt={item.title}
                width={40}
                height={40}
              />
            </div>
            <div>
              <h5 className="headline-h5">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
