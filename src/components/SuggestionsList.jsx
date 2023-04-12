import React from 'react'

const SuggestionsList = ({ suggestion, fetchWeather }) => {

    const query = `${suggestion.name}, ${suggestion.region}`;

  return (
    <li className='py-2 px-4 cursor-pointer md:text-lg border-l-gray-500 hover:border-l-4 rounded-md hover:bg-gray-300' 
        onClick={() => fetchWeather(query)}
    >

        <span className="font-bold">{suggestion.name}</span>, {suggestion.region} &nbsp;&nbsp;&nbsp; <span className='text-[#777]'>{suggestion.country}</span>
    </li>
  )
}

export default SuggestionsList