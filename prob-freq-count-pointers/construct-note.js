// add whatever parameters you deem necessary
function constructNote(str, message) {
    let strCount = {};
    let messageCount = {};

    for (let char of message) {
        messageCount[char] = (messageCount[char] || 0) + 1;

    }

    for (let char of str) {
        strCount[char] = (strCount[char] || 0) + 1;
    }

    for (let char in messageCount) {
        if (messageCount[char] >= strCount[char]) return true;
    }
    return false;
}
console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true