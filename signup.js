document.getElementById('signup-form').addEventListener('submit', function(event) {
    let isValid = true;

    const name = document.getElementById('signup-name');
    const email = document.getElementById('signup-email');
    const message = document.getElementById('signup-message');

    if (!name.value) {
        isValid = false;
        document.getElementById('signup-name-error').classList.remove('hidden');
    } else {
        document.getElementById('signup-name-error').classList.add('hidden');
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value || !emailPattern.test(email.value)) {
        isValid = false;
        document.getElementById('signup-email-error').classList.remove('hidden');
    } else {
        document.getElementById('signup-email-error').classList.add('hidden');
    }

    if (!message.value) {
        isValid = false;
        document.getElementById('signup-message-error').classList.remove('hidden');
    } else {
        document.getElementById('signup-message-error').classList.add('hidden');
    }

    if (!isValid) {
        event.preventDefault();
    }
});