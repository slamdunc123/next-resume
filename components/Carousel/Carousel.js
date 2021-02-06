import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ project }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	const getSlider = () => {
		if (project !== undefined) {
			return (
				<Slider {...settings}>
					{project.images.map((image) => (
						<div className='slider-slide' key={image.id}>
							<img
								className='slick-slide-image'
								src={image.url}
								width='100%'
								height='auto'
							/>
							<label className='slick-slide-label mt-2'>
								{image.label}
							</label>
						</div>
					))}
				</Slider>
			);
		} else return null;
	};

	return getSlider();
};

export default Carousel;
