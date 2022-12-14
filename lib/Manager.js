//In addition to `Employee`'s properties and methods, `Manager` will also have the following:
//* `officeNumber`
//* `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNumber = officeNum;
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;