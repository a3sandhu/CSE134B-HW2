document.addEventListener('DOMContentLoaded', function () {
    const textFields = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

    textFields.forEach(function (field) {
        field.addEventListener('input', function (event) {
            const inputValue = event.target.value;
            const pattern = /^[a-zA-Z0-9@.]+$/; // Modify the pattern as needed

            if (!pattern.test(inputValue)) {
                flashField(field);
                displayErrorMessage(field, 'Illegal character detected');
                preventIllegalInput(event);
            } else {
                hideErrorMessage(field);
            }
        });
    });

    const textArea = document.getElementById('comments');
    const charCountElement = document.getElementById('char-count');
    const commentsInfo = document.getElementById('info_m');

    textArea.addEventListener('input', function () {
        updateCharCount();
    });

    function updateCharCount() {
        const maxChars = textArea.maxLength;
        const remainingChars = maxChars - textArea.value.length;

        charCountElement.textContent = remainingChars;

        // Update style based on remaining characters
        if (remainingChars <= 20 && remainingChars > 10) {
            commentsInfo.classList.remove('error');
            commentsInfo.classList.add('warn');
        } else if (remainingChars <= 10) {
            commentsInfo.classList.remove('warn');
            commentsInfo.classList.add('error');
        } else {
            commentsInfo.classList.remove('warn', 'error');
        }
    }

    function flashField(field) {
        field.style.transition = 'background-color 0.3s ease';
        field.style.backgroundColor = '#FFD6D6'; // Change to your preferred flash color
        setTimeout(function () {
            field.style.backgroundColor = '';
        }, 300);
    }

    function displayErrorMessage(field, message) {
        const errorMessage = document.getElementById('error_m');
        errorMessage.textContent = message;
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
