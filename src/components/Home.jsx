import heroImage from "../assets/homeImg.jpg";
function Home() {
	return (
		<div className='space-y-6 p-8'>
			<h2 className='text-4xl font-bold mb-4'>
				Welcome to My Digital Universe
			</h2>

			<div className='flex justify-center mb-6'>
				<img src={heroImage} alt='Hero' className='rounded-lg shadow-lg' />
			</div>

			<p className='text-xl mb-4'>
				Greetings, fellow traveler of the digital universe! I'm Aryan
				Srivastava, a full-stack developer whose journey weaves through the
				realms of technology and pop culture. With a passion for sci-fi, comedy,
				horror, and action, and a deep love for all things Marvel, I invite you
				to explore my portfolio. Here, code meets creativity in a dynamic
				fusion, and every project is a story waiting to be told.
			</p>

			<p className='text-2xl mb-4 italic text-center'>
				"Whatever it takes." — The Avengers
			</p>
		</div>
	);
}

export default Home;
