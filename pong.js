let xx = 300;
let yy = 200;
let dd = 30;
let velocidadex = 8;
let velocidadey = 8;
let raio = dd / 2;
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;
let colidiu = false
let xoponente = 585;
let yoponente = 150;
let velocidadeyoponente;
let meuspontos = 0;
let oponentepontos = 0;

let raquetada;
let somponto;
let trilha;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificacolisao();
  mostraraquete(xraquete, yraquete);
  movimentaminharaquete();
  colisaoraquete();
  colisaobiblioteca(xraquete, yraquete);
  mostraraquete(xoponente, yoponente);
  movimentaoponente();
  colisaobiblioteca(xoponente, yoponente);
  placar();
  marcaponto();

  
function mostraraquete(x, y){
  rect(x, y, raquetecomprimento, raquetealtura);
} 
 
  function mostrabolinha(){
    circle(xx, yy, dd);
    
  }
  
  function movimentabolinha(){
  xx = xx + velocidadex;
  yy = yy + velocidadey;
  }

   function verificacolisao() {
  if (xx + raio > width || xx - raio < 0){
    velocidadex *= -1;
  }
  if (yy + raio > height || yy - raio < 0){
    velocidadey *= -1;
  }
 }
  
  function movimentaminharaquete(){
    if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
                            }
if (keyIsDown(DOWN_ARROW)){
    yraquete += 10;
                            }
  }

function colisaoraquete(){
  if (xx - raio < xraquete + raquetecomprimento && yy - raio < yraquete + raquetealtura && yy + raio > yraquete){
    velocidadex *= - 1
  }
}
  function colisaobiblioteca(x,y){
   colidiu = collideRectCircle(x, y, raquetecomprimento, raquetealtura, xx, yy, raio);
    if (colidiu){
        velocidadex *= -1;
      
        }
  }
  
  function movimentaoponente(){
    if (keyIsDown(87)){
    yoponente -= 10;
                            }
if (keyIsDown(83)){
    yoponente += 10;
                            }
    
  }
}

 function placar(){
   textAlign(CENTER)
   textSize(16)
   fill(50, 200, 50)
   rect(375, 10, 50, 25)
   rect(175, 10, 50, 25)
   fill(255);
   text(meuspontos, 200, 26);
   text(oponentepontos, 400, 26);

 }
  function marcaponto(){
    if (xx  > 580) {meuspontos += 1 }
    if (xx < 20) {oponentepontos += 1 }
      }

