let gageFactor = document.querySelector('#gageFactor');
let bridgeResistance = document.querySelector('#bridgeResistance');
let strain = document.querySelector('#strain');
let tempCoeffRes = document.querySelector('#tempCoeffRes');
let deltaT = document.querySelector('#deltaT');
let ohmsPerInch = document.querySelector('#ohmsPerInch');

//if microstrain <= 85 don't perform balance

function result(){
  console.log(gageFactor.value);
}

function update() {
gageFactor.addEventListener('input', result);
}

update();
