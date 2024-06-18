import Button from '@/components/ui/button';
import { categories } from '@/data/data';
import Image from 'next/image';

export default function Categories() {
  return (
    <section className="max-w-screen-fit mx-auto py-12 px-5 xl:px-0">
      <div className="flex justify-between items-center">
        <h3 className="headline-h3">Category</h3>
        <div className="w-[120px]">
          <Button type="outline" label="View All" />
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((item) => (
          <li key={item.id} className="flex flex-col gap-8 items-center py-12">
            <div>
              <Image src={item.iconUrl} alt="" width={56} height={56} />
            </div>
            <div className="flex flex-col items-center text-sm">
              <h6 className="font-medium text-natural-1">{item.name}</h6>
              <p className="text-natural-7">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
