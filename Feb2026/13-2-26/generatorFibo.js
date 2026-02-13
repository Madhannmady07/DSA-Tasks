// leetcode: 2648

var fibGenerator = function* () {
  let first = 0,
    second = 1;
  while (true) {
    yield first;
    let next = first + second;
    first = second;
    second = next;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */