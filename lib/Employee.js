// name, id, email properties
// getName(), getId(), getEmail(), getRole() methods

// employee class with a constructor of name, id, and email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // return name of employee
    getName() {
        return this.name;
    }
    // return id of employee
    getId() {
        return this.id;
    }
    // return email of employee
    getEmail() {
        return this.email;
    }
    // return "Employee"
    getRole() {
        return "Employee";
    }
}