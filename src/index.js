
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (matrix) {
    matrix.forEach((a,i) => {
      if (i % 2 == 0) {
        a.forEach((e) => res.push(e))
      } else {
        a.reverse().forEach((e) => res.push(e))
      }
    });
  }
  return res;
}