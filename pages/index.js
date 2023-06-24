import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'
import Header from '@/components/Header'
import Image from 'next/image'

const API_KEY = '35913733e7f076a1cac136c1de270b7d'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [isCelsius, setIsCelsius] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState('')

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      )
      setWeatherData(response.data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  const fetchForecastData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      )
      setForecastData(response.data)
    } catch (error) {
      console.error('Error fetching forecast data:', error)
    }
  }

  useEffect(() => {
    if (weatherData) {
      fetchForecastData(weatherData.name)
    }
  }, [weatherData])

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const description = encodeURIComponent(weatherData?.weather[0].description)
        const imageUrl = `https://source.unsplash.com/1920x1080/?${description}`
        setBackgroundImage(imageUrl)
      } catch (error) {
        console.error('Error fetching background image:', error)
      }
    }

    if (weatherData) {
      fetchBackgroundImage()
    }
  }, [weatherData])

  const handleSubmit = async (city) => {
    await fetchWeatherData(city)
  }

  const handleToggleUnits = () => {
    setIsCelsius(!isCelsius)
  }

  const convertTemperature = (temp) => {
    if (isCelsius) {
      return Math.round(temp)
    }
    return Math.round((temp * 9) / 5 + 32)
  }

  return (
    <div
      className="flex my-auto min-h-screen mx-auto text-center py-5 select-none justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="container content-center place-content-center  flex justify-center m-10 flex-col place-items-center my-auto mx-auto px-4">
        <Header onSubmit={handleSubmit} />
        {weatherData && forecastData && (
          <div className=" flex justify-center flex-col">
            <div className="flex justify-center">
              <div className="flex w-auto align-middle justify-center ">
                <div className='flex justify-center w-full flex-col align-middle'>
                  <div className="flex flex-row border-t-2 justify-evenly w-full border-b-2 border-black p-2 bg-white opacity-75 text-black rounded-xl  align-middle content-center">
                    <img
                      width={20}
                      height={20}
                      src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                      alt="Weather Icon"
                      className="h-16 flex w-16 sm:h-20 sm:w-20   
											 rounded-xl bg-black align-middle self-center"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-3xl font-bold mb-0">
                        {weatherData.name}
                      </p>
                      <p className="text-xl italic font-bold text-center">
                        {weatherData.weather[0].description}
                      </p>
                      <button
                        className="text-primary underline  mt-1 text-sm justify-center flex font-semibold align-middle focus:outline-none"
                        onClick={handleToggleUnits}
                      >
                        {isCelsius ? 'Imperial Units' : 'Metric Units'}
                      </button>
                    </div>
                    <div className="flex justify-center bg-white items-center">
                      <p className="text-xl justify-center font-bold h-16 flex w-16 sm:h-20 sm:w-20 bg-black text-white rounded-xl py-5 px-2  sm:text-3xl align-middle">
                        {convertTemperature(weatherData.main.temp)}&deg;{isCelsius ? 'C' : 'F'}
                      </p>
                    </div>
                  </div>
                  <div className="align-middle  bg-white text-center opacity-75  place-items-center border-t-2 border-b-2 border-black rounded-xl text-black  font-bold p-4 justify-center grid-cols-2 grid gap-5">
                    <p className='border-b-2 align-middle border-black rounded-xl px-2 p-1'>
                      Feels Like: {convertTemperature(weatherData.main.feels_like)}&deg;{isCelsius ? 'C' : 'F'}
                    </p>
                    <p className='border-b-2 border-black rounded-xl p-1 px-2'>
                      Humidity: {weatherData.main.humidity}%
                    </p>
                    {weatherData.sys && (
                      <>
                        <p className='border-b-2 border-black rounded-xl px-2 p-1'>
                          Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}
                        </p>
                        <p className='border-b-2 border-black rounded-xl px-2 p-1'>
                          Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-1 grid-cols-2 justify-center align-middle place-content-center text-center sm:grid-cols-5">
              {forecastData.list.filter((item, index) => index % 8 === 0).map((item, index) => {
                const date = new Date(item.dt_txt)
                const day = date.toLocaleDateString('en-US', { weekday: 'short' })
                const dateString = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                return (
                  <WeatherCard
                    key={index}
                    day={day}
                    date={dateString}
                    icon={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    temp={convertTemperature(item.main.temp)}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather
