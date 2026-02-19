// leetcode: 2724

// uses the concept of currying
var sortBy = (arr, fn) => arr.sort((a, b) => fn(a) - fn(b));