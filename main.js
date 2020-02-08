var div1 = document.createElement("div");
div1.className = "demo";
document.body.appendChild(div1);

var x = false;
var lastX;
var lastY;

div1.onmousedown = function(e) {
  x = true;
  lastX = e.clientX;
  lastY = e.clientY;
};

document.onmouseup = function(e) {
  x = false;
};

document.onmousemove = function(e) {
  if (x === true) {
    var deltaX = e.clientX - lastX;
    var deltaY = e.clientY - lastY;

    var top = parseInt(div1.style.top) || 0;
    var left = parseInt(div1.style.left) || 0;

    var resultY = top + deltaY;
    var resultX = left + deltaX;

    if (resultY < 0) {
      resultY = 0;
    }

    if (resultX < 0) {
      resultX = 0;
    }

    div1.style.top = resultY + "px";
    div1.style.left = resultX + "px";

    lastX = e.clientX;
    lastY = e.clientY;
  }
};
