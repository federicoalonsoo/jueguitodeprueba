document.getElementById('player').addEventListener('mouseover', sumarPuntos);

let puntos = 0;
let tiempo = 30;
let necesarios = 25;

function sumarPuntos(){
    puntos ++;
    document.getElementById('puntos').innerHTML = 'Puntos: <b>' + puntos + '/' + necesarios + '</b>';
    let randNum = Math.round(Math.random()*500);
    let randNum2 = Math.round(Math.random()*500);
    let randNum3 = Math.round(Math.random()*500);
    let randNum4 = Math.round(Math.random()*500);
    document.getElementById('player').style.marginTop = randNum + "px";
    document.getElementById('player').style.marginLeft = randNum2 + "px";
    document.getElementById('player').style.marginRight = randNum3 + "px";
    document.getElementById('player').style.marginBottom = randNum4 + "px";
    if (puntos === necesarios){
        alert('ganaste');
        tiempo = 30;
        puntos = 0;
    }
}

setInterval (function restarPuntos() {
    tiempo --;
    document.getElementById('tiempo').innerHTML = 'Tiempo: ' + tiempo;
    if (tiempo === 0){
        alert('perdiste');
        tiempo = 30 ;
        puntos = 0 ;
    }
    
}, 1000);



