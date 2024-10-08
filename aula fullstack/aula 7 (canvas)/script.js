let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.strokeRect(10,10,50,50);
ctx.fillRect(10,10,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.lineTo(100,200);
ctx.stroke();
ctx.closePath();


// arco
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.arc(200,200,50,Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.font = "90px Arial"
ctx.strokeText("Olá",200,200)
ctx.fillText("Olá",200,200);
ctx.closePath();