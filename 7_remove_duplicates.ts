function removeDuplicates(arr: number[]): number[] {
    const uniqueArray: number[] = [];

    for (let value of arr) {
        if (!uniqueArray.includes(value)) {
            uniqueArray.push(value);
        }
    }

    return uniqueArray;
}
const originalArray: number[] = [1, 2, 3, 2, 4, 5, 6, 1];
const arrayWithoutDuplicates: number[] = removeDuplicates(originalArray);
console.log(`Original Array: ${originalArray}`);
console.log(`Array without Duplicates: ${arrayWithoutDuplicates}`);
