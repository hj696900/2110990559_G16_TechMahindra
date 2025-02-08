document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.querySelector('.menu-items li:first-child a'); // "Home" link
    const projectsLink = document.getElementById('projects-link'); // "Projects" link
    const skillsLink = document.querySelector('.menu-items li:nth-child(3) a'); // "Skills" link
    const experienceLink = document.querySelector('.menu-items li:nth-child(4) a'); // "Experience" link

    const homeSection = document.body; // Home section (whole page)
    const projectsSection = document.getElementById('projects'); // Projects section
    const skillsSection = document.getElementById('skills'); // Skills section
    const experienceSection = document.getElementById('experience'); // Experience section

    // Function to scroll to a section with an offset (9vh for navbar height)
    function scrollToSection(section) {
        const offset = window.innerHeight * 0.082; // 9vh in pixels
        const sectionTop = section.offsetTop - offset;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }

    // Function to check scroll position and update active class
    function updateActiveLink() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.09; // Adjust for navbar height
        const homeOffset = homeSection.offsetTop;
        const projectsOffset = projectsSection.offsetTop;
        const skillsOffset = skillsSection.offsetTop;
        const experienceOffset = experienceSection.offsetTop;

        // Determine which section is currently in view
        if (scrollPosition >= experienceOffset) {
            setActiveLink(experienceLink);
        } else if (scrollPosition >= skillsOffset) {
            setActiveLink(skillsLink);
        } else if (scrollPosition >= projectsOffset) {
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

    // Click event for "Home"
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveLink(homeLink); // Manually set Home as active
    });

    // Click event for "Projects"
    projectsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection(projectsSection); // Scroll to Projects section with offset
        setActiveLink(projectsLink); // Manually set Projects as active
    });

    // Click event for "Skills"
    skillsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection(skillsSection); // Scroll to Skills section with offset
        setActiveLink(skillsLink); // Manually set Skills as active
    });

    // Click event for "Experience"
    experienceLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection(experienceSection); // Scroll to Experience section with offset
        setActiveLink(experienceLink); // Manually set Experience as active
    });

    // Listen to scroll events
    window.addEventListener('scroll', updateActiveLink);

    // Set initial active link (Home by default)
    setActiveLink(homeLink);
});