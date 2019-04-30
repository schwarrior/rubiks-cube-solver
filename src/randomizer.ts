export class Randomizer {

    //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    static getRandomArbitrary = (min : number, max : number) : number => {
        return Math.random() * (max - min) + min;
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    static getRandomInt = (min : number, max : number) : number => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static testRandoms = (min : number, max : number, iterations : number) => {
        console.log(`${iterations} randoms between ${min} - ${max}:`)
        for (let i = 0; i < iterations; i ++) {
            console.log(Randomizer.getRandomArbitrary(min, max))
        }
        console.log(`${iterations} random ints between ${min} - ${max}:`)
        for (let i = 0; i < iterations; i ++) {
            console.log(Randomizer.getRandomInt(min, max))
        }
        
    }

}