import { useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGuessCount, selectIsGuessed } from "../../redux/guess";
import { actionsGuessGame } from "../../redux/guess/actions";

export const useModal = () => {
    const isGuessed = useSelector(selectIsGuessed)
    const dispatch = useDispatch();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const guessCount = useSelector(selectGuessCount);

    const handleClose = useCallback(() => {
        dispatch(actionsGuessGame.startNewGame())
    }, [dispatch]);

    return {
        open: isGuessed,
        theme,
        fullScreen,
        guessCount,
        handleClose,
    }
}
