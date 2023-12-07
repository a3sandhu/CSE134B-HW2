document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.stars span');
    const ratingInput = document.querySelector('.stars').getAttribute('data-rating');
    const form = document.querySelector('form');
    const messageContainer = document.getElementById('message-container');

    stars.forEach((star, index) => {
        star.addEventListener('click', function () {
            const ratingValue = index + 1;
            ratingInput.value = ratingValue;
            console.log(ratingValue);
            highlightStars(ratingValue);
            displayMessage(ratingValue);
        });
    });

    function highlightStars(count) {
        stars.forEach((star, index) => {
            if (index < count) {
                star.style.color = 'blue'; 
            } else {
                star.style.color = 'black'; 
            }
        });
    }

    function displayMessage(ratingValue) {
        let message = '';

        if (ratingValue > 3) {
            message = 'Thanks for the ${ratingValue} star rating';
        }
        else {
            message = 'Thanks for your feed back of ${ratingValue} stars. We will try to do better!';
        }
        messageContainer.textContent = message;
    }

    /*form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        const formData = new FormData(form);
        const feedbackData = {};

        formData.forEach((value, key) => {
            feedbackData[key] = value;
        });

        // You can now use the feedbackData object to handle the form data as needed
        console.log(feedbackData);

        // For demonstration purposes, I'm using fetch to submit the data to httpbin.org
        fetch(form.action, {
            method: form.method,
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Form submission successful:', data);
                // You can handle the response from the server here
            })
            .catch(error => {
                console.error('Form submission error:', error);
                // Handle errors here
            });
    });*/
});
