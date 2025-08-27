//Global Constants
const MAX_SPS = 100; //maximum number of squares per grid side
const MIN_SPS = 1; //minimum number of squares per grid size
const FULL_COLOR = 255; //full intensity of a given color 
const FULL_OPACITY = 1.0; //full opacity of a square's color
const NO_OPACITY = 0.0; //initial transparent state of a square
const TEN_PERCENT = 0.1; //to increment a square's opacity by 10%

//DOM References
const gridContainer = document.querySelector(".grid-container");
const resizeButton = document.querySelector("#resize-grid");

//Functions
function createGrid(squaresPerSide){
    if(squaresPerSide < MIN_SPS || squaresPerSide > MAX_SPS) alert(`${squaresPerSide} is out of range. Please try again with a number between ${MIN_SPS}-${MAX_SPS}.`);
    else{ //SPS is within the acceptable range
        gridContainer.innerHTML = ''; //clear the existing grid
        for(let r = 0; r < squaresPerSide; r++){ //Create new rows
            const row = document.createElement("div");
            row.setAttribute("class", "square-row");
            for(let c = 0; c < squaresPerSide; c++){ //Create new columns
                const square = document.createElement("div");
                square.setAttribute("class", "square-cell");
                square.style.opacity = NO_OPACITY;
                row.appendChild(square);
            }
            gridContainer.appendChild(row);
        }
    }
}

function changeSquareColor(hoverEvent){
    let targetNode = hoverEvent.target;
    if(targetNode.className === "square-cell"){ //change color only if event's target node is a square
        let red = randomizeColorValue();
        let green = randomizeColorValue();
        let blue = randomizeColorValue();
        targetNode.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        increaseColorOpacity(targetNode);
    }
}

function randomizeColorValue(){
    return Math.floor(Math.random() * FULL_COLOR + 1);
}

function increaseColorOpacity(square){
    let currentOpacity = parseFloat(square.style.opacity);
    if(currentOpacity < FULL_OPACITY) square.style.opacity = currentOpacity + TEN_PERCENT; //only increment opacity if not full
}

function resizeGrid(){
    let userInput = prompt(`Please enter the number of squares per side for the new grid (${MIN_SPS}-${MAX_SPS}):`);
    if(userInput !== null){ //if the user did not cancel the browser prompt
        if(Number.isNaN(+userInput)) alert(`"${userInput}" is not a number.`); 
        else{
            let newSquaresPerSide = parseInt(userInput);
            createGrid(newSquaresPerSide);
        }
    }
}

//Event Listeners
gridContainer.addEventListener("mouseover", changeSquareColor);
resizeButton.addEventListener("click", resizeGrid);

//On Page Load
createGrid(16);