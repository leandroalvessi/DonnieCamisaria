/* -------------------------------------------------------------
   Donnie Camisaria - Interactive Application Logic
   ------------------------------------------------------------- */

// Configuration
const WHATSAPP_NUMBER = '5511999999999'; // Substitua pelo número da loja com DDI e DDD (ex: 5511999999999)

// State Management
let products = [];
let activeFilter = 'all';
let searchQuery = '';

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const noResults = document.getElementById('no-results');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');

// Modal Elements
const modal = document.getElementById('product-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalCategory = document.getElementById('modal-category');
const modalSizes = document.getElementById('modal-sizes');
const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    setupEventListeners();
});

// Fetch Products from Local JSON
async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Falha ao carregar produtos.');
        }
        products = await response.json();
        renderProducts();
    } catch (error) {
        console.error('Erro ao buscar catálogo:', error);
        productsGrid.innerHTML = `<p class="no-results">Erro ao carregar o catálogo de produtos. Por favor, tente novamente mais tarde.</p>`;
    }
}

// Render Products Grid
function renderProducts() {
    // Filter logic
    const filteredProducts = products.filter(product => {
        const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Clear grid
    productsGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    // Create cards
    filteredProducts.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="product-img-container">
                <span class="product-badge">${translateCategory(product.category)}</span>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <button class="product-view-btn">Detalhes</button>
            </div>
        `;
        
        // Open modal on card click
        card.addEventListener('click', () => openModal(product));
        
        productsGrid.appendChild(card);
    });
}

// Event Listeners Setup
function setupEventListeners() {
    // Category Filtering
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.getAttribute('data-filter');
            renderProducts();
        });
    });

    // Live Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Close Modal Events
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on ESC key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Open Product Modal
function openModal(product) {
    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    modalDesc.textContent = product.description;
    modalCategory.textContent = translateCategory(product.category);

    // Sizes Rendering
    modalSizes.innerHTML = '';
    product.sizes.forEach(size => {
        const span = document.createElement('span');
        span.className = 'size-tag';
        span.textContent = size;
        modalSizes.appendChild(span);
    });

    // WhatsApp Dynamic Link Generation
    const textMessage = encodeURIComponent(
        `Olá! Estou navegando no catálogo e gostaria de tirar dúvidas sobre o produto:\n\n` +
        `👔 *${product.name}*\n` +
        `Ref: #${product.id}\n` +
        `Preço: ${product.price}\n\n` +
        `Tamanhos disponíveis no catálogo: ${product.sizes.join(', ')}`
    );
    
    modalWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${textMessage}`;

    // Add active class with body scroll lock
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Category Translator Helper
function translateCategory(cat) {
    const translations = {
        'xadrez': 'Xadrez',
        'jeans': 'Jeans',
        'tencel': 'Tencel',
        'sport_fino': 'Sport Fino'
    };
    return translations[cat] || cat;
}

// WhatsApp Widget Toggling
const waWidget = document.getElementById('whatsapp-widget');
const waTriggerBtn = document.getElementById('whatsapp-trigger-btn');
const waCard = document.getElementById('whatsapp-card');

waTriggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    waWidget.classList.toggle('open');
    waCard.classList.toggle('active');
});

// Close card when clicking outside
window.addEventListener('click', (e) => {
    if (!waWidget.contains(e.target) && waCard.classList.contains('active')) {
        waWidget.classList.remove('open');
        waCard.classList.remove('active');
    }
});
