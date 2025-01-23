function adjustWrapperHeight() {
    const navbar = document.querySelector('.navbar'); 
    const wrapper = document.querySelector('.wrapper');
    
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    wrapper.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
}

window.addEventListener('resize', adjustWrapperHeight);

window.addEventListener('DOMContentLoaded', adjustWrapperHeight);
