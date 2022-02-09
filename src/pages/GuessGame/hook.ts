import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGuessCount, selectIsGuessed } from "../../redux/guess";
import { actionsGuessGame } from "../../redux/guess/actions";

export const useModal = () => {
    const isGuessed = useSelector(selectIsGuessed)
    const dispatch = useDispatch();

    const guessCount = useSelector(selectGuessCount);

    const handleClose = useCallback(() => {
        dispatch(actionsGuessGame.startNewGame())
    }, [dispatch]);

    return {
        open: isGuessed,
        handleClose,
        body: `Number of guesses: ${guessCount}`
    }
}
