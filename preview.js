/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

var hairN = 1;
var eyesN = 1;
var noseN = 1;
var mouthN = 1;

hair.addEventListener("click", function() {
    hairN++;
    if (hairN > 3) {
        hairN = 1;
    }
    hair.src = "img/hair"+hairN+".png";
});

eyes.addEventListener("click", function() {
    eyesN++;
    if (eyesN > 3) {
        eyesN = 1;
    }
    eyes.src = "img/eyes"+eyesN+".png";
});

nose.addEventListener("click", function() {
    noseN++;
    if (noseN > 3) {
        noseN = 1;
    }
    nose.src = "img/nose"+noseN+".png";
});

mouth.addEventListener("click", function() {
    mouthN++;
    if (mouthN > 3) {
        mouthN = 1;
    }
    mouth.src = "img/mouth"+mouthN+".png";
});