const Employee = require("../lib/Employee");
const employee = new Employee("Peter", 89, "test@gmail.com");

describe("Employee class", () => {
	it("Creates a new Employee object", () => {
		expect(typeof(employee)).toBe("object");
	});

	it("Assigns the employee a name", () => {
		expect(employee.name).toBe("Peter");
	});

	it("Assigns the employee an id number", () => {
		expect(employee.id).toBe(89);
	});

	it("Assigns the employee an email address", () => {
		expect(employee.email).toBe("test@gmail.com");
	});

	describe("getName()", () => {
		it("Returns the employee's name", () => {
			expect(employee.getName()).toBe("Peter");
		});
	});

	describe("getId()", () => {
		it("Returns the employee's id number", () => {
			expect(employee.getId()).toBe(89);
		});
	});

	describe("getEmail()", () => {
		it("Returns the employee's email address", () => {
			expect(employee.getEmail()).toBe("test@gmail.com");
		});
	});

	describe("getRole()", () => {
		it("Returns 'Employee'", () => {
			expect(employee.getRole()).toBe("Employee");
		});
	});
});
