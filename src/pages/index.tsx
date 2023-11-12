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
	<main className="grid place-items-center h-screen">
	  Gatsby is cool!
	  Also Hi Thomas!
	  {message}
	</main>
  )
}

export default Index
export const Head: HeadFC = () => <title>Home Page</title>