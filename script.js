document.getElementById('userForm').addEventListener('submit', function (event) {
    // Prevent form submission
    event.preventDefault();

    // Clear errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;
    const city = document.getElementById('city').value.trim();

    let isValid = true;

    // Validate name
    if (!name) {
        document.getElementById('nameError').textContent = "Name is required.";
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Valid email is required.";
        isValid = false;
    }

    // Validate age
    if (!age || age <= 0) {
        document.getElementById('ageError').textContent = "Valid age is required.";
        isValid = false;
    }

    // Validate gender
    if (!gender) {
        document.getElementById('genderError').textContent = "Gender is required.";
        isValid = false;
    }

    // Validate city
    if (!city) {
        document.getElementById('cityError').textContent = "City is required.";
        isValid = false;
    }

    // If valid, submit the form
    if (isValid) {
        this.submit();
    }
});
