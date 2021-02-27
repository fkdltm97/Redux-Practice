const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./image/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*4);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();