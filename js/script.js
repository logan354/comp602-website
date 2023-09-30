function handleContactForm() {
    const data = {
        firstName: document.getElementById("contactFormFirstName").value,
        lastName: document.getElementById("contactFormLastName").value,
        email: document.getElementById("contactFormEmail").value,
        phone: document.getElementById("contactFormPhone").value,
        message: document.getElementById("contactFormMessage").value
    }

    // Send data to email service
    console.log(data);

    document.querySelector(".contact-form").reset();
}