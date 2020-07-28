
window.onload = function () { 
    var newColor = document.getElementById("newColor");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var easyCheck = true;
var hardCheck = false;
var target;
var targetBox;
var goalClicked = [0,0,0];
var clickable = document.getElementsByClassName("colorBox");
var gamestart = false;
var rgbText = document.getElementById("rgbText");
var correct = document.getElementById("correct");
var R, G, B;

function generateColors(){
    var children = document.getElementById("navDiv").children; 
    rgbText.style.backgroundColor = "#0a0147";
    correct.innerHTML = " ";
    for (let index = 0; index < children.length; index++) {
        children[index].style.backgroundColor = "#0a0147";
        
    }
    var grids;
    gamestart = true;
    if(easyCheck == true){
      
        target = Math.floor((Math.random() * 3) + 1);
    }else{
        
        target = Math.floor((Math.random() * 6) + 1);
    }
    for (let index = 1; index < 7; index++) {
        grids = document.getElementById(`${index}`);
        R = Math.floor((Math.random() * 255) + 0);
        G = Math.floor((Math.random() * 255) + 0);
        B = Math.floor((Math.random() * 255) + 0);
        grids.style.backgroundColor =  `rgb(${R},${G},${B})`;
        if(index == target){
            rgbText.innerHTML = `rgb(${R},${G},${B})`;
            targetBox = document.getElementById(`${target}`);
        }
    }
}

newColor.addEventListener("click", function(){
    generateColors();
});


hard.addEventListener("click",function(){
    var grids;
    easyCheck = false;
    hardCheck = true;
   /* if(gamestart == true){
        target = Math.floor((Math.random() * 6) + 1);
        rgbText.innerHTML = `rgb(${R},${G},${B})`;
        targetBox = document.getElementById(`${target}`);
    }*/
    for (let index = 1; index < 7; index++) {
        grids = document.getElementById(`${index}`);
        if(index>3 && grids.classList.contains("disabledBox")){
            grids.classList.remove("disabledBox");
            grids.classList.add("enabledBox");
        }
        
    }
});

easy.addEventListener("click",function(){
    var grids;
    easyCheck = true;
    hardCheck = false;
    /*if(gamestart == true){
        target = Math.floor((Math.random() * 3) + 1);
        rgbText.innerHTML = `rgb(${R},${G},${B})`;
        targetBox = document.getElementById(`${target}`);
    }*/
    for (let index = 1; index < 7; index++) {
        grids = document.getElementById(`${index}`);
        if(index == 1 || index == 2 || index== 3){
            grids.classList.remove("disabledBox");
            grids.classList.add("enabledBox");
        }else{
            grids.classList.add("disabledBox");
            grids.classList.remove("enabledBox");
        }
        
    }
});

for(var i = 0 ; i < 6 ; i++)
{
    clickable[i].addEventListener("click", function(e){
        if (gamestart == true) {
            if(e.target == targetBox){
                correct.innerHTML = "Correct!";
                for (let index = 1; index < 7; index++) {
                    var el = document.getElementById(`${index}`);
                    el.style.backgroundColor = targetBox.style.backgroundColor;
                }
                var children = document.getElementById("navDiv").children; 
                rgbText.style.backgroundColor = targetBox.style.backgroundColor;
                for (let index = 0; index < children.length; index++) {
                    children[index].style.backgroundColor = targetBox.style.backgroundColor;
                }
                if(easyCheck==true){
                    for (let index = 1; index < 4; index++) {
                        var grids = document.getElementById(`${index}`);
                        if(grids.classList.contains("disabledBox")){
                            grids.classList.add("enabledBox");
                        }
                        
                    }
                }else{
                    for (let index = 1; index < 7; index++) {
                        var grids = document.getElementById(`${index}`);
                        if(grids.classList.contains("disabledBox")){
                            grids.classList.add("enabledBox");
                        }
                        
                    }
                }
                
            }
            else{
                if( e.target.classList.contains("enabledBox")){
                    e.target.classList.remove("enabledBox");
                    e.target.classList.add("disabledBox");
                }else{
                    return;
                }
                
            }
        }else {
            return;
        }
    });
}
}


