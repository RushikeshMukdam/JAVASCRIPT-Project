document.getElementById("incrementBtn").addEventListener("click",incermentCounter);
document.getElementById("decrementBtn").addEventListener("click",decrementCounter);

document.getElementById('resetBtn').addEventListener("click",resetCounter);

let counterDisplay = document.getElementById("counterDisplay");
let countervalue = 0;

function updateCounterDisplay(params) {
   counterDisplay.textContent = countervalue;
}

function incermentCounter(params) {
    countervalue++; 
    updateCounterDisplay();
}

function decrementCounter(params) {
    if(countervalue>0){
        countervalue--;
        updateCounterDisplay();
    }
}

function resetCounter(params) {
    countervalue = 0;
    updateCounterDisplay();
}