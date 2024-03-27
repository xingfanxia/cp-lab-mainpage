  // When the document is ready
document.addEventListener("DOMContentLoaded", function() {
// Function to update the navigation state
    function updateNavigation() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navbar a");

        let passedSections = Array.from(sections).map((section, index) => {
        return {
            y: section.getBoundingClientRect().top - navbar.offsetHeight,
            id: sections[index].id
        };
        }).filter(section => section.y <= 0);

        let currentSectionId = passedSections.length > 0 ? passedSections[passedSections.length - 1].id : "home";

        navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSectionId);
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateNavigation);

    // Get the navbar height
    const navbar = document.querySelector('.navbar');
});