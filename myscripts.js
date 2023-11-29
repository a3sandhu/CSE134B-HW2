document.addEventListener('DOMContentLoaded', function () {
    const textFields = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

    textFields.forEach(function (field) {
        field.addEventListener('keypress', function (event) {
            const inputValue = event.key;
            const pattern = [a-zA-Z0-9]; 

            if (!pattern.test(inputValue)) {
                flashField(field);
                displayErrorMessage(field);
                preventIllegalInput(event);
            } else {
                hideErrorMessage(field);
            }
        });
    });

    function flashField(field) {
        field.style.transition = 'background-color 0.3s ease';
        field.style.backgroundColor = red; 
        setTimeout(function () {
            field.style.backgroundColor = '';
        }, 300);
    }

    function displayErrorMessage(field) {
        const errorMessage = document.getElementById('error_m');
        errorMessage.textContent = 'Illegal character detected';
        errorMessage.style.display = 'block';
        setTimeout(function () {
            errorMessage.style.opacity = '0';
            setTimeout(function () {
                errorMessage.style.display = 'none';
                errorMessage.style.opacity = '1';
            }, 500);
        }, 2000);
    }

    function hideErrorMessage(field) {
        const errorMessage = document.getElementById('error_m');
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
    }

    function preventIllegalInput(event) {
        event.preventDefault();
        return false;
    }
});
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
