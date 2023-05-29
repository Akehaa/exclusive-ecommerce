import Link from 'next/link';
import { SectionTag } from '@/src/components/Home/SectionTag';
import { RelatedItemsSlider } from '@/src/components/product/relatedItemsSlider/RelatedItemsSlider';
import { ProductInfoCard } from '@/src/components/product/productPage/ProductInfoCard';
import { stripe } from '@/src/lib/stripe';
import Stripe from 'stripe';

interface ParamsProps {
  params: {
    id: string;
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
  }).sort(() => 0.5 - Math.random())

  const productInfo = products.find(product => product.id === params.id)

  return (
    <>
      <div className="flex gap-2 mt-20 text-xs ml-3 lg:text-sm lg:gap-3 lg:w-5/6 lg:mx-auto">
        <Link href="#" className="opacity-50">
          Home
        </Link>
        <span className="opacity-50">
          /
        </span>
        <Link href="/products" className="opacity-50">
          Products
        </Link>
        <span className="opacity-50">
          /
        </span>
        <span className="font-medium cursor-default">
          {productInfo?.name}
        </span>
      </div>
      <ProductInfoCard productInfo={productInfo!} />
      <section className='w-11/12 mx-auto lg:w-5/6 mb-36'>
        <div className='mb-16'>
          <SectionTag content="Related Item" />
        </div>
        <div className='xl:-mr-3'>
          <RelatedItemsSlider products={products} />
        </div>
      </section>
    </>
  )
}