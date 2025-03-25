
import { ArrowRight, Mail } from 'lucide-react'

export default function Cta() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-primary-900 to-secondary-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to elevate your digital presence?
              </h2>
              <p className="text-primary-100 text-lg mb-8">
                Join thousands of developers and designers who are already building amazing experiences with ModernSleek.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
                <h3 className="text-white font-medium mb-4">Get started today</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg bg-white/5 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-primary-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-900 focus:ring-white transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
              
              <p className="text-primary-200 text-sm">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-primary-800 to-secondary-800 flex items-center justify-center p-12 md:p-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/10 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">30-Day Satisfaction Guarantee</h3>
                <p className="text-primary-100">
                  Try ModernSleek risk-free. If you're not satisfied within 30 days, we'll refund your purchase. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
