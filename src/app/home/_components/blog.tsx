import Button from '@/components/ui/button';
import { blogList } from '@/data/data';
import BlogItem from './blog-item';

export default function Blog() {
  return (
    <section className="max-w-screen-fit mx-auto px-5 xl:px-0 py-20">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-12">
        <div className="w-[500px]">
          <h2 className="headline-h2 text-natural-1 pb-4">Read our blog</h2>
          <p className="leading-[22px] text-natural-7">
            Check our latest article to get meaningfull content or tips for
            shopping
          </p>
        </div>
        <div className="w-[135px]">
          <Button type="outline" label="More on blogs" />
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-between">
        {blogList.map((item) => (
          <BlogItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
