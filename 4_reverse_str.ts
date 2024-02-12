function reverseString(input: string): string {
    let reversed = '';

    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }

    return reversed;
}

const originalString: string = "Eudoxie";
const reversedString: string = reverseString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);