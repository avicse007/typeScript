class Person4 {
    
        readonly firstName:string;
        readonly lastName : string;

        constructor(firstName : string ,lastName: string){
            this.firstName=firstName;
            this.lastName=lastName;

        }
    

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

}

let p4= new Person4("Avinash","Kumar Singh");
console.log("The p3 full name ",p4.getFirstName()+" "+p4.getLastName());
p4.firstName="Can change it as its read only";