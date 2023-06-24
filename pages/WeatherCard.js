import React from 'react'

const WeatherCard = ({ day, icon, temp, date, temperatureUnit }) => {
	return (
		<div className="p-4 bg-white opacity-75 border-t-2 border-b-2 border-black rounded-lg shadow-lg">
			<p className="text-lg text-ce font-bold mb-2">{day}{"-"}{date}</p>
			<img src={icon} alt="Weather Icon" className="h-16 w-16 mx-auto mb-2" />
			<p className="text-xl text-center">{temp}&deg;{temperatureUnit}</p>
		</div>
	)
}

export default WeatherCard
