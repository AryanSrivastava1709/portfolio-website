import { motion } from "framer-motion";
import heroImage from "../assets/DP.png";
import { useState } from "react";

function About() {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className='space-y-6'>
			<h2 className='text-3xl font-bold'>Character Bio</h2>

			<div className='flex justify-center mb-6'>
				<motion.div
					className='relative w-full max-w-[400px] h-[400px] perspective'
					style={{ perspective: "1000px" }}
				>
					<motion.div
						className='relative w-full h-full'
						initial={{ rotateY: 0 }}
						animate={{ rotateY: flipped ? 180 : 0 }}
						transition={{ duration: 0.8 }}
						style={{
							transformStyle: "preserve-3d",
						}}
						onClick={() => setFlipped(!flipped)}
					>
						{/* Front Side */}
						<motion.div
							className='absolute w-full h-full bg-cover bg-center rounded-lg shadow-lg'
							style={{
								backgroundImage: `url(${heroImage})`,
								backfaceVisibility: "hidden",
								transform: "rotateY(0deg)",
								cursor: "pointer",
							}}
						/>
						{/* Back Side */}
						<motion.div
							className='absolute w-full h-full bg-gray-900 text-white flex items-center justify-center text-center p-4 rounded-lg'
							style={{
								transform: "rotateY(180deg)",
								backfaceVisibility: "hidden",
								cursor: "pointer",
							}}
						>
							<div>
								<h3 className='text-2xl font-bold mb-2'>Aryan Srivastava</h3>
								<p className='text-lg'>Full-Stack Developer</p>
								<ul className='list-disc list-inside mt-2'>
									<li>React.js</li>
									<li>Node.js</li>
									<li>TypeScript</li>
									<li>TailwindCSS</li>
								</ul>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			<p className='text-lg'>
				Born in the era of dial-up internet and raised on a steady diet of
				sci-fi and fantasy, I've evolved into a full-stack developer with a
				knack for bridging the gap between imagination and implementation.
			</p>
			<p className='text-lg'>
				My coding journey began when I realized that, like the Force, there's a
				power that surrounds us, penetrates us, and binds the galaxy together -
				except in my case, it's the internet.
			</p>
			<p className='text-lg'>
				When I'm not crafting code/developing, you can find me:
			</p>
			<ul className='list-disc list-inside space-y-2 text-lg'>
				<li>💻Exploring new technologies.</li>
				<li>🚀Watching sci-fi movies.</li>
				<li>🎮Playing PC Games.</li>
				<li>🏸Playing badminton.</li>
			</ul>
			<p className='text-2xl mb-4 italic text-center'>
				"I can do this all day." - Captain America
			</p>
		</div>
	);
}

export default About;
