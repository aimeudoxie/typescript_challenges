function shareKeyValue(obj1: object, obj2: object): boolean {
    for (const key1 in obj1) {
        if (obj1.hasOwnProperty(key1) && obj2.hasOwnProperty(key1) && obj1[key1] === obj2[key1]) {
            return true;
        }
    }

    return false;
}
const objA: object = { name: "Eudoxie", age: 20, city: "Kigali City" };
const objB: object = { city: "Kigali city", job: "software engineer" };

const sharedKeyValueExists: boolean = shareKeyValue(objA, objB);
console.log(`Do the objects share at least one key-value pair? ${sharedKeyValueExists}`);
