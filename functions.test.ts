const {shuffleArray} = require('./utils')


describe('shuffleArray should return an array which should be the same length as argument', () => {
    test("shuffleArray should return an array data type", () => {
        expect(typeof shuffleArray()).toBe("array")
    })
    test("shuffleArray should return an array of the same length as the argument", () => {
        expect(shuffleArray([1, 2, 3]).length).toBe(3)
    })
})
