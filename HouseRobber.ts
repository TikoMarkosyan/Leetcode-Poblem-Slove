/**
  198. House Robber
 * @param {number[]} nums
 * @return {number}
 */
const houseRobber = (nums: number[]): number => {
  if (nums.length === 1) {
    return nums[0];
  }
  let coin = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    coin[i] = Math.max(coin[i - 2] + nums[i], coin[i - 1]);
  }
  return coin[coin.length - 1];
};

console.log(houseRobber([1, 2, 4, 5]));
