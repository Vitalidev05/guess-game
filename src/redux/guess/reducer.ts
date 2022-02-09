import { ReturnAnyActions } from "../../const/types";
import { actionsGuessGame } from "./actions";
import { ActionsGuessGame } from "../types";

const initialState = {
    code: [],
    guessCount: 0,
    input: '',
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
        default: return state;
    }
};

