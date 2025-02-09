document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.querySelector('.menu-items li:first-child a'); // "Home" link
    const projectsLink = document.getElementById('projects-link'); // "Projects" link
    const skillsLink = document.querySelector('.menu-items li:nth-child(3) a'); // "Skills" link
    const experienceLink = document.querySelector('.menu-items li:nth-child(4) a'); // "Experience" link
    const contactLink = document.querySelector('.menu-items li:nth-child(5) a'); // "Contact" link

    const homeSection = document.body; // Home section (whole page)
    const projectsSection = document.getElementById('projects'); // Projects section
    const skillsSection = document.getElementById('skills'); // Skills section
    const experienceSection = document.getElementById('experience'); // Experience section

    // Function to scroll to a section with an offset (9vh for navbar height)
    function scrollToSection(section) {
        const offset = window.innerHeight * 0.0808; // 9vh in pixels
        const sectionTop = section.offsetTop - offset;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }

    // Function to scroll to the very end of the page
    function scrollToEnd() {
        const endPosition = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({ top: endPosition, behavior: 'smooth' });
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

    // Click event for "Contact"
    contactLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToEnd(); // Scroll to the very end of the page
        setActiveLink(contactLink); // Manually set Contact as active
    });

    // Listen to scroll events
    window.addEventListener('scroll', updateActiveLink);

    // Set initial active link (Home by default)
    setActiveLink(homeLink);
});


document.addEventListener('scroll', function () {
    requestAnimationFrame(() => {
        const body = document.body;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;

        if (maxScroll <= 0) return;

        const scrollPercent = scrollPosition / maxScroll;

        const midnightPhantom = [
            [5, 5, 5],    // #050505 (Pure Black)
            [18, 18, 18],  // #121212 (Dark Graphite)
            [35, 35, 35],  // #232323 (Deep Charcoal)
            [47, 47, 59],  // #2F2F3B (Shadow Indigo)
            [27, 43, 68],  // #1B2B44 (Steel Sapphire)
            [16, 44, 60],  // #102C3C (Darkened Teal)
            [11, 31, 42],  // #0B1F2A (Abyss Blue)
            [6, 14, 22]    // #060E16 (Final Eclipse)
        ];

        const numColors = midnightPhantom.length - 1;
        const step = 1 / numColors;
        let index = Math.min(Math.floor(scrollPercent / step), numColors - 1);
        let factor = (scrollPercent - index * step) / step;

        let r = Math.round(midnightPhantom[index][0] + (midnightPhantom[index + 1][0] - midnightPhantom[index][0]) * factor);
        let g = Math.round(midnightPhantom[index][1] + (midnightPhantom[index + 1][1] - midnightPhantom[index][1]) * factor);
        let b = Math.round(midnightPhantom[index][2] + (midnightPhantom[index + 1][2] - midnightPhantom[index][2]) * factor);

        body.style.background = `linear-gradient(180deg, rgb(${r}, ${g}, ${b}) 0%, rgb(${midnightPhantom[numColors][0]}, ${midnightPhantom[numColors][1]}, ${midnightPhantom[numColors][2]}) 100%)`;
    });
});


