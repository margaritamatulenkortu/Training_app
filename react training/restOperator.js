const num = [1, 2, 3];
const newnum = [...num, 4];
console.log(newnum);
const person = {
   name: "Max"
};


//spread operator
const newperson = {
    ...person,
    age: 22
};
console.log(newperson);


//rest operator
const filter = (...args) => {
return args.filter(el => el === 3);
}
console.log(filter(1,2,3));



//destructing arraays
const numbers = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1, num3);

