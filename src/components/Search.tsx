import React, { useState } from 'react'
import { Display } from './Display'
import { searchingWeather, searchingForecast } from "../services/WeatherService"
import { GiMagnifyingGlass } from 'react-icons/gi'
import { FaEraser } from 'react-icons/fa'

export const Search: React.FC = () => {
    const [locationSearch, setLocationSearch] = useState("")
    const [weatherData, setWeatherData] = useState({})
    const [forecastData, setForecastData] = useState({})

    // API Weather Service fetch request
    const searchLocation = () => {
        
        searchingWeather(locationSearch)
            .then(r => r.json())
            .then(data => setWeatherData(data))
            .catch(error => error)

        searchingForecast(locationSearch)
            .then(r => r.json())
            .then(data => setForecastData(data))
            .catch(error => error)

        setLocationSearch("")
    }

    // Clear the search bar and cache history
    const clearLocation = () => {
        setLocationSearch("")
        setWeatherData("")
        setForecastData("")
    }

    return (
        <div className="search">
            <input type="text" placeholder="Search by location" value={locationSearch} onChange={(e) => setLocationSearch(e.target.value)}/>

            <button className="button" title="Search" style={{color: "black"}} onClick={searchLocation}> <GiMagnifyingGlass/> </button> 
            {" "}
            <button className="button" title="Clear" style={{color: "black"}} onClick={clearLocation}> <FaEraser /> </button>
            
            <Display 
                weatherData={weatherData}
                forecastData={forecastData}
            />
        </div>
    )
}