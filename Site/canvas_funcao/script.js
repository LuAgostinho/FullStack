let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext('2d');

function cria_quadrado(cv, stroke, fill, x, y, w, h){
    cv.beginPath();
    cv.strokeStyle = stroke;
    cv.fillStyle = fill;
    cv.strokeRect(x,y,w,h);
    cv.fillRect(x,y,w,h);
    cv.closePath();
}

function cria_linha(cv, line, stroke, mx, my, lx, ly){
    cv.beginPath();
    cv.lineWidth = line;
    cv.strokeStyle = stroke;
    cv.moveTo(mx, my);
    cv.lineTo(lx, ly);
    cv.stroke();
    cv.closePath();
}

function cria_arco(cv, line, stroke, fill, x, y, radius, start, end){
    cv.beginPath();
    cv.lineWidth = line;
    cv.strokeStyle = stroke;
    cv.fillStyle = fill;
    cv.arc(x, y ,radius ,start ,end );
    cv.stroke();
    cv.fill();
    cv.closePath();
}

function cria_texto(cv, line, stroke, fill, x, y, txt, size){
    cv.beginPath();
    cv.lineWidth = line;
    cv.strokeStyle = stroke;
    cv.fillStyle = fill;
    cv.font = size;
    cv.strokeText(txt,x,y);
    cv.fillText(txt,x,y);
    cv.closePath();
}

cria_quadrado(ctx, 'blue', 'blue', 0, 0, 75, 75)
cria_quadrado(ctx, 'red', 'red', 425, 0, 75, 75)
cria_quadrado(ctx, 'cyan', 'cyan', 0, 200, 50, 50)
cria_quadrado(ctx, 'cyan', 'cyan', 0, 250, 50, 50)
cria_quadrado(ctx, 'cyan', 'cyan', 450, 225, 50,25)
cria_quadrado(ctx, 'cyan', 'cyan', 450, 250, 50, 25)
cria_quadrado(ctx, 'red', 'red', 200, 250, 50, 50)
cria_quadrado(ctx, 'yellow', 'yellow', 0, 400, 50, 100)
cria_quadrado(ctx, 'yellow', 'yellow', 50, 450, 50, 50)
cria_quadrado(ctx, 'black', 'black', 400, 450, 50, 50)
cria_quadrado(ctx, 'black', 'black', 450, 400, 50, 100)
cria_arco(ctx, 2, 'green', 'cyan', 250, 500, 50, Math.PI, 2*Math.PI)
cria_arco(ctx, 2, 'green', 'white', 250, 500, 140, Math.PI , 1.5*Math.PI)
cria_linha(ctx, 2, 'green',250, 250, 250, 450)
cria_linha(ctx, 2, 'blue', 75, 75, 250, 250)
cria_linha(ctx, 2, 'red', 425, 75, 250, 250)
cria_linha(ctx, 2, 'green', 0, 250, 500,250)
