document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email regex pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.remove());

    let isValid = true;

    // Validate Full Name
    if (name === "") {
      showError("fullName", "Full Name is required");
      isValid = false;
    }

    // Validate Email
    if (email === "") {
      showError("email", "Email is required");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      showError("email", "Enter a valid email address");
      isValid = false;
    }

    // Validate Subject
    if (subject === "") {
      showError("subject", "Subject is required");
      isValid = false;
    }

    // Validate Message
    if (message === "") {
      showError("message", "Message is required");
      isValid = false;
    }

    // If all fields are valid
    if (isValid) {
      alert("Form submitted successfully ✅");
      form.reset();
    }
  });

  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const error = document.createElement("small");
    error.className = "error";
    error.style.color = "red";
    error.textContent = message;
    input.parentNode.appendChild(error);
  }
});
