import React from 'react'

const Hero = ({isLoading}) => {
  return (
    <>
      {!isLoading && (
        <section className="flex flex-col lg:flex-row gap-4 lg:gap-12 max-w-2xl lg:max-w-4xl mx-auto my-10 lg:my-24 p-4 text-center lg:text-left items-center">
          <img src="./weather-icon.svg" alt="Weather App" className='w-1/3 rounded-full shadow-xl' />

        <article>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mt-6 font-bold">What's the weather like today?</h1>
          <p className="md:text-lg my-4 lg:text-xl">Search for a city or location to get weather reports.</p>
        </article>
          </section>
        )}
    </>
  )
}

export default Hero