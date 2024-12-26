function validateForm() {
    const form = document.getElementById('registration-form');
    const requiredInputs = form.querySelectorAll('[required]');
    for (let input of requiredInputs) {
        if (!input.value.trim()) {
            alert("Please fill out all required fields.");
            return false;
        }
    }

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please enter the same password.");
        return false;
    }

    const formData = {
        fullName: document.getElementById('full-name').value,
        email: document.getElementById('email').value,
        password: password,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        dob: document.getElementById('dob').value,
        address: document.getElementById('address').value,
        country: document.getElementById('country').value,
        terms: document.getElementById('terms').checked
    };

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
        console.log(data);
    })
    .catch(error => {
        alert('Error submitting form');
        console.error('Error:', error);
    });

    return false; 
}
