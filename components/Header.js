import React, { useState } from 'react'
import WeatherForm from './WeatherForm'

const Header = ({ forecastMode, setForecastMode, onSubmit, setIsCelsius, isCelsius }) => {


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
		<header className='bg-white opacity-75 items-center self-center flex mx-auto w-auto content-center flex-col justify-center my-2 pt-2 rounded-xl border-t-2 border-b-2 border-neutral-950'>
			<h1 className="text-4xl xsmall:text-lg text-center font-bold mb-4">Weather Pal</h1>
			<WeatherForm onSubmit={onSubmit} />
			<div className='flex pb-1 w-full'>
				<div className='flex pb-1 flex-row justify-evenly w-full'>
					<button
						className="text-primary underline  mt-1 text-sm xsmall:text-xs justify-center flex font-semibold align-middle hover:opacity-60 hover:scale-90 duration-300 focus:outline-none"
						onClick={() => setForecastMode(forecastMode === '5day' ? '3hour' : '5day')}>
						{forecastMode === '5day' ? '3-Hour Forecast' : '5-Day Forecast'}
					</button>
					<button
						className="text-primary underline  mt-1 text-sm justify-center flex font-semibold xsmall:text-xs align-middle hover:opacity-60 hover:scale-90 duration-300 focus:outline-none"
						onClick={handleToggleUnits}
					>
						{isCelsius ? 'Imperial Units' : 'Metric Units'}
					</button>
				</div>
				{/* <div>

					<button
						className="text-primary underline  mt-1 text-sm justify-center flex font-semibold align-middle hover:opacity-60 hover:scale-90 duration-300 focus:outline-none"
						onClick={onSaveFavorite}>Set Current City</button>
				</div> */}
			</div>

		</header>
	)
}

export default Header
