// Only change code below this line
function splitArrayInGroups(arr, n) {
    var result11 = [];
    
    for (var i = 0; i < n; i++) {
        result11.push(arr.splice(0, n))
    }
    return result11;
}    
// Only change code above this line
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // Change this line
module.exports = splitArrayInGroups;
