

let clock
let timeLeft //tempo rimasto
//creo una variabile che mi identifichi la domanda
const current = [0]
timeLeft=quizWithImages[current].time //dovrebbe collegare la domanda al time inserito come valore
function start(){ //funzione timer inizia
    
    const display=document.getElementById('timer') //collegato al doc html

     clock= setInterval(function(){ //setIntervall aggiorna il timer ogni secondo
        if(timeLeft>0){
            timeLeft--
           document.getElementById('timer').innerHTML=`${timeLeft}` //dovrebbe aggiornare il timer ad ogni secondo trascorso
        }
        else{
            clearInterval (clock) // clearInterval resetta il timer
           next()
        }

    },1000)
}

}
function currentQuestion(){ //domanda che vede l'utente
//collego il mio timeLeft al question.time della domanda che mi compare sullo schermo
// infine faccio capire alla funzione che deve partire il timer
}
function answer(){ // stop timer appena viene cliccato il pulsante 'avanti'
    clearInterval(clock)
    //devi collegare il pulsante
    next()
}
function next(){

}
//ora devo riuscire a collegare il timer 