
function countProperties(obj: object): number {
    return Object.keys(obj).length;
}
const exampleObject: object = { name: "Eudoxie", age: 22, city: "Kigali City" };
const numberOfProperties: number = countProperties(exampleObject);
console.log(`Number of properties in the object: ${numberOfProperties}`);
