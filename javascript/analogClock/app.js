

function setClock(){

    const saatDOM = document.querySelector('[data-hand-hour]');
    const dakikaDOM = document.querySelector('[data-hand-minute]');
    const saniyeDOM = document.querySelector('[data-hand-second]');


    const simdikiZaman = new Date();
    const saniye = simdikiZaman.getSeconds() / 60;
    const dakika = (saniye + simdikiZaman.getMinutes()) / 60;
    const saat = (dakika + simdikiZaman.getHours()) / 12;
    

    
    setRotation(saniyeDOM, saniye);
    setRotation(dakikaDOM, dakika);
    setRotation(saatDOM, saat);
    


}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);

}

setInterval(setClock, 1000)

setClock()