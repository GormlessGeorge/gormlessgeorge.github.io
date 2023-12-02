// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });

$(".owl-carousel").owlCarousel({
  dots: true,
  autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
  margin: 40,
  loop: true,
  autoWidth: false,
  items: 3,
  nav:true,
});

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
    // $('.overlay, #sign-in').fadeIn('slow');

  //   $('.overlay, #sign-in').fadeIn("slow", function() {
  //     $('.overlay, #sign-in').removeClass("hidden");
  // });
    
  })
  
}

showSignIn()

function closeModal() {
  console.log("wtf")
  let signInModal = document.getElementById('sign-in')
  let overlay = document.getElementById('overlay')
  let closeIcon = document.getElementById('close-icon')
  
  closeIcon.addEventListener('click', function(){
    signInModal.classList.add('hidden')
    overlay.classList.add('hidden')
  }) 

  overlay.addEventListener('click', function(){
    signInModal.classList.add('hidden')
    overlay.classList.add('hidden')
  })
}

closeModal()


function openTab(evt, serviceName) {
  const mainBlock = document.getElementsByClassName("apply__main-block");
  for (const content of mainBlock) {
      content.style.display = "none";
  }

  const applyTabs = document.getElementsByClassName("apply__tab");
  for (const link of applyTabs) {
      link.classList.remove("active");
  }

  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
