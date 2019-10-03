import svg4everybody from 'svg4everybody';
import mainMenu from '../blocks/main-menu/main-menu';

class Viewer {
  constructor() {
    this.mainMenu = mainMenu;
    this.svg4everybody = svg4everybody;
    this.init();
  }

  init() {
    this.initClasses();
  }

  initClasses() {
    this.svg4everybody();
    this.mainMenu();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-new
  new Viewer();
});

// window.onload = () => {
//   svg4everybody();
//   mainMenu();
// };
