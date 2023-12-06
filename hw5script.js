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
            star.style.color = index < count ? 'gold' : 'black';
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add additional logic here to handle form submission
        // For now, let's just log the form data
        const formData = new FormData(form);
        for (let entry of formData.entries()) {
            console.log(entry[0] + ': ' + entry[1]);
        }
    });
});