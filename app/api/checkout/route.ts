import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Prometheus CEO Playbook',
              description: 'Build an AI agent that runs your business while you sleep',
            },
            unit_amount: 4900, // $49.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.VERCEL_URL || 'https://prometheusceo.com'}/success`,
      cancel_url: `${process.env.VERCEL_URL || 'https://prometheusceo.com'}`,
      automatic_tax: { enabled: false },
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    return Response.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
