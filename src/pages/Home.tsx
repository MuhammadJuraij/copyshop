import React from 'react'
import FeaturedSection from '../components/featuredSection'

const Home = () => {
  return (
    <div>

      {/* first-section */}
      <div className="relative h-[500px] md:h-screen w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: 'url(/images/adidas1.jpg)' }}>
        <div className="absolute right-4 md:right-16 lg:right-32 top-1/2 transform -translate-y-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 md:px-0">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider leading-tight mb-4 md:mb-6">
            WHERE FASHION<br />
            MEETS PRECISION
          </h1>
          <div className="flex justify-end md:justify-start">
            <button className="bg-gray-800 text-white py-2 px-6 sm:py-3 sm:px-8 md:px-10 text-base sm:text-lg font-medium hover:bg-black transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* second-section */}
      <FeaturedSection />


    </div>
  )
}

export default Home