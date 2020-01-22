import Accordion from '../components/accordion/accordion';

const libInit = () => {
  /* accordions */
  const accordions = document.querySelectorAll('.accordion');
  if (accordions.length) {
    [].map.call(accordions, (el) => new Accordion(el));
  }
};

export default libInit;
