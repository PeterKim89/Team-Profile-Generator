const Intern = require("../lib/Intern");
const intern = new Intern("Joe", 31, "test@gmail.com", "UCONN");

describe("Intern class", () => {
    it("Creates a new Intern object", () => {
        expect(typeof(intern)).toBe("object");
    });

    it("Assigns the itern a name", () => {
        expect(intern.name).toBe("Joe");
    });

    it("Assigns the intern an id number", () => {
        expect(intern.id).toBe(31);
    });
    
    it("Assigns the intern an email", () => {
        expect(intern.email).toBe("test@gmail.com");
    });

    it("Assigns the intern a school", () => {
        expect(intern.school).toBe("UCONN");
    });

    describe("getName()", () => {
		it("Returns the intern's name", () => {
			expect(intern.getName()).toBe("Joe");
		});
	});

	describe("getId()", () => {
		it("Returns the intern's id number", () => {
			expect(intern.getId()).toBe(31);
		});
	});

	describe("getEmail()", () => {
		it("Returns the intern's email address", () => {
			expect(intern.getEmail()).toBe("test@gmail.com");
		});
	});

    describe("getGithub()", () => {
        it("Returns the intern's school", () => {
            expect(intern.getSchool()).toBe("UCONN");
        });
    });

    describe("getRole()", () => {
        it("Returns 'Intern'", () => {
            expect(intern.getRole()).toBe("Intern");
        });
    });
});