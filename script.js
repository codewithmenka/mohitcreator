var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const parent = question.parentElement;
  
      // Toggle active class
      parent.classList.toggle('active');
    });
  });