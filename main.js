let subject=["Tamil","English","Maths","Science","Social"];
console.log("original array :", subject);
console.log("length of the array is "+subject.length);
console.log("method : array.fill(Science)");
let result = subject.fill("Science");
console.log("change in array : ", result);
console.log("return: length of array after fill() is "+result.length);