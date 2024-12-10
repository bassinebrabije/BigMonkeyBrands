
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the header element
    const header = document.querySelector('header');

    // Add a scroll event listener to the window
    window.addEventListener('scroll', () => {
        // Check the scroll position
        if (window.scrollY > 0) {
            // Add the 'sticky' class if not already added
            header.classList.add('sticky');
        } else {
            // Remove the 'sticky' class if the user scrolls back to the top
            header.classList.remove('sticky');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Select the footer paragraph by its ID
    const footerText = document.getElementById("footer-text");

    // Set the text content dynamically
    footerText.innerHTML = `© ${currentYear} Big Monkey Brands. All Rights Reserved.`;
});

