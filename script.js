document.getElementById('btn').addEventListener('click', myFunction)
function myFunction () {
  let x = document.getElementById('box').value
  x = parseInt(x)
  if (x > 0) {
    alert('that is a positive number')
  } else if (x < 0) {
    alert('that is a negative number')
  } else {
    alert('that isnt a positive or a negative number')
  }
}
