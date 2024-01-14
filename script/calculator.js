document.addEventListener('keydown', function(event){
if(event.key.match(/[0-9+\-*/%]/) || event.keyCode === 190){
       Solve(event.key);
   }
});

document.addEventListener('keydown', function(event){
if(event.key.match(/Enter/)){
       Result();
   }
});

document.addEventListener('keydown', function(event){
    if(event.key.match(/Delete/)){
           Clear();
       }
});

document.addEventListener('keydown', function(event){
    if(event.keyCode === 8){
           Back();
       }
});

function Solve(value){
    let valueOfRes = document.getElementById('res');
    valueOfRes.value += value;
}

function Result(){
    let number1 = document.getElementById('res').value;
    let numArray = number1.split('%');
    if (numArray.length === 2) {
    let result = (parseFloat(numArray[0]) * parseFloat(numArray[1])) / 100;
    document.getElementById('res').value = result;
    } else {
    document.getElementById('res').value = eval(number1);
  }
}

function Clear(){
    let input = document.getElementById('res');
    input.value = '';
}

function Back(){
    let lastElement = document.getElementById('res');
    lastElement.value = lastElement.value.slice(0, -1);
}

