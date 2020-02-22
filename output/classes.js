"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
exports.Person = Person;
var person1 = new Person("Avinash Kumar", "Singh");
person1.firstName = "Suraj";
person1.lastName = "Singh";
console.log(person1);
var person2 = new Person("ACD", "Singh");
person2.firstName = "Avinash Kumar";
console.log(person2);
