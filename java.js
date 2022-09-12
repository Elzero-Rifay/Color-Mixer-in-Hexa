function chagneColor() {
  const red = parseInt(document.getElementById("red").value);
  const green = parseInt(document.getElementById("green").value);
  const blue = parseInt(document.getElementById("blue").value);
  const colors = "#" + hex(red) + hex(green) + hex(blue);

  function hex(v) {
    var hex = v.toString(16);
    if (v < 16) {
      hex = "0" + hex;
    }
    return hex;
  }
  document.body.style.backgroundColor = colors;
  document.getElementById("resultInHexa").innerHTML = colors;
  console.log("Done!");
}

const red = document.getElementById('red');
red.style.backgroundColor = 'red'
const ball = document.querySelector('input[type="range"]');
ball.style.backgroundColor = 'red'




// document.getElementById('red').addEventListener("onmousemove", chagneColor)
// document.getElementById('green').addEventListener("onmousemove", chagneColor())
// document.getElementById('blue').addEventListener("onmousemove", chagneColor())