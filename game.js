var sqr1 = document.getElementById("1")
var sqr2 = document.getElementById("2")
var sqr3 = document.getElementById("3")
var sqr4 = document.getElementById("4")
var sqr5 = document.getElementById("5")
var sqr6 = document.getElementById("6")
var sqr7 = document.getElementById("7")
var sqr8 = document.getElementById("8")
var sqr9 = document.getElementById("9")

var squares = document.querySelectorAll('td')

function ChangeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X'
  }else if (this.textContent === 'X') {
    this.textContent = 'O'
  }else{
    this.textContent = ''
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', ChangeMarker)
}
