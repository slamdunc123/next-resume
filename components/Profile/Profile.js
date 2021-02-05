import React, { useContext } from 'react';
import { AppContext } from '../../pages/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = () => {
	const { profile } = useContext(AppContext);
	const {
		firstName,
		lastName,
		phone,
		email,
		statement,
		socialMedia,
	} = profile;
	return (
		<section className='resume-section' id='profile'>
			<div className='resume-section-content'>
				<h1 className='mb-0 profile-name'>
					{firstName}
					<span className='text-primary'>{lastName}</span>
				</h1>
				<div className='subheading mb-5'>
					{phone} &nbsp;
					<a href='mailto:name@email.com'>{email}</a>
				</div>
				<p className='lead mb-5'>{statement}</p>
				<div className='social-icons'>
					{socialMedia.map((item) => (
						<a
							className='social-icon'
							href={item.url}
							key={item.id}
						>
							<FontAwesomeIcon
								icon={item.faIcon}
							></FontAwesomeIcon>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Profile;
