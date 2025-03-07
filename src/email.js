const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  btn.value = 'Sending...'; // Change button text to "Sending..."

  const serviceID = 'service_6f8kgzv'; // Your EmailJS service ID
  const templateID = 'template_vmhqt2q'; // Your EmailJS template ID

  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  emailjs
    .send(serviceID, templateID, {
      from_name: name,
      from_email: 'philexinternational172@gmail.com',
      reply_to: email,
      to_email: 'philexinternational172@gmail.com',
      subject: 'New message from ' + name,
      message: message,
    })
    .then(() => {
      btn.value = 'Send Message';
      alert('Email sent successfully!');
    })
    .catch((err) => {
      btn.value = 'Send Email'; // Reset button text
      alert('Failed to send email. Error: ' + JSON.stringify(err));
    });
});
