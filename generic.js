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
exports.__esModule = true;
var classes_1 = require("./classes");
function echo(args) {
    return args;
}
var myVal = echo(1);
function echoGeneric(args) {
    return args;
}
var myVal1 = echoGeneric(1);
var myVal2 = echoGeneric(1);
var myVal3 = echoGeneric(1);
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    return Admin;
}(classes_1.Person));
var Mananger = /** @class */ (function (_super) {
    __extends(Mananger, _super);
    function Mananger(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    return Mananger;
}(classes_1.Person));
function echoPerson(person) {
    console.log(person.firstName);
    console.log(person.lastName);
    return person;
}
var foo = echoPerson(new Admin("AAAAA", "BBBBB"));
var bar = echoPerson(new Mananger("CCCC", "BBBBB"));
