import React from 'react';
import {render, screen} from '@testing-library/react';
import {Modal} from "./component";

describe('renders GuessModal component', () => {

    test('modal is rendered when has visible property', () => {
        render(<Modal title='You won!' actionText='Start new game' body='number of guesses: 42' handleClose={() => {
        }} open={true}/>)

        expect(screen.getByText('You won!')).toBeInTheDocument();
        expect(screen.getByText('number of guesses: 42')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    })

    test('modal is not rendered when hasn\'t visible property', () => {
        render(<Modal title='You won!' actionText='Start new game' body='number of guesses: 42' handleClose={() => {
        }} open={false}/>)

        expect(screen.queryByText('You won!')).toBeNull();
        expect(screen.queryByText('number of guesses: 42')).toBeNull();
        expect(screen.queryByText('button')).toBeNull();
    })

    test('passed function to component is run on button click', () => {
        const handleClose = jest.fn();

        render(<Modal title='You won!' actionText='Start new game' body='number of guesses: 42'
                      handleClose={handleClose} open={true}/>)

        const button = screen.getByRole('button');
        button.click();

        expect(handleClose).toHaveBeenCalled();
        expect(handleClose).toHaveBeenCalledTimes(1);
    })

    test('passed function to component is run one time on button click', () => {
        const handleClose = jest.fn();

        render(<Modal title='You won!' actionText='Start new game' body='number of guesses: 42'
                      handleClose={handleClose} open={true}/>)

        const button = screen.getByRole('button');
        button.click();

        expect(handleClose).toHaveBeenCalledTimes(1);
    })
})
