import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"

const Index: React.FC<PageProps> = () => {

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

  return (
	<main>
		<header>
			<h1>Thomas Abadines</h1>
			<p>Software Developer | AI Enthusiast</p>
		</header>

		<section>
			<h2>About Me</h2>
			<p>
				Hello! I'm Thomas Abadines, a software developer and artificial intelligence enthusiast based in San Francisco.
				In addition to coding, I enjoy exploring the realms of music production and experimenting with various coffees and teas.
			</p>
		</section>
	</main>
  )
}

export default Index
export const Head: HeadFC = () => <title>Home Page</title>