import React from 'react'
import Search from "./Search"

const Header = ({ search, setSearch, suggestions, isDay,  location, datetime, isLoading, fetchWeather }) => {
  return (
    <header className='sticky z-20 bg-transparent backdrop-blur-md top-0 left-0 flex flex-col gap-2 p-4 md:p-6 md:gap-4'>
        <Search 
            search={search} 
            setSearch={setSearch}
            suggestions={suggestions}
            isDay={isDay}
            fetchWeather={fetchWeather}
        />

        {location && !isLoading && (
            <section>
                <h1 className='text-xl md:text-2xl font-bold'>{`${location.name}, ${location.region}`}</h1>
                <p className='font-light md:text-lg'>At {datetime}</p>
            </section>
        )}

    </header>
  )
}

export default Header