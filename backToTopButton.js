window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('backToTop');
    console.log('Scroll position:', window.scrollY);
    if (window.scrollY > 200) { 
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
