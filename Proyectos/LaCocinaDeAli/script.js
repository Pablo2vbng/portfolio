/* ================================================== */
/*          SCRIPT PARA "JUDITH Y ALI COCINAN"        */
/* ================================================== */

// Esperamos a que todo el contenido del HTML se haya cargado
// antes de intentar manipularlo. Es una buena práctica.
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA EL MENÚ DE NAVEGACIÓN MÓVIL ---

    // 1. Seleccionamos los elementos del DOM que necesitamos.
    // El botón "hamburguesa" que el usuario tocará.
    const navToggle = document.querySelector('.nav-toggle');
    // La lista de enlaces que queremos mostrar u ocultar.
    const navLinks = document.querySelector('.nav-links');

    // 2. Nos aseguramos de que ambos elementos existen para evitar errores.
    if (navToggle && navLinks) {
        
        // 3. Añadimos un "escuchador" para el evento 'click' en el botón.
        navToggle.addEventListener('click', () => {
            
            // Cuando se hace clic, alternamos (toggle) la clase 'nav-active' en la lista de enlaces.
            // Si la clase está, la quita. Si no está, la pone.
            // Esta clase es la que, en el CSS, hace que el menú se muestre.
            navLinks.classList.toggle('nav-active');

            // Hacemos lo mismo con la clase 'toggle' en el propio botón.
            // Esta clase es la que, en el CSS, anima las barras para formar una 'X'.
            navToggle.classList.toggle('toggle');
        });
    }


    // --- MEJORA DE EXPERIENCIA DE USUARIO (UX) ---
    // Cierra el menú automáticamente cuando se hace clic en un enlace.
    
    // 1. Seleccionamos TODOS los enlaces que están dentro del menú de navegación.
    const allNavLinks = document.querySelectorAll('.nav-links a');

    // 2. Recorremos cada uno de esos enlaces.
    allNavLinks.forEach(link => {
        
        // 3. A cada enlace, le añadimos un "escuchador" de clics.
        link.addEventListener('click', () => {

            // 4. Comprobamos si el menú móvil está abierto (si tiene la clase 'nav-active').
            if (navLinks.classList.contains('nav-active')) {
                
                // Si está abierto, lo cerramos quitando las clases.
                navLinks.classList.remove('nav-active');
                navToggle.classList.remove('toggle');
            }
        });
    });

});