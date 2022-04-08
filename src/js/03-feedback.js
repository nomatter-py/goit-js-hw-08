import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

let refs = {
  emailElement: document.querySelector('[name="email"]'),
  messageElement: document.querySelector('[name="message"]'),
  form: document.querySelector('.feedback-form'),
};

const FORM_STATE_KEY = 'feedback-form-state';
const currentFormState = localStorage.getItem(FORM_STATE_KEY);
let formData = { email: '', message: '' };

restoreFormState();

const onDataInput = evt => {
  if (evt.target.getAttribute('name') === 'email') {
    formData.email = evt.target.value;
  } else {
    formData.message = evt.target.value;
  }

  saveFormData(formData);
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onDataInput, 500));

function saveFormData(data) {
  let formDataJSON = JSON.stringify(data);
  localStorage.setItem(FORM_STATE_KEY, formDataJSON);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(FORM_STATE_KEY);
}

function restoreFormState() {
  if (!currentFormState) return;

  formData = JSON.parse(currentFormState);

  refs.emailElement.value = formData.email;
  refs.messageElement.value = formData.message;
}
