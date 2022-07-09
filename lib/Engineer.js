const Employee = requirede('./Employee.js')
//passing inheritants from Employee to Engineer
class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email,role);

        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return Engineer
    }

}

module.exports = Engineer;