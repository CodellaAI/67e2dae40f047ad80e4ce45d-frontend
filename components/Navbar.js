
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure, Transition } from '@headlessui/react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      {({ open }) => (
        <>
          <div className="container-custom">
            <div className="relative flex items-center justify-between h-16 md:h-20">
              <div className="flex-1 flex items-center justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="flex items-center">
                    <div className="h-8 w-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-md flex items-center justify-center text-white font-bold mr-2">
                      MS
                    </div>
                    <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>ModernSleek</span>
                  </Link>
                </div>
                
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isScrolled 
                            ? 'text-gray-700 hover:text-primary-600' 
                            : 'text-gray-200 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link 
                      href="#contact" 
                      className="btn-primary ml-4"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
                
                <div className="flex md:hidden">
                  <Disclosure.Button className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'} focus:outline-none`}>
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <X className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Link 
                  href="#contact" 
                  className="block w-full text-center btn-primary mt-4 mb-2"
                >
                  Get Started
                </Link>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
