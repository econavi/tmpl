const Burger = () => {
  const burgerElement = document.querySelector('[data-js="burger"]');

  if (burgerElement) {
    burgerElement.addEventListener('click', (e) => {
      e.preventDefault();
      burgerElement.classList.toggle('is-active');
    });
  }
};

export default Burger;
