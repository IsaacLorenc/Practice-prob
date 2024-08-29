// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) return false;

    let count1 = {};
    let count2 = {};

    for (let nums of strNum1) {
        count1[nums] = (count1[nums] || 0) + 1;

    }

    for (let nums of strNum2) {
        count2[nums] = (count2[nums] || 0) + 1;
    }

    for (let key in count1) {
        if (count1[key] !== count2[key]) return false;
    }
    return true;
}

console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22,222))