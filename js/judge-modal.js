const closeBtn = document.querySelector('.close-judge-modal');
const modal = document.querySelector('.judge-modal');
const form = document.querySelector('.evaluations-form');
const blur = document.querySelector('.blur');

const radio = document.querySelectorAll('.evulation-radio')
const balls = document.getElementById('balls')
const ballsModal = document.getElementById('ballsModal')
let numberBalls = 0;
let modalBtn = document.querySelector('.open-modal')



window.onload=function(){
  window.scrollBy(0, 30);
}
let radioNames = [];
for (const i of radio) {
  radioNames.push(i.name)
  radioNames = [...new Set(radioNames)];
}



modalBtn.addEventListener('click', function() {

  for (const i of radio) {
    console.log(i.name);
    
  }
  // radioNames.forEach(el => {
  //   if (i.checked.name = el) {
  //     console.log(el);
  //     // modal.classList.remove('visually-hidden');
  //     // blur.classList.remove('visually-hidden')
  //   }
  // });
});

closeBtn.addEventListener('click', function() {
  modal.classList.add('visually-hidden');
  blur.classList.add('visually-hidden')
});

let calc = {
  summ: 0, // сумма изначально 0
  valueArray: (function () { //массив изначально создается на основе данных value выбранных кнопок
    var array = [],
      arrayLength = $(".evaluations-item").length;
    for (var i = 0; i < arrayLength; i++) {
      array[i] = parseInt($(".evaluations-item").eq(i).find("input:checked").attr("value")) || 0;
    };
    return array;
  })(),
  summation: function () { //суммирует значения массива с данными
    var summ = 0,
      i = this.valueArray.length - 1;
    for (; i >= 0; i--) {
      summ += this.valueArray[i];
    };
    this.summ = summ;
    $("#balls").html(calc.summ);
    $("#ballsModal").html(calc.summ);
  },
  changeEvent: function () {	//подключение обработчика событий
    $("input[type='radio']").change(function () {	//для радиокнопок
      var element = event.target,
        elementValue = parseInt(element.value),
        elementId = $(element).parents(".evaluations-item").index();
      calc.valueArray[elementId] = elementValue;
      calc.summation ();
    });
  },
  init: function () {
    calc.summation ();
    calc.changeEvent ();
  }
};
calc.init ();
