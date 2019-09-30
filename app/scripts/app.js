import svg4everybody from 'svg4everybody';
import mainMenu from '../blocks/main-menu/main-menu';

class Viewer {
  constructor() {
    this.init();
  }

  init() {
    this.initClasses();
  }

  initClasses() {
    svg4everybody();
    mainMenu();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Viewer();
});

// window.onload = () => {
//   svg4everybody();
//   mainMenu();
// };
