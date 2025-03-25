
'use client'

import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and personal websites.',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      'All UI components',
      'Basic templates',
      'Community support',
      'Updates for 6 months',
      '1 project',
    ],
    notIncluded: [
      'Design system',
      'Premium templates',
      'Priority support',
    ],
    cta: 'Start with Starter',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Ideal for businesses and professional developers.',
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      'All UI components',
      'Complete design system',
      'All templates',
      'Updates for 1 year',
      'Up to 5 projects',
      'Priority email support',
    ],
    notIncluded: [
      'Custom branding',
    ],
    cta: 'Get Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large teams and organizations with custom needs.',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      'All UI components',
      'Complete design system',
      'All templates',
      'Lifetime updates',
      'Unlimited projects',
      'Custom branding',
      'Dedicated support',
      'Team training session',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your needs. All plans include core features.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={annual}
              onChange={setAnnual}
              className={`${
                annual ? 'bg-primary-600' : 'bg-gray-300'
              } relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  annual ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
            <span className={`ml-3 flex items-center ${annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular 
                  ? 'border-2 border-primary-500 shadow-lg' 
                  : 'border border-gray-200 shadow-soft'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-10' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/{annual ? 'year' : 'month'}</span>
                </div>
                
                <a 
                  href="#" 
                  className={`block w-full text-center py-3 px-4 rounded-lg font-medium mb-8 ${
                    plan.popular 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } transition-colors`}
                >
                  {plan.cta}
                </a>
                
                <div className="space-y-4">
                  <p className="font-medium text-gray-900">Includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium text-gray-900 pt-2">Not included:</p>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Need a custom plan?</h3>
              <p className="text-gray-600">Contact our sales team for a tailored solution that meets your specific requirements.</p>
            </div>
            <a href="#contact" className="mt-4 md:mt-0 btn-primary">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
