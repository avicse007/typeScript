function add(a:number,b:number){
    return a+b;
}

console.log(add(3,4));
console.log(add(3,"tuw"));
console.log(add(3));

function addWithOptional(a:number,b:number,c?:number){
    return a+b+c;
}
console.log(addWithOptional(3,4));
console.log(addWithOptional(3,4,6));

function addWithDefault(a:number,b:number,c:number=0){
    return a+b+c;
}
console.log(addWithDefault(3,4));
console.log(addWithDefault(3,4,6));

function addWithRetuenType(a:number,b:number,c:number=0):number{
    return a+b+c;
}

console.log(addWithRetuenType(3,4));
console.log(addWithRetuenType(3,4,6));