import { stripe } from "@/src/lib/stripe"

interface ParamsProps {
  params: {
    session_id: string
  }
}

export default async function page({ params }: ParamsProps) {

  // if (!params.session_id) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false
  //     }
  //   }
  // }

  // const sessionId = String(params.session_id)

  // const session = await stripe.checkout.sessions.retrieve(sessionId, {
  //   expand: ['line_items', 'line_items.data.price.product']
  // })

  // const customerName = session.customer_details?.name
  // const product = session.line_items?.data

  return <span>funfou</span>

}
