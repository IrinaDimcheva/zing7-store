import Benefits from './home/_components/benefits';
import BestProducts from './home/_components/best-products';
import Hero from './home/_components/hero';
import Promo from './home/_components/promo';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <BestProducts />
      <Promo />
    </main>
  );
}
