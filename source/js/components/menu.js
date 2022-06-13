const menu = document.body.querySelector('.menu');
const burger = document.body.querySelector('.burger');

const setMenu = () => {
  burger.addEventListener('click', () => {
    menu.classList.remove('hidden');

    menu.querySelector('.menu__close').addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

export {setMenu}
