const Employee = require("../lib/Employee");


describe("Employee class", () => {
	it("Creates a new Employee object", () => {
        const employee = new Employee("Peter", 89, "test@gmail.com");
		expect(typeof(employee)).toBe("object");
	});

	it("Assigns the employee a name", () => {
        const employee = new Employee("Peter", 89, "test@gmail.com");
		expect(employee.name).toBe("Peter");
	});

	it("Assigns the employee an id number", () => {
        const employee = new Employee("Peter", 89, "test@gmail.com");
		expect(employee.id).toBe(89);
	});

	it("Assigns the employee an email address", () => {
        const employee = new Employee("Peter", 89, "test@gmail.com");
		expect(employee.email).toBe("test@gmail.com");
	});

	describe("getName()", () => {
		it("Returns the employee's name", () => {
            const employee = new Employee("Peter", 89, "test@gmail.com");
			expect(employee.getName()).toBe("Peter");
		});
	});

	describe("getId()", () => {
		it("Returns the employee's id number", () => {
            const employee = new Employee("Peter", 89, "test@gmail.com");
			expect(employee.getId()).toBe(89);
		});
	});

	describe("getEmail()", () => {
		it("Returns the employee's email address", () => {
            const employee = new Employee("Peter", 89, "test@gmail.com");
			expect(employee.getEmail()).toBe("test@gmail.com");
		});
	});

	describe("getRole()", () => {
		it("Returns 'Employee'", () => {
            const employee = new Employee("Peter", 89, "test@gmail.com");
			expect(employee.getRole()).toBe("Employee");
		});
	});
});
