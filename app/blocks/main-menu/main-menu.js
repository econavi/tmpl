const mainMenu = () => {
  const elem = document.querySelectorAll('.main-menu__link');

  for (let i = 0; i < elem.length; i += 1) {
    if (elem[i].getAttribute('href') === window.location.pathname) {
      elem[i].classList.add('is-active');
      elem[i].removeAttribute('href');
    }
  }
};

export default mainMenu;
