(function() { "use strict";

  var display, world;
  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')
  
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  display = {
    buffer:document.createElement("canvas").getContext("2d"),
    context:document.querySelector("canvas").getContext("2d"),
    height_width_ratio:undefined,
    
    tile_sheet: {

      image:new Image(),// The actual graphic will be loaded into this.

      columns:16,
      tile_height:32,
      tile_width:32

    },

  };
world = {

    map: [
        79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,
        79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,
        79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,138,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,79,79,79,
        79,79,79,79,79,79,79,79,79,79,79,79,79,79,61,61,61,61,61,79,79,79,79,79,79,79,79,79,79,79,79,79,
        79,79,79,79,79,79,79,79,79,79,79,79,79,79,61,61,61,61,61,79,79,79,79,79,79,79,79,79,79,79,79,79,
        79,79,79,79,79,79,79,79,79,79,79,79,79,79,114,114,114,114,114,79,79,79,79,79,79,79,79,79,79,79,79,79
        ],

    columns:32,
    rows: 32,

    height: 1010 ,
    width:970
};

class Character {
  constructor(img, x, y, w, h) {
      this.img = img;
      this.x = x,
      this.y = y,
      this.w = w,
      this.h = h
  }
  
  draw = () => {
      ctx.drawImage(this.img, this.w, this.h, this.x, this.y);
  }
}
let character = new Image();
character.src = "../../../images/warrior back.png";

let warrior = new Character (character, 50, 50, 130, 2);


function animate() {
  requestAnimationFrame(animate);

  // WATCH OUT FOR CLEAR
  ctx.clearRect(0,0,canvas.width, canvas.height)
  console.log("animate");
  warrior.draw();
  
  draw()
}
// animate()
  

  


  display.tile_sheet.image.addEventListener("load", function(event) {

    display.buffer.canvas.height = world.height;
    display.buffer.canvas.width  = world.width;
    display.height_width_ratio   = world.height / world.width;

    display.resize();

  });

  /* Start loading the image. */
  display.tile_sheet.image.src = "../../assets/tilesets/Cave.png";

  window.addEventListener("resize", display.resize);

})();