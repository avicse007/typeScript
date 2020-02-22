"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonClass = /** @class */ (function () {
    function PersonClass() {
    }
    PersonClass.prototype.greet = function () {
        console.log("Hey here");
    };
    return PersonClass;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hi from Programmer");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(PersonClass));
var p = new Programmer();
p.greet();
p.greetLikeNormalPeople();
var aPerson = new PersonClass();
//Duck typing 
var someObj = {
    firstName: "Test",
    lastName: " Last _test",
    greet: function () { return "Hello "; }
};
someObj = aPerson;
