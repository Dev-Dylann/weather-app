import React from 'react'
import SuggestionsList from "./SuggestionsList"

const Suggestions = ({ suggestions, fetchWeather, isDay }) => {
  return (
    <section className="absolute shadow-lg top-16 left-0 w-full h-max bg-[#eee] text-sm px-4 py-2 rounded-md" style={!isDay ? {backgroundColor: "#071724"} : {} } >
        <ul className="divide-y flex flex-col gap-2">
            {suggestions.map(suggestion => (
                <SuggestionsList 
                    key={suggestion.id}
                    suggestion={suggestion}
                    fetchWeather={fetchWeather}
                />
            ))}
        </ul>
     </section>
  )
}

export default Suggestions