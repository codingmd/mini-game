
var treasureLocation = Math.floor(Math.random() * 9);
console.log(treasureLocation);
do {
  bombLocation = Math.floor(Math.random() * 9);
}while (bombLocation===treasureLocation);

console.log(bombLocation);
var counter = 9;

function checkPosition(id) {

  if (counter>0) {
    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter;

    if (treasureLocation === id){
      document.getElementById(id).innerHTML = '<img src="https://www.goodfreephotos.com/albums/vector-images/treasure-chest-vector-art.png"/>';

    } else if (bombLocation === id){

      document.getElementById(id).innerHTML = '<img src="https://www.goodfreephotos.com/albums/vector-images/black-bomb-vector-clipart.png"/>';

    } else {
      document.getElementById(id).innerHTML = '<img src="http://res.freestockphotos.biz/pictures/10/10710-illustration-of-a-ladybug-pv.png"/>';
    }

    if (treasureLocation === id){

      document.getElementById("clicks").innerHTML = "";
      document.getElementById("counter").innerHTML = "You Win!";
      counter = 0;
    } else if (bombLocation === id){

          document.getElementById("clicks").innerHTML = "";
          document.getElementById("counter").innerHTML = "You Lose!";
          counter=0;
    }
  }
}
