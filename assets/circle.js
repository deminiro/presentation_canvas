const circle = document.getElementById('circle');
const circleContext = circle.getContext('2d');

circleContext.beginPath();
circleContext.arc(150,60,50,0,2*Math.PI);
circleContext.fillStyle = 'red';
circleContext.fill();
circleContext.stroke();
