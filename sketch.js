var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

  pathImg = loadImage("path.png"); 
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

 //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,200,300,100);
 path.addImage(pathImg);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

boy = createSprite(200,400,100,100);
boy.addAnimation("Running",boyImg);

boy.scale=0.1;

//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(400,0,100,800);
rightBoundary.visible = false
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
