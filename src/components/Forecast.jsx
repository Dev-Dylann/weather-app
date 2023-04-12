import React from 'react'
import ForecastDays from "./ForecastDays"
import { FaAngleUp } from 'react-icons/fa'

const Forecast = ({ forecast, isLoading }) => {
  return (
    <>
      {forecast && !isLoading && (
        <section className="m-4 p-4 md:p-6 md:m-6 lg:mx-8">
        <div className="lg:hidden w-fit mx-auto px-2 border rounded-full relative before:absolute before:top-1.5 before:-left-36 md:before:-left-60 before:border before:w-32 md:before:w-56 before:h-0.5 after:absolute after:top-1.5 after:-right-36 md:after:-right-60 after:border after:w-32 md:after:w-56 after:h-0.5">
          <a href="#forecast"><FaAngleUp /></a>
        </div>

        <article id="forecast" className="scroll-mt-16 space-y-3 mt-4 md:space-y-4 lg:space-y-3 max-w-4xl mx-auto">
            {forecast.forecastday.map(future => (
              <ForecastDays
                key={forecast.forecastday.indexOf(future)} 
                future={future}
              />
            ))}
        </article>

    </section>
      )}
    </>
  )
}

export default Forecast