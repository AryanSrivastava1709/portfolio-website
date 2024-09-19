import { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
	const [topic, setTopic] = useState("Movies and Series");
	const [isLoading, setIsLoading] = useState(false);
	const [articles, setArticles] = useState([]);
	const [pageSize, setPageSize] = useState(10);

	const fetchNews = async (topic) => {
		try {
			setIsLoading(true);
			const randomOffset = Math.floor(Math.random() * 100);
			const response = await axios.get("https://newsapi.org/v2/everything", {
				params: {
					q: topic,
					pageSize: pageSize,
					page: Math.floor(randomOffset / pageSize) + 1,
					apiKey: "d49cd14fa1fc4f1e991292b06bfa0c11",
				},
			});
			setArticles(response.data.articles);
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching the news", error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchNews(topic);
	}, [topic]);

	const handleChangeTopic = (newTopic) => {
		setTopic(newTopic);
	};

	return (
		<div className='bg-black text-green-400 min-h-screen p-6'>
			<h1 className='text-4xl font-bold mb-6 text-center glow'>Discover</h1>
			<div className='flex justify-center space-x-4 mb-4'>
				<button
					onClick={() => handleChangeTopic("Movies and Series")}
					className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
						topic === "Pop Culture"
							? "bg-green-600 text-black"
							: "text-green-500 border border-green-500 hover:bg-green-600 hover:text-black"
					}`}
				>
					Pop Culture
				</button>
				<button
					onClick={() => handleChangeTopic("Programming Languages and Gadgets")}
					className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
						topic === "Technology"
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
							Showing posts related to selected topic
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
											article.urlToImage ||
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
