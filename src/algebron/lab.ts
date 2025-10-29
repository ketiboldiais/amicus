function twoSum(nums: number[], target: number) {
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    const operand1 = nums[i];
    for (let j = 0; j < numsLength; j++) {
        if (j === i) continue;
        const operand2 = nums[j];
        const sum = operand1 + operand2;
        if (sum === target) {
            return [i,j];
        }
    }
  }
  return [-1,-1];
}

const result = twoSum([3,2,3], 6);
console.log(result);
