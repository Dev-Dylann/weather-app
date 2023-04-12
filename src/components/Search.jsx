import React from 'react'
import Suggestions from "./Suggestions"
import { FaSearch } from "react-icons/fa"

const Search = ({ search, setSearch, suggestions, isDay,  fetchWeather }) => {
  return (
    <form action="" className='flex gap-2 relative w-full max-w-4xl mx-auto' onSubmit={(e) => {
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
            className="bg-transparent placeholder:text-gray-700 border border-inherit rounded-md px-4 md:text-lg py-2 grow focus:outline-[#eee]" 
            value={search}
            onChange={e => setSearch(e.target.value)}   
        />

        <button type="submit" className="border border-inherit hover:bg-[#eee] md:flex md:gap-3 hover:text-black rounded-md p-4 grid place-content-center"><FaSearch className="md:text-xl" /><span className="hidden font-bold md:inline">Search</span></button>

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