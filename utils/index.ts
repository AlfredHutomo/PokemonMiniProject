/**
 * It takes a number and returns a string with the number formatted as a Pokemon number.
 * @param {number} numId - The number of the pokemon.
 * @returns A string.
 */
export function pokemonNoFormat(numId: number): string {
    const DIGITS = 3;
    const stringNumber = numId.toString().split('');

    while (stringNumber.length < DIGITS) {
        stringNumber.unshift('0');
    }

    return '#' + stringNumber.join('');
}
