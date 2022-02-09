import { State } from './guess'

export enum ActionsGuessGame {
    GenerateNewCode = '@/GUESS_GAME/GENERATE_NEW_CODE',
    IncrementGuessCount = '@/GUESS_GAME/SET_GUESS_COUNT',
}

export interface AppState {
    guessGame:State
}
