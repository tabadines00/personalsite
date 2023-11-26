import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Navbar from '@/components/Navbar'
import HalfSplit from '@/components/HalfSplit'

const Index: React.FC<PageProps> = () => {

	/*
	const [message, setMessage] = React.useState("default")

  	const url = "https://lj4dsvnwho2gufukhy3s7qxduq0wqerx.lambda-url.us-west-1.on.aws/";
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json;charset=UTF-8",
		},
	}

	fetch(url, options)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setMessage(data);
	})
	*/

  return (
	<main>
	  	<Navbar />
	  	<h1>Thomas Abadines</h1>
	  	<h1>Software Developer</h1>
		<HalfSplit
			left={
				<h1>Cool title</h1>
			}
			right={
				<p>Hello! I am a p tag and I am just passing through</p>
			} />
	</main>
  )
}

export default Index
export const Head: HeadFC = () => <title>Home Page</title>