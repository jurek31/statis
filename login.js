const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submit');

let username = '';
let password = '';

form.addEventListener('submit', (e) => {
	e.preventDefault();
	username = usernameInput.value.trim();
	password = passwordInput.value.trim();

	if (username === '' || password === '') {
		errorMessage.textContent = 'Please fill in all fields.';
		return;
	}

	if (username === 'admin' && password === 'password') {
		// Login successful, redirect to dashboard page
		window.location.href = 'dashboard.html';
	} else {
		errorMessage.textContent = 'Invalid username or password.';
	}
});