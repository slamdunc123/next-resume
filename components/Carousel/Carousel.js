import React from 'react';
// import Slider from 'react-slick';
// import './styles.css';

const Carousel = ({ sliderTitle }) => {
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
			<h5>{sliderTitle}</h5>
			{/* <Slider {...settings}>
				<div className='slider-slide'>
					<img
						className='slick-slide-image'
						src={`https://picsum.photos/400/200?img=1`}
					/>
					<label className='slick-slide-label'>label</label>
				</div>
				<div className='slider-slide'></div>
				<div className='slider-slide'></div>
			</Slider> */}
		</div>
	);
};

export default Carousel;
