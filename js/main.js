// js/main.js
// Variables globales
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobileMenu');
const mainNav = document.getElementById('mainNav');

const openVideoBtn = document.getElementById('openVideoBtn');
const videoPopup = document.getElementById('videoPopup');
const closeVideoBtn = document.getElementById('closeVideoBtn');
const videoPlaceholder = document.getElementById('videoPlaceholder');
const youtubeVideoId = 'xbVDAqXOCbA';

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

    //video
    if (openVideoBtn) {
        openVideoBtn.addEventListener('click', openVideoPopup);
    }

    if (closeVideoBtn) {
        closeVideoBtn.addEventListener('click', closeVideoPopup);
    }

    if (videoPopup) {
        videoPopup.addEventListener('click', (event) => {
            if (event.target === videoPopup) {
                closeVideoPopup();
            }
        });
    }

    // Opcional: Cerrar con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && videoPopup.classList.contains('active')) {
            closeVideoPopup();
        }
    });
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

// Funciones para el popup de video
function openVideoPopup() {
    videoPlaceholder.innerHTML = `
        <div class="video-responsive">
            <iframe
                src="https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    `;
    videoPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoPopup() {
    videoPopup.classList.remove('active');
    videoPlaceholder.innerHTML = '';
    document.body.style.overflow = 'auto';
}


// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});
