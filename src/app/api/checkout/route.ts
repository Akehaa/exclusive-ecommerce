import { stripe } from '@/src/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json()

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: body.lineItems,
    mode: 'payment',
  })

  return NextResponse.json({
    checkoutUrl: checkoutSession.url
  });
}
