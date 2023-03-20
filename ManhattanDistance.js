const array = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');
const fistArray = array[0].split(' ').map(Number);
const N = fistArray[0];
const H = fistArray[1];
const W = fistArray[2];
const P = fistArray[3];
const Q = fistArray[4];

let reservedArray = [];
for(i = 1;i <= N;i++){
    reservedArray.push(array[i]);
}

const maxManhattanDistance = (H - 1) + (W - 1);

let sheet = ""
let sheetArray = [];
for(i = 0;i < H;i++){
    for(j = 0;j < W;j++){
        sheet = `${i} ${j}`;
        sheetArray.push(sheet);
    }
}

let resultArray = [];

for(i = 0;i <= maxManhattanDistance;i++){
    for(j = 0;j < sheetArray.length;j++){
        let selected = sheetArray[j].split(' ').map(Number);
        let selectedP = selected[0];
        let selectedQ = selected[1];
        
        let nowManhattanDistance = Math.abs(P - selectedP) + Math.abs(Q - selectedQ);
        if(nowManhattanDistance === i){
            let selectedPQ = `${selectedP} ${selectedQ}`;
            if(reservedArray.includes(selectedPQ) == false){
                resultArray.push(selectedPQ);
            }
        }
         
    }
    if(resultArray.length >= 1){
        break;
    }
}
for(i = 0;i < resultArray.length;i++){
    let resultPQ = resultArray[i].split(' ').map(Number);
    console.log(resultPQ[0] + ' ' + resultPQ[1]);
}