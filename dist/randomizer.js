"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Randomizer = /** @class */ (function () {
    function Randomizer() {
    }
    //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    Randomizer.getRandomArbitrary = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    Randomizer.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Randomizer.testRandoms = function (min, max, iterations) {
        console.log(iterations + " randoms between " + min + " - " + max + ":");
        for (var i = 0; i < iterations; i++) {
            console.log(Randomizer.getRandomArbitrary(min, max));
        }
        console.log(iterations + " random ints between " + min + " - " + max + ":");
        for (var i = 0; i < iterations; i++) {
            console.log(Randomizer.getRandomInt(min, max));
        }
    };
    return Randomizer;
}());
exports.Randomizer = Randomizer;
//# sourceMappingURL=randomizer.js.map