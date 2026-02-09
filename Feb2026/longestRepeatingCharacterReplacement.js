let s = "ABAB";

function LongestRepeatingCharacterReplacement(s) {
  // return the maxLen, ie the window
  let maxLen = 0;

  // sliding window
  let left = 0,
    right = 0;

  // map to maintain frequency
  let freq = new Map();

  // maintain a maxFreq variable for condition checking purpose
  let maxFreq = 0;

  // move wrt right
  for (let right = 0; right < s.length; right++) {
    // maintain the freq
    freq.set(s[right], (freq.get(s[right]) || 0) + 1);

    // each iteration, maintain maxFreq
    maxFreq = Math.max(maxFreq, freq.get(s[right]));

    // if the window is exceeding, then reduce the frequency from left
    while (right - left + 1 - maxFreq > k) {
      freq.set(s[left], freq.get(s[left]) - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}