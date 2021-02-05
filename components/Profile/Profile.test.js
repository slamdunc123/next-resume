import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';
import { profile } from '../../constants/data';
import { AppContext } from '../../App';

test('renders Profile component', () => {
	const result = render(
		<AppContext.Provider value={{ profile }}>
			<Profile />
		</AppContext.Provider>
	);
});
