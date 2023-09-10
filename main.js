var mouseevent = "";
var mouseYfinal, mouseYinicial, mouseXfinal, mouseXinicial;

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", comecoDesenho);

function comecoDesenho(e) {
    color = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    mouseevent = "mousedown";

}

canvas.addEventListener("mousemove", desenhandoLinha);

function desenhandoLinha(e) {
    mouseXinicial = e.clientX - canvas.offsetLeft;
    mouseYinicial = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = largura;
        ctx.moveTo(mouseXfinal, mouseYfinal);
        ctx.lineTo(mouseXinicial, mouseYinicial);
        ctx.stroke();
    }
    mouseXfinal = mouseXinicial;
    mouseYfinal = mouseYinicial;
}
canvas.addEventListener("mouseup", mymouseup)

function mymouseup(e) {
    mouseevent = "mouseup";
}

function limparcanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

novaLargura = screen.width - 70;
novaAltura = screen.height - 300;

if (width < 992) {
    document.getElementById("mycanvas").width = novaLargura;
    document.getElementById("mycanvas").height = novaAltura;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
    touchXinicial = e.touches[0].clientX - canvas.offsetLeft;
    touchYinicial = e.touches[0].clientY - canvas.offsetTop;
    color = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;

}


canvas.addEventListener("touchmove", moverDedoParaDesenhar);

function moverDedoParaDesenhar(e) {
    touchXfinal = e.touches[0].clientX - canvas.offsetLeft;
    touchYinicial = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = largura;
    ctx.moveTo(touchXfinal, touchYfinal);
    ctx.lineTo(touchXinicial, touchYinicial);
    ctx.stroke();

    touchXfinal = touchXinicial;
    touchYfinal = touchYinicial;
}