import Swiper from 'swiper';

const setSwiper = () => {
  const swiper = new Swiper('.swiper', {

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
        slidesPerView: 'auto',
        slidesPerGroup: 1,
      },

      768: {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
      },

      1024: {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
      },

      1366: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
      },

      1920: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      }
    }
  });
}

export {setSwiper}
