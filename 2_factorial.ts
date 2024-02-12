function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const a: number = 6;
const r: number = factorial(num);
console.log(`Factorial of ${a} is: ${r}`);