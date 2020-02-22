export class Person{
    firstName : string;
    lastName :string;

    constructor(firstName : string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
let person1 = new Person("Avinash Kumar","Singh");
person1.firstName="Suraj";
person1.lastName="Singh"
console.log(person1);
let person2 = new Person("ACD","Singh");
person2.firstName="Avinash Kumar";
console.log(person2);