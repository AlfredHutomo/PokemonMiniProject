export function pokemonNoFormat(numId: number): string {
    const DIGITS = 3;
    const stringNumber = String(numId).split('');

    while (stringNumber.length < DIGITS) {
        stringNumber.unshift('0');
    }

    return stringNumber.join('');
}
