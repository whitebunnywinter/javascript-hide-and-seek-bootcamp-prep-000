function getFirstSelector(selector) {
  var elm = document.querySelector(selector);
  return elm;
}

function nestedTarget() {
  var elm = document.getElementById('nested').querySelector('.target');
  return elm;
}

function increaseRankBy(n) {
  var num = parseInt(n);
  var elmList = document.querySelectorAll('.ranked-list');
}