import Star from '../component/Star';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

describe('render a Star component and it child components', () => {
    /*test('render a Star Component', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Star id='star' />, div);
        expect(div.querySelector('svg')).toHaveAttribute('id', 'star');
    });*/

    test('render h1 title', () => {
        const { getByText } = render(<Star/>);
        const h1 = getByText(/Great Title/);
        expect(h1).toBeInTheDocument();
    });
});

