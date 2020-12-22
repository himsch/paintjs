const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();    // path은 선이다.
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);   // 마우스에 위치에서 현재위치까지 선을 만듬 / 마우스를 움직이느 내낸 사용되는 함수
        ctx.stroke();       // 선을 긋는 함수 / 마우스를 움직이는 내내 사용되는 함수
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);      // 드래그하다 놓으면 페인팅 false
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))