const object = document.getElementsByClassName("object")[0];
const blue = document.getElementsByClassName("blue")[0];
const white = document.getElementsByClassName("white")[0];
const yellow = document.getElementsByClassName("yellow")[0];

let ClientX = 0;
let ClientY = 0;
let WindowObject = window;
let isMouseDown = false;

object.addEventListener("mousedown", (e)=> {
    isMouseDown = true;
    handleMouseMovingListener();
});

object.addEventListener("mouseup", (e)=> {
    isMouseDown = false;
    handleBGColor();
    mouseMovingStopped();
});

function handleBGColor() {
    let objectBCR = object.getBoundingClientRect();
    let blueBCR = blue.getBoundingClientRect();
    let whiteBCR = white.getBoundingClientRect();
    let yellowBCR = yellow.getBoundingClientRect();

    if(
        objectBCR.left > blueBCR.left &&
        objectBCR.right < blueBCR.right &&
        objectBCR.top > blueBCR.top &&
        objectBCR.bottom < blueBCR.bottom
    ) {
        document.body.style.backgroundColor = "blue";
    }

    if(
        objectBCR.left > whiteBCR.left &&
        objectBCR.right < whiteBCR.right &&
        objectBCR.top > whiteBCR.top &&
        objectBCR.bottom < whiteBCR.bottom
    ) {
        document.body.style.backgroundColor = "white";
    }

    if(
        objectBCR.left > yellowBCR.left &&
        objectBCR.right < yellowBCR.right &&
        objectBCR.top > yellowBCR.top &&
        objectBCR.bottom < yellowBCR.bottom
    ) {
        document.body.style.backgroundColor = "yellow";
    }
}

function mouseMovingStopped() {
    WindowObject.removeEventListener("mousemove", mouseMovingListener, false);
}

function handleMouseMovingListener() {
    WindowObject.addEventListener("mousemove", mouseMovingListener);
}

function mouseMovingListener(e) {
    if(isMouseDown) {
        const ObjWidth = object.clientWidth;
        const ObjHeight = object.clientHeight;
        ClientX = e.clientX;
        ClientY = e.clientY;
        object.style.left = (ClientX + (-ObjWidth/2)) + "px";
        object.style.top = (ClientY + (-ObjHeight/2)) + "px";
    } else {
        ClientX= e.clientX;
        ClientY= e.clientY;
        object.style.left = ClientX + "px";
        object.style.top = ClientY + "px";
    }
}