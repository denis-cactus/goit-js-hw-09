const form = document.querySelector('.feedback-form');

const formData = { email: '', message: '' };

window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
    email: '',
    message: '',
  };
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';

  if (formData.email) {
    form.querySelector('[name="email"]').value = formData.email;
  }
  if (formData.message) {
    form.querySelector('[name="message"]').value = formData.message;
  }
});

form.addEventListener('input', evt => {
  const fieldName = evt.target.name;
  formData[fieldName] = evt.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form data:', formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
