import { AppState } from "../types";

export const selectGuessCount = (store: AppState) => store.guessGame.guessCount;

export const selectCode = (store: AppState) => store.guessGame.code;

export const selectInput = (store: AppState) => store.guessGame.input;
