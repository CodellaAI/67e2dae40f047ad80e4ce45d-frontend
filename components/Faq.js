
'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What is ModernSleek?",
    answer: "ModernSleek is a comprehensive UI component library and design system built with HeadlessUI and TailwindCSS. It provides everything you need to create beautiful, responsive, and accessible web applications."
  },
  {
    question: "Do I need to know TailwindCSS to use ModernSleek?",
    answer: "While having knowledge of TailwindCSS is beneficial, it's not required. Our components come with pre-designed styles that you can use out of the box. However, knowing TailwindCSS will allow you to customize the components more easily."
  },
  {
    question: "Can I use ModernSleek with my existing project?",
    answer: "Absolutely! ModernSleek is designed to integrate seamlessly with existing projects. You can use as many or as few components as you need without having to restructure your entire application."
  },
  {
    question: "Is ModernSleek accessible?",
    answer: "Yes, accessibility is a core principle of ModernSleek. All components are built with accessibility in mind and follow WCAG guidelines. We provide ARIA attributes, keyboard navigation, and focus management out of the box."
  },
  {
    question: "Do you offer support for ModernSleek?",
    answer: "Yes, we offer different levels of support depending on your plan. The Starter plan includes community support, while Pro and Enterprise plans include priority email support. Enterprise customers also get dedicated support and team training."
  },
  {
    question: "Can I customize the components to match my brand?",
    answer: "Yes, all components are fully customizable. You can change colors, typography, spacing, and other design elements to match your brand identity. The Pro and Enterprise plans also include a complete design system to ensure consistency."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with ModernSleek for any reason, you can request a full refund within 14 days of purchase."
  },
  {
    question: "How often do you release updates?",
    answer: "We release updates regularly, including new components, features, and bug fixes. Depending on your plan, you'll receive updates for 6 months, 1 year, or lifetime."
  }
]

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about ModernSleek.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="bg-white rounded-lg shadow-soft">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-gray-900 font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-500">
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-primary-500 transition-transform duration-200`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 pb-4 pt-2 text-gray-600">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
