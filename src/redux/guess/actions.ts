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

    setInput: (payload: string) => ({
        type: ActionsGuessGame.SetInput,
        payload,
    } as const),
};
