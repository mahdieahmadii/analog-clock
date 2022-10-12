function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let Seconds = date.getSeconds();

    

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = Seconds; 

    document.querySelector('.hours-line').setAttribute("style",`transform : rotate(${(hours * 30) + (minutes / 2) }deg)`);
    document.querySelector('.minutes-line').setAttribute("style",`transform : rotate(${minutes * 6}deg)`);
    document.querySelector('.seconds-line').setAttribute("style",`transform : rotate(${Seconds * 6}deg)`);
}

setInterval(clock,1000);

