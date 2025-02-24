import React from 'react';
import { Crown, CheckCircle2 } from 'lucide-react';

function Pricing() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Choose Your Plan</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Basic',
              price: '9.99',
              features: ['720p Output', '5 Videos/month', 'Basic Effects', '24h Support'],
            },
            {
              name: 'Pro',
              price: '19.99',
              features: ['1080p Output', '15 Videos/month', 'Advanced Effects', 'Priority Support'],
              popular: true,
            },
            {
              name: 'Enterprise',
              price: '49.99',
              features: ['4K Output', 'Unlimited Videos', 'Custom Effects', 'Dedicated Support'],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-white text-black transform scale-105'
                  : 'bg-zinc-900 text-white'
              }`}
            >
              {plan.popular && (
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6" />
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 rounded-full font-semibold ${
                  plan.popular
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;