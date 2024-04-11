import Image from "next/image";
import Navbar from './components/Navbar'
import HalfSplit from './components/HalfSplit'
import Centered from './components/Centered'

import Blob1 from './components/Blob1'
import Blob2 from './components/Blob2'

export default function Home() {
  return (
    <main>
		<section className='h-[85svh] w-full'>
			<Navbar />
			<Blob1 />
			<Blob2 />
			<div className='flex flex-col items-center text-center mx-44 my-32'>
				<h1 className='font-black text-8xl'>Thomas Abadines</h1>
				<h1 className='text-4xl pt-4'>Fullstack Software Engineer</h1>
        <p className="pt-4">Design -{">"} Development -{">"} Deployment -{">"} DevOps</p>
			</div>
		</section>
		<section className='bg-gray-100 py-12'>
			<Centered content={
				<div className='my-14'>
					<h1 className='text-3xl font-bold mx-auto text-center'>I'm a Software Generalist with a passion for learning</h1>
					<p className="text-center">I am able to use modern web development tools for your use cases.</p>
					<p className="text-center">Just let me know.</p>
				</div>
			} />
		</section>
		<section className='bg-white py-12'>
			<HalfSplit className='item-center justify-center text-center'
				left={
					<div className='my-10'>
						<h1 className='text-3xl font-bold'>Design and Development</h1>
						<p>Hello! I am a p tag and I am just passing through</p>
						<p>I am able to use modern web development tools for</p>
						<p>your business.</p>
					</div>
				}
				right={
					<div className='my-10'>
					</div>
			} />
		</section>
    <section className='bg-white py-12'>
			<HalfSplit className='item-center justify-center text-center'
				left={
					<div className='my-10'>
					</div>
				}
				right={
					<div className='my-10'>
						<h1 className='text-3xl font-bold'>Deployment and Beyond</h1>
						<p>Hello! I am a p tag and I am just passing through</p>
						<p>I am able to use modern web development tools for</p>
						<p>your business.</p>
					</div>
			} />
		</section>
		<section className='bg-gray-100 py-12'>
			<Centered content={
				<div className='my-14'>
					<h1 className='text-3xl font-bold mx-auto text-center'>See what I can do for your team!</h1>
					<p className="text-center">Hello! I am a p tag and I am just passing through</p>
					<p className="text-center">I am able to use modern web development tools for</p>
					<p className="text-center">your business.</p>
				</div>
			} />
		</section>
	</main>
  );
}
