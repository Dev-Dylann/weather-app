import React from 'react'
import ForecastDays from "./ForecastDays"

const Forecast = ({ forecast, isLoading }) => {
  return (
    <>
      {forecast && !isLoading && (
        <section className="m-4 p-4">
        <h2 className='my-1'>Forecast</h2>

        <article className="space-y-3">
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