// leetcode: 3713

var longestBalanced = function (s) {
  let n = s.length,
    max = 0;

  // loop through every string combination and check, hasSameFreq or not
  for (let i = 0; i < n; i++) {
    let freq = new Array(26).fill(0);

    for (let j = i; j < n; j++) {
      let ch = s[j];
      let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
      freq[idx]++;

      // update only when the substring has same freq
      if (isSameFreq(freq)) {
        max = Math.max(max, j - i + 1);
      }
    }
  }

  return max;
};

function isSameFreq(freq) {
  let val = 0;

  for (let a of freq) {
    // if any freq is 0, ignore
    if (a == 0) continue;
    // 1. for the first time, assign val with first met freq
    else if (val == 0) val = a;
    // 2. for the rest, all freq should match, or else false
    else if (a !== val) return false;
  }

  return true;
}
