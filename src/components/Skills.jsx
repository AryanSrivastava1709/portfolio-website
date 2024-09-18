import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
	CodeXml,
	StretchHorizontal,
	Code,
	Figma,
	Database,
} from "lucide-react";

function Skills() {
	const skills = [
		{ name: "HTML", level: 90, icon: <CodeXml size={24} /> },
		{ name: "CSS", level: 90, icon: <StretchHorizontal size={24} /> },
		{ name: "JavaScript", level: 90, icon: <Code size={24} /> },
		{ name: "Typescript", level: 70, icon: <Code size={24} /> },
		{ name: "TailwindCSS", level: 90, icon: <StretchHorizontal size={24} /> },
		{ name: "Figma", level: 90, icon: <Figma size={24} /> },
		{ name: "React", level: 90, icon: <Code size={24} /> },
		{ name: "Node.js", level: 80, icon: <Code size={24} /> },
		{ name: "C++", level: 70, icon: <Code size={24} /> },
		{ name: "SQL", level: 70, icon: <Database size={24} /> },
		{ name: "MongoDB", level: 80, icon: <Database size={24} /> },
	];

	const useInViewAnimation = () => {
		const controls = useAnimation();
		const ref = useRef(null);

		useEffect(() => {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						controls.start({
							opacity: 1,
							scale: 1,
							transition: { duration: 0.5 },
						});
					}
				},
				{ threshold: 0.2 }
			);

			if (ref.current) {
				observer.observe(ref.current);
			}

			return () => {
				if (ref.current) {
					observer.unobserve(ref.current);
				}
			};
		}, [controls]);

		return [controls, ref];
	};

	return (
		<div className='space-y-6'>
			<h2 className='text-3xl font-bold'>Tech Skills Unlocked</h2>
			<div className='max-h-[500px] overflow-y-auto space-y-6'>
				{skills.map((skill, index) => {
					const [controls, ref] = useInViewAnimation();
					return (
						<motion.div
							key={index}
							ref={ref}
							className='bg-gray-800 p-4 rounded flex items-center'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={controls}
						>
							<span className='text-2xl mr-4'>{skill.icon}</span>
							<div className='flex-grow'>
								<div className='flex justify-between'>
									<code>{skill.name}</code>
									<span>{skill.level}%</span>
								</div>
								<div className='h-2 bg-gray-700 rounded-full mt-2'>
									<motion.div
										className='h-full bg-green-500 rounded-full'
										initial={{ width: 0 }}
										animate={{ width: `${skill.level}%` }}
										transition={{ duration: 1 }}
									/>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
			<p className='text-2xl mb-4 italic text-center'>
				"With great power comes great responsibility." - Uncle Ben
			</p>
		</div>
	);
}

export default Skills;
