document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');

    const costOfWalking = document.querySelector('.cost-of-walking');
    const footer = document.querySelector('.footer');
    const header = document.querySelector('#navbar');
    const bookConsultation = document.querySelector('.book-consultation');

    // Hide other elements initially
    if (costOfWalking) costOfWalking.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (header) header.style.display = 'none';
    if (bookConsultation) bookConsultation.style.display = 'none';

    // Add event listener for preloader click
    if (preloader) {
        preloader.addEventListener('click', function () {
            console.log('Preloader clicked!');
            
            // Show other elements
            if (costOfWalking) costOfWalking.style.display = 'block';
            if (footer) footer.style.display = 'block';
            if (header) header.style.display = 'block';
            if (bookConsultation) bookConsultation.style.display = 'block';

            // Animate preloader fade-out
            preloader.style.transition = 'opacity 300ms ease-in-out';
            preloader.style.opacity = '0';

            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        });
    }
});
