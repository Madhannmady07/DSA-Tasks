let nums = [0,0,0,0,1,1];

var findMaxLength = function (nums) {
    // convert 0's to -1
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 0) nums[i] = -1;
    }

    // sum - to store sum at each position
    // maxWindow - to maintain the maxWindows of equal 0's and 1's
    let sum = 0, maxWindow = 0;

    // map to maintain the sum and its idx
    // if the sum already found, we can make use of that idx
    let map = new Map();
    // for idx -1, the sum is 0
    map.set(0, -1);

    for(let i=0; i<nums.length; i++){
        sum += nums[i];

        // if the sum is already found in the map, then return the idx of that sum
        if(map.has(sum)){
              let idx = map.get(sum);
              maxWindow = Math.max(maxWindow, i - idx);
        } else {
            map.set(sum, i);
        }
    }

    return maxWindow;
};

console.log(findMaxLength(nums));