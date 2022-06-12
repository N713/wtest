import Swiper from 'swiper';

let GAP = 30;
let numberOfSlides = 4;

const setSwiper = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: numberOfSlides,
    slidesPerGroup: numberOfSlides,
    spaceBetween: GAP,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

export {setSwiper}