// js/products.js
// Datos de productos 
const products = [
    {
        id: 1,
        title: "Vestido Floral de Verano",
        price: 39.99,
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 4.5, count: 120 },
        badge: "Nuevo"
    },
    {
        id: 2,
        title: "Camisa Casual para Hombre",
        price: 29.99,
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.2, count: 85 },
        badge: null
    },
    {
        id: 3,
        title: "Chaqueta de Cuero Genuino",
        price: 89.99,
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: { rate: 4.7, count: 65 },
        badge: "Popular"
    },
    {
        id: 4,
        title: "Blusa Elegante para Mujer",
        price: 34.99,
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: { rate: 4.0, count: 92 },
        badge: null
    },
    {
        id: 5,
        title: "Reloj de Pulsera Moderno",
        price: 49.99,
        category: "jewelery",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 4.8, count: 45 },
        badge: "Oferta"
    },
    {
        id: 6,
        title: "Bolso de Mano de Diseño",
        price: 59.99,
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 78 },
        badge: null
    },
    {
        id: 7,
        title: "Gafas de Sol Premium",
        price: 24.99,
        category: "jewelery",
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.3, count: 110 },
        badge: null
    },
    {
        id: 8,
        title: "Camiseta Básica de Algodón",
        price: 19.99,
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: { rate: 4.1, count: 150 },
        badge: "Más Vendido"
    }
];

// Renderizar productos
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const ratingStars = Array.from({ length: 5 }, (_, i) => 
            `<i class="fas fa-star${i < Math.floor(product.rating.rate) ? '' : '-half-alt'}"></i>`
        ).join('');

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category.split("'")[0]}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">
                    ${ratingStars}
                    <span>(${product.rating.count})</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Añadir
                    </button>
                    <div class="wishlist">
                        <i class="far fa-heart"></i>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Agregar evento a los botones de añadir al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.add-to-cart').dataset.id);
            addToCart(productId);
            showNotification('Producto añadido al carrito');
        });
    });
}

// Inicializar productos cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', renderProducts);