var i = 0;
var txt = "HEY I'M KARL";
var speed = 100;

function typewriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}

let c = 4;
async function changeImage() {
    document.querySelector("#imgClickAndChange").src = `crepe/Crepe${c-1>=0?c-1:0}.png`, c--
}
document.querySelector("#imgClickAndChange").onclick = changeImage;

  var nightpic = document.getElementById("nightpic");
  
  nightpic.addEventListener("click", function() {
    nightpic.src = "karl night burn.gif";
    setTimeout(function() {
      nightpic.src = "karl night.jpg";
    }, 3000);
  });

typewriter();
