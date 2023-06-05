import { stripe } from "@/src/lib/stripe"
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface PageProps {
  searchParams: {
    session_id?: string,
  };
};

export default async function page({ searchParams }: PageProps) {

  const sessionId = String(searchParams.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const products = session.line_items?.data


  return (
    <div className="w-5/6 mx-auto flex justify-center">
      {products?.length === 1
        ?
        <div className="flex flex-col my-24 lg:my-36 3xl:my-48">
          <div className="flex flex-col items-center mb-20 text-lg md:text-2xl lg:text-3xl">
            <h1>Thank you for using our services,</h1>
            <span><strong>{customerName}</strong>!</span>
          </div>
          <div className="flex flex-col items-center text-sm lg:text-lg">
            <span className="mb-10">The following product is being prepared for shipment:</span>
            {products?.map(product => {
              return (
                <div className="flex mb-8 items-center gap-4">
                  {/*@ts-expect-error*/}
                  <Image src={product.price!.product.images[0]} width={80} height={0} alt="" />
                  <span><strong>{product.quantity}x {product.description}</strong></span>
                </div>
              )
            })}
          </div>
          <Link
            href="#"
            className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 text-sm font-medium mt-20 py-4 px-12 rounded text-center md:text-base"
          >
            Back to home page
          </Link>
        </div>
        :
        <div className="flex flex-col my-24 lg:my-36">
          <div className="flex flex-col items-center mb-20 text-lg md:text-2xl lg:text-3xl">
            <h1>Thank you for using our services,</h1>
            <span><strong>{customerName}</strong>!</span>
          </div>
          <div className="flex flex-col text-sm lg:text-lg">
            <span className="mb-10">The following products are being prepared for shipment:</span>
            {products?.map(product => {
              return (
                <div className="flex mb-8 items-center gap-4">
                  {/*@ts-expect-error*/}
                  <Image src={product.price!.product.images[0]} width={80} height={0} alt="" />
                  <span><strong>{product.quantity}x {product.description}</strong></span>
                </div>
              )
            })}
          </div>
          <Link
            href="#"
            className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 text-sm font-medium mt-20 py-4 px-12 rounded text-center md:text-base"
          >
            Back to home page
          </Link>
        </div>
      }
    </div>
  )
}
