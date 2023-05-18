import { WishListProductCard } from "@/src/components/wishlist/WishListProductCard";
import { JustForYouSlider } from "@/src/components/wishlist/slider/JustForYouSlider";

export default function page() {
  return (
    <section className="w-5/6 mx-auto">
      <div className="mb-20">
        <header className="flex justify-between mt-20 mb-16 items-center">
          <span className="text-xl">Wishlist (4)</span>
          <button className="font-medium py-4 border border-black/40 rounded px-6 md:px-12">Move All To Bag</button>
        </header>
        <div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-8 2xl:grid-cols-4 3xl:grid-cols-5">
            <li className="w-full"><WishListProductCard justForYou={false} /></li>
            <li className="w-full"><WishListProductCard justForYou={false} /></li>
            <li className="w-full"><WishListProductCard justForYou={false} /></li>
            <li className="w-full"><WishListProductCard justForYou={false} /></li>
            <li className="w-full"><WishListProductCard justForYou={false} /></li>
            <li className="w-full"><WishListProductCard justForYou={false} /></li>
            <li className="w-full"><WishListProductCard justForYou={false} /></li>
            <li className="w-full"><WishListProductCard justForYou={false} /></li>
          </ul>
        </div>
      </div>
      <div className="mb-20">
        <header className="flex justify-between mb-16">
          <div className="flex items-center gap-4">
            <span className="bg-exclusive-secondary rounded w-4 h-8 lg:w-5 lg:h-10"></span>
            <span className="text-xl">Just For You</span>
          </div>
          <button className="font-medium py-4 border border-black/40 rounded px-6 md:px-12">See All</button>
        </header>
        <div className="xl:-mr-6">
          <JustForYouSlider />
        </div>
      </div>
    </section>
  )
}