//employee constructor

class Employee {
    constructor (name,id,email,){
        this.name=name;
        this.id=id;
        this.email=email;
    }

    //returning name from input
    getName() {
            return this.name
        }

    //returning ID from input
    getId() {
            return this.Id
        }

    //returning email from input
    getEmail() {
            return this.email
        }
    
    //returning employess type
    getRole() {
        return "Employee"
    }
}

//to be exported
module.exports = Employee;