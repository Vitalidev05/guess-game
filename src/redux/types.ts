import { State } from './guess';

export enum ActionsGuessGame {
    GenerateNewCode = '@/GUESS_GAME/GENERATE_NEW_CODE',
    IncrementGuessCount = '@/GUESS_GAME/SET_GUESS_COUNT',
    StartNewGame = '@/GUESS_GAME/START_NEW_GAME',
    Guess = '@/GUESS_GAME/GUESS',
};

export interface AppState {
    guessGame: State,
};
