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
