var i = 0;
var txt = "Hey, I'm Karl...";
var speed = 100;

function typewriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

let i = 4;
async function changeImage() {
  document.querySelector("#imgClickAndChange").src = "crepe/Crepe" + {i-1>=0?i-1:0} + ".png"
}
document.querySelector("#imgClickAndChange").onclick = changeImage;
