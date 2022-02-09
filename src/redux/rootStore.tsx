import {
    combineReducers, createStore,
} from 'redux';
import { guessGameReducer } from './guess';

const reducers = combineReducers({
    guessGame: guessGameReducer
});

export const store = createStore(reducers);
