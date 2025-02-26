const { arrayEqual, generateNestedArray } = require('./helpers');

function infiniteFlat(arr) {
    // your wonderful implementation here
}

// ---------------------------------------TESTS---------------------------------------------------
// const result1 = infiniteFlat([1, 2, 3, 4, 5]);
// console.log(`Test 1: ${arrayEqual(result1, [1, 2, 3, 4, 5]) ? 'PASSED' : 'FAILED'}`);

// const result2 = infiniteFlat([1, [2, [3, [4, [5]]]]]);
// console.log(`Test 2: ${arrayEqual(result2, [1, 2, 3, 4, 5]) ? 'PASSED' : 'FAILED'}`);

// const result3 = infiniteFlat([]);
// console.log(`Test 3: ${arrayEqual(result3, []) ? 'PASSED' : 'FAILED'}`);

// const result4 = infiniteFlat([[1, 2], [3, 4], [5]]);
// console.log(`Test 4: ${arrayEqual(result4, [1, 2, 3, 4, 5]) ? 'PASSED' : 'FAILED'}`);

// const result5 = infiniteFlat([1, 2, [3, [4, 5]], 6, [[7]]]);
// console.log(`Test 5: ${arrayEqual(result5, [1, 2, 3, 4, 5, 6, 7]) ? 'PASSED' : 'FAILED'}`);

// const result6 = infiniteFlat([null, undefined, [true, [false]]]);
// console.log(`Test 6: ${arrayEqual(result6, [null, undefined, true, false]) ? 'PASSED' : 'FAILED'}`);

// const result7 = infiniteFlat(generateNestedArray(20000));
// console.log(
//     `Test 7: ${arrayEqual(result7, [1, 2, 3, 4, 5, 6, 7, 21, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]) ? 'PASSED' : 'FAILED'}`
// );
