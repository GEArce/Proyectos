//canvas
var canvasjs = document.getElementById("canvas");
var papel = canvasjs.getContext("2d");

//canvas de los bordes
var canvas_bordes = document.getElementById("canvas_bordes");
var papel_bordes = canvas_bordes.getContext("2d");

//color
var boton_c = document.getElementById("btn_color");

// XI
var btn_xi = document.getElementById("btn_XI");

// YI
var btn_yi = document.getElementById("btn_YI");

// XF
var btn_xf = document.getElementById("btn_XF");

// YF
var btn_yf = document.getElementById("btn_YF");

//btn dibujar
var dibujar = document.getElementById("dibujazo");
dibujar.addEventListener("click", Arte);

function Arte ()
{
    var color = document.getElementById("btn_color").value
    var XI = document.getElementById("btn_XI").value
    var XF = document.getElementById("btn_XF").value
    var YI = document.getElementById("btn_YI").value
    var YF = document.getElementById("btn_YF").value

    canvas(color, XI, YI, XF, YF)

    

}

//canvas del usuario
function canvas(color, XI, YI, XF, YF)
{
    papel.beginPath()
    papel.strokeStyle = color;
    papel.moveTo(XI, YI);
    papel.lineTo(XF, YF);
    papel.stroke();
    /*papel.closePath();*/ //revisar 
}


//bordes
function bordes(color_b, xi_b, yi_b, xf_b, yf_b)
{
    papel.beginPath()
    papel.strokeStyle = color_b;
    papel.moveTo(xi_b, yi_b);
    papel.lineTo(xf_b, yf_b);
    papel.stroke();
    papel.closePath();

    
}   
bordes("black", 299, 0, 0, 0);
bordes("black", 0, 299, 0, 0);
bordes("black", 299, 0, 299, 299);
bordes("black", 0, 299, 299, 299);


//btn borrar
var btn_borrar = document.getElementById("borrar")
btn_borrar.addEventListener("click", eliminarCanvas);

function eliminarCanvas()
{
    var canvasjs = document.getElementById("canvas");
    var papel = canvasjs.getContext("2d");
    papel.clearRect(0,0,canvasjs.width,canvasjs.height);
}