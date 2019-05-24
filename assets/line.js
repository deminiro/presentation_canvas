const line = document.getElementById('line');
const lineContext = line.getContext('2d');

lineContext.beginPath();
lineContext.moveTo(100,10);
lineContext.lineTo(200,10);
lineContext.stroke();
