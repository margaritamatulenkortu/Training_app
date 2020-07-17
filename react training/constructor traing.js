class Human{
    constructor(){
        this.gener = "feamel";
    }
    printGender(){
        console.log(this.gener);
    }
}
class Person extends Human{
    constructor(){
        super();
        this.name = "Margarita";
    }
    printMyName(){
        console.log(this.name)
    }
}
const person = new Person();
person.printMyName();
person.printGender();