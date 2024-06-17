document.getElementById('login-form').addEventListener('submit', function(event) {
    let isValid = true;

    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value || !emailPattern.test(email.value)) {
        isValid = false;
        document.getElementById('login-email-error').classList.remove('hidden');
    } else {
        document.getElementById('login-email-error').classList.add('hidden');
    }

    if (!password.value) {
        isValid = false;
        document.getElementById('login-password-error').classList.remove('hidden');
    } else {
        document.getElementById('login-password-error').classList.add('hidden');
    }

    if (!isValid) {
        event.preventDefault();
    }
});