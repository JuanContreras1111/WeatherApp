import React from 'react'
import "./Style/WeatherCard.css"


const WeatherCard = ({weather, temps, isCelsius, changeUnitTemp}) => {
  return (
    
      <section className='weatherCard'> 
        <h1 className='weatherCard_title'>Weather App</h1>
        <h2 className='weatherCard_place'>{weather?.name}, {weather?.sys.country}</h2>
        <div className='weatherCard_img'>
           <img src={`${weather?.weather[0].icon}.png`} alt="icon weather" /> 
        </div>
        <h3 className='weatherCard_temp'>{isCelsius ? temps?.celsius + " °C": temps?.fahrenheit + " °F"}</h3>
        <ul className='weatherCard_list'>
            <li className='weatherCard_description'>{weather?.weather[0].main}, {weather?.weather[0].description} </li>
            <li><span>Wind Speed: </span>{weather?.wind.speed} m/sec</li>
            <li><span>Clouds: </span>{weather?.clouds.all} %</li>
            <li><span>Pressure: </span>{weather?.main.pressure} hPa</li>
        </ul>
        <button className='weatherCard_btn' onClick={changeUnitTemp}>°C / °F</button>
      </section>
  )
}

export default WeatherCard
