const hammenu = document.querySelector('.ham-menu');
const offscreenmenu = document.querySelector('.off-screen-menu');

hammenu.addEventListener('click', () => {
    hammenu.classList.toggle('active');
    offscreenmenu.classList.toggle('active');
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section id
        const targetSection = document.getElementById(targetId); // Find the target section

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }

        // Close the off-screen menu after clicking a link (for smaller screens)
        if (window.innerWidth <= 1000) {
            hammenu.classList.remove('active');
            offscreenmenu.classList.remove('active');
        }
    });
});