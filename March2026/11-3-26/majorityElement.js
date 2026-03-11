// GFG: Majority element 

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  majorityElement(arr) {
    // freq map
    const freq = new Map();

    // find and set freq
    for (let i = 0; i < arr.length; i++) {
      freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
    }

    // maj calculation
    const maj = arr.length / 2;

    // find the first number with maj condition getting satisfied
    for (const [k, v] of freq) {
      if (v > maj) return k;
    }

    // if no such element return -1
    return -1;
  }
}
