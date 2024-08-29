// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let obj = {};
    
    for (let i = 0; i < keys.length; i++) {
        // Assign the corresponding value or null if the value doesn't exist
        obj[keys[i]] = values[i] !== undefined ? values[i] : null;
    }
    
    return obj;
}

// Test cases
console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])); // {'x': 1, 'y': 2, 'z': null}