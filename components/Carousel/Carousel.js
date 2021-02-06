import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './styles.css';

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<div style={{ marginBottom: 50 }}>
			<Slider {...settings}>
				<div className='slider-slide'>
					<img
						className='slick-slide-image'
						src={`https://picsum.photos/500/250?img=1`}
					/>
					<label className='slick-slide-label'>label</label>
				</div>
				<div className='slider-slide'>
					<img
						className='slick-slide-image'
						src={`https://picsum.photos/500/250?img=2`}
					/>
					<label className='slick-slide-label'>label</label>
				</div>
				<div className='slider-slide'>
					<img
						className='slick-slide-image'
						src={`https://picsum.photos/500/250?img=3`}
					/>
					<label className='slick-slide-label'>label</label>
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
