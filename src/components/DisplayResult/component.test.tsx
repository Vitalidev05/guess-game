import React from 'react';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {render, screen} from '@testing-library/react';
import {DisplayResult} from './component';

describe('DisplayResult component should render correctly', () => {
    const mockStore = configureStore()
    let store

    test('should set correct value for number in correct format', () => {
        const initialState = {
            guessGame: {
                result: [{
                    value: 1,
                    isGuess: true,
                    isRightPosition: false
                }, {
                    value: 2,
                    isGuess: true,
                    isRightPosition: true
                },
                    {
                        value: 3,
                        isGuess: false,
                        isRightPosition: false
                    },
                    {
                        value: 4,
                        isGuess: false,
                        isRightPosition: false
                    }]
            }
        }

        store = mockStore(initialState)

        render(<Provider store={store}><DisplayResult/></Provider>)

        //values
        expect(screen.getByText(initialState.guessGame.result[0].value)).toBeInTheDocument();
        expect(screen.getByText(initialState.guessGame.result[1].value)).toBeInTheDocument();
        expect(screen.getByText(initialState.guessGame.result[2].value)).toBeInTheDocument();
        expect(screen.getByText(initialState.guessGame.result[3].value)).toBeInTheDocument();

        //dark dot
        expect(screen.getByTestId('dark-dot')).toBeInTheDocument();

        //light dot
        expect(screen.getByTestId('light-dot')).toBeInTheDocument();

        //transparent dots
        expect(screen.queryAllByTestId('transparent-dot')).toHaveLength(2);
    });
});
