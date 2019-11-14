//var playButton = document.querySelector("#playButton");


var grid = document.getElementById('grid');
console.log(grid);


    //generate the grid
for(var i = 0; i < 10; i++) {
    row = grid.insertRow(i);
    for(var j = 0; j < 10; j++) {
        cell = row.insertCell(j);
    }
}


