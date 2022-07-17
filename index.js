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

let c = 4;
async function changeImage() {
    document.querySelector("#imgClickAndChange").src = `crepe/Crepe${c-1>=0?c-1:0}.png`, c--
}
document.querySelector("#imgClickAndChange").onclick = changeImage;

typewriter();
