function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}
const sortedArray1: number[] = [1, 3, 5, 7];
const sortedArray2: number[] = [2, 4, 6, 8];
const mergedArray: number[] = mergeSortedArrays(sortedArray1, sortedArray2);
console.log(`Sorted Array 1: ${sortedArray1}`);
console.log(`Sorted Array 2: ${sortedArray2}`);
console.log(`Merged Sorted Array: ${mergedArray}`);

