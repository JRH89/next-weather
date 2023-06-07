import Header from '@/components/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import Footer from '@/components/Footer';

const API_KEY = '35913733e7f076a1cac136c1de270b7d';

const HomePage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchForecastData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      setForecastData(response.data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  useEffect(() => {
    if (weatherData) {
      fetchForecastData(weatherData.name);
    }
  }, [weatherData]);

  const handleSubmit = async (city) => {
    await fetchWeatherData(city);
  };

  const handleToggleUnits = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (temp) => {
    if (isCelsius) {
      return Math.round(temp);
    }
    return Math.round((temp * 9) / 5 + 32);
  };

  return (
    <div className="flex w-full select-none justify-center min-h-screen">
      <div className="container w-full content-center place-content-center flex justify-center flex-col place-items-center mx-auto px-4">
        <Header onSubmit={handleSubmit} />

        {weatherData && forecastData && (
          <div className="mt-0 flex justify-center flex-col">
            <div className="flex justify-center">
              <div className="flex align-middle justify-center ">

                <div className='flex justify-center flex-col align-middle'>
                  <div className="flex flex-row border-2 justify-center border-black p-4 bg-primary text-whiter w-full gap-4 sm:gap-4 rounded-xl align-middle content-center">
                    <img
                      src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                      alt="Weather Icon"
                      className="h-16 w-16  sm:h-24 sm:w-24 border-2 border-black rounded-xl bg-whiter align-middle self-center"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-3xl font-bold mb-0">{weatherData.name}</p>
                      <p className="text-xl text-center">{weatherData.weather[0].description}</p>
                    </div>
                    <div className="flex p-2 px-3 justify-center  border-2 text-black border-black rounded-xl bg-whiter items-center">
                      <div className="flex align-middle items-center flex-col ">
                        <p className="text-xl sm:text-5xl align-middle">
                          {convertTemperature(weatherData.main.temp)}&deg;{isCelsius ? 'C' : 'F'}
                        </p>
                        <button
                          className="text-primary text-sm font-semibold align-middle focus:outline-none"
                          onClick={handleToggleUnits}
                        >
                          {isCelsius ? 'F' : 'C'}
                        </button>
                      </div>

                    </div>
                  </div>

                  <div className=" border-2 place-items-center rounded-xl border-black font-bold p-4 justify-center grid-cols-2 grid gap-5">
                    <p>Feels Like: {convertTemperature(weatherData.main.feels_like)}&deg;{isCelsius ? 'C' : 'F'}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    {weatherData.sys && (
                      <>
                        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
                        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>
                      </>
                    )}
                  </div>


                </div>
              </div>
            </div>
            <div className="mt-8 mb-10 grid gap-4 grid-cols-1 sm:grid-cols-5">
              {forecastData.list.filter((item, index) => index % 8 === 0).map((item, index) => {
                const date = new Date(item.dt_txt);
                const day = date.toLocaleDateString('en-US', { weekday: 'short' });
                const dateString = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

                return (
                  <WeatherCard
                    key={index}
                    day={day}
                    date={dateString}
                    icon={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    temp={convertTemperature(item.main.temp)}
                  />
                );
              })}
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );

};

export default HomePage;
