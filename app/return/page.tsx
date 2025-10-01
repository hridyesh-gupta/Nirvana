import { redirect } from 'next/navigation';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-08-27.basil',
});

export default async function Return({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const sessionIdParam = params.session_id;
  const session_id = Array.isArray(sessionIdParam) ? sessionIdParam[0] : sessionIdParam;

  if (!session_id) {
    redirect('/'); // Redirect to home if no session ID
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

    if (checkoutSession.status === 'open') {
      redirect('/'); // Redirect to home or a pending page if session is still open
    } else if (checkoutSession.status === 'complete') {
      // Payment succeeded, you can now fulfill the order
      // For example, update your database, send confirmation emails, etc.
      return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-700">Thank you for your purchase.</p>
          <p className="text-sm text-gray-500">Session ID: {session_id}</p>
          <a href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Go to Home</a>
        </div>
      );
    }
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    redirect('/'); // Redirect to home or an error page on failure
  }

  return null;
}