document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.querySelector('.menu-items li:first-child a'); // "Home" link
    const projectsLink = document.getElementById('projects-link'); // "Projects" link
    const projectsSection = document.getElementById('projects'); // Projects section
    const homeSection = document.body; // Home section (whole page)

    // Function to check scroll position and update active class
    function updateActiveLink() {
        const scrollPosition = window.scrollY;
        const projectsOffset = projectsSection.offsetTop - 100; // Adjusted for better detection
        const homeOffset = 0; // Top of the page

        if (scrollPosition >= projectsOffset) {
            setActiveLink(projectsLink);
        } else {
            setActiveLink(homeLink);
        }
    }

    // Function to remove active class from all links and add to the selected one
    function setActiveLink(activeElement) {
        document.querySelectorAll('.menu-items a').forEach(link => link.classList.remove('active'));
        activeElement.classList.add('active');
    }

    // Click event for "Projects"
    projectsLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Click event for "Home"
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Listen to scroll events
    window.addEventListener('scroll', updateActiveLink);

    // Set initial active link
    updateActiveLink();
});
