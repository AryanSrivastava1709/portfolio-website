import projects from "../project.json";

function Projects() {
	return (
		<div className='space-y-6'>
			<h2 className='text-3xl font-bold'>Main Missions</h2>
			<div className='overflow-y-auto max-h-[calc(3*15rem)]'>
				<div className='space-y-6 p-10'>
					{projects.map((project, index) => (
						<div key={index} className='bg-gray-800 p-4 rounded'>
							<div className='md:flex'>
								<div className='md:flex-shrink-0 overflow-hidden'>
									<a href={project.link} target='_blank'>
										<img
											className='h-full w-80 object-cover rounded-lg transition-transform transform hover:scale-105 hover:cursor-pointer'
											src={project.img}
											alt={`${project.title} project thumbnail`}
										/>
									</a>
								</div>
								<div className='mt-4 md:mt-0 md:ml-6'>
									<h3 className='text-xl font-bold'>{project.title}</h3>
									{project.status && (
										<p className=' text-white text-base uppercase font-sans font-bold bg-red-500 my-5 text-center w-1/2 py-2 rounded-full'>
											{project.status}
										</p>
									)}
									<p className='mt-2 text-white'>{project.description}</p>
									<div className='mt-2 text-red-200'>
										<strong>Tech Stack:</strong> {project.techStack.join(", ")}
									</div>
									<p className='mt-2 text-green-500 italic'>
										{project.popCultureRef}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
