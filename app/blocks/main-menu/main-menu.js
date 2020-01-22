const mainMenu = () => {
  const elem = document.querySelectorAll('.main-menu__link');

  if (!elem) return;

  for (let i = 0; i < elem.length; i += 1) {
    if (elem[i].getAttribute('href') === window.location.pathname) {
      elem[i].classList.add('is-active');
      elem[i].removeAttribute('href');
    }
  }
};

export default mainMenu;
