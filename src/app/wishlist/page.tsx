import { WishListProductCard } from "@/src/components/wishlist/WishListProductCard";
import { JustForYouSlider } from "@/src/components/wishlist/slider/JustForYouSlider";
import { stripe } from "@/src/lib/stripe";
import Link from "next/link";
import Stripe from "stripe";

export default async function page() {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images,
      price: price.unit_amount! / 100,
    }
  }).sort(() => 0.5 - Math.random())

  return (
    <section className="w-5/6 mx-auto">
      <div className="mb-20">
        <header className="flex justify-between mt-20 mb-16 items-center">
          <span className="text-xl">Wishlist (4)</span>
          <button className="font-medium py-4 border border-black/40 rounded px-6 md:px-12">Move All To Cart</button>
        </header>
        <div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-8 2xl:grid-cols-4 3xl:grid-cols-5">
            {products.map(product => {
              return (
                <li className="w-full" key={product.id}>
                  <WishListProductCard justForYou={false} {...product} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="mb-20">
        <header className="flex justify-between mb-16">
          <div className="flex items-center gap-4">
            <span className="bg-exclusive-secondary rounded w-4 h-8 lg:w-5 lg:h-10"></span>
            <span className="text-xl">Just For You</span>
          </div>
          <Link href="/products" className="font-medium py-4 border border-black/40 rounded px-6 md:px-12">See All</Link>
        </header>
        <div className="xl:-mr-6">
          <JustForYouSlider products={products} />
        </div>
      </div>
    </section>
  )
}