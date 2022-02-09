import { AppState } from "../types";

export const selectGuessCount = (store: AppState) => store.guessGame.guessCount;

export const selectCode = (store: AppState) => store.guessGame.code;

export const selectInput = (store: AppState) => store.guessGame.input;

export const selectResult = (store: AppState) => store.guessGame.result;

export const selectIsGuessed = (store: AppState) => store.guessGame.isGuessed;
