// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:-
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
    const numsMap = {};

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if(numsMap[complement] ==! undefined) {
            return [numsMap[complement], i];
        }
        numsMap[nums[i]] = i;
    }
    return [];
}

const nums = [2, 3, 5, 8, 1];
const target = 8;
const indices = twoSum(nums, target);
console.log(indices);

// Example with Numbers
// Let's assume the nums array is [2, 7, 11, 15] and the target is 9.

// Iteration 1:

// i is 0.
// complement is 9 - 2 = 7.
// 7 is not found in numMap.
// Add 2 to numMap with index 0: numMap = { 2: 0 }.
// Iteration 2:

// i is 1.
// complement is 9 - 7 = 2.
// 2 is found in numMap with index 0.
// Return the array [0, 1].
// The function returns [0, 1] because the elements at indices 0 and 1 (2 and 7) in the nums array add up to the target 9.