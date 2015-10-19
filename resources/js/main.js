//TweenMax.to(".drone", 6, {x:600});
//TweenMax.to(".drone", 2, {x:800, ease:Bounce.easeOut});
//TweenMax.from(".drone", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut});
//TweenMax.staggerFrom(".box", 0.5, {opacity:0, y:200, delay:0.5}, 0.2);
//Fade everything after animation
//TweenMax.to(".drone, .box", 0.5, {opacity:0, delay:2});


//Working with TimelineLite to prevent using delay
var tl = new TimelineLite(),
    restart = document.getElementById("restart"),
    pause = document.getElementById("pause"),
    resume = document.getElementById("resume"),
    reverse = document.getElementById("reverse");

tl.from(".drone", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut})
  .add("boxes", "+=1")
  .from("h2", 0.5, {x:600, opacity:0}, "boxes")
  .staggerFrom(".box", 0.5, {opacity:0, y:200}, 0.3, "boxes")
  .to(".drone", 2, {y:150}, "boxes")
  .to(".drone", 2, {x:800, ease:Bounce.easeOut});
  //.to(".drone, .box", 0.5, {opacity:0});

//then later, control the whole thing...

restart.onclick = function() {
    tl.restart();
};
pause.onclick = function() {
    tl.pause();
};
resume.onclick = function() {
    tl.resume();
};
reverse.onclick = function() {
    tl.reverse();
};