import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from 'react-material-ui-carousel'
import DvdItem from './DvdItem'

const HomePage = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:3002/items', {
				params: { featured: true }
			})
			.then((res) => {
				setData(res.data)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<Carousel>
			{data.map((dvd) => {
				return <DvdItem key={dvd.id} data={dvd} homePage></DvdItem>
			})}
		</Carousel>
	)
}

export default HomePage
