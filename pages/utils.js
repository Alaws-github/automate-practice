/**
 * Common utility functions
 */

class Utilities {

    /**
     * 
     * @param {int} max - The maximum value for the integer you want to be returned
     * @param {int} min - The minimum value for the integer you want to be returned
     */
    getRandomArbitrary(min, max) {
        const integer = Math.random() * (max - min) + min;
        return String(integer);
    }

    getRandomIndex(min, max){
        const integer = Math.random() * (max - min) + min;
        return Math.trunc(integer);
    }
}

module.exports = new Utilities()