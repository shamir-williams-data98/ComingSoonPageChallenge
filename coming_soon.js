document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('email-form');
  const emailInput = document.getElementById('email');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset previous error state
    form.querySelector('.form-control').classList.remove('error');
    
    // Validate email
    if (validateEmail(emailInput.value)) {
      // Success - could submit the form or show success message
      emailInput.value = '';
      
      // Optional: Show success message
      alert('Thank you! Your email has been registered.');
    } else {
      // Error - show error state
      form.querySelector('.form-control').classList.add('error');
    }
  });
  
  // Email validation using regex
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email !== '' && re.test(String(email).toLowerCase());
  }
  
  // Reset error state when user starts typing
  emailInput.addEventListener('input', () => {
    form.querySelector('.form-control').classList.remove('error');
  });
});