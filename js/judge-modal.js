// Modal

const closeBtn = document.querySelector('.close-judge-modal');
const modal = document.querySelector('.judge-modal');
const form = document.querySelector('.evaluations-form');
const blur = document.querySelector('.blur');


form.addEventListener('submit', function(e) {
  e.preventDefault();
  modal.classList.remove('visually-hidden');
  blur.classList.remove('visually-hidden')
});

closeBtn.addEventListener('click', function() {
  modal.classList.add('visually-hidden');
  blur.classList.add('visually-hidden')
});

