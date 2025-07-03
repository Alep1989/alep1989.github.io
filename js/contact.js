// js/contact.js
// Validar formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validación básica
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Por favor completa todos los campos obligatorios');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Por favor ingresa un correo electrónico válido');
            return;
        }
        
        // Aquí iría la lógica para enviar el formulario
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// Validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Inicializar formulario de contacto
document.addEventListener('DOMContentLoaded', setupContactForm);