function countVowels(sentence: string): number {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let char of sentence) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}
const sentence: string = "Eudoxie";
const numberOfVowels: number = countVowels(sentence);
console.log(`Number of vowels in the sentence: ${numberOfVowels}`);