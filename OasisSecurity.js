document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
    
    // Validate form
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Simulate sign-up (replace with actual sign-up logic)
    alert('Sign up successful!');

    // Clear form fields
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    
    // Validate form
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Simulate login (replace with actual authentication logic)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }

    // Clear form fields
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});
