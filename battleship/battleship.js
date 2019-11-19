var gridAI = document.getElementById("gridAI");

function generateGrid(grid){
  for(let i = 0; i < 10; i++){
    var row = grid.insertRow(i);
    for(let j = 0; j < 10; j++){
      var  cell = row.insertCell(j);
      cell.setAttribute("ondrop", "drop(event)");
      cell.setAttribute("ondragover", "allowDrop(event)");

    }
  }
}

//generate the IAgrid and the player grid
generateGrid(gridAI);
generateGrid(gridPlayer);

//ship constructor
function Ship(name, number, size, orientation){
  this.name = name;
  this.number = number;
  this.size = size;
  this.orientation = orientation;
}

var destroyer = new Ship("destroyer", 1, 2, 1);
var cuirasse = new Ship("cuirasse", 1, 3, 1);
var croiseur = new Ship("croiseur", 1, 4, 1);
var porte_avion = new Ship("porte_avion", 1, 5, 1);

// return a randomINt below max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//drag and drop functions
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  console.log(ev.width);
}

function checkHorizontalDisponibility(grid, ship){
}
function checkVerticalDisponibility(grid, ship){
}


//display ships randomly
var shipList = [destroyer, cuirasse, croiseur, porte_avion];

function placeShips(grid, shipList){

  shipList.forEach(function(ship){
    var clear = true;
    for(let x = 0; x < ship.number; x++){
      var randomRow = getRandomInt(10);
      var randomCol = getRandomInt(10-ship.size+1);
      console.log("ship.size : " + ship.size);

      for(let k=0; k<ship.size; k++){
        if(grid.rows[randomRow].cells[randomCol+k].getAttribute("ship") == "true"){
          clear = false;
        }
      }
        if(clear == true){
          for(let j = 0; j < ship.size; j++){
            console.log("j: " + j + "  row: " + randomRow + "   col: " + parseInt(randomCol + j, 10));
            grid.rows[randomRow].cells[randomCol+j].setAttribute("ship", "true");
            grid.rows[randomRow].cells[randomCol+j].style.background = "red";
          }
        }else {
          shipList.push(ship);
          clear = true;
          console.log(shipList);
          console.log(shipList[2]);
        }

      }

  });

}

placeShips(gridAI, shipList);
