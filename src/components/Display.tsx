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
                        { weatherData.main === undefined ? null : `${Math.round(weatherData.main.temp)}°` } 
                    </div>
                </Card.Text>

                <Card.Text/>
                    <div className="card-description">
                        { weatherData.main === undefined ? null : `Humidity: ${weatherData.main.humidity}%` } <br/>
                        { weatherData.main === undefined ? null : `High: ${Math.round(weatherData.main.temp_max)}°` } <br/>
                        { weatherData.main === undefined ? null : `Low: ${Math.round(weatherData.main.temp_min)}°` } <br/>
                    </div>
                </Card.Text>

            </Card.Body>
            </Card>

            <Card>
            { forecastData.list === undefined ? null : <div className="forecast-container"> 
                <div className="forecast-item">
                    { forecastData.list === undefined ? null : (new Date(forecastData.list[0].dt*1000)).toString().slice(0, 10) } <br/>
                    { forecastData.list === undefined ? null : forecastData.list[0].weather[0].description } <br/>
                    { forecastData.list === undefined ? null : `${Math.round(forecastData.list[0].main.temp)}°` }
                </div>

                <div className="forecast-item">
                    { forecastData.list === undefined ? null : (new Date(forecastData.list[8].dt*1000)).toString().slice(0, 10) } <br/>
                    { forecastData.list === undefined ? null : forecastData.list[8].weather[0].description } <br/>
                    { forecastData.list === undefined ? null : `${Math.round(forecastData.list[8].main.temp)}°` }
                </div>

                <div className="forecast-item">
                    { forecastData.list === undefined ? null : (new Date(forecastData.list[16].dt*1000)).toString().slice(0, 10) } <br/>
                    { forecastData.list === undefined ? null : forecastData.list[16].weather[0].description } <br/>
                    { forecastData.list === undefined ? null : `${Math.round(forecastData.list[16].main.temp)}°` }
                </div>

                <div className="forecast-item">
                    { forecastData.list === undefined ? null : (new Date(forecastData.list[24].dt*1000)).toString().slice(0, 10) } <br/>
                    { forecastData.list === undefined ? null : forecastData.list[24].weather[0].description } <br/>
                    { forecastData.list === undefined ? null : `${Math.round(forecastData.list[24].main.temp)}°` }
                </div>

                <div className="forecast-item">
                    { forecastData.list === undefined ? null : (new Date(forecastData.list[32].dt*1000)).toString().slice(0, 8) } <br/>
                    { forecastData.list === undefined ? null : forecastData.list[32].weather[0].description } <br/>
                    { forecastData.list === undefined ? null : `${Math.round(forecastData.list[32].main.temp)}°` }
                </div>
            </div> }
            </Card>
        </div>
    )
}