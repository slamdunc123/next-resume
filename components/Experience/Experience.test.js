import React from 'react';
import { render } from '@testing-library/react';
import Experience from './Experience';
import { experience } from '../../constants/data';
import { AppContext } from '../../App';

test('renders Experience component', () => {
	const result = render(
		<AppContext.Provider value={{ experience }}>
			<Experience />
		</AppContext.Provider>
	);
});
