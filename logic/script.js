document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;
  
      const data = {
        email: email,
        password: password,
        role: role
      };
  
      fetch('YOUR_AZURE_LOGIC_APP_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Handle success response
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error response
      });
    });
  });