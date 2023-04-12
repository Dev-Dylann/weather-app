import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Current from "./components/Current"
import Forecast from "./components/Forecast"
import Error from "./components/Error"
import weatherApi from "./api/weatherApi"
import { format } from "date-fns"

function App() {
  const API_KEY = `e62621ab5ac748dc9ae63627230304`;

  const [search, setSearch] = useState(``);
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState({});
  const [datetime, setDatetime] = useState(``);
  const [isDay, setIsDay] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const checkLocation = () => {
      navigator.geolocation.getCurrentPosition(getCoords, locationDenied);
    };
    
    const getCoords = (coordinates) => {
      const lat = coordinates.coords.latitude.toFixed(3);
      const long = coordinates.coords.longitude.toFixed(3);

      const coords = `${lat},${long}`;
      fetchWeather(coords);
      };
    
    const locationDenied = (err) => {
      console.log(err.message);
    };
    
    checkLocation();
  }, [])

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await weatherApi.get(`/search.json?key=${API_KEY}&q=${search}`);

        setSuggestions(response.data);
      } catch(err) {
        if (err.response) {
          console.log(err.response.data.error.message);
        } else {
          console.log(err.message)
        }
      }
    }

    if (search.length) {
      fetchSuggestions();
    }

  }, [search])

  const fetchWeather = async (query) => {
    setFetchError(null);
    setIsLoading(true);
    setSuggestions([]);

    const date = format(new Date(), `yyyy-MM-dd, pp`);
    setDatetime(date);

    try {
      const response = await weatherApi.get(`/forecast.json?key=${API_KEY}&q=${query}&days=7&aqi=no&alerts=no`);

      setWeather(response.data);
      setIsDay(response.data.current.is_day);
      setSearch(``);
    } catch(err) {
        if (err.response) {
          setFetchError(err.response.data.error.message);
        } else {
          setFetchError(err.message);
        }
        setWeather([]);
    } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 200)
    }
  }

  /* useEffect(() => {
    console.log(Object.keys(weather).length);
    console.log(isLoading);
  }) */
  

  return (
    <div className="font-poppins transition-all duration-350 min-h-screen bg-cover bg-fixed" style={isDay ? {backgroundImage: `url("./day-2.jpg")`} : {backgroundImage: `url("./night-2.jpg")`, color: "#eee", borderColor: "#eee"}}>
      
      <Header 
        search={search} 
        setSearch={setSearch}
        suggestions={suggestions}
        isDay={isDay}
        location={weather.location}
        datetime={datetime}
        isLoading={isLoading}
        fetchWeather={fetchWeather}
      />

      {!Object.keys(weather).length && !fetchError && <Hero isLoading={isLoading} />}

      {fetchError && <Error errMsg={fetchError} /> }

      {!fetchError && (
        <main className="my-4 lg:my-0 lg:grid grid-cols-2 max-w-7xl mx-auto items-center" >
        <Current 
          current={weather.current}
          location={weather.location}
          isLoading={isLoading}
        />

        <Forecast 
          forecast={weather.forecast}
          isLoading={isLoading}
        />
      </main>
      )}
    </div>
  )
}

export default App
