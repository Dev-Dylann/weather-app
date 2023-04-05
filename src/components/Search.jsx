import React from 'react'
import Suggestions from "./Suggestions"
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa"

const Search = ({ search, setSearch, locationBtn, setLocationBtn, suggestions, isDay,  fetchWeather }) => {
  return (
    <form action="" className='flex gap-2 relative' onSubmit={(e) => {
      e.preventDefault();
      fetchWeather(search);
    }}>
        <label htmlFor="searchInput" className='absolute -left-[1000px]'>
            Search City or Location
        </label>
        <input 
            type="text" 
            id="searchInput"
            placeholder='Search City or Location'
            autoComplete='off'
            className="bg-transparent placeholder:text-gray-700 border border-inherit rounded-md px-4 py-2 grow focus:outline-[#eee]" 
            value={search}
            onChange={e => setSearch(e.target.value)}   
        />

        <button type="submit" className="border border-inherit hover:bg-[#eee] hover:text-black rounded-md p-4 grid place-content-center"><FaSearch /></button>

        <button type="button" title='Search my location' onClick={() => setLocationBtn(!locationBtn)} className="border border-inherit bg-[#eee] text-black hover:bg-[#071724] hover:text-[#eee] rounded-md p-4 grid place-content-center"><FaMapMarkerAlt /></button>

        {search.length && suggestions.length && (
          <Suggestions 
            suggestions={suggestions}
            fetchWeather={fetchWeather}
            isDay={isDay}
          />
        )}

    </form>
  )
}

export default Search