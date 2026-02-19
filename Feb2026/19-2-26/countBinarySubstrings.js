// leetcode: 696

var countBinarySubstrings = function (s) {
  // 1.1 prev - prev equal group
  // 1.2 curr - to track, equal elements on the go
  let prev = 0;
  let curr = 1;
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      // 2.1 same numbers means, add to group, and move on
      curr++;
    } else {
      // 2.2 diff numbers means, add and store the min same group val
      // and update the perv and curr
      count += Math.min(curr, prev);
      prev = curr;
      curr = 1;
    }
  }

  // 3.1 for the last left group
  count += Math.min(curr, prev);

  return count;
};
