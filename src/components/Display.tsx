import React from 'react'
import { Card } from 'react-bootstrap'

// Display Props
interface DisplayProps {
    weatherData: any | null
    forecastData: any | null 
    changeMetric: any | null
}

export const Display: React.FC<DisplayProps> = ({ weatherData, forecastData, changeMetric }) => {

    // JSX weather icons
    let sunny =
	<div className="weatherIcon">
		<div className="sunny">
			<div className="inner"></div>
		</div>
	</div>

    let cloudy =
    <div className="weatherIcon">
		<div className="cloudy">
			<div className="inner"></div>
		</div>
	</div>

    let mist =
    <div className="weatherIcon">
		<div className="fog">
			<div className="inner"></div>
		</div>
	</div>

    let rain = 
    <div className="weatherIcon">
		<div className="rain">
			<div className="inner"></div>
		</div>
	</div>

    let thunderstorm =
    <div className="weatherIcon">
		<div className="tstorms">
			<div className="inner"></div>
		</div>
	</div>

    let snow =
    <div className="weatherIcon">
		<div className="snow">
			<div className="inner"></div>
		</div>
	</div>
    
    const renderIcon = (condition: any) => {
        switch ( condition ) {
            case "clear sky": return sunny
            case "few clouds": return cloudy
            case "scattered clouds": return cloudy
            case "broken clouds": return cloudy
            case "shower rain": return cloudy
            case "rain": return rain
            case "thunderstorms": return thunderstorm
            case "snow": return snow
            case "mist": return mist
            default: return sunny
        }
    }

    return (
        <div className="display">
            <Card className="text-center">

            <Card.Header> 
                <label className="switch">
                    <input onClick={changeMetric} type="checkbox" value="imperial"></input>
                    <span className="slider round"></span>
                </label>
            </Card.Header>

            <Card.Body>
                <Card.Title style={{ color: "black", fontWeight: "bold" }}>
                    { weatherData.name } <br/>
                    { weatherData.dt ?  new Date(weatherData.dt*1000).toString().slice(0, 16) : null }
                </Card.Title>
                
                <Card.Text style={{ color: "black", textAlign: "left" }}>
                    { weatherData.weather ? renderIcon(weatherData.weather[0].description) : null } 
                <Card.Text/>

                <Card.Text>
                    <div className="card-temp"> 
                        { weatherData.main ? `${Math.round(weatherData.main.temp)}°` : null } 
                    </div>
                </Card.Text>

                <Card.Text/>
                    <div className="card-description">
                        { weatherData.main ? `Humidity: ${weatherData.main.humidity}%` : null } <br/>
                        { weatherData.main ? `High: ${Math.round(weatherData.main.temp_max)}°` : null } <br/>
                        { weatherData.main ? `Low: ${Math.round(weatherData.main.temp_min)}°` : null } <br/>
                        { weatherData.coord ? `Longitude ${weatherData.coord.lon}` : null } <br/>
                        { weatherData.coord ? `Lagitutde ${weatherData.coord.lat}` : null }
                        
                    </div>
                </Card.Text>

            </Card.Body>
            </Card>

            <Card>
            { forecastData.list === undefined ? null : <div className="forecast-container"> 
                <div className="forecast-item">
                    { forecastData.list ? (new Date(forecastData.list[0].dt*1000)).toString().slice(0, 10) : null } <br/>
                    { forecastData.list ? forecastData.list[0].weather[0].description : null } <br/>
                    { forecastData.list ? `${Math.round(forecastData.list[0].main.temp)}°` : null }
                </div>

                <div className="forecast-item">
                    { forecastData.list ? (new Date(forecastData.list[8].dt*1000)).toString().slice(0, 10) : null } <br/>
                    { forecastData.list ? forecastData.list[8].weather[0].description : null } <br/>
                    { forecastData.list ? `${Math.round(forecastData.list[8].main.temp)}°` : null }
                </div>

                <div className="forecast-item">
                    { forecastData.list ? (new Date(forecastData.list[16].dt*1000)).toString().slice(0, 10) : null } <br/>
                    { forecastData.list ? forecastData.list[16].weather[0].description : null } <br/>
                    { forecastData.list ? `${Math.round(forecastData.list[16].main.temp)}°` : null }
                </div>

                <div className="forecast-item">
                    { forecastData.list ? (new Date(forecastData.list[24].dt*1000)).toString().slice(0, 10) : null } <br/>
                    { forecastData.list ? forecastData.list[24].weather[0].description : null } <br/>
                    { forecastData.list ? `${Math.round(forecastData.list[24].main.temp)}°` : null }
                </div>

                <div className="forecast-item">
                    { forecastData.list ? (new Date(forecastData.list[32].dt*1000)).toString().slice(0, 8) : null } <br/>
                    { forecastData.list ? forecastData.list[32].weather[0].description : null } <br/>
                    { forecastData.list ? `${Math.round(forecastData.list[32].main.temp)}°` : null }
                </div>
            </div> }
            </Card>
        </div>
    )
}