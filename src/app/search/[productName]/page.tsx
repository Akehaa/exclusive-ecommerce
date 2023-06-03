import { FilteredProducts } from "@/src/components/FilteredProducts";
import { stripe } from "@/src/lib/stripe";
import Stripe from "stripe";

interface ParamsProps {
  params: {
    productName: string;
  }
}

export default async function page({ params }: ParamsProps) {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images,
      description: product.description,
      price: price.unit_amount! / 100,
      defaultPriceId: price.id,
    }
  })

  const filteredProductsByName = products.filter(name => name.name.toLowerCase().includes(`${params.productName.toLowerCase()}`))

  return (
    <div>
      {filteredProductsByName.length == 0
        ? <div className="flex items-center justify-center my-10 md:my-20 xl:my-40 2xl:my-60 3xl:my-96">
          <span className="font-medium cursor-default md:text-3xl">Sorry, no products were found.</span>
        </div>
        : <div className="w-5/6 mx-auto grid grid-cols gap-10 mt-20 mb-36 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
          {filteredProductsByName.map(filteredProductByName => {
            return (
              <FilteredProducts filteredProductByName={filteredProductByName} />
            )
          })}
        </div>
      }
    </div>
  )
}