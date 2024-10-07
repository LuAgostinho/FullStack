let num_ger=Math.floor(Math.random()*100);
let lista_maior=[]
let lista_menor=[]
function jogar(){
    let num=parseInt(document.getElementById("i").value);
    if(num==num_ger){
        document.getElementById("resp").innerHTML="Parabéns, você acertou!";
        document.getElementById("resp").style.setProperty("background-color", "lawngreen");
    }
    else if(num<num_ger && num>=0){
        document.getElementById("resp").innerHTML="Esse número é muito baixo!";
        document.getElementById("resp").style.setProperty("background-color", "red");
        if(lista_menor==""){
            lista_menor=num;
        }
        else{
            lista_menor=lista_menor+" , "+num;
        }
        document.getElementById("lower").innerHTML=lista_menor;
        document.getElementById("lower").style.setProperty("background-color", "grey");
    }
    else if(num>num_ger && num<100){
        document.getElementById("resp").innerHTML="Esse número é muito alto!";
        document.getElementById("resp").style.setProperty("background-color", "red");
        if(lista_maior==""){
            lista_maior=num;
        }
        else{
            lista_maior=lista_maior+" , "+num;
        }
        document.getElementById("higher").innerHTML=lista_maior;
        document.getElementById("higher").style.setProperty("background-color", "grey");
    }
}