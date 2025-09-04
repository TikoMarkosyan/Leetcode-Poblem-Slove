/**
 53. Maximum Subarray
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArraySolution = function (nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let dp: number[] = [];
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + Math.max(0, dp[i - 1]);
  }

  return Math.max(...dp);
};

console.log(maxSubArraySolution([1, 2, 3, 4, 5]));
