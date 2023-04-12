import React from 'react'
import icon from "/weather-icon.svg"

const Loader = () => {
  return (
    <section className='my-20 mx-auto w-fit lg:my-36'>
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full grid place-content-center relative">
            <div className='w-24 h-24 md:h-32 md:w-32 rounded-full loader animate-spin'></div>
            <img src={icon} alt="Icon" className="absolute top-0 left-0 h-full w-full rounded-full" />
        </div>
    </section>
  )
}

export default Loader