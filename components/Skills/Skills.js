import React, { useContext } from 'react';
import { AppContext } from '../../pages/index';

const Skills = () => {
	const { skills } = useContext(AppContext);
	return (
		<section className='resume-section' id='skills'>
			<div className='resume-section-content'>
				<h2 className='mb-5'>Skills</h2>
				<ul>
					{skills.map((skill) => (
						<li className='lead' key={skill.id}>
							{skill.title}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
