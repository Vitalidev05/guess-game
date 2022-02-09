import { State } from './guess';

export enum ActionsGuessGame {
    GenerateNewCode = '@/GUESS_GAME/GENERATE_NEW_CODE',
    IncrementGuessCount = '@/GUESS_GAME/SET_GUESS_COUNT',
    StartNewGame = '@/GUESS_GAME/START_NEW_GAME',
    SetInput = '@/GUESS_GAME/SET_INPUT',
};

export interface AppState {
    guessGame: State,
};
