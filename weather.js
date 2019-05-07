
const weather = document.querySelector(".js-weather");

const API_KEY = "9ad29d78babedb61e4ef49aaf4f2944a";
const COORDS = 'coords';

function getWeather(lat, lng){
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
   .then(function(response){
       return response.json()
       })
       .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
       });
}

/*뭔가를 기다리고 시작해여 한다면 .then()을 사용해야 함. 그렇지 않으면 다음 동작이 자동으로 일어나 버려서 데이터를 충분히 받아오지 못할 수 있음.
이게 생긴정보를 내가 필요한 형태로 받아와야 하는데 스트링or옵젝트. 이걸 바꿔주는 기능이 JSON임  */


function saveCoords(coordsObj){
 localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(position){
    console.log('Cant access geoloation');
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
/* 이건 나중에 유용하게 쓰일듯, 두개의 아규먼트가 들어가는 것은 허락했을때,허락하지 않았을때를 나타낸다. */

function loadCoords(){
const loadedCoords = localStorage.getItem(COORDS);
 if(loadedCoords === null){
     askForCoords();
 }else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);

 }

}


/* 역시나 갈림길을 표기한다. 만약에 값이 없다면 이리로 가세요. 만약에 있다면 이걸 실행하세요 */


function init(){
   loadCoords();
}


init();
