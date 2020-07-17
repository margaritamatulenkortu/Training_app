class Human{
    geneder = "msale";

    printGender = () => {
        console.log(this.geneder);
    }
}

class Person extends Human {
        name = "Margarita";
        gender = "feamel";
    printMyName = () => {
        console.log(this.name)
    }
}
const person = new Person();
person.printMyName();
person.printGender();