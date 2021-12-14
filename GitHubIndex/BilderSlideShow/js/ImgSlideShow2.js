const timer = 5000;
let intervalLeft;
let intervalRight;

function previousImg() {
    let images4 = document.images[4].src;
    document.images[4].src = document.images[3].src;
    document.images[3].src = document.images[2].src;
    document.images[2].src = document.images[1].src;
    document.images[1].src = document.images[0].src;
    document.images[0].src = images4;
}

function previousImgInterval(){
    previousImg();
    clearInterval(intervalRight);
    clearInterval(intervalLeft);
    intervalLeft = setInterval(previousImg, timer);
}

function nextImgInterval(){
    nextImg();
    clearInterval(intervalLeft);
    clearInterval(intervalRight);
    intervalRight = setInterval(nextImg, timer);
}

function nextImg() {
    let images0 = document.images[0].src;
    document.images[0].src = document.images[1].src;
    document.images[1].src = document.images[2].src;
    document.images[2].src = document.images[3].src;
    document.images[3].src = document.images[4].src;
    document.images[4].src = images0;
}



