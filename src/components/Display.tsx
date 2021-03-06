import React from 'react';
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherWindy, TiWeatherShower, TiWeatherStormy, TiWeatherSnow } from 'react-icons/ti';

// Display Props
interface DisplayProps {
    weatherData: any | null
    forecastData: any | null 
};

export const Display: React.FC<DisplayProps> = ({ weatherData, forecastData }) => {

    // Weather icons
    let sunny = <TiWeatherSunny />
    let cloudy = <TiWeatherCloudy />
    let rain = <TiWeatherShower />
    let thunderstorm = <TiWeatherStormy />
    let snow = <TiWeatherSnow />
    let mist = <TiWeatherWindy />
    
    const renderIcon = (condition: string) => {
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
            {!weatherData.weather ? null
            :
            <div>
            <h1 className="title"> 5 Day Forecast </h1>
            <h2 className="title"> {weatherData.name ? weatherData.name : null } </h2>
            <div className="row">

                <div className="column">
                    <div className="card">

                        <div className="date">
                            { weatherData.dt ?  new Date(weatherData.dt*1000).toString().slice(4, 15) : null }
                        </div>

                        <div className="render">
                            { weatherData.weather ? renderIcon(weatherData.weather[0].description) : null }
                        </div>

                        <div className="temp">
                            { weatherData.main ? `${Math.round(weatherData.main.temp)}°` : null }
                        </div>

                        <div className="high-low">
                            { weatherData.main ? `High: ${Math.round(weatherData.main.temp_max)}°` : null } <br/>
                            { weatherData.main ? `Low: ${Math.round(weatherData.main.temp_min)}°` : null }
                        </div>

                    </div>
                </div>

                <div className="column">
                    <div className="card">

                        <div className="date">
                            { forecastData.list ? (new Date(forecastData.list[8].dt*1000)).toString().slice(4, 15) : null }
                        </div>

                        <div className="render">
                            { forecastData.list ? renderIcon(forecastData.list[8].weather[0].description) : null }
                        </div>

                        <div className="temp">
                            { forecastData.list ? `${Math.round(forecastData.list[8].main.temp)}°` : null }
                        </div>

                        <div className="high-low">
                            { forecastData.list ? `High: ${Math.round(forecastData.list[8].main.temp_max)}°` : null } <br/>
                            { forecastData.list ? `Low: ${Math.round(forecastData.list[8].main.temp_min)}°` : null }
                        </div>

                    </div>
                </div>

                <div className="column">
                    <div className="card">

                        <div className="date">
                            { forecastData.list ? (new Date(forecastData.list[16].dt*1000)).toString().slice(4, 15) : null }
                        </div>

                        <div className="render">
                            { forecastData.list ? renderIcon(forecastData.list[16].weather[0].description) : null }
                        </div>

                        <div className="temp">
                            { forecastData.list ? `${Math.round(forecastData.list[16].main.temp)}°` : null }
                        </div>

                        <div className="high-low">
                            { forecastData.list ? `High: ${Math.round(forecastData.list[16].main.temp_max)}°` : null } <br/>
                            { forecastData.list ? `Low: ${Math.round(forecastData.list[16].main.temp_min)}°` : null }
                        </div>

                    </div>
                </div>

                <div className="column">
                    <div className="card">

                        <div className="date">
                            { forecastData.list ? (new Date(forecastData.list[24].dt*1000)).toString().slice(4, 15) : null }
                        </div>

                        <div className="render">
                            { forecastData.list ? renderIcon(forecastData.list[24].weather[0].description) : null }
                        </div>

                        <div className="temp">
                            { forecastData.list ? `${Math.round(forecastData.list[24].main.temp)}°` : null }
                        </div>

                        <div className="high-low">
                            { forecastData.list ? `High: ${Math.round(forecastData.list[24].main.temp_max)}°` : null } <br/>
                            { forecastData.list ? `Low: ${Math.round(forecastData.list[24].main.temp_min)}°` : null }
                        </div>

                    </div>
                </div>

                <div className="column">
                    <div className="card">

                        <div className="date">
                            { forecastData.list ? (new Date(forecastData.list[32].dt*1000)).toString().slice(4, 15) : null }
                        </div>

                        <div className="render">
                            { forecastData.list ? renderIcon(forecastData.list[32].weather[0].description) : null }
                        </div>

                        <div className="temp">
                            { forecastData.list ? `${Math.round(forecastData.list[32].main.temp)}°` : null }
                        </div>

                        <div className="high-low">
                            { forecastData.list ? `High: ${Math.round(forecastData.list[32].main.temp_max)}°` : null } <br/>
                            { forecastData.list ? `Low: ${Math.round(forecastData.list[32].main.temp_min)}°` : null }
                        </div>

                    </div>
                </div>
            </div>
            </div>
            }
        </div>
    )
}