import React, { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleBurgerMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
			id='sideNav'
		>
			<a className='navbar-brand js-scroll-trigger' href='#page-top'>
				<span className='d-block d-lg-none'>Duncan Laidlaw</span>
				<span className='d-none d-lg-block'>
					<img
						className='img-fluid img-profile rounded-circle mx-auto mb-2'
						src='/assets/images/profile.jpg'
						alt=''
					/>
				</span>
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
				onClick={handleBurgerMenu}
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div
				className={
					!isOpen
						? 'collapse navbar-collapse'
						: 'collapse navbar-collapse show'
				}
				id='navbarSupportedContent'
			>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<a
							className='nav-link js-scroll-trigger'
							href='#profile'
							onClick={handleBurgerMenu}
						>
							Profile
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link js-scroll-trigger'
							href='#experience'
							onClick={handleBurgerMenu}
						>
							Experience
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link js-scroll-trigger'
							href='#education'
							onClick={handleBurgerMenu}
						>
							Education
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link js-scroll-trigger'
							href='#skills'
							onClick={handleBurgerMenu}
						>
							Skills
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link js-scroll-trigger'
							href='#interests'
							onClick={handleBurgerMenu}
						>
							Interests
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link js-scroll-trigger'
							href='#awards'
							onClick={handleBurgerMenu}
						>
							Awards
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
