const Manager = require("../lib/Manager");
const manager = new Manager("Jeff", 2, "test@gmail.com", 15);

describe("Manager class", () => {
    it("Creates a new Manager object", () => {
        expect(typeof(manager)).toBe("object");
    });

    it("Assigns the manager a name", () => {
        expect(manager.name).toBe("Jeff");
    });

    it("Assigns the manager an id number", () => {
        expect(manager.id).toBe(2);
    });
    
    it("Assigns the manager an email", () => {
        expect(manager.email).toBe("test@gmail.com");
    });

    it("Assigns the manager a office number", () => {
        expect(manager.officeNumber).toBe(15);
    });

    describe("getName()", () => {
		it("Returns the manager's name", () => {
			expect(manager.getName()).toBe("Jeff");
		});
	});

	describe("getId()", () => {
		it("Returns the manager's id number", () => {
			expect(manager.getId()).toBe(2);
		});
	});

	describe("getEmail()", () => {
		it("Returns the manager's email address", () => {
			expect(manager.getEmail()).toBe("test@gmail.com");
		});
	});

    describe("getRole()", () => {
        it("Returns 'Manager'", () => {
            expect(manager.getRole()).toBe("Manager");
        });
    });
});