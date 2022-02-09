import { ActionsGuessGame } from "../types";

export const actionsGuessGame = {
    generateNewCode: () => ({
        type: ActionsGuessGame.GenerateNewCode,
    } as const),

    incrementGuessCount: () => ({
        type: ActionsGuessGame.IncrementGuessCount,
    } as const),

    startNewGame: () => ({
        type: ActionsGuessGame.StartNewGame,
    } as const),

    guess: (payload: string) => ({
        type: ActionsGuessGame.Guess,
        payload,
    } as const),
};
