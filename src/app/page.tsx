'use client';


import { NavigationBar } from "../components/Home/NavigationBar";

import { SectionTag } from "../components/Home/SectionTag";
import { SectionTitle } from "../components/Home/SectionTitle";
import { BrowseByCategorySlider } from "../components/Home/sliders/BrowseByCategorySlider/BrowseByCategorySlider";
import { Carousel } from "../components/Home/sliders/Carousel/Carousel";
import { FlashSalesSlider } from "../components/Home/sliders/FlashSalesSlider/FlashSalesSlider";


export default function Home() {

  return (
    <main className="w-11/12 lg:w-5/6 mx-auto ">
      <section className="mb-32 grid justify-start grid-cols-[auto_65%] md:grid-cols-[auto_85%] lg:grid-cols-[auto_70%] xl:grid-cols-[auto_78%] 2xl:grid-cols-[auto_84%] 3xl:grid-cols-[auto_87%]">
        <aside>
          <NavigationBar />
        </aside>
        <div className="mx-4 mt-4 lg:ml-8 lg:mt-8">
          <Carousel />
        </div>
      </section>
      <section className="border-b mb-20">
        <SectionTag content="Today's" />
        <div className="flex mb-10 gap-12 lg:gap-24">
          <SectionTitle title="Flash Sales" />
          <span>counter</span>
        </div>
        <div className="mb-16 -mr-6 md:-mr-10 lg:-mr-20 xl:-mr-28 2xl:-mr-40 3xl:-mr-56">
          <FlashSalesSlider />
        </div>
        <div className="flex justify-center">
          <button className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 text-sm font-medium mb-16 py-4 px-12 rounded md:text-base">View All Products</button>
        </div>
      </section>
      <section className="border-b mb-20 pb-[4.375rem]">
        <SectionTag content="Categories" />
        <div className="mb-[3.750rem]">
          <SectionTitle title="Browse By Category" />
        </div>
        <BrowseByCategorySlider />
      </section>
    </main>
  )
}
