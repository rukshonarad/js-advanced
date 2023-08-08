function isOddNum(num) {
    return num % 2 !== 0;
}
function isDevisibleByThree(num) {
    return num % 3 === 0;
}

function filter(nums, cb) {
    const result = [];
    let i = 0;
    while (i < nums.length) {
        if (cb(nums[i])) {
            result.push(nums[i]);
        }
        i++;
    }
    return result;
}
console.log(filter);
//  part 2//
