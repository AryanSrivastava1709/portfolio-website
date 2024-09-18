import { useEffect } from "react";
import * as THREE from "three";

const Globe = () => {
	useEffect(() => {
		// Set up the scene, camera, and renderer
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);

		// Add the renderer to the DOM
		const container = document.getElementById("globe-container");
		if (container) {
			container.appendChild(renderer.domElement);
		}

		// Create a texture loader
		const textureLoader = new THREE.TextureLoader();
		const earthTexture = textureLoader.load(
			"https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg"
		); // Replace with your texture URL

		// Create a globe with the Earth texture
		const geometry = new THREE.SphereGeometry(5, 32, 32);
		const material = new THREE.MeshStandardMaterial({
			map: earthTexture,
			roughness: 0.5,
			metalness: 0.2,
		});
		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		// Add a light source
		const ambientLight = new THREE.AmbientLight(0x404040); // Ambient light
		const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Point light
		pointLight.position.set(10, 10, 10);
		scene.add(ambientLight);
		scene.add(pointLight);

		camera.position.z = 15; // Adjust camera position if necessary

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);
			sphere.rotation.x += 0.01;
			sphere.rotation.y += 0.01;
			renderer.render(scene, camera);
		};
		animate();

		// Handle window resizing
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener("resize", handleResize);

		// Clean up on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
			if (container) {
				container.removeChild(renderer.domElement);
			}
		};
	}, []);

	return (
		<div id='globe-container' style={{ width: "100%", height: "500px" }} />
	);
};

export default Globe;
