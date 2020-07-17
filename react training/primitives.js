//primitive types
const number = 1;
const num2 = number;
console.log(num2)

// referance types
/*const person = {
    name: "Margarita"
};
const secondPerson = person;
person.name = "Dita";
console.log(secondPerson);*/

//out of conflicts

const person = {
    name: "Margarita"
};
const secondPerson = {
    ...person
};
person.name = "Dita";
console.log(secondPerson);