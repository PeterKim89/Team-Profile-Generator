//In addition to `Employee`'s properties and methods, `Manager` will also have the following:
//* `officeNumber`
//* `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNum;
    }

    getRole() {
        return "Manager";
    }

}