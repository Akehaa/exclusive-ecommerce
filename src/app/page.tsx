'use client';

import { Carousel } from "../components/Home/Carousel/Carousel";
import { NavigationBar } from "../components/Home/NavigationBar";
import { ProductsOnSaleSlider } from "../components/Home/FlashSalesSlider/FlashSalesSlider";
import { SectionTag } from "../components/Home/SectionTag";
import { ProductRating } from "../components/ProductRating";


export default function Home() {

  return (
    <main className="w-11/12 lg:w-5/6 mx-auto ">
      <section className="grid justify-start grid-cols-[auto_60%] md:grid-cols-[auto_80%] lg:grid-cols-[auto_70%] xl:grid-cols-[auto_75%] 2xl:grid-cols-[auto_83%] mb-32">
        <aside>
          <NavigationBar />
        </aside>
        <div className="mx-4 mt-4 lg:ml-8 lg:mt-8">
          <Carousel />
        </div>
      </section>
      <section className="border-b mb-10">
        <SectionTag content="Today's" />
        <div className="flex mb-10 gap-12 lg:gap-24">
          <h2 className="text-exclusive-text-2 font-inter font-semibold text-xl lg:text-3xl">Flash Sales</h2>
          <span>counter</span>
        </div>
        <div className="mb-16 -mr-6 md:-mr-10 lg:-mr-24 xl:-mr-32 2xl:-mr-52">
          <ProductsOnSaleSlider />
        </div>
        <div className="flex justify-center">
          <button className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 text-sm font-medium mb-16 py-4 px-12 rounded md:text-base">View All Products</button>
        </div>
      </section>
    </main>
  )
}
