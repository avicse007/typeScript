class Person2 {
        private firstName : string;
        private lastName :string;
    
        getFirstName(){
            return this.firstName;
        }
    
        setFirstName(firstName: string){
            this.firstName = firstName;
        }
    
        getLastName(){
            return this.lastName;
        }
    
        setLastName(lastName : string){
            return this.lastName = lastName;
        }


}

// similarly you can do it 

class Person3 {
    
    constructor(private firstName:string,private lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName(){
        return this.firstName;
    }

    setFirstName(firstName: string){
        this.firstName = firstName;
    }

    getLastName(){
        return this.lastName;
    }

    setLastName(lastName : string){
        return this.lastName = lastName;
    }


}

let p2 = new Person2();
p2.setFirstName("Avinash");
p2.setLastName("Kumar Singh");
console.log("The p2 full name ",p2.getFirstName()+" "+p2.getLastName());

let p3 = new Person3("Avinash","Kumar Singh");
console.log("The p3 full name ",p3.getFirstName()+" "+p3.getLastName());