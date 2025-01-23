// Show or hide the "Back to Top" button based on scroll position
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('backToTop');
    console.log('Scroll position:', window.scrollY); // Log the scroll position
    if (window.scrollY > 200) { 
        backToTopButton.style.display = 'block';
        console.log('Button visible'); // Log when button is shown
    } else {
        backToTopButton.style.display = 'none';
        console.log('Button hidden'); // Log when button is hidden
    }
});

// Smoothly scroll to the top when the button is clicked
function scrollToTop() {
    console.log('Scrolling to top');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
