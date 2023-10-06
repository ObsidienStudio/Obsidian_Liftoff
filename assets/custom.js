// Add custom JS


var slider_left = document.getElementsByClassName("slider_left")[0];
var slider_right = document.getElementsByClassName("slider_right")[0];
var carousel = document.getElementsByClassName("carousel")[0];

    slider_left.addEventListener("click", function(e){
        console.log(e.target)
        carousel.style.overflow = "-200px";
    })
    slider_right.addEventListener("click", function(e){
        console.log(e.target)
    })