import React from 'react'
import Loader from "./Loader"
import { FaTemperatureHigh, FaFan } from "react-icons/fa"

const Current = ({ current, location, isLoading }) => {
  return (
      <>
        {isLoading && <Loader />}
        
        {!isLoading && current && (
            <section className="px-4 py-8 rounded-lg shadow-2xl my-6 w-2/3 mx-auto">
                <div className="flex justify-between items-center gap-2">
                        <h1 className="text-5xl">{Math.round(current.temp_c)}&deg;c</h1>
                        <img src={current.condition.icon} alt="Weather Icon" />
                    </div>
    
                    <p className='mt-4 text-lg'>{current.condition.text}</p>
                    <p className="font-light text-xs">Local Time: {location.localtime}</p>

                    <div className="mt-6 flex justify-around items-center">
                      <div className='flex flex-col gap-1 items-center'>
                        <FaTemperatureHigh className="text-xl"/>
                        <p className="text-sm">Feels like</p>
                        <p className="font-bold mt-1">{Math.round(current.feelslike_c)}&deg;c</p>
                      </div>

                      <div className='flex flex-col gap-1 items-center'>
                        <FaFan className="text-xl"/>
                        <p className="text-sm">Wind speed</p>
                        <p className="font-bold mt-1">{current.wind_kph} km/h</p>
                      </div>
                    </div>
        </section>
        )}
    </>
  )
}

export default Current