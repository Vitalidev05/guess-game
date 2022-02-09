import { ReturnAnyActions } from "../../const/types";
import { actionsGuessGame } from "./actions";
import { ActionsGuessGame } from "../types";
import {compareAnswer, generateRandomNumbers } from "../../const/helpers";

const generateInitialState = (code: number[]) => ({
    code,
    guessCount: 0,
    input: '',
    result: [],
})

const initialState = generateInitialState(generateRandomNumbers())

export type State = typeof initialState
export type GuessGameAnyAction = ReturnAnyActions<typeof actionsGuessGame>

export const guessGameReducer = (state: State = initialState, action: GuessGameAnyAction) => {
    switch (action.type) {
        case ActionsGuessGame.GenerateNewCode: {
            return { ...state }
        }
        case ActionsGuessGame.IncrementGuessCount: {
            return { ...state, guessCount: state.guessCount + 1 }
        }
        case ActionsGuessGame.StartNewGame: {
            return { ...state, ...generateInitialState(generateRandomNumbers())}
        }
        case ActionsGuessGame.Guess: {
            return {
                ...state,
                input: action.payload,
                result: compareAnswer(state.code, action.payload)
            }
        }
        default: return state;
    }
};

