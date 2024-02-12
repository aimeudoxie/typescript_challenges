function objectToArray(obj: object): [string, any][] {
    return Object.entries(obj);
}

const exampleObject: object = { name: "Eudoxie", age: 22, city: "Kigali City" };
const keyValueArray: [string, any][] = objectToArray(exampleObject);
console.log(`Object to Array: ${JSON.stringify(keyValueArray)}`); 
