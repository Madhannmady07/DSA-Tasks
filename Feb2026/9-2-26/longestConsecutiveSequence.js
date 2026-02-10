// Leetcode: 128

var longestConsecutive = function (nums) {
  // put the array into a  set to remove duplicates and to have a O(n) lookup
  let set = new Set(nums);

  // maintain a maxLen, which is to be returned
  let maxLen = 0;

  for (let num of set) {
    // if the current's prev is not there, then current element is starting
    // if this condition pass only, we need to enter checking or else skip basically
    if (!set.has(num - 1)) {
      // assign the current value to a variable
      let curr = num;

      // maintain the len variable, to compare and increase the longest conseq sequence
      let len = 1;

      while (set.has(curr + 1)) {
        curr++;
        len++;
      }

      maxLen = Math.max(maxLen, len);
    }
  }

  return maxLen;
};