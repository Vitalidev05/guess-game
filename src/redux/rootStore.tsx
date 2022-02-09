import {
    combineReducers, createStore,
} from 'redux';
import { guessGameReducer } from './guess/reducer';

const reducers = combineReducers({
    guessGame: guessGameReducer
});

export const store = createStore(reducers);
