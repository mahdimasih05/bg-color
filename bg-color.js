var color = [
  "black",
  "blue",
  "green",
  "grey",
  "red",
  "orange",
  "pink",
  "purple",
  "white",
  "yellow",
];

//manual select form
function ChFunction() {
  var value = document.getElementById("select").value;
  for (var m = 0; m < color.length; m++) {
    if ((color[m] = value)) {
      document.body.style.backgroundColor = color[m];
    }
  }
}

//random
var x = 0;
function RaFunction() {
  //slideshow background
  setTimeout(function () {
    document.body.style.backgroundColor = color[x];
    x++;
    if (x < color.length) {
      RaFunction();
    } else {
      x = 0;
      var random = Math.floor(Math.random() * 10) + 0;
      document.body.style.backgroundColor = color[random];
    }
  }, 100);
}
