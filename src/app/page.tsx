'use client';

import Link from "next/link";
import Image from "next/image";

import JBL from "@/public/home/bestSelling/JBL.svg"

import { NavigationBar } from "../components/Home/NavigationBar";
import { SectionTag } from "../components/Home/SectionTag";
import { SectionTitle } from "../components/Home/SectionTitle";
import { BestSellingSlider } from "../components/Home/sliders/BestSellingSlider/BestSellingSlider";
import { BrowseByCategorySlider } from "../components/Home/sliders/BrowseByCategorySlider/BrowseByCategorySlider";
import { Carousel } from "../components/Home/sliders/Carousel/Carousel";
import { FlashSalesSlider } from "../components/Home/sliders/FlashSalesSlider/FlashSalesSlider";
import { ExploreOurProductsSlider } from "../components/Home/sliders/ExploreOurProductsSlider/ExploreOurProductsSlider";
import { NewArrival } from "../components/Home/NewArrival";

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
          <SectionTitle content="Flash Sales" />
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
        <div>
          <SectionTitle content="Browse By Category" />
        </div>
        <div className="xl:-mr-6">
          <BrowseByCategorySlider />
        </div>
      </section>
      <section>
        <SectionTag content="This Month" />
        <div className="flex justify-between">
          <SectionTitle content="Best Selling Products" />
          <button className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 py-2 px-6 text-sm font-medium mb-16 rounded md:text-base lg:py-4 lg:px-12 ">View All</button>
        </div>
        <div className="mb-36 xl:-mr-6">
          <BestSellingSlider />
        </div>
        <div className="bg-black flex flex-col mb-[4.375rem] md:flex-row 2xl:justify-center 2xl:gap-60 3xl:gap-96">
          <div className="flex flex-col mx-auto md:items-start md:ml-14 2xl:mx-0">
            <span className="text-exclusive-primary-1 mt-[4.375rem] mb-8 font-semibold">Categories</span>
            <h3 className="text-exclusive-text-1 mb-8 font-inter font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-5xl ">Enhance Your<br /> Music Experience</h3>
            <span className="text-exclusive-text-1 mb-8 text-center">Countdown</span>
            <Link href="#" className="text-exclusive-text-2 bg-exclusive-primary-1 hover:opacity-80 mb-[4.375rem] py-4 px-12 mx-auto rounded md:mx-0">Buy now!</Link>
          </div>
          <div className="mx-auto my-auto 2xl:mx-0">
            <Image className="mb-11 px-4 md:mb-0 md:w-[350px] lg:w-[435px] xl:w-[568px]" src={JBL} width={568} height={0} alt="" />
          </div>
        </div>
      </section>
      <section className="mb-36">
        <div>
          <SectionTag content="Our Products" />
          <SectionTitle content="Explore Our Products" />
        </div>
        <div className="xl:-mr-6">
          <ExploreOurProductsSlider />
        </div>
        <div className="flex justify-center">
          <button className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 text-sm font-medium mb-16 py-4 px-12 rounded md:text-base">View All Products</button>
        </div>
      </section>
      <section>
        <div className="mb-[3.750rem]">
          <SectionTag content="Featured" />
          <SectionTitle content="New Arrival" />
        </div>
        <div>
          <NewArrival />
        </div>
      </section>
    </main>
  )
}
