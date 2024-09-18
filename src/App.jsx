import { Home, Monitor, User, Rocket, Mail, PenTool } from "lucide-react";
import { useState } from "react";
import HomePage from "./components/Home";
import SkillPage from "./components/Skills";
import ProjectPage from "./components/Projects";
import ContactPage from "./components/Contact";
import AboutPage from "./components/About";
import BlogPage from "./components/Blog"; // New import

function App() {
	const [activeSection, setActiveSection] = useState("home");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const menuItems = [
		{ id: "home", icon: <Home />, label: "Home" },
		{ id: "skills", icon: <Monitor />, label: "Skills" },
		{ id: "about", icon: <User />, label: "About" },
		{ id: "projects", icon: <Rocket />, label: "Projects" },
		{ id: "contact", icon: <Mail />, label: "Contact" },
		{ id: "blog", icon: <PenTool />, label: "Blog" }, // New blog section
	];

	const handleNavigation = (sectionId) => {
		setIsLoading(true);
		setTimeout(() => {
			setActiveSection(sectionId);
			setIsLoading(false);
			setIsMobileMenuOpen(false);
		}, 800); // Reduced duration for a quicker transition
	};

	const renderContent = () => {
		switch (activeSection) {
			case "home":
				return <HomePage />;
			case "skills":
				return <SkillPage />;
			case "about":
				return <AboutPage />;
			case "projects":
				return <ProjectPage />;
			case "contact":
				return <ContactPage />;
			case "blog": // New case for the blog
				return <BlogPage />;
			default:
				return <HomePage />;
		}
	};

	return (
		<div className='flex flex-col md:flex-row h-screen bg-black text-green-400 font-space-mono'>
			<aside className='w-full md:w-64 bg-gray-900 p-6'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-2xl font-bold'>Aryan Srivastava</h1>
					<button
						className='md:hidden text-2xl'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? "✕" : "☰"}
					</button>
				</div>
				<nav className={`${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
					<ul className='space-y-4'>
						{menuItems.map((item) => (
							<li key={item.id}>
								<button
									onClick={() => handleNavigation(item.id)}
									className={`flex items-center space-x-2 w-full text-left px-4 py-2 rounded ${
										activeSection === item.id
											? "bg-green-800 text-white"
											: "hover:bg-gray-800"
									}`}
								>
									<span className='text-xl'>{item.icon}</span>
									<span>{item.label}</span>
								</button>
							</li>
						))}
					</ul>
				</nav>
			</aside>
			<main className='flex-1 p-8 overflow-auto relative'>
				<div className='max-w-3xl mx-auto'>
					{isLoading ? (
						<div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
							<div className='text-center'>
								<div className='flex justify-center mb-4'>
									<div className='infinity-stone stone-1'></div>
									<div className='infinity-stone stone-2'></div>
									<div className='infinity-stone stone-3'></div>
									<div className='infinity-stone stone-4'></div>
									<div className='infinity-stone stone-5'></div>
									<div className='infinity-stone stone-6'></div>
								</div>
								<p className='text-lg sm:text-sm md:text-xl lg:text-xl xl:text-xl'>
									Assembling the Infinity Stones for the next chapter...
								</p>
							</div>
						</div>
					) : (
						renderContent()
					)}
				</div>
			</main>
		</div>
	);
}

export default App;
