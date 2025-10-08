// 이 코드를 개선하세요
function f(a) {
  var r = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      r.push(a[i]);
    }
  }
  return r;
}

module.exports = f;
