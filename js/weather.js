const API_KEY='b394056c80e3958ed4ac7f7332f90498';

function onGeoSuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;

    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const cityTag=document.querySelector('#weather span:first-child');
        const weatherTag=document.querySelector('#weather span:last-child');

        cityTag.innerHTML=data.name;
        weatherTag.innerHTML=`${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    console.log("get geoLocation fail");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);