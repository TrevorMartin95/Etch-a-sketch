let gridDimension = 16;
let background = "black";
const grid = document.querySelector('.grid');


//Convert rgb to string
function toRgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}


//Background Colour
function changeColour(colour) {
    if (colour === "rgb") {
        return toRgb(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
    } else {
        return "black";
    }
    
}

function makeGrid(size, backgroundColour) {    
    grid.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
    grid.style.gridTemplateRows = (`repeat(${size}, 1fr`);

    //add the divs
    for(let i=0; i<size*size; i++) {
            const square = document.createElement("div");
            square.className = "square";
            square.innerText = "";
            grid.appendChild(square);
    }

    //Reset the board colour to white
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });

    //Add mouseover listener to change background
    squares.forEach(square => {
        if (backgroundColour === "rgb") {
            square.addEventListener("mouseover", function(){
                square.style.backgroundColor = changeColour("rgb");
              });
        }
        else {
        square.addEventListener("mouseover", function(){
            square.style.backgroundColor = backgroundColour;
          });
    }});
}

makeGrid(gridDimension, background);



//Reset board and ask for size
const reset = document.querySelector("#reset");
reset.onclick = function(){
    gridDimension = prompt("Enter grid size here: ");
    makeGrid(gridDimension, background);
}

//Change colour to RGB
const rgb = document.querySelector("#rgb")
rgb.onclick = function(){
    //background = changeColour("rgb");
    makeGrid(gridDimension, "rgb");
}

//Change colour back to default
const dflt = document.querySelector("#default")
dflt.onclick = function(){
    background = changeColour("black");
    makeGrid(gridDimension, background);
}



  

