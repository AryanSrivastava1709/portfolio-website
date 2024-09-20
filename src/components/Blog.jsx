import { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
	const [topic, setTopic] = useState("Movies and Series");
	const [isLoading, setIsLoading] = useState(false);
	const [articles, setArticles] = useState([]);

	const popCultureTopics = [
		"Movies",
		"Actors",
		"Hollywood",
		"Bollywood",
		"Series",
		"TV Shows",
	];

	const technologyTopics = [
		"Programming Languages",
		"Web Development",
		"Frontend Development",
		"Backend Development",
		"Tech News",
		"Computer Science",
	];

	const fetchNews = async (topic) => {
		try {
			setIsLoading(true);
			const response = await axios.get("https://gnews.io/api/v4/search", {
				params: {
					q: topic,
					apikey: "42fb606f21d0f24cc950e784d2c3754a",
				},
			});
			setArticles(response.data.articles);
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching the news", error);
			setIsLoading(false);
		}
	};

	const handleChangeTopic = (newMainTopic) => {
		const newTopic =
			newMainTopic === "Movies and Series"
				? popCultureTopics[Math.floor(Math.random() * popCultureTopics.length)]
				: technologyTopics[Math.floor(Math.random() * technologyTopics.length)];
		setTopic(newTopic);
	};

	useEffect(() => {
		fetchNews(topic);
	}, [topic]);

	return (
		<div className='bg-black text-green-400 min-h-screen p-6'>
			<h1 className='text-4xl font-bold mb-6 text-center glow'>Discover</h1>
			<div className='flex justify-center space-x-4 mb-4'>
				<button
					onClick={() => handleChangeTopic("Movies and Series")}
					className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
						topic === "Movies and Series" || popCultureTopics.includes(topic)
							? "bg-green-600 text-black"
							: "text-green-500 border border-green-500 hover:bg-green-600 hover:text-black"
					}`}
				>
					Pop Culture
				</button>
				<button
					onClick={() => handleChangeTopic("Programming Languages")}
					className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
						technologyTopics.includes(topic)
							? "bg-green-600 text-black"
							: "text-green-500 border border-green-500 hover:bg-green-600 hover:text-black"
					}`}
				>
					Technology
				</button>
			</div>

			{/* Display loading indicator */}
			{isLoading ? (
				<div className='flex items-center justify-center my-16'>
					<p className='text-3xl font-semibold text-green-500 px-8 py-4 rounded-full shadow-glow'>
						Loading...
					</p>
				</div>
			) : (
				<div>
					{/* Display topic */}
					<div className='mt-8 flex items-center justify-center'>
						<p className='text-2xl font-semibold border-b-4 border-green-500 pb-2 px-6 rounded-lg glow'>
							Showing posts related to: {topic}
						</p>
					</div>

					{/* Display fetched news articles */}
					<div className='mt-8 grid grid-cols-2 gap-6'>
						{articles.length === 0 ? (
							<p className='text-center text-gray-500 col-span-2'>
								No articles found.
							</p>
						) : (
							articles.map((article, index) => (
								<div
									key={index}
									className='bg-gray-900 border border-green-600 p-4 rounded-lg shadow-lg hover:bg-green-800 hover:text-green-300 transition duration-300 transform hover:scale-105 relative overflow-hidden'
								>
									{/* Neon border effect */}
									<div className='absolute inset-0 border-2 border-green-600 opacity-20 pointer-events-none'></div>
									{/* Display article image */}
									<img
										src={
											article.image ||
											"https://via.placeholder.com/150/000000/FFFFFF/?text=No+Image"
										}
										alt={article.title}
										className='w-full h-48 object-cover rounded-lg mb-4'
									/>
									<h2 className='text-xl font-bold mb-2'>{article.title}</h2>
									<p className='text-gray-300 mb-2'>{article.description}</p>
									<a
										href={article.url}
										target='_blank'
										rel='noopener noreferrer'
										className='text-green-500 underline'
										style={{ zIndex: 10 }}
									>
										Read more
									</a>
								</div>
							))
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default Blog;
