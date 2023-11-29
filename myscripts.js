const email = document.getElementById("mail");
const form = document.querySelector("form");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

const myElement = document.getElementById('comments');

// Add an event listener for the "keypress" event
myElement.addEventListener("keypress", (event) => {
    // Your code to handle the "keypress" event goes here
    const specialCharacters = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
    if (specialCharacters.test(event.key)) {
        console.error('Special characters are not allowed!');
        event.preventDefault();
    }
});

form.addEventListener("submit", (event) => {
    // if the email field is valid, we let the form submit
    if (!form.validity.valid) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });
  function showError() {
    if (myElement.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      emailError.textContent = "You need to enter an email address.";
    } else if (myElement.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (myElement.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      error_m.textContent = `Invalid Comment!`;
    }
}
// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Save theme preference to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    moonImage.style.display = 'none';
    sunImage.style.display = 'none';
    sunImage.style.display = 'inline-block';
    if (isDarkMode) {
        sunImage.style.display = 'none';
        moonImage.style.display = 'inline-block';
    } else {
        moonImage.style.display = 'none';
        sunImage.style.display = 'inline-block';
    }
}

// Function to handle the button click event
function myFunction() {
    toggleDarkMode();
}

// Function to check and apply the theme preference on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Apply saved theme on page load
applySavedTheme();
