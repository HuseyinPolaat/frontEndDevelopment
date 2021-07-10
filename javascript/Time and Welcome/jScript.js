




let input = prompt("lütfen adınızı giriniz: ");
let myName = document.querySelector('#input-text');
myName.innerHTML = input;

let clock = document.querySelector('#now');

setInterval(realTime, 1000);

function realTime(){

    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let weekDay = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    let day = date.getDay();

    hour = (hour < 10) ? "0" + hour: hour;
    minutes = (minutes < 10) ? "0" + minutes: minutes;
    seconds = (seconds < 10) ? "0" + seconds: seconds;

    let now = hour + ":" + minutes + ":" + seconds + " " + weekDay[day + 6];
    clock.innerHTML = now;
} 


/* 
const PI = 3.14;

function getArea (radius){
    let area = PI * (radius ** 2);
    return area;
}

console.log(`Girilen dairenin alanı: ${getArea(25.8)} metrekaredir.`);

function naber(name){
    console.log(`naber lan ${name}`);
}

naber(15); */


