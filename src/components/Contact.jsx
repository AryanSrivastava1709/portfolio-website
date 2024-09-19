import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Linkedin, Github, Instagram } from "lucide-react";

function Contact() {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// Function to handle input changes and update form data state
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// Function to handle form submission and send email via EmailJS
	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		// Send email with formData values
		emailjs
			.send(
				"service_7ctfd3u", // Replace with your EmailJS service ID
				"template_dwp9i7n", // Replace with your EmailJS template ID
				{
					name: formData.name,
					email: formData.email,
					message: formData.message,
				},
				"xRv0sgTR49eb2YqxD" // Replace with your EmailJS user ID
			)
			.then(
				(result) => {
					setLoading(false);
					toast.success("Message successfully delivered!", {
						position: "top-right",
						autoClose: 5000,
					});
				},
				(error) => {
					setLoading(false);
					toast.error("Failed to send the message. Please try again!", {
						position: "top-right",
						autoClose: 5000,
					});
				}
			);
		// Clear the form
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div className='space-y-6'>
			<h2 className='text-3xl font-bold'>Establish Communication</h2>
			<p className='text-lg'>
				Forget Stark's tech – you've got me! Drop your message below, and I'll
				respond faster than Spider-Man swinging through New York.
			</p>
			<form onSubmit={sendEmail} className='space-y-4'>
				<input
					type='text'
					placeholder='Your Name'
					name='name'
					value={formData.name}
					onChange={handleChange}
					className='w-full p-2 bg-gray-800 rounded'
					required
				/>
				<input
					type='email'
					placeholder='Your Email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					className='w-full p-2 bg-gray-800 rounded'
					required
				/>
				<textarea
					placeholder='Your Message'
					name='message'
					value={formData.message}
					onChange={handleChange}
					className='w-full p-2 bg-gray-800 rounded h-32'
					required
				></textarea>
				<button
					type='submit'
					className={`${
						loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
					} text-white px-4 py-2 rounded transition-colors duration-300`}
					disabled={loading}
				>
					{loading ? "Sending..." : "Send Message"}
				</button>
			</form>
			<p className='text-sm mt-4'>
				By sending this form, you agree to the terms of the Avengers Initiative
				and acknowledge that Nick Fury may be watching. Use at your own
				discretion, superhero! Just joking😁!!
			</p>

			<div className='flex w-full flex-col items-center justify-center'>
				<div className='mt-10 mb-5'>
					<p className=' text-center text-xl font-bold animate-pulse'>
						Connect with me:
					</p>
				</div>
				<div className='flex gap-5'>
					<a
						href='https://www.linkedin.com/in/aryan-srivastava-17ar09/'
						target='_blank'
					>
						<Linkedin size={32} />
					</a>
					<a href='https://github.com/AryanSrivastava1709' target='_blank'>
						<Github size={32} />
					</a>
					<a href='https://www.instagram.com/ara.youknow/' target='_blank'>
						<Instagram size={32} />
					</a>
				</div>
			</div>

			<ToastContainer />
		</div>
	);
}

export default Contact;
