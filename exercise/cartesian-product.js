/**
 * Given two finite non-empty sets, find their Cartesian Product
 *
 */

const a = [1, 2];
const b = [3, 4];


function cartesianProduct(array1, array2) {
    const output = []
    
    // Loop over first array
    array1.forEach(array1Value => {
        // Loop over second array
        array2.forEach(array2Value => {
            // create new 2D arrays with combinations
            output.push([array1Value, array2Value])
        });
    });
    return output
}

console.log(cartesianProduct(a, b)) // [[1, 3], [1, 4], [2, 3], [2, 4]]
