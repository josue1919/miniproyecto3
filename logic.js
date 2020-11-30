var player;

function MostrarDadoPlayer(){

// var imagenes=["cara1.png","cara2.png","cara3.png","cara4.png","cara5.png","cara6.png"]
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var dado1=Math.floor(Math.random()*6)+1;
var dado2=Math.floor(Math.random()*6)+1;
var puntajePlayer;


   switch(dado1){

            case 1:
                img1.setAttribute("src", "/assets/cara1.png");
                    break;
            case 2:
                img1.setAttribute("src", "/assets/cara2.png");
                break;
                case 3:
                    img1.setAttribute("src", "/assets/cara3.png");
            break;

            case 4:
                img1.setAttribute("src", "/assets/cara4.png");
            break;

            case 5:
                img1.setAttribute("src", "/assets/cara5.png");
            break;

            case 6:
                img1.setAttribute("src", "/assets/cara6.png");
            break;
        
            default:
                img1.setAttribute("src", "/assets/cara1");
   }
   switch(dado2){

    case 1:
        img2.setAttribute("src", "/assets/cara1.png");
            break;
    case 2:
        img2.setAttribute("src", "/assets/cara2.png");
        break;
        case 3:
            img2.setAttribute("src", "/assets/cara3.png");
    break;

    case 4:
        img2.setAttribute("src", "/assets/cara4.png");
    break;

    case 5:
        img2.setAttribute("src", "/assets/cara5.png");
    break;

    case 6:
        img2.setAttribute("src", "/assets/cara6.png");
    break;

    default:
        img1.setAttribute("src", "/assets/cara1");
}
   
    puntajePlayer=dado1+dado2;
    player=puntajePlayer;
    document.getElementById("mensaje").innerHTML= `Tu Puntaje es ${puntajePlayer}`;

    setTimeout(() => {
        MostrarDadobot()
        
        console.log("se ejeecuta")
    }, 1000);




}

function MostrarDadobot(puntajePlayer){

    // var imagenes=["cara1.png","cara2.png","cara3.png","cara4.png","cara5.png","cara6.png"]
    var img1 = document.getElementById("img3");
    var img2 = document.getElementById("img4");
    var dado1=Math.floor(Math.random()*6)+1;
    var dado2=Math.floor(Math.random()*6)+1;
    var puntajebot;
    var puntajeplayer=this.puntajePlayer;
    
       switch(dado1){
    
                case 1:
                    img1.setAttribute("src", "/assets/cara1.png");
                        break;
                case 2:
                    img1.setAttribute("src", "/assets/cara2.png");
                    break;
                    case 3:
                        img1.setAttribute("src", "/assets/cara3.png");
                break;
    
                case 4:
                    img1.setAttribute("src", "/assets/cara4.png");
                break;
    
                case 5:
                    img1.setAttribute("src", "/assets/cara5.png");
                break;
    
                case 6:
                    img1.setAttribute("src", "/assets/cara6.png");
                break;
            
                default:
                    img1.setAttribute("src", "/assets/cara1");
       }
       switch(dado2){
    
        case 1:
            img2.setAttribute("src", "/assets/cara1.png");
                break;
        case 2:
            img2.setAttribute("src", "/assets/cara2.png");
            break;
            case 3:
                img2.setAttribute("src", "/assets/cara3.png");
        break;
    
        case 4:
            img2.setAttribute("src", "/assets/cara4.png");
        break;
    
        case 5:
            img2.setAttribute("src", "/assets/cara5.png");
        break;
    
        case 6:
            img2.setAttribute("src", "/assets/cara6.png");
        break;
    
        default:
            img1.setAttribute("src", "/assets/cara1");
    }
       
        puntajebot=dado1+dado2;
    
        document.getElementById("mensaje2").innerHTML= `Puntaje bot  ${puntajebot}`;

        console.log(player,puntajebot)
        if(player>puntajebot){
            document.getElementById("mensaje3").innerHTML= `ganaste`;

        }else if(player===puntajebot){
            document.getElementById("mensaje3").innerHTML= `empate`;
        }else{
            document.getElementById("mensaje3").innerHTML= `perdiste`;
        }
        
    
    }
   

   
















// //dados de la maquina
// var dadomaquina1=Math.floor(Math.random()*6)+1;
// var dadomaquina2=Math.floor(Math.random()*6)+1;


// var totalPlayer=dado1+dado2//total del jugador
// var totalmaquina=dadomaquina1+dadomaquina2;//total de la maquina

// function MostrarDadoPlayer(){
//     //dados persona
//     var dado1=Math.floor(Math.random()*6)+1;
//     var dado2=Math.floor(Math.random()*6)+1;

//     console.log(dado1)
//     //imagenes
//     var img = document.getElementById("img1"); 
//     if(img){
//         console.log("si trae los datos")

//     }else{
//         console.log("no trae nada")
//     }
//     var img2 = document.getElementById("img2");     
//     var img3 = document.getElementById("img3"); 
//     var img4 = document.getElementById("img4"); 
//     var img5 = document.getElementById("img5"); 
//     var img6 = document.getElementById("img6"); 

//     if(dado1===1){
//        img.style.visibility= "visible"; 
//         if(img.style.visibility){
//             console.log("si se ejecuta")
//         }else{
//             console.log("no se esta ejecutnado esto we")
//         }
//     }
//     if(dado1==2){
//         img2.style.visibility = "visible"; 
//     }
//     if(dado1==3){
//         img3.style.visibility = "visible"; 
//     }
//     if(dado1==4){
//         img4.style.visibility = "visible"; 
//     }
//     if(dado1==5){
//         img5.style.visibility = "visible"; 
//     }
//     if(dado1==6){
//         img6.style.visibility = "visible"; 
//     }
//     // switch(dado1){
//     //     case 1:
//     //         img.style.visibility
//     //         break;
//     //         case 2:
//     //             img2.style.visibility
//     //             break;
//     //             case 3:
//     //         img3.style.visibility
//     //         break;

//     //         case 4:
//     //         img4.style.visibility
//     //         break;

//     //         case 5:
//     //         img5.style.visibility
//     //         break;

//     //         case 6:
//     //         img6.style.visibility
//     //         break;
        
//     //         default:
//     //             img.style.visibility="hidden";
//     //             img2.style.visibility="hidden";
//     //             img3.style.visibility="hidden";
//     //             img4.style.visibility="hidden";
//     //             img5.style.visibility="hidden";
//     //             img6.style.visibility="hidden";
    

//     // }


//     switch(dado2){
//         case 1:
//             img.style.visibility
//             break;
//             case 2:
//                 img2.style.visibility
//                 break;
//                 case 3:
//             img3.style.visibility
//             break;

//             case 4:
//             img4.style.visibility
//             break;

//             case 5:
//             img5.style.visibility
//             break;

//             case 6:
//             img6.style.visibility
//             break;

//         default:
//             img.style.visibility="hidden";
//             img2.style.visibility="hidden";
//             img3.style.visibility="hidden";
//             img4.style.visibility="hidden";
//             img5.style.visibility="hidden";
//             img6.style.visibility="hidden";

//     }
// }




// function MostrarDadoMaquina(dadomaquina1,dadomaquina2){

// }

// function DadosGanador(TotalPlayer,TotalMaquina){

    

// }