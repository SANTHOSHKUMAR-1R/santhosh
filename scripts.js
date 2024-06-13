document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded");

    // Form submission handling
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted! Thank you.');
    });

    // Search bar functionality
    document.querySelector('#search-bar').addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(query)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// Function to show car details in the gallery
function showDetails(model, price, releaseDate) {
    alert(`Model: ${model}\nPrice: ${price}\nRelease Date: ${releaseDate}`);
}
