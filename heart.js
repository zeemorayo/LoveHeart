var canvas = document.getElementById("canva");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// GL Context
var gl = canvas.getContext('webgl');
if(!gl){
  console.error("Unable to initialize WebGL")
}
