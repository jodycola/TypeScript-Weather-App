const key: string = (process.env.REACT_APP_OPEN_WEATHER_API_KEY as string)

export function searchingWeather(term: string) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term},us&appid=${key}&units=imperial`)
}

export function searchingForecast(term: string) {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${term},us&appid=${key}&units=imperial`)
}