

let clock
let timeLeft = 30//tempo rimasto
//creo una variabile che mi identifichi la domanda
const current = [0]

function start(){ //funzione timer
    timeLeft=quizWithImages.time[current] //dovrebbe collegare la domanda al time inserito come valore
    const display=document.getElementById('timer') //collegato al doc html

     clock= setInterval(function(){ //setIntervall aggiorna il timer ogni secondo
        if(timeLeft>0){
            timeLeft--
           document.getElementById('timer').innerHTML=`${timeLeft}` //dovrebbe aggiornare il timer ad ogni secondo trascorso
        }
        else{
            clearInterval (clock) // clearInterval resetta il timer
           
        }

    },1000)
}
function reset(){
    clearInterval(clock)
    timeLeft=30
    start()
}
//ora devo riuscire a collegare il timer 