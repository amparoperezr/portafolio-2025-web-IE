document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-projects-button');
    const projectsContainer = document.getElementById('projects-container');
    const arrowIcon = document.querySelector('.arrow-icon');

    toggleButton.addEventListener('click', function() {
        if (projectsContainer.style.display === 'flex') {
            projectsContainer.style.display = 'none';
            arrowIcon.style.transform = 'rotate(0deg)';
        } else {
            projectsContainer.style.display = 'flex';
            arrowIcon.style.transform = 'rotate(180deg)';
        }
    });
});