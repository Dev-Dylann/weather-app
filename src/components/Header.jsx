import React from 'react'
import Search from "./Search"

const Header = ({ search, setSearch, locationBtn, setLocationBtn, suggestions, isDay,  location, datetime, isLoading, fetchWeather, fetchError }) => {
  return (
    <header className='sticky z-20 bg-transparent backdrop-blur-md top-0 left-0 flex flex-col gap-2 p-4'>
        <Search 
            search={search} 
            setSearch={setSearch}
            locationBtn={locationBtn}
            setLocationBtn={setLocationBtn} 
            suggestions={suggestions}
            isDay={isDay}
            fetchWeather={fetchWeather}
        />

        {!location && !fetchError && (
            <p className='w-2/3 mx-auto my-20 text-xl text-center'>Search for a city or location to get weather reports.</p>
        )}

        {location && !isLoading && (
            <section>
                <h1 className='text-xl font-bold'>{`${location.name}, ${location.region}`}</h1>
                <p className='font-light'>At {datetime}</p>
            </section>
        )}

    </header>
  )
}

export default Header