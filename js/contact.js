document.addEventListener("DOMContentLoaded", () => {

  const contactForm = document.getElementById('contactForm');

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Backend is not live – placeholder for future server-side setup
    alert("Form validated successfully. In a live site, this would now be sent to the server.");

    contactForm.reset();
  });

});
