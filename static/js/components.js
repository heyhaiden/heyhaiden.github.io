// Function to include HTML components
document.addEventListener("DOMContentLoaded", function() {
    // Add debug information
    const debugMode = false; // Set to true to see debugging information
    function debugLog(message) {
        if (debugMode) {
            console.log("[Component Debug]", message);
        }
    }

    debugLog("Loading components...");
    
    // 1. Direct DOM Injection approach - no fetch
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    // Determine correct paths
    const currentPath = window.location.pathname;
    debugLog("Current path: " + currentPath);
    
    const isProjectDetail = currentPath.includes("/projects/");
    debugLog("Is project detail page: " + isProjectDetail);

    // Insert header HTML directly
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header>
                <div class="logo">HM</div>
                <nav class="nav-links">
                    <a href="${isProjectDetail ? '../../index.html' : 'index.html'}" id="home-link">Home</a>
                    <a href="${isProjectDetail ? '../../projects.html' : 'projects.html'}" id="projects-link">Projects</a>
                    <a href="${isProjectDetail ? '../../about.html' : 'about.html'}" id="about-link">About</a>
                </nav>
            </header>
        `;
        
        // Set active nav link based on current page
        if (currentPath.includes("index.html") || currentPath.endsWith("/")) {
            document.getElementById("home-link").classList.add("active");
        } else if (currentPath.includes("projects.html") || currentPath.includes("/projects/")) {
            document.getElementById("projects-link").classList.add("active");
        } else if (currentPath.includes("about.html")) {
            document.getElementById("about-link").classList.add("active");
        }
    } else {
        debugLog("Header placeholder not found!");
    }

    // Insert footer HTML directly
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer>
                <div class="social-links">
                    <a href="https://github.com/heyhaiden" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/haidenmcgill/" target="_blank">LinkedIn</a>
                    <a href="https://devpost.com/heyhaiden" target="_blank">Devpost</a>
                </div>
            </footer>
        `;
    } else {
        debugLog("Footer placeholder not found!");
    }
});