import React, { useState, useContext } from 'react';
import { AppContext } from '../../pages/index';
import Carousel from '../Carousel';
import styles from './Experience.module.css';

const Experience = () => {
	const { experience } = useContext(AppContext);
	const { development } = experience[0];
	const { projectManagement } = experience[1];
	const { infrastructure } = experience[2];

	const [prevExp, setPrevExperience] = useState(false);

	const handlePrevExp = () => {
		setPrevExperience(!prevExp);
	};

	const renderExp = (exp) => {
		return exp.map((item) => (
			<div key={item.id}>
				<div className='d-flex flex-column flex-md-row justify-content-between mb-5'>
					<div className='flex-grow-1'>
						<h3 className='mb-0'>{item.title}</h3>
						<div className='subheading mb-3'>
							{item.company} - {item.industry}
						</div>
						<ul>
							{item.duties.map((duty) => (
								<li className='lead' key={duty.id}>
									{duty.description}
								</li>
							))}
						</ul>
					</div>
					<div className='flex-shrink-0'>
						<span className='text-primary'>{item.dates}</span>
					</div>
				</div>
				{item.projects
					? item.projects.map((project, index) => (
							<div
								className='card pt-4 pl-2 pb-5 pr-2 mb-3 shadow'
								key={project.id}
							>
								{index % 2 === 0 ? (
									<div className={styles.projectRow}>
										<div
											className={`${styles.carouselBackground} col-sm-12 col-md-6`}
										>
											<Carousel project={project} />
										</div>
										<div
											className={`${styles.textContainer} col-sm-12 col-md-6 text-primary mb-3`}
										>
											<h4>{project.title}</h4>
											<p>{project.description}</p>
										</div>
									</div>
								) : (
									<div className='row'>
										<div
											className={`${styles.textContainer} col-sm-12 col-md-6 text-secondary mb-3`}
										>
											<h4>{project.title}</h4>
											{project.description}
										</div>
										<div
											className={`${styles.experienceCarouselBackground} col-sm-12 col-md-6`}
										>
											<Carousel project={project} />
										</div>
									</div>
								)}
							</div>
							// </div>
					  ))
					: null}
			</div>
		));
	};

	return (
		<section className='resume-section' id='experience'>
			<div className='resume-section-content'>
				<h2 className='mb-5'>Experience</h2>
				{renderExp(development)}
				<button className='btn btn-secondary' onClick={handlePrevExp}>
					{!prevExp
						? '...show previous IT experience'
						: '...hide previous IT experience'}
				</button>
				{prevExp ? renderExp(projectManagement) : null}
				{prevExp ? renderExp(infrastructure) : null}
			</div>
		</section>
	);
};

export default Experience;
