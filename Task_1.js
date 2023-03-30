const nums = [2, 7, 11, 15];
const target = [9];

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let p = i + 1; p < nums.length; p++) {
      if (nums[i] + nums[p] === 9);
      return [i, p];
    }
  }
};
