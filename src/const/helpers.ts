import { Result } from "./types";

export const generateRandomNumbers = (): number[] => {
    const result: number[] = [];

    while (result.length < 4) {
        const randomInteger: number = Math.floor(Math.random() * 10);

        if (!result.includes(randomInteger)) {
            result.push(randomInteger);
        }
    }
    return result;
}

export const isNumeric = (str: string): boolean => {
    return !isNaN(+str) && !isNaN(parseFloat(str))
}

export const isStringUnique = (numberString: string, num: number): boolean => {
    return false
}

const compare = (codeArray: number[], inputString: string): Result[] => {
    const inputArray: number[] = inputString.split('').map(Number);

    return inputArray.map((n, i) => {
            return {
                value: n,
                isGuess: codeArray.includes(n),
                isRightPosition: n === codeArray[i]
            }
        }
    )
}
