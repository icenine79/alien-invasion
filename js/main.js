$(document).ready(function () {
  let score=0;
  let intro = $('.game-screen');
  let level1bg = $('.game').hide();
  let level2bg = $('.level-two-bg').hide();
  let end_level_one= $('.end-level-one-message').hide();

  //Audio
  let music = new Audio('./sounds/intro-music.wav');
  let ufo = new Audio('./sounds/ufos.ogg');
  let shot = new Audio('./sounds/laser-shot.mp3');
  let ufoExplosion = new Audio('./sounds/ufoexplosion.wav');

  //level one vars

var flames1 = $('#flames1').hide();
  var flames2 = $('#flames2').hide();
  var flames3 = $('#flames3').hide();
  var flames4 = $('#flames4').hide();
  var explosion1 = $('#explosion1').hide();
  var explosion2 = $('#explosion2').hide();
  var explosion3 = $('#explosion3').hide();
  var explosion4 = $('#explosion4').hide();

let ufo1 = $('#ufo1');
let ufo2 = $('#ufo2');
let ufo3 = $('#ufo3');
let ufo4 = $('#ufo4');

let ufo1Lives=10
let ufo2Lives=10
let ufo3Lives=10
let ufo4Lives=10

//level two vars

let begin_level_2 = $('#begin-level-two');
let level_2_flames1 =$('#level2-flames1').hide();
let level_2_flames2 =$('#level2-flames2').hide();
let level_2_flames3 =$('#level2-flames3').hide();
let level_2_flames4 =$('#level2-flames4').hide();
let level2_explosion1 =$('#level2-explosion1').hide()
let level2_explosion2 =$('#level2-explosion2').hide()
let level2_explosion3 =$('#level2-explosion3').hide()
let level2_explosion4 =$('#level2-explosion4').hide()

let level2_ufo1 =$('#ufo1-level2');
let level2_ufo2 =$('#ufo2-level2');
let level2_ufo3 =$('#ufo3-level2');
let level2_ufo4 =$('#ufo4-level2');

let ufo1_Lives_level2=10
let ufo2_Lives_level2=10
let ufo3_Lives_level2=10
let ufo4_Lives_level2=10


  $('#start').click(function () {
    intro.fadeOut(500, function () {
      level1bg.fadeIn(2000)
      animateDiv();
      ufo.play();
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

level1bg.click(function(){
  shot.play();
})
level2bg.click(function(){
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
  if(score>39){
    end_level_one.fadeIn();
    level_two();
  }

}
function level_two(){
  score=0;
  velocity +=1000;
  begin_level_2.click(function(){
    end_level_one.hide();
    level1bg.fadeOut(1000,function(){
      level2bg.fadeIn(1000);
      animateDiv();
    })
    })
game_on(level2_ufo1,ufo1_Lives_level2,level_2_flames1,level2_explosion1,ufoExplosion);
game_on(level2_ufo2,ufo2_Lives_level2,level_2_flames2,level2_explosion2,ufoExplosion);
game_on(level2_ufo3,ufo3_Lives_level2,level_2_flames3,level2_explosion3,ufoExplosion);
game_on(level2_ufo4,ufo4_Lives_level2,level_2_flames4,level2_explosion4,ufoExplosion);
}

game_on(ufo1,ufo1Lives,flames1,explosion1,ufoExplosion);
game_on(ufo2,ufo2Lives,flames2,explosion2,ufoExplosion);
game_on(ufo3,ufo3Lives,flames3,explosion3,ufoExplosion);
game_on(ufo4,ufo4Lives,flames4,explosion4,ufoExplosion);
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
  var z = makeNewPosition();
  var level2ship1 = makeNewPosition();

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
    top: z[0],
    left: z[1]
  }, velocity, function () {
    animateDiv();
  });
  $('.e').animate({
    top: level2ship1[1],
    left: level2ship1[0]
  }, velocity, function () {
    animateDiv();
  });
};
