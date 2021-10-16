var cor = prompt("Digite uma cor :\n Vermelho, verde,azul ,amarelo ,preto ,cinza");
var fundo ="";
/* para transformar os caracteres em maisculo ou minusculo ,podemos usar os seguintes comandos:
toupercase para letras maiusculas  to lowercase para minusculo

*/
cor = cor.toLowerCase()
switch(cor){
    case "vermelho":
        fundo="red";
        break;

        case "verde":
            fundo="green";
            break;

            case "azul":
                fundo="blue";
                break;

                case "amarelo":
                fundo="yellow";
                break;

                case "preto":
                    fundo="black";
                    break;

                    case "cinza":
                        fundo="gray";
                        break;

                     default:
                     fundo= "white";
            
      
}
document.body.style.backgroundColor=fundo;