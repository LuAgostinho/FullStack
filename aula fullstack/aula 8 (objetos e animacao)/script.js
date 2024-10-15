let canvas = document.getElementById("canva");
let ctx = canvas.getContext('2d');

let retangulo ={
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    cor_linha: "blue",
    cor_preenchimento: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor_preenchimento;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

let retangulo2 ={
    x: 340,
    y: 340,
    largura: 50,
    altura: 50,
    cor_linha: "blue",
    cor_preenchimento: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor_preenchimento;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

console.log(retangulo.largura)
console.log(retangulo.cor_preenchimento)

retangulo.desenha();   
retangulo2.desenha();

function animacao(){
    ctx.clearRect(0,0,400,400);
    // if(retangulo.x < 350){
    //     retangulo.x = retangulo.x + 5;
    // }
    retangulo.desenha();
    requestAnimationFrame(animacao);
}

animacao();

document.addEventListener("keydown", function(evento){
    let tecla = evento.key;
    console.log(tecla);

    if(tecla == "ArrowUp"){
        retangulo.y-= 5;
    }
    if(tecla == "ArrowDown"){
        retangulo.y+= 5;
    }
    if(tecla == "ArrowLeft"){
        retangulo.x-= 5;
    }
    if(tecla == "ArrowRight"){
        retangulo.x+= 5;
    }
})

document.addEventListener("mousemove", function(evento2){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento2.clientX - rect.left;
    let y_mouse = evento2.clientY - rect.top;
    
    console.log(x_mouse, y_mouse);

    retangulo.x = x_mouse;
    retangulo.y = y_mouse;
})
