var timerInput = document.getElementById("timeMaxSec");
var timerAdd = document.getElementById("timeAddSec");
var buttonRun = document.getElementById("butStart");
var buttonAdd = document.getElementById("butAdd");
var buttonStop = document.getElementById("butStop");
var timerShow = document.getElementById("timer");
var timeInSec=30;
var timer;

if (buttonRun){
buttonRun.addEventListener('click', function() {
    isPaused=false;
    timeInSec = parseInt(timerInput.value) ;
StartTimer(timer);

});
}

if (buttonStop)
{buttonStop.addEventListener('click', function () {
    isPaused=true;
    timeInSec = parseInt(timerInput.value) ;
});
}

if (buttonAdd)
{buttonAdd.addEventListener('click', function() {
    timeInSec = timeInSec + parseInt(timerAdd.value) ;
});
}

timer = setInterval(function () {
var strTimer
    seconds = timeInSec%60;
    strTimer = `${seconds}`;
 timerShow.innerHTML = strTimer;

 if (timeInSec < 6) {
	timerShow.style.color= "red";
	if (!isPaused )	{	
		if(timeInSec>1){
			soundBeep();
		}
		else
		if (timeInSec==0){	
			soundFoult();
		}
	 }
}
 else
		timerShow.style.color= "black";


    if (timeInSec <= 0) {
        strTimer = `FOUL`;
        timerShow.innerHTML = strTimer;
//        clearInterval(timer);
//        alert("Время закончилось");
	isPaused=true
	}

    if (!isPaused)
        --timeInSec;
}, 1000);

function soundBeep() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'beep1.ogg'; // Указываем путь к звуку "клика"
  audio.play(); // Автоматически запускаем
}

function soundFoult() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'foult.ogg'; // Указываем путь к звуку "клика"
  audio.play(); // Автоматически запускаем
}
