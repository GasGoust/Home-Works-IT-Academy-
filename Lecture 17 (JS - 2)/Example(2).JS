"use strict"
// SPEED
let speedStr =+ prompt("Ваша скорость")
let speed = parseFloat(speedStr)
if(speed<60) console.log("норма")
else if (speed<80) console.log("превышение")
else if (speed<100) console.log("вы с ума сошли")
else console.log("полёт")
//-------------------------------------------
