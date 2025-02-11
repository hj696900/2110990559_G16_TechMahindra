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

        const gradientColors = [
            [0, 22, 36],   // Deepest Dark Blue-Teal 🌊
            [0, 40, 58],   // Shadow Abyss Blue 🌑
            [1, 68, 86],   // Midnight Teal 💎
            [2, 96, 110],  // Stormy Dark Cyan 🌫️
            [12, 79, 96],  // Muted Steel Blue 🏴
            [28, 53, 64],  // Shadow Navy 🌌
            [18, 25, 32],  // Charcoal Abyss ⚫
            [8, 10, 13]    // Deep Obsidian 🌑
        ];

        const numColors = gradientColors.length - 1;
        const step = 1 / numColors;
        let index = Math.min(Math.floor(scrollPercent / step), numColors - 1);
        let factor = (scrollPercent - index * step) / step;

        let r = Math.round(gradientColors[index][0] + (gradientColors[index + 1][0] - gradientColors[index][0]) * factor);
        let g = Math.round(gradientColors[index][1] + (gradientColors[index + 1][1] - gradientColors[index][1]) * factor);
        let b = Math.round(gradientColors[index][2] + (gradientColors[index + 1][2] - gradientColors[index][2]) * factor);

        body.style.background = `linear-gradient(180deg, rgb(${r}, ${g}, ${b}) 0%, rgb(${gradientColors[numColors][0]}, ${gradientColors[numColors][1]}, ${gradientColors[numColors][2]}) 100%)`;
    });
});






//Typing effect js
const textElement = document.getElementById("text");
        const words = textElement.getAttribute("data-words").split(",");
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (!isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentWord.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 1000); // Wait before erasing
                    return;
                }
            } else {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }
            setTimeout(typeEffect, isDeleting ? 100 : 150);
        }

        typeEffect();

