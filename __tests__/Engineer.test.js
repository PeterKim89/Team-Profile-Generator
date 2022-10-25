const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Bob", 12, "test@gmail.com", "BobGitHub");

describe("Engineer class", () => {
    it("Creates a new Engineer object", () => {
        expect(typeof(engineer)).toBe("object");
    });

    it("Assigns the engineer a name", () => {
        expect(engineer.name).toBe("Bob");
    });

    it("Assigns the engineer an id number", () => {
        expect(engineer.id).toBe(12);
    });
    
    it("Assigns the engineer an email", () => {
        expect(engineer.email).toBe("test@gmail.com");
    });

    it("Assigns the engineer a github username", () => {
        expect(engineer.github).toBe("BobGitHub");
    });

    describe("getName()", () => {
		it("Returns the engineer's name", () => {
			expect(engineer.getName()).toBe("Bob");
		});
	});

	describe("getId()", () => {
		it("Returns the engineer's id number", () => {
			expect(engineer.getId()).toBe(12);
		});
	});

	describe("getEmail()", () => {
		it("Returns the engineer's email address", () => {
			expect(engineer.getEmail()).toBe("test@gmail.com");
		});
	});

    describe("getGithub()", () => {
        it("Returns the engineer's github username", () => {
            expect(engineer.getGithub()).toBe("BobGitHub");
        });
    });

    describe("getRole()", () => {
        it("Returns 'Engineer'", () => {
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});