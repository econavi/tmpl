const MainNav = () => {
  const selectors = {
    menu: '.js-main-menu',
    switcher: '.js-main-menu-switcher',
    body: 'body',
  };

  const menu = document.querySelector(selectors.menu);
  const switcher = document.querySelector(selectors.switcher);
  const body = document.querySelector(selectors.body);

  if (!menu || !switcher) return;

  const onClickSwitcher = (event) => {
    event.preventDefault();
    menu.classList.toggle('is-opend');
    switcher.classList.toggle('is-opend');

    if (!body.classList.contains('menu-opend')) {
      body.classList.add('menu-opend');
    } else {
      body.classList.remove('menu-opend');
    }
  };

  switcher.addEventListener('click', onClickSwitcher);
};

export default MainNav;
