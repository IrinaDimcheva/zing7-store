import Benefits from './home/_components/benefits';
import BestProducts from './home/_components/best-products';
import Blog from './home/_components/blog';
import Categories from './home/_components/categories';
import Hero from './home/_components/hero';
import Products from './home/_components/products';
import Promo from './home/_components/promo';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <BestProducts />
      <Promo />
      <Categories />
      <Products />
      <Blog />
    </main>
  );
}
