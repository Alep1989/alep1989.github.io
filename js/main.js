// js/main.js
// Variables globales
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobileMenu');
const mainNav = document.getElementById('mainNav');

// Inicializar eventos
function setupEventListeners() {
    // Carrito
    if (cartIcon) {
        cartIcon.addEventListener('click', openCart);
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeCartSidebar);
    }
    
    // Menú móvil
    if (mobileMenu) {
        mobileMenu.addEventListener('click', toggleMobileMenu);
    }
    
    // Botón de explorar
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Abrir carrito
function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar carrito
function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Alternar menú móvil
function toggleMobileMenu() {
    mainNav.classList.toggle('active');
    mobileMenu.innerHTML = mainNav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', setupEventListeners);