/* 
    Checks if two arrays are equal
*/
function arrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((element, index) => element === arr2[index]);
}

/* 
    Generates a nested Array
    Accepts levels param to specify how deep the array should be 
    Starting with first level every 1000 levels has a number in it,
    e.g 2000 levels deep will have 1,2,3 nested every 1000 levels
*/
function generateNestedArray(levels) {
    if (levels <= 0) {
        return [];
    }

    let result = [];
    let current = result;

    for (let i = 1; i <= levels; i++) {
        if (i === 1 || i % 1000 === 0) {
            // Add a number at first level and every 1000 levels
            const numberToAdd = i === 1 ? 1 : Math.floor(i / 1000) + 1;
            current.push(numberToAdd);
            current.push([]);
            current = current[current.length - 1];
        } else {
            current.push([]);
            current = current[0];
        }
    }

    return result;
}

module.exports = { arrayEqual, generateNestedArray };
