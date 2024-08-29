// add whatever parameters you deem necessary
function countPairs(arr, targetPair) {
    let left = 0;
    let right = arr.length - 1;
    let counter = 0;

    arr.sort((a, b) => a - b);

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === targetPair) {
            counter ++;
            left ++;
            right --;
        } else if (sum < targetPair) {
            left ++;
        } else {
            right --;
        }
    }
    return counter;
}
console.log(countPairs([3, 1, 5, 4, 2], 6)); // Expected: 2
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // Expected: 3
console.log(countPairs([4, 6, 2, 7], 10)); // Expected: 1
console.log(countPairs([1, 2, 3, 4, 5], 10)); // Expected: 0
console.log(countPairs([1, 2, 3, 4, 5], -3)); // Expected: 0
console.log(countPairs([0, -4], -4)); // Expected: 1
console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // Expected: 2