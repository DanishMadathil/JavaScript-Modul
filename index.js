const form = document.getElementById("signupForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function validatePasswords() {
  if (password.value.length < 6) {
    password.classList.add("is-invalid");
    return false;
  } else {
    password.classList.remove("is-invalid");
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("is-invalid");
    return false;
  } else {
    confirmPassword.classList.remove("is-invalid");
  }

  return true;
}

form.addEventListener("submit", function (event) {
  if (!form.checkValidity() || !validatePasswords()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
});

// Real-time validation
confirmPassword.addEventListener("input", validatePasswords);
password.addEventListener("input", validatePasswords);
