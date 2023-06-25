import React from 'react'
import WeatherForm from './WeatherForm'

const Header = ({ onSubmit }) => {
	return (
		<header className='bg-white opacity-75 items-center  self-center flex mx-auto w-auto content-center flex-col justify-center my-2 pt-2 rounded-xl border-t-2 border-b-2 border-neutral-950'>
			<h1 className="text-4xl text-center font-bold mb-4">Weather Pal</h1>
			<WeatherForm onSubmit={onSubmit} />
		</header>
	)
}

export default Header
