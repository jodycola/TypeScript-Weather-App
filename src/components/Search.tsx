import React, { useState } from 'react'
import { Display } from './Display'
import { searchingWeather, searchingForecast } from "../services/WeatherService"
import { Button } from 'react-bootstrap'

export const Search: React.FC = () => {
    const [locationSearch, setLocationSearch] = useState("")
    const [weatherData, setWeatherData] = useState({})
    const [forecastData, setForecastData] = useState({})

    const [isFahrenheit, setisFahrenheit] = useState("imperial")

    const changeMetric = () => {
        if (isFahrenheit === "imperial") {
            setisFahrenheit("metric")
            searchLocation()
        }
        else {
            setisFahrenheit("imperial")
            searchLocation()
        }
    }

    const searchLocation = () => {
        
        searchingWeather(locationSearch, isFahrenheit)
            .then(r => r.json())
            .then(data => setWeatherData(data))
            .catch(error => error)

        searchingForecast(locationSearch, isFahrenheit)
            .then(r => r.json())
            .then(data => setForecastData(data))
            .catch(error => error)
    }

    const clearLocation = () => {
        setLocationSearch("")
        setWeatherData("")
        setForecastData("")
    }

    return (
        <div className="search">
            <input type="text" placeholder="Search by location" value={locationSearch} onChange={(e) => setLocationSearch(e.target.value)}/>
        
            <br/>
            <br/>

            <Button className="button" onClick={searchLocation}>Search</Button> 
            {" "}
            <Button className="button" onClick={clearLocation}>Clear</Button>
            
            <br/>
            <br/>
            
            <Display 
                weatherData={weatherData}
                forecastData={forecastData}
                changeMetric={changeMetric}
            />
        </div>
    )
}