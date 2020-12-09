$(document).ready(function () {
  let score=0;
  let intro = $('.game-screen');
  let level1bg = $('.game').hide();

  //Audio
  let music = new Audio('./sounds/intro-music.wav');
  let ufo = new Audio('./sounds/ufos.ogg');
  let shot = new Audio('./sounds/laser-shot.mp3');
  let ufoExplosion = new Audio('./sounds/ufoexplosion.wav');

  //level one vars

var flames1 = $('#flames1').hide();
  var flames2 = $('#flames2').hide();
  var flames3 = $('#flames3').hide();
  var bossFlames = $('#bossFlames').hide();
  var explosion1 = $('#explosion1').hide();
  var explosion2 = $('#explosion2').hide();
  var explosion3 = $('#explosion3').hide();
  var bossExplosion = $('#bossExplosion').hide();

let ufo1 = $('#ufo1');
let ufo2 = $('#ufo2');
let ufo3 = $('#ufo3');
let boss = $('#boss').hide();

let ufo1Lives=10
let ufo2Lives=10
let ufo3Lives=10
let bossLives=10


  $('#start').click(function () {
    intro.fadeOut(500, function () {
      level1bg.fadeIn(2000)
      animateDiv();
      ufo.play();
      //
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

level1bg.click(function(){
  shot.play();
})

function game_on(ship,enemyLives,flames,explosion,explosionSound){
  ship.click(function(){
    score++;
    enemyLives--;
    console.log('score '+score);
    if(enemyLives<5){
      flames.fadeIn();
    }
    if(enemyLives<1){
      explosionSound.play();
      flames.hide();
      ship.hide();
      explosion.show();
      setTimeout(function(){
        explosion.fadeOut(1000)
      },3000)
    }
win();
  })
}


function win(){
  if(score>29){
    boss.fadeIn();
    music.play();
    game_on(boss,bossLives,bossFlames,bossExplosion,ufoExplosion);
  }
}


game_on(ufo1,ufo1Lives,flames1,explosion1,ufoExplosion);
game_on(ufo2,ufo2Lives,flames2,explosion2,ufoExplosion);
game_on(ufo3,ufo3Lives,flames3,explosion3,ufoExplosion);
});



let velocity =3000;
function makeNewPosition() {

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
  var boss = makeNewPosition();

  $('.a').animate({
    top: newq[0],
    left: newq[1]
  }, velocity, function () {
    animateDiv();
  });
  $('.b').animate({
    bottom: x[0],
    left: x[1]
  }, velocity, function () {
    animateDiv();
  });
  $('.c').animate({
    top: y[0],
    left: y[1]
  }, velocity, function () {
    animateDiv();
  });
  $('.d').animate({
    bottom: boss[0],
    left: boss[1]
  }, 1000, function () {
    animateDiv();
  });

};
