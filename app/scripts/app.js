
import svg4everybody from 'svg4everybody';
// import uiKitInit from '../ui-kit/js';

import mainNav from '../blocks/main-nav/main-nav';
import mainMenu from '../blocks/main-menu/main-menu';
import burger from '../blocks/burger/burger';

document.addEventListener('DOMContentLoaded', () => {
  svg4everybody();
  // uiKitInit();

  mainNav();
  mainMenu();
  burger();
});
