import { createContext } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { profile, experience, education, skills } from '../constants/data';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Interests from '../components/Interests';
import Awards from '../components/Awards';

export const AppContext = createContext({});

export default function Home() {
	return (
		<AppContext.Provider
			value={{
				profile,
				experience,
				education,
				skills,
			}}
		>
			<div>
				<Head>
					<title>Resume</title>
					<link rel='icon' href='/favicon.ico' />
					{/* Google fonts */}
					<link
						href='https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700'
						rel='stylesheet'
						type='text/css'
					/>
					<link
						href='https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i'
						rel='stylesheet'
						type='text/css'
					/>
				</Head>
				<Navbar />
				<main>
					<Profile />
					<hr className='m-0' />
					<Experience />
					<hr className='m-0' />
					<Education />
					<hr className='m-0' />
					<Skills />
					<hr className='m-0' />
					<Interests />
					<hr className='m-0' />
					<Awards />
					<hr className='m-0' />
				</main>
			</div>
		</AppContext.Provider>
	);
}
