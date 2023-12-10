import React, { useState } from 'react';
import './WeatherApp.css';
let image;

const WeatherApp = () => {


    let api_key = '2f2121a2f82858e7a801f4b136fae1e5'

    // const [wicon, setWIcon] = useState('../../Assets/cloud.png')
    const [data, setData] = useState([])

    const search = async () => {
        const element = document.querySelector('.cityInput')
        if(element.value === '') {
            return 0;
        }
        console.log(element.value)
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`
        
        let response = await fetch(url);
        let data1 = await response.json();


        if(data[5] === '01d' || data[5] === '01n') {
            image = '../../Assets/clear.png'
        } else if(data[5] === '02d' || data[5] === '02n') {
            image = '../../Assets/cloud.png'
        } else if(data[5] === '03d' || data[5] === '03n') {
            image = '../../Assets/drizzle.png'
        } else if(data[5] === '04d' || data[5]=== '04n') {
            image = '../../Assets/drizzle.png'
        } else if(data[5] === '09d' || data[5] === '09n') {
            image = '../../Assets/rain.png'
        } else if(data[5] === '010d' || data[5] === '010n') {
            image = '../../Assets/rain.png'
        } else if(data[5] === '013d' || data[5] === '013n') {
            image = '../../Assets/snow.png'
        } else {
            image = '../../Assets/clear.png'
        }

        setData([Math.floor(data1.main.temp),Math.floor(data1.wind.speed),data1.name,data1.main.humidity,image,data1.weather[0].icon])

        console.log(data1[5])

        // const humidity = document.querySelector('.humidity-percentage')
        // const wind = document.querySelector('.wind-rate')
        // const temprature = document.querySelector('.weather-temp')
        // const location = document.querySelector('.weather-location')


        // humidity.innerHTML = data.main.humidity+'  %';
        // wind.innerHTML = Math.floor(data.wind.speed)+' km/h';
        // temprature.innerHTML = Math.floor(data.main.temp)+' °C';
        // location.innerHTML = data.name;


        
        // if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
        //     setWIcon('../../Assets/clear.png')
        // } else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
        //     setWIcon('../../Assets/cloud.png')
        // } else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
        //     setWIcon('../../Assets/drizzle.png')
        // } else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
        //     setWIcon('../../Assets/drizzle.png')
        // } else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
        //     setWIcon('../../Assets/rain.png')
        // } else if(data.weather[0].icon === '010d' || data.weather[0].icon === '010n') {
        //     setWIcon('../../Assets/rain.png')
        // } else if(data.weather[0].icon === '013d' || data.weather[0].icon === '013n') {
        //     setWIcon('../../Assets/snow.png')
        // } else {
        //     setWIcon('../../Assets/clear.png')
        // }
        console.log(data)

    }

  return (
    <div className='container'>
        <form className="top-bar">
            <input type="text" className="cityInput" placeholder='Search...'/>
            <div className="search-icon" onClick={() => {search()}}>
                <img src="../../Assets/search.png" alt="" />
            </div>
        </form>

        <div className='weather-image'>
            <img src={data[4]} alt="" />
        </div>

        <div className="weather-temp">{data[0]}°C</div>
        <div className="weather-location">{data[2]}</div>
        <div className="data-container">
            <div className="element">
                <img src="../../Assets/humidity.png" alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">{data[3]}%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src="../../Assets/wind.png" alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">{data[1]} km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp