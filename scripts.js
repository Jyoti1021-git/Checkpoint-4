function validateRegisterForm() {
    const fullname = document.getElementById('fullname').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const dob = document.getElementById('dob').value;

    if (fullname === '' || contact === '' || email === '' || password === '' || dob === '') {
        alert('All fields are required.');
        return false;
    }

    if (contact.length !== 10 || isNaN(contact)) {
        alert('Contact should be a 10-digit number.');
        return false;
    }

    if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return false;
    }

    alert('Registration successful!');
    return true;
}

function validateLoginForm() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (email === '' || password === '') {
        alert('All fields are required.');
        return false;
    }

    alert('Login successful!');
    return true;
}
