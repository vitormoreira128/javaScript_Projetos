var cor = prompt("escolha uma cor: \n1-vermelho\n2 azul\n3preto");
/*
if (cor==1){
document.body.style.backgroundColor="red";
}
else if (cor==2){
    document.body.style.backgroundColor="blue";
}
else if(cor ==3){
    document.body.style.backgroundColor="black";
}

else{
    document.body.style.backgroundColor="white";
    alert("Numero não existe.");
}*/
// refaturamento do codigo acima
var fundo = "white";
if(cor==1){
    fundo = "red";
}
else if(cor ==2){
    fundo = "blue";
}

else if (cor == 3){
    fundo = "black";
}
else{
    alert ("valor invalido")
}
document.body.style.backgroundColor=fundo;