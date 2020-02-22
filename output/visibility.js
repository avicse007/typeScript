"use strict";
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person2.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person2.prototype.getLastName = function () {
        return this.lastName;
    };
    Person2.prototype.setLastName = function (lastName) {
        return this.lastName = lastName;
    };
    return Person2;
}());
// similarly you can do it 
var Person3 = /** @class */ (function () {
    function Person3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person3.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person3.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person3.prototype.getLastName = function () {
        return this.lastName;
    };
    Person3.prototype.setLastName = function (lastName) {
        return this.lastName = lastName;
    };
    return Person3;
}());
var p2 = new Person2();
p2.setFirstName("Avinash");
p2.setLastName("Kumar Singh");
console.log("The p2 full name ", p2.getFirstName() + " " + p2.getLastName());
var p3 = new Person3("Avinash", "Kumar Singh");
console.log("The p3 full name ", p3.getFirstName() + " " + p3.getLastName());
