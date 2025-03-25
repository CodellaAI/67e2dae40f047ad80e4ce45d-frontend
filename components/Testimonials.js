
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = [
  {
    content: "ModernSleek transformed our website completely. The components are not only beautiful but also incredibly easy to implement. Our development time was cut in half!",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    content: "As a designer, I appreciate the attention to detail in ModernSleek's components. The subtle animations and thoughtful interactions make our product feel premium.",
    author: "Michael Chen",
    role: "Lead Designer at Creativo",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5
  },
  {
    content: "The accessibility features built into ModernSleek's components saved us countless hours of development. Now our product is usable by everyone, exactly as it should be.",
    author: "Alex Rivera",
    role: "Accessibility Specialist",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    content: "I've used many component libraries, but ModernSleek stands out for its performance. Our page load times improved dramatically after the switch.",
    author: "David Park",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 4
  },
]

export default function Testimonials() {
  const [swiperRef, setSwiperRef] = useState(null)

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Developers & Designers</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </div>

        <div className="relative">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            spaceBetween={32}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-8 shadow-soft h-full flex flex-col">
                  <div className="mb-6 text-primary-600">
                    <Quote className="h-10 w-10 opacity-20" />
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => swiperRef.slidePrev()}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="swiper-pagination"></div>
            <button
              onClick={() => swiperRef.slideNext()}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
