import React from 'react';
import {render, screen} from '@testing-library/react';
import {Legend} from "./index";

test('renders Legend component', () => {
    render(<Legend legend1='legend1' legend2='legend2'/>);
    const legendText1 = screen.getByText('legend1');
    const legendText2 = screen.getByText('legend2');

    expect(legendText1).toBeInTheDocument();
    expect(legendText2).toBeInTheDocument();
});
