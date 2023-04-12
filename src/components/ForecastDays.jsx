import React from 'react'

const ForecastDays = ({ future }) => {

  const formatDate = (date) => {
    const firstIndex = date.indexOf(`-`);
    const lastIndex = date.lastIndexOf(`-`);

    const month = date.slice(firstIndex + 1, lastIndex);
    const day = date.slice(lastIndex + 1);

    return `${month}/${day}`;
  }

  return (
    <div className='p-3 md:px-5 lg:px-8 md:text-xl lg:text-md flex justify-between items-center shadow-lg rounded-md'>
        <span className='font-bold'>{formatDate(future.date)}</span>

        <img src={future.day.condition.icon} alt="icon" className='w-[40px] md:w-[60px] lg:w-[40px]' />

        <p>
          <span className='font-light'>{Math.round(future.day.mintemp_c)}</span>
          &nbsp;&nbsp;
          <span className='font-bold'>{Math.round(future.day.maxtemp_c)}</span>
        </p>
    </div>
  )
}

export default ForecastDays