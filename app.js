
const secondes = document.querySelector('.secondes .number')
const minutes = document.querySelector('.minutes .number')
const heures = document.querySelector('.heures .number')
const jours = document.querySelector('.jours .number')

// console.log(heures,minutes);

let secValue = 60;
let minValue = 30;
let hourValue = 2;
let dayValue = 1;

const timeFunction = setInterval(()=> {

    secValue --;
    if(secValue ===0){
        minValue --;
        secValue = 60;
    }
    if(minValue ===0){
        hourValue --;
        minValue = 60;
        }
        if(hourValue ===0){
            dayValue --;
            hourValue =24;
        }

        if(dayValue ===0){
            dayValue =0;
        }
        if(dayValue === 0 && hourValue === 0 && minValue === 0 && secValue === 0){
            setInterval(timeFunction)
        }
        if (dayValue <= 0 && hourValue <= 0 && minValue <= 0 && secValue <= 0) {
            clearInterval(timeFunction);
        }
        // console.log(secValue);

        secondes.textContent = secValue < 10 ? `0${secValue}`: secValue;
        minutes.textContent = minValue < 10 ? `0${minValue}`: minValue;
        heures.textContent = hourValue < 10 ? `0${hourValue}`: hourValue;
        jours.textContent = dayValue < 10 ? `0${dayValue}`: dayValue;

},1)
