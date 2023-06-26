import React from 'react'
import WeatherForm from './WeatherForm'

const Header = ({ forecastMode, setForecastMode, onSubmit }) => {
	return (
		<header className='bg-white opacity-75 items-center  self-center flex mx-auto w-auto content-center flex-col justify-center my-2 pt-2 rounded-xl border-t-2 border-b-2 border-neutral-950'>
			<h1 className="text-4xl text-center font-bold mb-4">Weather Pal</h1>
			<WeatherForm onSubmit={onSubmit} />
			<div className='flex pb-1'>
				<div>
					<button
						className="text-primary underline  mt-1 text-sm justify-center flex font-semibold align-middle hover:opacity-60 hover:scale-90 duration-300 focus:outline-none"
						onClick={() => setForecastMode(forecastMode === '5day' ? '3hour' : '5day')}>
						{forecastMode === '5day' ? '3-Hour Forecast' : '5-Day Forecast'}
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
