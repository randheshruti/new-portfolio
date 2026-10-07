document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Prevent form submission
    event.preventDefault();


    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();


    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    let successMessage = document.getElementById("successMessage");


    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;


    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }


    // Email validation
    if (email === "") {

        emailError.textContent = "Email is required.";
        isValid = false;

    } else {

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        }
    }


    // Message validation
    if (message === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }


    // If everything is valid
    if (isValid) {

        successMessage.textContent =
            "Message submitted successfully!";

        document.getElementById("contactForm").reset();
    }

});