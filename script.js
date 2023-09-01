
let num1 = Math.floor (Math.random() * 100 + 1);
let intentos = 0;
let condicion = 0;
let num2 = "  "

function comienzo(){
    condicion = parseInt(document.getElementById("text1").value);
    
    if (condicion !== num1){
        num2 = `${condicion} lo siento, no haz adivinado`;
        intentos++
    }

    if (condicion == num1){
        num2 = `${condicion} lo lograste,  haz adivinado`;
        document.getElementById("display-numero").innerHTML = num1;

    }
    document.getElementById("display-resultado").innerHTML `${num2}. este es su intento numero: ${intentos}.`;
    Document.getElementById("Text1").select();

    function repite(){
        num1 = Math.floor(Math.random()*100+1);
        document.getElementById("display-numero").innerHTML = "?";
        document.getElementById("display-resultado").innerHTML = "ingrese un numero para comenzar";

    }


    ` `;
}