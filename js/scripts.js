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



typewriter();
