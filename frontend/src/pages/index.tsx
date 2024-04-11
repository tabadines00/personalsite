import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Navbar from '@/components/Navbar'
import HalfSplit from '@/components/HalfSplit'
import Centered from '@/components/Centered'

import Blob1 from '@/components/Blob1'
import Blob2 from '@/components/Blob2'

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
		<section className='h-[85svh] w-full'>
			<Navbar />
			<Blob1 />
			<Blob2 />
			<div className='flex flex-col items-center text-center mx-44 my-32'>
				<h1 className='font-black text-8xl'>Thomas Abadines</h1>
				<h1 className='text-6xl pt-4'>Software Developer and Artificial Intelligence Enthusiast</h1>
			</div>
		</section>
		<section className='bg-gray-100 py-24'>
			<Centered content={
				<div className='my-14'>
					<h1 className='text-3xl font-bold mx-auto text-center'>I do Websites</h1>
					<p>Hello! I am a p tag and I am just passing through</p>
					<p>I am able to use modern web development tools for</p>
					<p>your business.</p>
				</div>
			} />
		</section>
		<section className='bg-white py-32'>
			<HalfSplit className='item-center justify-center text-center'
				left={
					<div className='my-14'>
						<h1 className='text-3xl font-bold'>Cool Title</h1>
						<p>Hello! I am a p tag and I am just passing through</p>
						<p>I am able to use modern web development tools for</p>
						<p>your business.</p>
					</div>
				}
				right={
					<div className='my-14'>
						<h1 className='text-3xl font-bold'>Cool Title</h1>
						<p>Hello! I am a p tag and I am just passing through</p>
						<p>I am able to use modern web development tools for</p>
						<p>your business.</p>
					</div>
			} />
		</section>
		<section className='bg-gray-100 py-24'>
			<Centered content={
				<div className='my-14'>
					<h1 className='text-3xl font-bold mx-auto text-center'>I can do more than just Websites</h1>
					<p>Hello! I am a p tag and I am just passing through</p>
					<p>I am able to use modern web development tools for</p>
					<p>your business.</p>
				</div>
			} />
		</section>
	</main>
  )
}

export default Index
export const Head: HeadFC = () => <title>Home Page</title>