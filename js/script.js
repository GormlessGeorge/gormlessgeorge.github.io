// $(document).ready(function(){
//   $('.reviews__slider').slick({
//     setting-name: setting-value
//   });
// });

// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   autoplay: true
// });

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
})

function togglePassVisibility() {
  let eyeIcons = document.getElementsByClassName("sign-in__eye-icon");
  eyeIcons[0].classList.toggle("active");
  let temp = document.getElementById("typepass");

  if (temp.type === "password") {
    temp.type = "text";
  } else {
    temp.type = "password";
  }
}

function selectQuestion() {
  console.log("test");
  let questionTitle = document.getElementById("faq__answer-title");
  let questionDescr = document.getElementById("faq__answer-descr");
  let questions = document.querySelectorAll(".faq__question");
  console.log(questions.length);
  questions.forEach(function (elem) {
    elem.addEventListener("click", function () {
      if (elem.classList.contains("faq__question-first")) {
        questionTitle.textContent = elem.textContent;
      } else if (elem.classList.contains("faq__question-second")) {
        questionDescr.textContent =
          "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.";
        questionTitle.textContent = elem.textContent;
      } else if (elem.classList.contains("faq__question-third")) {
        questionDescr.textContent = "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад."
        questionTitle.textContent = elem.textContent;
      } else if (elem.classList.contains("faq__question-forth")) {
        questionTitle.textContent = elem.textContent;
        questionDescr.textContent = "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века."
      }
    });
  });
}

selectQuestion();

function showSignIn() {
  let signInModal = document.getElementById('sign-in')
  let overlay = document.getElementById('overlay')
  let button = document.getElementById('menu__account-button')
  button.addEventListener('click', function(){
    signInModal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  })
  
}

showSignIn()

function closeModal() {
  let signInModal = document.getElementById('sign-in')
  let overlay = document.getElementById('overlay')
  let closeIcon = document.getElementById('close-icon')
  console.log(closeIcon)
  closeIcon.addEventListener('click', function(){
    signInModal.classList.add('hidden')
    overlay.classList.add('hidden')
  }) 

}

closeModal()


function switchUpperTabs() {
  let tabs = document.querySelectorAll('.apply__tab-upper');
  let contents = document.querySelectorAll('.tab__content-upper')
  tabs.forEach(element => {
    element.addEventListener('click', function() {
      element.classList.toggle('apply__tab_active')
      let nextSibling = element.nextElementSibling;
      let prevSibling = element.previousSibling;

      if(nextSibling !== null) {
        nextSibling.classList.remove('apply__tab_active');
      }
      if(prevSibling !== null) {
        prevSibling.classList.remove('apply__tab_active');
      }
        
      contents.forEach(element => {
        element.classList.toggle('hidden-vis');
        console.log(element)
      });
    })
  });
}


function switchLowerTabs() {
  let tabs = document.querySelectorAll('.apply__tab-lower');
  let contents = document.querySelectorAll('.tab__content-lower')
  tabs.forEach(element => {
    element.addEventListener('click', function() {
      element.classList.toggle('apply__tab_active')
      let nextSibling = element.nextElementSibling;
      let prevSibling = element.previousSibling;

      if(nextSibling !== null) {
        nextSibling.classList.remove('apply__tab_active');
      }
      if(prevSibling !== null) {
        prevSibling.classList.remove('apply__tab_active');
      }
        
      contents.forEach(element => {
        element.classList.toggle('hidden-vis');
        console.log(element)
      });
    })
  });
}





//Функция расчета плана "Стандарт"

function calculateStandartHours() {
  let inputElement = document.querySelector(".standart__selection-hours");
  let arrowLeft = document.querySelector(".standart__selection-arrow-left");
  let arrowRight = document.querySelector(".standart__selection-arrow-right");
  let priceElement = document.querySelector(".standart__lesson-price-final");
  
  function updatePrice() {
    let price = Number(inputElement.value) * 500;
    priceElement.textContent = price.toLocaleString('ru-RU') + '₽';
  }

  inputElement.oninput = function() {
    if (inputElement.value <= 0) {
      inputElement.value = 1;
    }
    updatePrice();
  }

  arrowLeft.onclick = function() {
    if (inputElement.value > 1) {
      inputElement.value = Number(inputElement.value) - 1;
      updatePrice();
    }
  }

  arrowRight.onclick = function() {
    inputElement.value = Number(inputElement.value) + 1;
    updatePrice();
  }

  updatePrice();
}

//Функция расчета плана "Премиум"

function calculatePremiumHours() {
  let inputElement = document.querySelector(".premium__selection-hours");
  let arrowLeft = document.querySelector(".premium__selection-arrow-left");
  let arrowRight = document.querySelector(".premium__selection-arrow-right");
  let priceElement = document.querySelector(".premium__lesson-price-final");
  
  function updatePrice() {
    let price = Number(inputElement.value) * 1000;
    priceElement.textContent = price.toLocaleString('ru-RU') + '₽';
  }

  inputElement.oninput = function() {
    if (inputElement.value <= 0) {
      inputElement.value = 1;
    }
    updatePrice();
  }

  arrowLeft.onclick = function() {
    if (inputElement.value > 1) {
      inputElement.value = Number(inputElement.value) - 1;
      updatePrice();
    }
  }

  arrowRight.onclick = function() {
    inputElement.value = Number(inputElement.value) + 1;
    updatePrice();
  }

  updatePrice();
}

//Функция расчета плана "Расширенный"

function calculateExtendedHours() {
  let inputElement = document.querySelector(".extended__selection-hours");
  let arrowLeft = document.querySelector(".extended__selection-arrow-left");
  let arrowRight = document.querySelector(".extended__selection-arrow-right");
  let priceElement = document.querySelector(".extended__lesson-price-final");
  
  function updatePrice() {
    let price = Number(inputElement.value) * 1500;
    priceElement.textContent = price.toLocaleString('ru-RU') + '₽';
  }

  inputElement.oninput = function() {
    if (inputElement.value <= 0) {
      inputElement.value = 1;
    }
    updatePrice();
  }

  arrowLeft.onclick = function() {
    if (inputElement.value > 1) {
      inputElement.value = Number(inputElement.value) - 1;
      updatePrice();
    }
  }

  arrowRight.onclick = function() {
    inputElement.value = Number(inputElement.value) + 1;
    updatePrice();
  }

  updatePrice();
}


switchUpperTabs()
switchLowerTabs()
calculateStandartHours()
calculatePremiumHours()
calculateExtendedHours()