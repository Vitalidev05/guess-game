import {render, screen} from "@testing-library/react";
import React from "react";
import {Dot} from "./component";

describe('renders Dot component', () => {

    test('renders light Dot', () => {
        render(<Dot variant='light'/>)

        const view = screen.getByTestId('light-dot');

        expect(view).toBeInTheDocument();
    })

    test('renders dark Dot', () => {
        render(<Dot variant='dark'/>)

        const view = screen.getByTestId('dark-dot');

        expect(view).toBeInTheDocument();
    })

    test('renders transparent Dot', () => {
        render(<Dot variant='transparent'/>)

        const view = screen.getByTestId('transparent-dot');

        expect(view).toBeInTheDocument();
    })
})
