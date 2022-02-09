import React from 'react';
import {render, screen} from '@testing-library/react';
import {GuessedModal} from "./component";

describe('renders GuessModal component', () => {

    test('modal is rendered when has visible property', () => {
        render(<GuessedModal guessCount={42} handleClose={() => {
        }} open={true}/>)

        expect(screen.getByText('You won!')).toBeInTheDocument();
        expect(screen.getByText('number of guesses: 42')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    })

    test('modal is not rendered when hasn\'t visible property', () => {
        render(<GuessedModal guessCount={42} handleClose={() => {
        }} open={false}/>)

        expect(screen.queryByText('You won!')).toBeNull();
    })

    test('passed function to component is run on button click', () => {
        const handleClose = jest.fn();

        render(<GuessedModal guessCount={42} handleClose={handleClose} open={true}/>)

        const button = screen.getByRole('button');
        button.click();

        expect(handleClose).toHaveBeenCalled();
        expect(handleClose).toHaveBeenCalledTimes(1);
    })

    test('passed function to component is run one time on button click', () => {
        const handleClose = jest.fn();

        render(<GuessedModal guessCount={42} handleClose={handleClose} open={true}/>)

        const button = screen.getByRole('button');
        button.click();

        expect(handleClose).toHaveBeenCalledTimes(1);
    })
})
