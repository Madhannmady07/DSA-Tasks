// Leetcode: 219 

var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();

  // initialise 2 pointers - to maintain window
  let left = 0,
    right = 0;

  for (let right = 0; right < nums.length; right++) {
    // if the window is greater than the mentioned - k
    // then remove the element from wrt left ptr of set to maintain window
    if (right - left > k) {
      set.delete(nums[left]);
      left++;
    }

    // if the element is found again the set, then return true;
    if (set.has(nums[right])) {
      return true;
    }

    // if the set doesn't have the element, then add it to the set
    set.add(nums[right]);
  }

  return false;
};
