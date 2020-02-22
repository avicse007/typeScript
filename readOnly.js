var Person4 = /** @class */ (function () {
    function Person4(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person4.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person4.prototype.getLastName = function () {
        return this.lastName;
    };
    return Person4;
}());
var p4 = new Person4("Avinash", "Kumar Singh");
console.log("The p3 full name ", p4.getFirstName() + " " + p4.getLastName());
p4.firstName = "Can change it as its read only";
