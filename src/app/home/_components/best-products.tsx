import Divider from '@/components/ui/divider';
import { bestProducts } from '@/data/data';
import ProductCard from './product-card';

export default function BestProducts() {
  return (
    <section className="max-w-screen-fit mx-auto">
      <Divider />
      <div className="py-20">
        <div className="text-center pb-16">
          <h2 className="headline-h2 text-natural-1">Best Seller Products</h2>
          <p className="text-natural-7 leading-[22px]">
            Check our best seller products on Elma website right now
          </p>
        </div>
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
        <ul className="flex gap-6 resize-none flex-wrap justify-between items-stretch">
          {bestProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
