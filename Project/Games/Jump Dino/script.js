var character = document.querySelector('.character');
var block = document.querySelector('.block');
var counter = 0;

function jump() {
  if (character.classList == 'animate') return;
  character.classList.add('animate');
  setTimeout(function () {
    character.classList.remove('animate')
  }, 300)
}

var checkDeath = setInterval(() => {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
  let score = Math.floor(counter / 100);

  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    alert(`Game Over. Score: ${score}`);
    block.style.animation = 'none';
    counter = 0;
    block.style.animation = 'block 1s infinite linear'
  }
  else {
    counter++;
    document.getElementById('score').innerHTML = score;
  }
}, 10);