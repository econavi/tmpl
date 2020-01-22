function Accordion(accordionElement) {
  if (!accordionElement) return;

  this.accordion = accordionElement;
  this.selectors = {
    toggle: 'accordion__header',
    body: 'accordion__body',
    toOpen: 'is-open',
  };
  this.resizeHandlerEnable = false;
  this.currentAccordion = null;
  this.bodyCurrentAccordion = null;

  this.showBodyAccordion = (node) => {
    const element = node;
    element.style.height = `${element.scrollHeight}px`;
    return element;
  };

  this.hideBodyAccordion = (node) => {
    const element = node;
    element.style.height = null;
    return element;
  };

  this.resize = () => {
    this.showBodyAccordion(this.bodyCurrentAccordion);
  };

  this.clickHandler = (e) => {
    const { target } = e;

    // Если клик не по переключателю, ничего не делаем
    const clickOnToggle = target.classList.contains(this.selectors.toggle);
    if (!clickOnToggle) return;

    e.preventDefault();

    // Получим текущий Аккордеон
    this.currentAccordion = target.parentElement;
    // Переключим css-класс открыт/закрыт
    this.currentAccordion.classList.toggle(this.selectors.toOpen);
    // Получим тело Аккордеона
    this.bodyCurrentAccordion = this.currentAccordion
      .querySelector(`.${this.selectors.body}`);

    // Скроем или отобразим тело изменив высоту
    if (this.bodyCurrentAccordion.style.height) {
      this.hideBodyAccordion(this.bodyCurrentAccordion);
      // Аккордион закрыт, удалим обработчик на resize окна
      window.removeEventListener('resize', this.resize, false);
    } else {
      this.showBodyAccordion(this.bodyCurrentAccordion);
      // Аккордион открыт, назначим обработчик на resize окна
      window.addEventListener('resize', this.resize, false);
    }
  };

  this.accordion.addEventListener('click', this.clickHandler);
}

export default Accordion;
