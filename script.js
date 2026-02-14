const appointmentForm = document.getElementById('appointmentForm');
const formMessage = document.getElementById('formMessage');

appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!appointmentForm.checkValidity()) {
    formMessage.textContent = 'Please fill in all required fields correctly.';
    formMessage.style.color = '#b02a37';
    appointmentForm.reportValidity();
    return;
  }

  const patientName = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  formMessage.textContent = `Thanks, ${patientName}! Your ${service} request has been received.`;
  formMessage.style.color = '#145868';
  appointmentForm.reset();
});
