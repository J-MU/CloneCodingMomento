const clock=document.querySelector('h2#clock');

function sayClock(){
    let CurrentTime=new Date();
    let currentHour=String(CurrentTime.getHours()).padStart(2,'0');
    const currentMinute=String(CurrentTime.getMinutes()).padStart(2,'0');
    const currentSecond=String(CurrentTime.getSeconds()).padStart(2,'0');

    const ShowTime=`${currentHour}:${currentMinute}:${currentSecond}`
    clock.innerHTML=ShowTime;
}

sayClock();
setInterval(sayClock,1000);