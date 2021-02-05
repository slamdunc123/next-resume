import React, { useContext } from 'react';
import { AppContext } from '../../pages/index';

const Education = () => {
	const { education } = useContext(AppContext);
	return (
		<section className='resume-section' id='education'>
			<div className='resume-section-content'>
				<h2 className='mb-5'>Education</h2>
				{education.map((item) => (
					<div
						className='d-flex flex-column flex-md-row justify-content-between mb-5'
						key={item.id}
					>
						<div className='flex-grow-1'>
							<h3 className='mb-0'>{item.qualification}</h3>
							<div className='subheading mb-3'>
								{item.establishment}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
