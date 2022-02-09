type PropActions<T> = T extends { [key: string]: infer R } ? R : never
export type ReturnAnyActions<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
    PropActions<T>
    >

export type Result = {
    value: number,
    isGuess: boolean,
    isRightPosition: boolean,
};
