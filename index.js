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
  var elmList = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < elmList.length; i++) {
    var x = elmList[i].innerHTML;
    elmList[i].innerHTML = num + parseInt(x);
  }
}

function deepestChild() {
  var elmNum = document.querySelector('div#grand-node').querySelectorAll('*').length;
  var elm = document.querySelector('div#grand-node');
  for (var i = 0; i < elmNum; i++) {
    if (!elm.hasChildNodes()) {
      return elm;
    } else {
      elm = elm.querySelector('*');
    }
  }
  return elm;
}