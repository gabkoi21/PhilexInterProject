const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'service_6f8kgzv';
  const templateID = 'template_vmhqt2q';

  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  emailjs
    .send(serviceID, templateID, {
      from_name: name, // This should match {{from_name}} in your template
      reply_to: email, // This should match {{reply_to}} in your template
      message: message, // This should match {{message}} in your template
    })
    .then(() => {
      btn.value = 'Send Message';
      // alert('Email sent successfully!');
      form.reset(); // Reset the form fields
    })
    .catch((err) => {
      btn.value = 'Send Email'; // Reset button text
      alert('Failed to send email. Error: ' + JSON.stringify(err));
    });
});
