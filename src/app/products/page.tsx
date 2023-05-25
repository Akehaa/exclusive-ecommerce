import { AllProducts } from "@/src/components/product/productsPage/AllProducts";
import { stripe } from "@/src/lib/stripe";
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
    <>
      <AllProducts products={products} />
    </>
  )
}