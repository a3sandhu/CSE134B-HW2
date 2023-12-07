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
            sendRatingToEndpoint(ratingValue);
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
            message = `Thanks for the ${ratingValue} star rating`;
        }
        else {
            message = `Thanks for your feed back of ${ratingValue} stars. We will try to do better!`;
        }
        messageContainer.textContent = message;
    }

    function sendRatingToEndpoint(ratingValue) {
        // Replace the URL with the URL of your fake endpoint
        const endpointUrl = 'https://httpbin.org/post';
    
        // Create an object with the data you want to send
        const data = {
            question: 'How satisfied are you?',
            rating: ratingValue,
        };
    
        // Use the Fetch API to send a POST request to the endpoint
        fetch(endpointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Sent-By': 'JS', // Custom header
            },
            body: JSON.stringify({ ...data, sentBy: 'JS' }), // Add 'sentBy' to the payload
        })
        .then(response => response.json())
        .then(data => {
            console.log('Rating sent successfully:', data);
            // You can handle the response from the server here
    
            // Log the response to the console
            console.log('Fake Endpoint Response:', data);
        })
        .catch(error => {
            console.error('Error sending rating:', error);
            // Handle errors here
        });
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
