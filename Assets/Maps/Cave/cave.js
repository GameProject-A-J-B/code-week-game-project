const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ground = new Image ();
ground.src = '../../tilesets/Cave.png'

const tileSize = 16;
const tileOutputSize = 1;
const updatedTileSize = tileSize * tileOutputSize;

const tileCol = 32;
const tileRow = 32;

const mapCols = 32;
const mapRows = 32;

const mapHeight = mapRows * tileSize;
const mapWidth = mapCols * tileSize;

const layerOneMap = [                                           
                   538, 285, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 
                   538, 285, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 452, 452, 452, 452, 452, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 
                   569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 452, 452, 452, 452, 452, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569
                  ]


// const layerTwoMap = [ 
//     0, 0, 0, 0, 0, 0, 0, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
//     0, 0, 0, 0, 0, 0, 0, 47, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 720, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     657, 658, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 88, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 119, 120, 121, 653, 654, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151, 152, 153, 685, 686, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 858, 859, 860, 0, 859, 860, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 655, 656, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 890, 891, 892, 0, 891, 892, 0, 0, 0, 0, 891, 892, 0, 0, 0, 0, 0, 0, 0, 687,
//     688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 922, 923, 924, 0, 923, 924, 0, 925, 926, 0, 923, 924, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 954, 955, 956, 0, 955, 956, 0, 957, 958, 0, 955,
//     956, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 541, 542, 0, 0, 0, 0, 0, 0, 0,
//     541, 542, 0, 858, 859, 860, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 573, 574, 0, 0, 0, 0,
//     0, 0, 0, 573, 574, 0, 890, 891, 892, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 605, 606, 0,
//     0, 0, 603, 604, 0, 0, 605, 606, 0, 922, 923, 924, 0, 603, 604, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 637, 638, 0, 0, 0, 635, 636, 0, 0, 637, 638, 0, 954, 955, 956, 0, 635, 636, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 658, 659, 660, 661, 662, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 689, 690, 691, 692, 693, 694, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 721, 722, 723, 724, 725, 726, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 753, 754, 755, 756, 757, 758, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]



let mapIndex = 0;
let sourceX = 0;
let sourceY = 0;

function draw () {

   let mapIndex = 0;

    for (let col = 0; col < mapHeight; col += tileSize) {
       for (let row = 0; row < mapWidth; row += tileSize) {
          let tileVal = layerOneMap[mapIndex];
          if(tileVal != 0) {
             tileVal -= 1;
             sourceY = Math.floor(tileVal / tileCol) * tileSize;
             sourceX = (tileVal % tileCol) * tileSize;
             ctx.drawImage(ground, sourceX, sourceY, tileSize, tileSize, row * tileOutputSize, col * tileOutputSize, updatedTileSize, updatedTileSize);
          }
          mapIndex ++;
       }
    }
 }

 class Character {
   constructor(name, img, strength, health, x, y, sx, sy) {
       this.img = img;
       this.name = name,
       this.strength = strength,
       this.health = health,
       this.x = x,
       this.y = y,
       this.sx = sx,
       this.sy = sy
   }
 
   draw = () => {
       ctx.drawImage(this.img, this.sx, this.sy, 70, 65, this.x, this.y, canvas.width/ 28, canvas.height/ 20);
   }
 }

 class Dragon {
   constructor(name, img, strength, health, x, y, sx, sy) {
       this.img = img;
       this.name = name,
       this.strength = strength,
       this.health = health,
       this.x = x,
       this.y = y,
       this.sx = sx,
       this.sy = sy
   }
 
   draw = () => {
       ctx.drawImage(this.img, 70, 65, this.x, this.y);
   }
 }
 
// let defaultPos = 1011;
let defaultPos = 5;
let currentPos = defaultPos;

// warrior image
let character = new Image();
character.src = "../../../images/warrior.png";

// dragin image
let dragon = new Image();
dragon.src = "../../emenies/Bone_Dragon.png";

// INSTANCES OF CLASSES
let newWarrior = new Character( 'Warrior', character, 123, 100 , ((defaultPos / 32) % tileSize) * 32, defaultPos / 32 * tileSize, 0, 0);

console.log(newWarrior.x);


function animate() {
   requestAnimationFrame(animate);
   // WATCH OUT FOR CLEAR
   ctx.clearRect(0,0,canvas.width, canvas.height)
   draw();
   console.log("animate");
   newWarrior.draw();
   ctx.drawImage(dragon, canvas.width / 13, canvas.height / 7, 250, 150)
}

window.onload = animate;

window.onkeydown = function (e) {
 
   console.log(currentPos)
   // MOVEMENT OF THE MAIN CHARACTER
   if (e.key === "ArrowLeft") {
     if (layerOneMap[currentPos - 1] === 452) {
       newWarrior.x -= 16;
       currentPos -= 1;
     }
   }
   if (e.key === "ArrowRight") {
     if (layerOneMap[currentPos + 1] === 452) {
       newWarrior.x += 16;
       currentPos += 1;
     }
   }
   if (e.key === "ArrowUp") {
     if (layerOneMap[currentPos - 32] === 452) {
       newWarrior.y -= 16;
       currentPos -= 32;
     }   
   }
   if (e.key === "ArrowDown") {
     if (layerOneMap[currentPos + 32] === 452) {
       newWarrior.y += 16;
       currentPos += 32;
     }
   }
   console.log(currentPos)
   // if (currentPos <= 600) {
   //    window.location.href = "../Boss Room/Boss.html";
   // } 
};