import {Person} from "./classes"

function echo(args : any) : any{
    return args; 
}

let myVal:string = echo(1);

function echoGeneric<T>(args : T) : T{
    return args; 
}

let myVal1 :string = echoGeneric(1);

let myVal2 :number = echoGeneric(1);

let myVal3 = echoGeneric(1);

class Admin extends Person{
    constructor(firstName:string,lastName:string){
        super(firstName,lastName);
    }
    
}

class Mananger extends Person {
    constructor(firstName:string,lastName:string){
        super(firstName,lastName);
    }

}

function echoPerson <T extends Person>(person :T):T{
    console.log(person.firstName);
    console.log(person.lastName);
    return person;
}


let foo = echoPerson(new Admin("AAAAA","BBBBB"));
let bar = echoPerson(new Mananger("CCCC","BBBBB"));
