import React from 'react';
import {render, screen} from '@testing-library/react';
import {Title} from "../Title";

test('renders Title component', () => {
    render(<Title title='hello world!'/>);
    const title = screen.getByText('hello world!');
    expect(title).toBeInTheDocument();
});
