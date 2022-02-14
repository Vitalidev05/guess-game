import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { NumericInput } from './component';
import {initialState} from "../../../redux/guess/reducer";
import {ActionsGuessGame} from "../../../redux/types";

describe('NumericInput component should render correctly', () => {
    const mockStore = configureStore()
    let store

    test('should set correct value for number in correct format', () => {
        store = mockStore(initialState)
        const value = '1234'

        render(<Provider store={store}><NumericInput /></Provider>)

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value },
        });

        expect(screen.getByRole('textbox')).toHaveValue(value);
    });

    test('should not set value if number in not correct format', () => {
        store = mockStore(initialState)

        render(<Provider store={store}><NumericInput /></Provider>)

        //not unique numbers
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: '1111' },
        });
        expect(screen.getByRole('textbox')).toHaveValue('');

        //with letters
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: '11aa' },
        });
        expect(screen.getByRole('textbox')).toHaveValue('');
    });

    test('should invoke particular redux actions when button guess clicked', () => {
        store = mockStore(initialState)
        const value = '1234'

        render(<Provider store={store}><NumericInput /></Provider>)

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value },
        });

        userEvent.click(screen.getByRole('button'));

        const actions = store.getActions()
        const expectedActions = [
            {
                "payload": value,
                "type": ActionsGuessGame.Guess
            },
            {
                "type": ActionsGuessGame.IncrementGuessCount
            }
        ]
        expect(actions).toEqual(expectedActions)
    });
});
