document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.stars span');
    const ratingInput = document.querySelector('.stars').getAttribute('data-rating');
    const form = document.querySelector('form');
    const messageContainer = document.getElementById('message-container');

    //const fetch = require('node-fetch');
    //const apiUrl = 'https://api.weather.gov/gridpoints/SGX/54,20/forecast/hourly?units=us';

    
    stars.forEach((star, index) => {
        //star.addEventListener('click', function () {
        star.addEventListener('mouseover', function () {
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
        const endpointUrl = 'https://httpbin.org/post';
    
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
        //use .then to modify DOM API
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

    async function getWeather() {
        console.log("getWeather()");
        const apiUrl = 'https://api.weather.gov/gridpoints/SGX/54,20/forecast/hourly?units=us';

        fetch(apiUrl)
        .then(response => {
            console.log("Fetching URL");
            if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Assuming the structure of the data includes an array of hourly forecasts
            const weatherInfo = data.properties.periods[0];
            console.log(data);
            console.log(weatherInfo);

            // Access the DOM elements where you want to display the weather information
            const weatherIconElement = document.getElementById('weather-icon');
            const temperatureElement = document.getElementById('temperature');
            const temperatureUnitElement = document.getElementById('temperature-unit');
            const relativeHumidityElement = document.getElementById('relative-humidity');
            const windSpeedElement = document.getElementById('wind-speed');
            const windDirectionElement = document.getElementById('wind-direction');
            const shortForecastElement = document.getElementById('short-forecast');

            // Update the DOM elements with the weather information
            weatherIconElement.src = weatherInfo.icon;
            temperatureElement.textContent = `${weatherInfo.temperature}`;
            temperatureUnitElement.textContent = weatherInfo.temperatureUnit;
            relativeHumidityElement.textContent = `${weatherInfo.relativeHumidity}%`;
            windSpeedElement.textContent = weatherInfo.windSpeed;
            windDirectionElement.textContent = weatherInfo.windDirection;
            shortForecastElement.textContent = weatherInfo.shortForecast;

            // You can similarly update other DOM elements with additional information
            // For example, dewpoint, probabilityOfPrecipitation, etc.
        })
        .catch(error => {
            console.error('Error fetching data:', error);
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
