import React from "react"
import { useEffect, useState } from "react"
import "./App.css"

export const ENDPOINT = "https://picsum.photos/v2/list"

const fetchJSON = async endpoint => await fetch(endpoint).then(x => x.json())

export const useGetData = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const pullData = async () => {
			const response = await fetchJSON(ENDPOINT)
			console.log({ response })
			setData(response)
		}

		pullData()
	}, [setData])

	return data
}

const App = () => {
	const [index, setIndex] = useState(null)
	const data = useGetData()
	if (!data) return <div data-testid="loading">loading</div>
	return (
		<div className="wrapper">
			<div className="first">
				<p>Choose a photographer:</p>
				{data.map((x, i) => (
					<button key={x.author + i} onClick={() => setIndex(i)}>
						{x.author}
					</button>
				))}
				<br />
				<br />
			</div>
			<div className="second">
				{index && (
					<img
						src={data[index].download_url}
						alt="pic"
						width="500"
						height="500"
					/>
				)}
			</div>
		</div>
	)
}

export default App
