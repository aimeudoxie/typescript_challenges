function findMax(arr: number[]): number {

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

const numbers: number[] = [2, 6, 1, 9, 8];
const maxNumber: number = findMax(numbers);
console.log(`Maximum value is: ${maxNumber}`);
