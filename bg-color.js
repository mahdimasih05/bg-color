//manual select form
function ChFunction() {
  var value = document.getElementById("select").value;
  switch (value) {
    case "re":
      document.body.style.backgroundColor = "red";
      break;
    case "gr":
      document.body.style.backgroundColor = "green";
      break;
    case "bl":
      document.body.style.backgroundColor = "blue";
      break;
    case "pi":
      document.body.style.backgroundColor = "pink";
      break;
    case "or":
      document.body.style.backgroundColor = "orange";
      break;
    case "ye":
      document.body.style.backgroundColor = "yellow";
      break;
    case "pu":
      document.body.style.backgroundColor = "purple";
      break;
    case "ge":
      document.body.style.backgroundColor = "grey";
      break;
    case "bla":
      document.body.style.backgroundColor = "black";
      break;
    case "wh":
      document.body.style.backgroundColor = "white";
      break;
  }
}

//random
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

var x = 0;
function RaFunction() {
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
