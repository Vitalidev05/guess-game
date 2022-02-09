// import {generateResultViaUserInput, isNumeric, isStringUnique} from './helpers'
import {compareAnswer, isNumeric, isRightAnswer, isStringUnique} from './helpers';

describe('check if string can be transform to number', () => {
    test('true should be returned with value that can be transform to number', () => {
        const actual = isNumeric('42');
        expect(actual).toEqual(true);
    });

    test('false should be returned with value that can\'t be transform to number', () => {
        const actual = isNumeric('hello');
        expect(actual).toEqual(false);
    });
});

describe('check if all symbols are uniq', () => {
    test('false should be returned with non-unique digits', () => {
        const actual = isStringUnique('9879');
        expect(actual).toEqual(false);
    })

    test('true should be returned with unique digits', () => {
        const actual = isStringUnique('4237');
        expect(actual).toEqual(true);
    })
});

describe('generate objects array from user input', () => {
    test('all digits are right and have right positions', () => {
        const actual = compareAnswer([1, 2, 3, 4], '1234');

        const expected = [{
            value: 1,
            isGuess: true,
            isRightPosition: true
        }, {
            value: 2,
            isGuess: true,
            isRightPosition: true
        },
            {
                value: 3,
                isGuess: true,
                isRightPosition: true
            },
            {
                value: 4,
                isGuess: true,
                isRightPosition: true
            }];

        expect(actual).toMatchObject(expected);
    });

    test('all digits are right, but some have wrong positions', () => {
        const actual = compareAnswer([1, 2, 3, 4], '3241');

        const expected = [{
            value: 3,
            isGuess: true,
            isRightPosition: false
        }, {
            value: 2,
            isGuess: true,
            isRightPosition: true
        },
            {
                value: 4,
                isGuess: true,
                isRightPosition: false
            },
            {
                value: 1,
                isGuess: true,
                isRightPosition: false
            }];
        expect(actual).toMatchObject(expected);
    });

    test('all digits are wrong', () => {
        const actual = compareAnswer([1, 2, 3, 4], '9876');

        const expected = [
            {
                value: 9,
                isGuess: false,
                isRightPosition: false
            },
            {
                value: 8,
                isGuess: false,
                isRightPosition: false
            },
            {
                value: 7,
                isGuess: false,
                isRightPosition: false
            },
            {
                value: 6,
                isGuess: false,
                isRightPosition: false
            }
        ];

        expect(actual).toMatchObject(expected);
    });
});

describe('check if answer is correct', () => {
    test('right answer', () => {
        const answerArray = [{
            value: 1,
            isGuess: true,
            isRightPosition: true
        }, {
            value: 2,
            isGuess: true,
            isRightPosition: true
        },
            {
                value: 3,
                isGuess: true,
                isRightPosition: true
            },
            {
                value: 4,
                isGuess: true,
                isRightPosition: true
            }];

        const actual = isRightAnswer(answerArray);

        expect(actual).toEqual(true);
    })

    test('wrong answer', () => {
        const answerArray = [{
            value: 1,
            isGuess: true,
            isRightPosition: false
        }, {
            value: 2,
            isGuess: true,
            isRightPosition: true
        },
            {
                value: 3,
                isGuess: true,
                isRightPosition: true
            },
            {
                value: 4,
                isGuess: true,
                isRightPosition: true
            }];

        const actual = isRightAnswer(answerArray);

        expect(actual).toEqual(false);
    })
})
