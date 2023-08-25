import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
	// Carga del Video
	const [isLoading, setIsLoading] = useState(true);

	const handleVideoLoad = () => {
		setIsLoading(false);
	};

	// Efecto del Título
	const [text, setText] = useState('');
	const fullText = 'Soluciones Integrales en Logística y Procura';
	//     const typingDelay = 100; // Velocidad de tipeo
	//   const pauseDuration = 2000;

	useEffect(() => {
		let currentIndex = 0;
		const typingInterval = setInterval(() => {
			if (currentIndex < fullText.length) {
				setText(fullText.slice(0, currentIndex + 1));
				currentIndex++;
			} else {
				clearInterval(typingInterval);
			}
		}, 100); // Velocidad de tipeo (en milisegundos)

		return () => {
			clearInterval(typingInterval);
		};
	}, []);

	return (
		<div id='home' className='responsive-container'>
			{isLoading && <img src='banner.jpg' alt='Loading' />}
			<video
				controls
				autoPlay
				muted
				loop
				onLoadedData={handleVideoLoad}
				style={{ display: isLoading ? 'none' : 'block' }}
				className='col-12'
			>
				<source
					src='https://res.cloudinary.com/dwtnqtdcs/video/upload/v1692874886/antares/video-banner_cgcnbs.mp4'
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
			<span className='video-heading'>{text}</span>
		</div>
	);
};

export default Banner;
