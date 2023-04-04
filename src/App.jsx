import { useState } from 'react'
import Header from "./components/Header"
import Current from "./components/Current"
import Forecast from "./components/Forecast"
import Error from "./components/Error"
import weatherApi from "./api/weatherApi"
import { format } from "date-fns"

function App() {
  const API_KEY = `e62621ab5ac748dc9ae63627230304`;

  const [search, setSearch] = useState(``);
  const [weather, setWeather] = useState([]);
  const [datetime, setDatetime] = useState(``);
  const [isDay, setIsDay] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setFetchError(null);
    setIsLoading(true);

    const date = format(new Date(), `yyyy-MM-dd, pp`);
    setDatetime(date);

    try {
      const response = await weatherApi.get(`/forecast.json?key=${API_KEY}&q=${search}&days=7&aqi=no&alerts=no`);

      console.log(response.data);
      setWeather(response.data);
      setIsDay(response.data.current.is_day)
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

  return (
    <div className="font-poppins transition-all duration-350 min-h-screen bg-cover bg-fixed" style={isDay ? {backgroundImage: `url("./src/assets/day-2.jpg")`} : {backgroundImage: `url("./src/assets/night-2.jpg")`, color: "#eee", borderColor: "#eee"}}>
      
      <Header 
        search={search} 
        setSearch={setSearch}
        location={weather.location}
        datetime={datetime}
        isLoading={isLoading}
        fetchWeather={fetchWeather}
        fetchError={fetchError}
      />

      {fetchError && <Error errMsg={fetchError} /> }

      {!fetchError && (
        <main className="my-4" >
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
