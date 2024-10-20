let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

let bola={
    x:120,
    y:120,
    raio:30,
    img:new Image(),
    desenha: function(){
        this.img.src = 'coracao.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,300,300)
    bola.desenha();
    requestAnimationFrame(animacao);
}
animacao();

document.addEventListener("mousemove",function(evento){
    rect=canvas.getBoundingClientRect();
    x_mouse=evento.clientX-rect.left,
    y_mouse=evento.clientY-rect.top;
    console.log(x_mouse,y_mouse);
    if(x_mouse<30){
        bola.x=0;
    }
    else if(x_mouse>270){
        bola.x=240;
    }
    else{
        bola.x=x_mouse-30;
    }
    if(y_mouse<30){
        bola.y=0;
    }
    else if(y_mouse>270){
        bola.y=240;
    }
    else{
        bola.y=y_mouse-30;
    }
})