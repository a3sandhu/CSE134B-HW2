document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.stars span');
    const ratingInput = document.querySelector('.stars').getAttribute('data-rating');
    const form = document.querySelector('form');

    stars.forEach((star, index) => {
        star.addEventListener('click', function () {
            const ratingValue = index + 1;
            ratingInput.value = ratingValue;
            highlightStars(ratingValue);
        });
    });

    function highlightStars(count) {
        stars.forEach((star, index) => {
            if (index < count) {
                star.style.color = blue;
            }
            
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
