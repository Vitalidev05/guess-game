export const generateInitialState = (code: number[]) => ({
    code,
    isGuessed: false,
    guessCount: 0,
    input: '',
    result: [],
})
