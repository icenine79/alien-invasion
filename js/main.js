$(document).ready(function () {
  let score=0;
  let bullets=10;
  let countdown=50;
  let game = $('.game').hide();
  let intro = $('.game-screen');
  let music = new Audio('./sounds/intro-music.wav');
  let ufo = new Audio('./sounds/ufos.ogg');
  let shot = new Audio('./sounds/laser-shot.mp3');
  var flames1 = $('#flames1').hide();
  var flames2 = $('#flames2').hide();
  var flames3 = $('#flames3').hide();
  var flames4 = $('#flames4').hide();
let ufo1 = $('#ufo1');


var ufo1Lives=6

  $('#start').click(function () {
    intro.fadeOut(500, function () {
      game.fadeIn(5000)
      animateDiv();
      //ufo.play();
      //music.play();
    })
  })
  music.addEventListener("ended", function () {
    music.currentTime = 0;
    music.play();
  });
  ufo.addEventListener("ended", function () {
    ufo.currentTime = 0;
    ufo.play();
  });

game.click(function(){
  shot.play();
  bullets--;
})
ufo1.click(function(){
  score++
  ufo1Lives--;
  console.log('hit')
  console.log(score)
  if(ufo1Lives<=3){
    flames1.fadeIn();
  }

});

});

function makeNewPosition() {

  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];

}

function animateDiv() {
  var newq = makeNewPosition();
  var x = makeNewPosition();
  var y = makeNewPosition();
  var z = makeNewPosition();
  var b = makeNewPosition();

  $('.a').animate({
    top: newq[0],
    left: newq[1]
  }, 15000, function () {
    animateDiv();
  });
  $('.b').animate({
    bottom: x[0],
    left: x[1]
  }, 500, function () {
    animateDiv();
  });
  $('.c').animate({
    top: y[0],
    left: y[1]
  }, 5000, function () {
    animateDiv();
  });
  $('.d').animate({
    top: z[0],
    left: z[1]
  }, 5000, function () {
    animateDiv();
  });
  $('.e').animate({
    top: b[1],
    left: b[0]
  }, 1000, function () {
    animateDiv();
  });
};
