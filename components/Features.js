
'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { 
  Layers, 
  Zap, 
  Shield, 
  Smartphone, 
  Code, 
  Palette,
  BarChart,
  HeartHandshake
} from 'lucide-react'

const features = [
  {
    name: 'Responsive Design',
    description: 'Our components are built with a mobile-first approach, ensuring your website looks great on all devices.',
    icon: Smartphone,
  },
  {
    name: 'Performance Optimized',
    description: 'Lightweight components designed for speed and efficiency, giving your users the best experience possible.',
    icon: Zap,
  },
  {
    name: 'Accessibility',
    description: 'All components meet WCAG standards, making your website accessible to everyone.',
    icon: HeartHandshake,
  },
  {
    name: 'Customizable',
    description: 'Easily customize colors, spacing, and other design elements to match your brand identity.',
    icon: Palette,
  },
  {
    name: 'Developer Friendly',
    description: 'Well-documented components with clean, consistent APIs that developers love to work with.',
    icon: Code,
  },
  {
    name: 'Analytics Ready',
    description: 'Built-in support for tracking user interactions and engagement metrics.',
    icon: BarChart,
  },
]

const tabItems = [
  {
    title: 'UI Components',
    description: 'A comprehensive library of UI components built with HeadlessUI and TailwindCSS.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Drop-in components that work out of the box',
      'Fully customizable to match your brand',
      'Accessible and responsive by default',
      'Dark mode support built-in'
    ]
  },
  {
    title: 'Design System',
    description: 'A complete design system to ensure consistency across your entire product.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
    features: [
      'Consistent spacing and typography',
      'Color palette management',
      'Design tokens for easy theming',
      'Figma design files included'
    ]
  },
  {
    title: 'Templates',
    description: 'Ready-to-use page templates to kickstart your project development.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80',
    features: [
      'Landing pages and marketing templates',
      'Dashboard layouts',
      'Authentication flows',
      'E-commerce templates'
    ]
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed for <span className="gradient-text">Modern Developers</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our comprehensive suite of tools and components helps you build beautiful, functional websites faster than ever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-6 rounded-xl border border-gray-100 shadow-soft hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <Tab.Group>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold mb-6">Everything you need</h3>
                <p className="text-gray-600 mb-8">
                  Our platform provides all the tools you need to create exceptional digital experiences.
                </p>
                
                <Tab.List className="flex flex-col space-y-2">
                  {tabItems.map((item) => (
                    <Tab
                      key={item.title}
                      className={({ selected }) =>
                        `w-full py-4 px-5 text-left rounded-lg transition-all duration-200 outline-none ${
                          selected
                            ? 'bg-primary-50 text-primary-700 shadow-sm'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`
                      }
                    >
                      <span className="font-medium">{item.title}</span>
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              
              <div className="md:w-2/3">
                <Tab.Panels className="mt-2">
                  {tabItems.map((item, idx) => (
                    <Tab.Panel
                      key={idx}
                      className="rounded-xl bg-white p-3 focus:outline-none"
                    >
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover object-center"
                        />
                      </div>
                      <div className="mt-6">
                        <h3 className="text-xl font-medium">{item.title}</h3>
                        <p className="mt-2 text-gray-600">{item.description}</p>
                        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                          {item.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>
        </div>
      </div>
    </section>
  )
}

function CheckCircle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  )
}
