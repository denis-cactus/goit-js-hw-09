const formData = { email: '', textarea: '' };
const form = document.querySelector('.feedback-form');

window.addEventListener('load', () => {
  if (formData.email) {
    form.querySelector('[name="email"]').value = formData.email;
  }
  if (formData.textarea) {
    form.querySelector('[name="textarea"]').value = formData.textarea;
  }
});
form.addEventListener('input', evt => {
  const fieldName = evt.target.value;
  formData[fieldName] = evt.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!formData.email || !formData.textarea) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
