const POINT = 1024;

const first = document.body.querySelector('.footer p:nth-of-type(1)');
const second = document.body.querySelector('.footer p:nth-of-type(2)');
const third = document.body.querySelector('.footer p:nth-of-type(3)');

const setPosition = () => {
  let position = second.offsetHeight - first.offsetHeight;
  third.style.top = `-${position}px`;

  const setCoordinate = () => {
    position = second.offsetHeight - first.offsetHeight;
    third.style.top = `-${position}px`;

    if (window.matchMedia(`(max-width: ${POINT + 1}px)`).matches) {
      window.removeEventListener('resize', setPosition);
      third.style.top = '0px';
    }
  }

  window.addEventListener('resize', setCoordinate);
}

export {setPosition}
