document.addEventListener('DOMContentLoaded', function() {
    const preadmissionButtons = document.querySelectorAll('.open-preadmission-modal');
    const modal = document.getElementById('preadmissionModal');
    const closeButton = document.querySelector('.close-button');
    const preadmissionIframe = document.getElementById('preadmissionIframe');
    const preadmissionUrl = 'https://preadminpaccl.vercel.app/'; // La URL que deseas cargar

    // Función para abrir el modal
    function openModal() {
        preadmissionIframe.src = preadmissionUrl; // Carga la URL en el iframe
        modal.classList.add('visible');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Evita el scroll del body
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
        preadmissionIframe.src = ''; // Limpia el src del iframe al cerrar para detener cualquier medio, etc.
        document.body.style.overflow = ''; // Restaura el scroll del body
    }

    // Event listeners para los botones de preadmisión
    preadmissionButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace salte a #
            openModal();
        });
    });

    // Event listener para el botón de cerrar
    closeButton.addEventListener('click', closeModal);

    // Event listener para cerrar el modal haciendo clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Añadir clases inicialmente para ocultar el modal
    modal.classList.add('hidden');
});
