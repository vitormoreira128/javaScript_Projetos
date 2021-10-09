
/* o comando será executado quando o usuario abrir a página , abrirá uma janela solicitando uma cor de acordo com a escolha o body muda . para essa execução usamos o comando window(janela\navegador)document(meu documento html).body(corpo da pagina). addlistener adiciona um evento ao body para que ele preste atenção ao carregamento da página executando a função ()=>{} com todo codigo. */
window.document.body.onload=()=>{
    let escolha = prompt 
    ("Digite:\n->1Amarelo\n->2Vermelho\n3->Azul");

    if (escolha == 1)
    window.document.body.style.backgroundColor="yellow";
    else if (escolha==2)
    
    window.document.body.style.backgroundColor="red";
    else if(escolha==3)
window.document.body.style.backgroundColor="blue";
else 
window.alert("Valor invalido");
};