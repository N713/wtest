import Swiper from 'swiper';

let GAP = 30;
let numberOfSlides = 4;

const setSwiper = () => {
  const swiper = new Swiper('.swiper', {
      slidesPerView: numberOfSlides - 3,
      slidesPerGroup: numberOfSlides - 3,
      spaceBetween: GAP - 20,
    
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },

      768: {
        slidesPerView: 'auto',
        slidesPerGroup: numberOfSlides - 2,
        spaceBetween: GAP,
      },

      1024: {
        slidesPerView: 'auto',
        slidesPerGroup: numberOfSlides - 2,
        spaceBetween: GAP + 20
      },

      1366: {
        slidesPerView: 'auto',
        slidesPerGroup: numberOfSlides - 1,
        spaceBetween: GAP + 28
      },

      1920: {
        slidesPerView: numberOfSlides,
        slidesPerGroup: numberOfSlides,
        spaceBetween: GAP
      }
    }
  });
}

export {setSwiper}