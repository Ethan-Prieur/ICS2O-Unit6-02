document.getElementById("btn").addEventListener("click", myFunction);
function myFunction() {
  var x = document.getElementById("box").value
  x = parseInt(x);
  if (x > 0) {
    alert("that is a positive number")
  } else if (x < 0) {
    alert("that is a negative number")
  } else {
    alert("that isn't a positive or a negative number")
  }
}
