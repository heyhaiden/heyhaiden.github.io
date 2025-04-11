document.addEventListener('DOMContentLoaded', function() {
    // Fade in content
    setTimeout(function() {
        document.querySelector('.content').classList.add('loaded');
    }, 100);

    // Project filter functionality (only on projects page)
    const filterTags = document.querySelectorAll('.tag');
    if (filterTags.length > 0) {
        const projectCards = document.querySelectorAll('.project-card');
        
        filterTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Update active tag
                filterTags.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const selectedTag = this.getAttribute('data-tag');
                
                if (selectedTag === 'all') {
                    // Show all projects
                    projectCards.forEach(card => {
                        card.style.display = 'block';
                    });
                } else {
                    // Filter projects
                    projectCards.forEach(card => {
                        const projectTags = Array.from(card.querySelectorAll('.project-tag')).map(t => t.textContent);
                        if (projectTags.includes(selectedTag)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
});