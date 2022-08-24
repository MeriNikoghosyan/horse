/*window.onload = main;
const matrix =[];
const M = 7;
const N = 10;
let count = 0;

function main() {
    createMatrix();
    document.addEventListener(onkeypress);
}

function createMatrix () {
    const tBody =document.getElementById("bodyId");
    for (let i = 0; i < M; i++){
        matrix[i] = [];
        const row = document.createElement("tr");
        for(let j = 0; j < N; j++){
            matrix[i][j]= 0;
            const box = document.createElement("td");
            box.setAttribute("Id",`${i}_${j}`);
            box.addEventListener("click", onBoxClick);
            row.appendChild(box);
        }
        tBody.appendChild(row);
    }
}
function onBoxClick (event) {
const box = event.target;
const id = box.getAttribute("id");
const paths = id.split("_");
const i = +paths[0];
const j = +paths[1];
console.log(i,j);

switch(count){
    case 0:{ setStartPoint(i,j);
    break;}

    case 1:{ setEndPoint(i,j);
    break;}

    default:{ setWall(i,j);
    break;}

}

count++;

}

function setStartPoint(i,j){
   matrix[i][j]= 1;
   const box = document.getElementById(`${i}_${j}`);
   box.classList.add("red")
}
function setEndPoint(i,j){
    matrix[i][j]= M*N;
    const box = document.getElementById(`${i}_${j}`);
    box.classList.add("green")
 }
 function setWall(i,j){
    matrix[i][j]= 2;
    const box = document.getElementById(`${i}_${j}`);
    box.classList.add("gray")
 }*/


 window.onload = main;
const matrix = [];
const M = 8;
let horseI = 0;
let horseJ = 0;

function main () {
    createMatrix();
    initMatrix();
    putHorse();
  const id = setInterval(() => {
    if (isFinite()){
        clearInterval(id)
        return;
    }
    initMatrix();
        moveHorse();

  }, 300);
        
  
   console.log(matrix);
};

function createMatrix (){
    const table = document.getElementById("tableId");
    for (let i = 0; i < M; i++) {
        matrix[i] = [];
        const row = document.createElement("tr");
        for (let j = 0; j < M; j++){
            matrix[i][j] = 0;
            const box = document.createElement("td");
            box.setAttribute("id", `${i}_${j}`);
            row.appendChild(box);
        }
        table.appendChild(row);
    }
}
function initMatrix(){
    for(let i =0; i < M; i++){
        for(let j = 0; j < M ; j++) {
            if (matrix[i][j] !== -1){
                matrix[i][j]= getBoxAvilableMoves(i, j).length;
            }
        }
    }

}
function getBoxAvilableMoves(i,j){
    const boxesAvilable = [];
    if (i + 2 < M && j + 1 < M && matrix[i + 2][j + 1] !== -1){
        boxesAvilable.push({i: i + 2, j: j + 1}) 
    }
    if (i + 2 < M && j - 1 >= 0 && matrix[i + 2][j - 1] !== -1){
        boxesAvilable.push({i: i + 2, j: j - 1}) 
    }
    if (i - 2 >= 0 && j + 1 < M && matrix[i - 2][j + 1] !== -1){
        boxesAvilable.push({i: i - 2, j: j + 1}) 
    }
    if (i - 2 >= 0 && j - 1 >= 0 && matrix[i - 2][j - 1] !== -1){
        boxesAvilable.push({i: i - 2, j: j - 1}) 
    }
    if (i + 1 < M && j + 2 < M && matrix[i + 1][j + 2] !== -1){
        boxesAvilable.push({i: i + 1, j: j + 2}) 
    }
    if (i + 1 < M && j - 2 >= 0 && matrix[i + 1][j - 2] !== -1){
        boxesAvilable.push({i: i + 1, j: j - 2}) 
    }
    if (i - 1 >= 0 && j + 2 < M && matrix[i - 1][j + 2] !== -1){
        boxesAvilable.push({i: i - 1, j: j + 2}) 
    }
    if (i - 1 >= 0 && j - 2 >= 0 && matrix[i - 1][j - 2] !== -1){
        boxesAvilable.push({i: i - 1, j: j - 2}) 
    }
    return boxesAvilable;
}

function putHorse () {
    matrix[horseI][horseJ]= -1;
    const box = document.getElementById(`${horseI}_${horseJ}`);
    box.classList.add("green");
}


function moveHorse(){
const boxesAvilable= getBoxAvilableMoves(horseI, horseJ);
const minBox = getBoxMinVal(boxesAvilable);
   horseI = minBox.i;
   horseJ = minBox.j;
   putHorse(); 
};

function getBoxMinVal (boxes){
    let minVal = 8;
    let minBox = boxes[0];
    boxes.forEach(box => {
        if(matrix[box.i][box.j] < minVal){
            minBox = box;
            minVal = matrix[box.i][box.j];
        }
    });
    return minBox;
}

 function IsFinish() {
    for(let i = 0; i < M; i++){
        for (let j = 0; j < M; j++){
            if (matrix[i][j] !== -1){
                return false;
            }
        }
    }
    return true;
 }




 