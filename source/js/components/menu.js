const menu = document.body.querySelector('.menu');
const burger = document.body.querySelector('.burger');

const setMenu = () => {
  burger.addEventListener('click', () => {
    menu.classList.remove('hidden');

    menu.querySelector('.menu__close').addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

  const first = document.body.querySelector('.footer p:nth-of-type(1)');
  const second = document.body.querySelector('.footer p:nth-of-type(2)');
  const third = document.body.querySelector('.footer p:nth-of-type(3)');

  let position = second.offsetHeight - first.offsetHeight;
  third.style.top = `-${position}px`;

  window.addEventListener('resize', () => {
    position = second.offsetHeight - first.offsetHeight;
    third.style.top = `-${position}px`;
  });
}

export {setMenu}
