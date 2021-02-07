import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Image {
	id: number;
	url: string;
	label: string;
}

interface Project {
	id: number;
	title: string;
	description: string;
	images: Image[];
}

interface Props {
	project: Project;
}

const Carousel = ({ project }: Props) => {
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
					{project.images.map(
						(image: { id: number; label: string; url: string }) => (
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
						)
					)}
				</Slider>
			);
		} else return null;
	};

	return getSlider();
};

export default Carousel;
