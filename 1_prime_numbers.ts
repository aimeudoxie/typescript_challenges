function isPrime(number: number): boolean {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
const num: number = 34;
const result: boolean = isPrime(num);
console.log(`${num} is prime: ${result}`);