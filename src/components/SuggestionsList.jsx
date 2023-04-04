import React from 'react'

const SuggestionsList = ({ suggestion, fetchWeather }) => {

    const query = `${suggestion.name}, ${suggestion.region}`;

  return (
    <li className='py-2' 
        onClick={() => fetchWeather(query)}
    >

        <span className="font-bold">{suggestion.name}</span>, {suggestion.region} &nbsp;&nbsp;&nbsp; <span className='text-[#777]'>{suggestion.country}</span>
    </li>
  )
}

export default SuggestionsList