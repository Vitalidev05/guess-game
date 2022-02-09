import { ReturnAnyActions } from "../../const/types";
import { actionsGuessGame } from "./actions";
import { ActionsGuessGame } from "../types";
import { generateRandomNumbers } from "../../const/helpers";

const initialState = {
    code: generateRandomNumbers(),
    guessCount: 0,
    input: '',
    result: [],
};

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
            return { ...state, guessCount: 0, input: '', code: generateRandomNumbers()}
        }
        default: return state;
    }
};

