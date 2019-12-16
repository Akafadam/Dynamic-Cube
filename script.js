const cube  = document.querySelector('.cube');
const cubeRect = cube.getBoundingClientRect()
const text = document.querySelector('.text');
const xAxis = cubeRect['width']/2;
const yAxis = cubeRect['height']/2;
let counter = 0;

const spin = () =>{
  deltaY = event.offsetY - yAxis;
  deltaX = event.offsetX - xAxis;

  atan = Math.atan2(deltaY,deltaX);
  degrees = toDegrees(atan);
  
  cube.style.transform = `rotate(${counter}deg)`;
  counter = counter + degrees/10;
  text.innerHTML = `deltaX: ${deltaX}<br>deltaY: ${deltaY}<br>counter: ${counter}<br>degrees: ${degrees}`;
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