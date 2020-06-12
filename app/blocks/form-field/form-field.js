// Анимирует лейбл у полей ввода
class FormField {
  constructor(domElement) {
    this.wrapper = domElement;
    this.field = this.wrapper.querySelector('.form-field__field');
    if (!this.field) {
      console.warn('Не могу найти поле для ввода с классом "form-field__field"');
      return false;
    }

    // Если нет лейбла, то и нет смысла продолжать
    this.label = this.wrapper.querySelector('.form-field__label');
    if (!this.label) return false;

    // Если значение у поля предустановлено
    if (this.field.value) this.wrapper.classList.add('is-filled');

    this.focusHandler = this.focusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.field.addEventListener('focus', this.focusHandler);
    this.field.addEventListener('blur', this.blurHandler);
  }

  focusHandler() {
    this.wrapper.classList.add('is-filled');
  }

  blurHandler(e) {
    if (e.target.value) return;
    this.wrapper.classList.remove('is-filled');
  }
}

export default FormField;
