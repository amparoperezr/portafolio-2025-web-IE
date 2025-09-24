document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main-menu');
    // El umbral es cuando el top de la barra de menú alcanza el top del viewport (0)
    // Pero como ya tiene top: calc(100vh - 116px), el umbral para PEGARSE será 0
    // No necesitamos un cálculo complejo aquí, el CSS con position: sticky lo gestiona.

    // Esta función ahora solo es un "activador" para la clase si necesitas un cambio visual
    // como la sombra, que no es gestionado directamente por position: sticky
    function handleScroll() {
        // mainMenu.offsetTop es la distancia del elemento desde el top del documento
        // window.scrollY es cuánto hemos scrolleado desde el top del documento
        // La barra se considera "pegada" si su top actual es 0 (o muy cercano a 0) en el viewport
        if (mainMenu.getBoundingClientRect().top <= 0) {
            mainMenu.classList.add('sticky');
        } else {
            mainMenu.classList.remove('sticky');
        }
    }

    // Escucha el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // También al cargar y redimensionar, para asegurar el estado inicial
    window.addEventListener('load', handleScroll);
    window.addEventListener('resize', handleScroll);
});