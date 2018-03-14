let gageFactor = document.querySelector('#gageFactor > input')
let bridgeResistance = document.querySelector('#')
let strain = document.querySelector('#')
let tempCoeffRes = document.querySelector('#tempCoeffRes > value')
let deltaT = document.querySelector('#')
let ohmsPerInch = document.querySelector('#')

//if microstrain <= 85 don't perform balance

function result() {
  let inchesOfWire = ("gageFactor" * "bridgeResistance" * "strain") / ("tempCoeffRes" * "deltaT" * "ohmsPerInch");
  console.log("inchesOfWire");
}