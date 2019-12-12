const cube  = document.querySelector('.cube');
const text = document.querySelector('.text');
let counter = 0;

const spin = () =>{
  deltaY  = event.movementY/100;
  deltaX = event.movementX/100;
  
  atan = Math.abs(Math.atan2(deltaY,deltaX));
  degrees = toDegrees(atan);

  cube.style.transform = `rotate(${counter}deg)`;
  counter = counter + degrees/20;
  text.innerHTML = `deltaX: ${deltaX}<br>deltaY: ${deltaY}<br>counter: ${counter}<br>arcTan: ${degrees}`;
}

const play = () =>{
  cube.addEventListener('mousemove',spin);  
}

const stop = () =>{
  cube.removeEventListener('mousemove',spin);  
}

const toDegrees  = (angle) => {
  return angle * (180 / Math.PI);
}