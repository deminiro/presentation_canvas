const triangle = document.getElementById('triangle');
const triangleContext = triangle.getContext('2d');

triangleContext.beginPath();
triangleContext.moveTo(100,10);
triangleContext.lineTo(200,10);
triangleContext.lineTo(150,110);
triangleContext.closePath();
triangleContext.fillStyle = 'yellow';
triangleContext.fill();
triangleContext.stroke();

