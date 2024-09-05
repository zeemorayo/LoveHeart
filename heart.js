var canvas = document.getElementById("canva");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// GL Context
var gl = canvas.getContext('webgl');
if(!gl){
  console.error("Unable to initialize WebGL")
}

//Time
var time = 0.0;

// Shader SOURCE

var vertexSource = `
attribute vec2 position;
void main() 
