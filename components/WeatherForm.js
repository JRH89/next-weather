// components/WeatherForm.js

import React, { useState } from 'react'

const WeatherForm = ({ onSubmit }) => {
	const [city, setCity] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(city)
		setCity('')
	}

	return (
		<form onSubmit={handleSubmit} className="flex justify-center xsmall:text-xs pb-4 px-5">
			<input
				type="text"
				value={city}
				onChange={(e) => setCity(e.target.value)}
				placeholder="Enter a city"
				className="px-4 py-2 rounded-md border border-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent"
			/>
			<button
				type="submit"
				className="ml-2 px-4 xsmall:px-2 py-2 bg-yellow-500 text-white border border-neutral-950 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-neutral-950  focus:ring-opacity-50"
			>
				<i className="fa fa-bolt"></i>
			</button>
		</form>
	)
}

export default WeatherForm
