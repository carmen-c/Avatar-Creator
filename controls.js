var previewBox = document.getElementById("preview"), 
    colorPicker = document.getElementById("colorPicker"),
    
    number = document.getElementById("number"),
    range = document.getElementById("range"),
    range1 = document.getElementById("range1"),
    range2 = document.getElementById("range2"),
    range3 = document.getElementById("range3"),
    range4 = document.getElementById("range4"),
    
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");


colorPicker.addEventListener("change", function() {
    previewBox.style.backgroundColor = colorPicker.value;
});

number.addEventListener("click", function() {
    changeType("number");
});

range.addEventListener("click", function() {
   changeType("range"); 
});

range1.addEventListener("change", function() {
    hair.style.width = range1.value+"%";
});

range2.addEventListener("change", function() {
    eyes.style.width = range2.value+"%";
});

range3.addEventListener("change", function() {
    nose.style.width = range3.value+"%";
});

range4.addEventListener("change", function() {
    mouth.style.width = range4.value+"%";
});

document.getElementById("add").addEventListener("click", function() {
    createFace();
});

document.getElementById("random").addEventListener("click", function() {
    randomFace();
});

document.getElementById("autoRandom").addEventListener("click", function() {
    timerAuto = setInterval(function() {
                randomFace();
                createFace();
            },500);
});

document.getElementById("stopAuto").addEventListener("click", function() {
    clearInterval(timerAuto);
});

function randomFace() {
   var rHair = Math.floor(Math.random() * Math.floor(3)+1); 
   var rEyes = Math.floor(Math.random() * Math.floor(3)+1); 
   var rNose = Math.floor(Math.random() * Math.floor(3)+1); 
   var rMouth = Math.floor(Math.random() * Math.floor(3)+1);
   
   var r = Math.floor(Math.random()* 255);
   var g = Math.floor(Math.random()* 255);
   var b = Math.floor(Math.random()* 255);
    
   var rColor = "rgb("+r+","+g+","+b+")";
    
    hair.src = "img/hair"+rHair+".png";
    eyes.src = "img/eyes"+rEyes+".png";
    nose.src = "img/nose"+rNose+".png";
    mouth.src = "img/mouth"+rMouth+".png";
    previewBox.style.backgroundColor = rColor;
    
   var rwHair = Math.floor(Math.random() * Math.floor(71)); 
   var rwEyes = Math.floor(Math.random() * Math.floor(41)); 
   var rwNose = Math.floor(Math.random() * Math.floor(31)); 
   var rwMouth = Math.floor(Math.random() * Math.floor(36));
    
    range1.value = rwHair;
    range2.value = rwEyes;
    range3.value = rwNose;
    range4.value = rwMouth;
    
    hair.style.width = range1.value+"%";
    eyes.style.width = range2.value+"%";
    nose.style.width = range3.value+"%";
    mouth.style.width = range4.value+"%";
}
    var counter = 1;
function createFace() {
    var newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = previewBox.style.backgroundColor;
    newDiv.style.position = "relative";
    newDiv.style.display = "inline-block";
    newDiv.id = counter;
    counter++;
    
    var newHair = document.createElement("img");
    newHair.src = hair.src;
    newHair.width = hair.width/2;
    newHair.style.top = "0%";
    newHair.className = "items";
    newHair.style.cssText= hair.style.cssText;
    
    var newEyes = document.createElement("img");
    newEyes.src = eyes.src;
    newEyes.width = eyes.width/2;
    newEyes.style.top = "20%";
    newEyes.className = "items";
    newEyes.style.cssText= eyes.style.cssText;
    
    var newNose = document.createElement("img");
    newNose.src = nose.src;
    newNose.width = nose.width/2;
    newNose.style.top = "27.5%";
    newNose.className = "items";
    newNose.style.cssText= nose.style.cssText;
    
    var newMouth = document.createElement("img");
    newMouth.src = mouth.src;
    newMouth.width = mouth.width/2;
    newMouth.style.top = "37.5%";
    newMouth.className = "items";
    newMouth.style.cssText= mouth.style.cssText;

    newDiv.appendChild(newHair);
    newDiv.appendChild(newEyes);
    newDiv.appendChild(newNose);
    newDiv.appendChild(newMouth);
    document.getElementById("display").appendChild(newDiv);
    
    newDiv.addEventListener("click", function() {
       removeDiv(newDiv.id);
    });
}

function removeDiv(id) {
    document.getElementById(id).remove();
}
function changeType(type) {
    range1.type = type;
    range2.type = type;
    range3.type = type;
    range4.type = type;
}