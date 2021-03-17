// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar()", () => {
    describe("encoding Message",() =>{
        it("should encode a message by shifting the letters", () => {
            const expected = "phvvdjh";
            const actual = caesar("message", 3);  
            expect(actual).to.eql(expected);
        })
        it("should leaves spaces and other symbols as is", () => {
            const expected = "pb phvvdjh!";            
            const actual = caesar("my message!", 3);  
            expect(actual).to.eql(expected);
        })
        it("should ignore capital letters", () => {
            const expected = "pb phvvdjh!";            
            const actual = caesar("My Message!", 3);  
            expect(actual).to.eql(expected);
        })
        it("should appropriately handle letters at the end of the alphabet", () => {
            const expected = "abc";            
            const actual = caesar("xyz", 3);  
            expect(actual).to.eql(expected);
        })
    })
    describe("decoding a message",() =>{
        it("should allow for a negative shift that will shift to the left", () => {
            const expected = "jbppxdb"            
            const actual = caesar("message", 3,false);  
            expect(actual).to.eql(expected);
        })
        it("should decode a message by shifting the letters in the opposite direction", () => {
            const expected = "message"            
            const actual = caesar("jbppxdb", -3,false);  
            expect(actual).to.eql(expected);
        })
        it("should leaves spaces and other symbols as is", () => {
            const expected = "my message!"            
            const actual = caesar("pb phvvdjh!", 3,false);  
            expect(actual).to.eql(expected);
        })
        it("should ignore capital letters", () => {
            const expected = "my message!"            
            const actual = caesar("Pb PHVvdJH!", 3,false);  
            expect(actual).to.eql(expected);
        })
        it("should appropriately handle letters at the end of the alphabet", () => {
            const expected = "abc"            
            const actual = caesar("xyz", -3,false);  
            expect(actual).to.eql(expected);
        })
        it(" should allow for a negative shift that will shift to the left", () => {
            const expected = "jbppxdb"            
            const actual = caesar("message", -3,);  
            expect(actual).to.eql(expected);
        })
    })

    describe("error handling",() =>{   
        it("should return false if shift amount is 0", () => {
            const expected = false;
            const actual = caesar("Message", 0);  
            expect(actual).to.eql(expected);
        })
        it("should return false if shift amount is aboove 25", () => {
            const expected = false;
            const actual = caesar("Message", 26);
            expect(actual).to.eql(expected);
        })
        it("should return false if shift amount is less than -25", () => {
            const expected = false;
            const actual = caesar("Message", -26);
            expect(actual).to.eql(expected);
        })
    })
})
