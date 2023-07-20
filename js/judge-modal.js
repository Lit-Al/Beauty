const closeBtn = document.querySelector('.close-judge-modal');
const modal = document.querySelector('.judge-modal');
const form = document.querySelector('.evaluations-form');
const blur = document.querySelector('.blur');

const radio = document.getElementsByClassName('evulation-radio')
const balls = document.getElementById('balls')
const ballsModal = document.getElementById('ballsModal')
let numberBalls = 0;

let arr = [];

function checkType(node) {
  if (!arr.includes(node.name)) {
  numberBalls += + node.value
  }
  else {
    node.disabled = true
  }
  console.log(!arr.includes(node.name));
  arr.push(node.name)
  for (const i of radio) {
    if (i.name === node.name)
      i.disabled = true
  }
  console.log(arr);
  balls.innerHTML = numberBalls
  ballsModal.innerHTML = numberBalls

}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  modal.classList.remove('visually-hidden');
  blur.classList.remove('visually-hidden')
});

closeBtn.addEventListener('click', function() {
  modal.classList.add('visually-hidden');
  blur.classList.add('visually-hidden')
});

