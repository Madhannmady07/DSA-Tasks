var searchRange = function (nums, target) {
  let ans = [0, 0];

  let start = searchIndex(nums, target, true);
  let end = searchIndex(nums, target, false);

  ans[0] = start;
  ans[1] = end;

  return ans;
};

function searchIndex(arr, target, startIndex) {
  let ans = -1;

  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (arr[mid] > target) {
      e = mid - 1;
    } else if (arr[mid] < target) {
      s = mid + 1;
    } else {
      // potential ans
      ans = mid;
      if (startIndex) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
  }

  return ans;
}
