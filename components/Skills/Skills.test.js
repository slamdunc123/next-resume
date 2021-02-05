import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Skills from './Skills';

test('renders Skills component', () => {
	const result = render(<Skills />);
});

test('renders', () => {
	const { asFragment } = render(<Skills />);
	expect(asFragment()).toMatchSnapshot();
});
