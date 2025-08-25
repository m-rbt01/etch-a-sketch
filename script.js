//DOM References
const sqrContainer = document.querySelector(".square-container");

//Functions
function createGrid(squaresPerSide){
    for(let i = 0; i < squaresPerSide; i++){
        const square = document.createElement("div");
        sqrContainer.appendChild(square);
    }
}