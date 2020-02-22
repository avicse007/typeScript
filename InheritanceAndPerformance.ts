interface Person1{
    firstName : string;
    lastName :string;
    greet()
}


class PersonClass implements Person1{

    firstName : string;
    lastName :string;

    greet(){
        console.log("Hey here");
    }

}

class Programmer extends PersonClass{

    greet(){
     console.log("Hi from Programmer");    
    }

    greetLikeNormalPeople(){
        super.greet();
    }

}

let p = new Programmer();
p.greet();
p.greetLikeNormalPeople();

let aPerson : Person1 = new PersonClass();

//Duck typing 

let someObj = {
    firstName : "Test",
    lastName : " Last _test",
    greet :()=>"Hello "
};

someObj = aPerson;