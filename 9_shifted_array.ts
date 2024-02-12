function shiftLeft(arr: number[]): number[] {
    if (arr.length <= 1) {
        // No need to shift for arrays with 0 or 1 element
        return arr;
    }

    const shiftedArray: number[] = [...arr.slice(1), arr[0]];

    return shiftedArray;
}
const originalArray: number[] = [2, 4, 5, 6, 7];
const shiftedArray: number[] = shiftLeft(originalArray);
console.log(`Original Array: ${originalArray}`);
console.log(`Shifted Array: ${shiftedArray}`);