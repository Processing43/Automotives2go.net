// Toggle the visibility of disclosures section
function toggleDisclosures() {
    try {
        const disclosuresSection = document.querySelector('.disclosures-section');
        if (disclosuresSection) {
            disclosuresSection.classList.toggle('active');
        } else {
            console.error("Disclosures section not found.");
        }
    } catch (error) {
        console.error("An error occurred while toggling disclosures:", error);
    }
}

// Scroll to a specific section smoothly
function scrollToSection(sectionId) {
    try {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error(`Section with ID '${sectionId}' not found.`);
        }
    } catch (error) {
        console.error("An error occurred while scrolling to section:", error);
    }
}

// Scroll to the top of the page smoothly
function scrollToTop() {
    try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error("An error occurred while scrolling to top:", error);
    }
}
