
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-950 to-secondary-950 overflow-hidden">
      {/* Background circles decoration */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
        <div className="absolute h-96 w-96 rounded-full bg-primary-700/10 -top-20 -left-20"></div>
        <div className="absolute h-96 w-96 rounded-full bg-secondary-700/10 top-1/2 right-0"></div>
        <div className="absolute h-64 w-64 rounded-full bg-primary-500/5 bottom-20 left-1/3"></div>
      </div>
      
      <div className="container-custom relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm text-white mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-primary-400 mr-2"></span>
              <span className="text-sm font-medium">Introducing Modern Sleek</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Elevate Your Digital <span className="gradient-text">Presence</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Create stunning, high-performance websites with our modern UI components and design system. Built for the next generation of web experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#features" className="btn-primary">
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#pricing" className="btn-secondary bg-white/10 text-white hover:bg-white/20">
                View Pricing
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary-400 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary-400 mr-2" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary-400 mr-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-2xl shadow-soft">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
                alt="Dashboard Preview" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-center text-sm text-gray-400 mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['Acme Inc', 'Globex', 'Soylent Corp', 'Initech', 'Umbrella'].map((company) => (
              <div key={company} className="text-gray-400 font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
