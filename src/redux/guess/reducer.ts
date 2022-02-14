import { ReturnAnyActions } from "../../const/types";
import { actionsGuessGame } from "./actions";
import { ActionsGuessGame } from "../types";
import { compareAnswer, generateRandomNumbers, isRightAnswer } from "../../const/helpers";
import { generateInitialState } from '../utils'

export const initialState = generateInitialState(generateRandomNumbers())

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
            const result = compareAnswer(state.code, action.payload)
            return {
                ...state,
                input: action.payload,
                result,
                isGuessed: isRightAnswer(result),
            }
        }
        default: return state;
    }
};

