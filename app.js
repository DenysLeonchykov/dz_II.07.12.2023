
let div = document.querySelector('.block2');
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');

const topBtn = document.querySelector('.top');
const downBtn = document.querySelector('.down');

const downRight = document.querySelector('.down-right');
const topRight = document.querySelector('.top-right');
const downLeft = document.querySelector('.down-left');
const topLeft = document.querySelector('.top-left');


let left = 200;
let top1 = 100;
const blokAll = 600;


downRight.addEventListener('click', () => {
    left+= 10;
    top1+= 10;

    div.style.left = `${left}px`;
    div.style.top = `${top1}px`
    
    leftBtn.disabled = false;
    rightBtn.disabled = false;
    topBtn.disabled = false;
    downBtn.disabled = false;
    topRight.disabled = false;
    downLeft.disabled = false;
    topLeft.disabled = false;
    
    if (left > 400 || top1 > 200) {
        downRight.disabled = true;
    }
})

topRight.addEventListener('click', () => {
    left+= 10;
    top1-= 10;

    div.style.left = `${left}px`;
    div.style.top = `${top1}px`
    
    leftBtn.disabled = false;
    rightBtn.disabled = false;
    topBtn.disabled = false;
    downBtn.disabled = false;
    downLeft.disabled = false;
    topLeft.disabled = false;
    downRight.disabled = false;

    if (left > 300 || top1 < 0) {
        topRight.disabled = true;
    }
})

downLeft.addEventListener('click', () => {
    left-= 10;
    top1+= 10;

    div.style.left = `${left}px`;
    div.style.top = `${top1}px`
    
    leftBtn.disabled = false;
    rightBtn.disabled = false;
    topBtn.disabled = false;
    downBtn.disabled = false;
    topRight.disabled = false;
    topLeft.disabled = false;
    downRight.disabled = false;

    if (left < 90 || top1 > 200) {
        downLeft.disabled = true;
    }
})


topLeft.addEventListener('click', () => {
    left-= 10;
    top1-= 10;

    div.style.left = `${left}px`;
    div.style.top = `${top1}px`
    
    leftBtn.disabled = false;
    rightBtn.disabled = false;
    topBtn.disabled = false;
    downBtn.disabled = false;
    topRight.disabled = false;
    downLeft.disabled = false;
    downRight.disabled = false;

    if (left < 100 || top1 < 0) {
        topLeft.disabled = true;
    }
})

//Праворуч & Ліворуч 

rightBtn.addEventListener('click', () => {
    left+= 10;
    div.style.left = `${left}px`;

    leftBtn.disabled = false;
    topBtn.disabled = false;
    downBtn.disabled = false;
    topRight.disabled = false;
    downLeft.disabled = false;
    topLeft.disabled = false;
    downRight.disabled = false;

    if (blokAll - left < 200) {
        rightBtn.disabled = true;
    }
})

leftBtn.addEventListener('click', () => {
    left-= 10;
    div.style.left = `${left}px`;
    
    rightBtn.disabled = false;
    topBtn.disabled = false;
    downBtn.disabled = false;
    topRight.disabled = false;
    downLeft.disabled = false;
    topLeft.disabled = false;
    downRight.disabled = false;

    if (left === 0) {
        leftBtn.disabled = true;
    }
})

// Уверх & Униз

topBtn.addEventListener('click', () => {
    top1-= 10
    
    leftBtn.disabled = false;
    rightBtn.disabled = false;
    downBtn.disabled = false;
    topRight.disabled = false;
    downLeft.disabled = false;
    topLeft.disabled = false;
    downRight.disabled = false;
    
    div.style.top = `${top1}px`
    if (top1 < 0) {
        topBtn.disabled = true;
    }
})


downBtn.addEventListener('click', () => {
    top1+= 10;
    div.style.top = `${top1}px`
    
    leftBtn.disabled = false;
    rightBtn.disabled = false;
    topBtn.disabled = false;
    topRight.disabled = false;
    downLeft.disabled = false;
    topLeft.disabled = false;
    downRight.disabled = false;

    if (top1 > 200) {
        downBtn.disabled = true;
    }
})

