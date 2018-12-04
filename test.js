var c = [
  {
    farmer: "卡斯柏"
  },
  {
    farmer: "查理"
  },
  {
    farmer: "john"
  },
  {
    farmer: "anna"
  }
];
var list = document.querySelector(".list");
list.addEventListener("click", updatelist, false);

function updatelist(e) {
  var str = "";
  var len = c.length;
  for (var i = 0; i < len; i++) {
    str += '<li data-num="' + i + '">我的名字是' + c[i].farmer + "</li>";
  }
  list.innerHTML = str;
}
updatelist();
function checklist(e) {
  var num = e.target.dataset.num;
  var nodename = e.target.nodeName;
  if (nodename !== "LI") {
    return;
  }
  c.splice(num, 1);

  updatelist();
}
list.addEventListener("click", checklist, false);
