let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

var trap = function (height) {
  let n = height.length;

  // edge case check
  if (n == 0) return 0;

  // create 2 arrays, which will hold max height
  // leftMax - will hold, max left height from the current
  // rightMax - will hold, max right height from the current
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);

  // set default value starting values
  // for left - first element's max height is ... its height
  // for right - first element's max height is ... its height
  leftMax[0] = height[0];
  rightMax[n - 1] = height[n - 1];

  // * : calculate max left height for each current element
  // ignore first element from left, cuz we already found it
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // * : calculate max right height for each current element
  // ignore first element from right, cuz we already found it
  for (let i = n-2; i>=0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // formula to calculate water trapped for a current position
  let trappedWater = 0;

  for(let i=0; i<n; i++){
    trappedWater+=Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return trappedWater;
};;

console.log(trap(height));
