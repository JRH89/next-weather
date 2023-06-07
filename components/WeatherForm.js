// components/WeatherForm.js

import React, { useState } from 'react';

const WeatherForm = ({ onSubmit }) => {
	const [city, setCity] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(city);
		setCity('');
	};

	return (
		<form onSubmit={handleSubmit} className="mb-8">
			<input
				type="text"
				value={city}
				onChange={(e) => setCity(e.target.value)}
				placeholder="Enter a city"
				className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
			/>
			<button
				type="submit"
				className="ml-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
			>
				Get Weather
			</button>
		</form>
	);
};

export default WeatherForm;
