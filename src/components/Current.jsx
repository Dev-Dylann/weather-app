import React from 'react'
import Loader from "./Loader"
import { FaTemperatureHigh, FaFan } from "react-icons/fa"

const Current = ({ current, location, isLoading }) => {
  return (
      <>
        {isLoading && <Loader />}
        
        {!isLoading && current && (
            <section className="px-4 md:px-6 py-8 rounded-lg shadow-2xl my-6 w-2/3 max-w-md mx-auto lg:text-center">
                <div className="flex lg:flex-col justify-between items-center gap-2 lg:gap-6">
                        <h1 className="text-5xl md:font-bold">{Math.round(current.temp_c)}&deg;c</h1>
                        <img src={current.condition.icon} alt="Weather Icon" className="md:w-1/5 lg:w-2/5" />
                    </div>
    
                    <p className='mt-4 text-lg md:text-xl'>{current.condition.text}</p>
                    <p className="font-light text-xs md:text-md">Local Time: {location.localtime}</p>

                    <div className="mt-6 lg:mt-10 flex justify-around items-center">
                      <div className='flex flex-col gap-1 items-center'>
                        <FaTemperatureHigh className="text-xl md:text-2xl"/>
                        <p className="text-sm md:text-md">Feels like</p>
                        <p className="font-bold md:text-lg mt-1">{Math.round(current.feelslike_c)}&deg;c</p>
                      </div>

                      <div className='flex flex-col gap-1 items-center'>
                        <FaFan className="text-xl md:text-2xl"/>
                        <p className="text-sm md:text-md">Wind speed</p>
                        <p className="font-bold mt-1 md:text-lg">{current.wind_kph} km/h</p>
                      </div>
                    </div>
        </section>
        )}
    </>
  )
}

export default Current