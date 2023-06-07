import React from 'react';
import WeatherForm from './WeatherForm';

const Header = ({ onSubmit }) => {
	return (
		<header>
			<h1 className="text-4xl text-center font-bold mb-4">Weather Buddy</h1>
			<WeatherForm onSubmit={onSubmit} />
		</header>
	);
};

export default Header;
