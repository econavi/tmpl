const burger = () => {
  const burgerElement = document.querySelector('.js-burger');

  if (burgerElement) {
    burgerElement.addEventListener('click', (e) => {
      e.preventDefault();
      burgerElement.classList.toggle('is-active');
    });
  }
};

export default burger;
