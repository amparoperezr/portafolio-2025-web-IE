document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-projects-button');
    const projectsContainer = document.getElementById('projects-container');
    const arrowIcon = document.querySelector('.arrow-icon');

    toggleButton.addEventListener('click', function() {
        if (projectsContainer.style.display === 'block') { // AHORA BUSCA 'block'
            projectsContainer.style.display = 'none';
            arrowIcon.style.transform = 'rotate(0deg)';
        } else {
            projectsContainer.style.display = 'block'; // AHORA MUESTRA EL CONTENEDOR CON 'block'
            arrowIcon.style.transform = 'rotate(180deg)';
        }
    });
});