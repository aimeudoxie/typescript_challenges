function capitalizeEachWord(sentence: string): string {
    let capitalizedSentence = '';

    let capitalizeNext = true;

    for (let char of sentence) {
        if (char === ' ') {
            capitalizeNext = true;
        } else {
            if (capitalizeNext) {
                capitalizedSentence += char.toUpperCase();
                capitalizeNext = false;
            } else {
                capitalizedSentence += char.toLowerCase();
            }
        }
    }

    return capitalizedSentence;
}
const sentence: string = "umwari aime eudoxie";
const capitalizedSentence: string = capitalizeEachWord(sentence);
console.log(`Original Sentence: ${sentence}`);
console.log(`Capitalized Sentence: ${capitalizedSentence}`);