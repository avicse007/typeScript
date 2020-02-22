"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));
console.log(add(3, "tuw"));
console.log(add(3));
function addWithOptional(a, b, c) {
    return a + b + c;
}
console.log(addWithOptional(3, 4));
console.log(addWithOptional(3, 4, 6));
function addWithDefault(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(addWithDefault(3, 4));
console.log(addWithDefault(3, 4, 6));
function addWithRetuenType(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(addWithRetuenType(3, 4));
console.log(addWithRetuenType(3, 4, 6));
