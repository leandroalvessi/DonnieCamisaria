/* -------------------------------------------------------------
   Donnie Camisaria - Interactive Application Logic
   ------------------------------------------------------------- */

// Configuration
const WHATSAPP_NUMBER = '5562993132378'; // Substitua pelo número da loja com DDI e DDD (ex: 5511999999999)

// State Management
// State Management
const products = [
  {
    "id": 1,
    "name": "Camisa Xadrez Manga Curta 100% Algodão",
    "category": "xadrez",
    "price": "Sob Consulta",
    "description": "Camisa xadrez clássica manga curta confeccionada em tecido 100% algodão de alta qualidade. Toque macio, excelente durabilidade e caimento confortável.",
    "sizes": ["P", "M", "G", "GG", "G1", "G2"],
    "image": "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0223.webp",
    "images": [
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0223.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0143.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0144.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0146.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0147.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0148.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0149.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0151.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0152.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0158.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0162.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0215.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0216.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0217.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0218.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0219.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0220.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0221.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0222.webp",
        "images/produtos/camisa_xadrez_manga_curta_100_algodao/IMG-20240528-WA0224.webp",
    ]
  },
  {
    "id": 2,
    "name": "Camisa Xadrez Manga Longa 100% Algodão",
    "category": "xadrez",
    "price": "Sob Consulta",
    "description": "Camisa xadrez clássica manga longa confeccionada em tecido 100% algodão de alta qualidade. Toque macio, excelente durabilidade e caimento confortável.",
    "sizes": ["P", "M", "G", "GG", "G1", "G2"],
    "image": "images/produtos/camisa_xadrez_manga_longa_100_algodao/IMG-20240528-WA0177.webp",
    "images": [
      "images/produtos/camisa_xadrez_manga_longa_100_algodao/IMG-20240528-WA0177.webp",
      "images/produtos/camisa_xadrez_manga_longa_100_algodao/IMG-20240528-WA0169.webp",
      "images/produtos/camisa_xadrez_manga_longa_100_algodao/IMG-20240528-WA0170.webp",
      "images/produtos/camisa_xadrez_manga_longa_100_algodao/IMG-20240528-WA0172.webp",
      "images/produtos/camisa_xadrez_manga_longa_100_algodao/IMG-20240528-WA0173.webp",
      "images/produtos/camisa_xadrez_manga_longa_100_algodao/IMG-20240528-WA0175.webp",
      "images/produtos/camisa_xadrez_manga_longa_100_algodao/IMG-20240528-WA0176.webp",
      "images/produtos/camisa_xadrez_manga_longa_100_algodao/IMG-20240528-WA0178.webp",
    ]
  },
  {
    "id": 3,
    "name": "Camisa Jeans Manga Curta",
    "category": "jeans",
    "price": "Sob Consulta",
    "description": "Confeccionada em tecido jeans de alta qualidade, esta camisa de manga curta oferece conforto, durabilidade e um toque macio. Seu caimento moderno proporciona liberdade de movimento, sendo uma opção versátil para compor looks casuais com estilo.",
    "sizes": ["P", "M", "G", "GG"],
    "image": "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0293.webp",
    "images": [
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0293.webp",
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0092.webp",
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0093.webp",
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0094.webp",
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0095.webp",
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0096.webp",
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0097.webp",
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0098.webp", 
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0293.webp",
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0094.webp", 
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0095.webp", 
        "images/produtos/camisa_jeans_manga_curta/IMG-20240528-WA0096.webp",  
           
    ]
  },
  {
    "id": 4,
    "name": "Camisa Manga Longa Tencel",
    "category": "tencel",
    "price": "Sob Consulta",
    "description": "Versão manga longa da nossa clássica tencel. Ideal para composições casuais e dias quentes com estilo moderno.",
    "sizes": ["P", "M", "G", "GG"],
    "image": "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0263.webp",
    "images": [
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0263.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0246.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0247.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0248.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0249.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0250.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0251.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0252.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0253.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0254.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0255.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0256.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0257.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0258.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0259.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0260.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0261.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0262.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0264.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0265.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0266.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0267.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0268.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0269.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0270.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0271.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0272.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0273.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0274.webp",
        "images/produtos/camisa_manga_longa_tencel/IMG-20240528-WA0275.webp"
    ]
  },
  {
    "id": 5,
    "name": "Camisa Manga Curta Tencel",
    "category": "tencel",
    "price": "Sob Consulta",
    "description": "Camisa de manga curta em tencel de alta qualidade. Leve, macia e com excelente caimento para dias mais quentes.",
    "sizes": ["P", "M", "G", "GG"],
    "image": "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0234.webp",
    "images": [
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0234.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0041.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0042.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0043.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0045.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0055.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0056.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0057.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0225.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0226.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0227.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0228.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0229.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0230.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0231.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0232.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0233.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0235.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0236.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0237.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0238.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0239.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0240.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0241.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0242.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0243.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0244.webp",
        "images/produtos/camisa_manga_curta_tencel/IMG-20240528-WA0245.webp"
    ]
  },
//   {
//     "id": 6,
//     "name": "Bermuda Sport Fino Sarja",
//     "category": "sport_fino",
//     "price": "Sob Consulta",
//     "description": "Bermuda sport fino confeccionada em sarja acetinada com elastano. Modelagem levemente slim que traz elegância para momentos de lazer.",
//     "sizes": ["38", "40", "42", "44", "46"],
//     "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80"
//   }
];

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
const modalImgContainer = document.querySelector('.modal-img-container');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalCategory = document.getElementById('modal-category');
const modalSizes = document.getElementById('modal-sizes');
const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');
const modalThumbnailsWrapper = document.getElementById('modal-thumbnails-wrapper');
const modalThumbnails = document.getElementById('modal-thumbnails');
const thumbPrevBtn = document.getElementById('thumb-prev-btn');
const thumbNextBtn = document.getElementById('thumb-next-btn');

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});

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

    // Gallery Thumbnails Navigation Buttons
    if (thumbPrevBtn && thumbNextBtn && modalThumbnails) {
        thumbPrevBtn.addEventListener('click', () => {
            const amount = Math.max(200, modalThumbnails.clientWidth * 0.6);
            modalThumbnails.scrollBy({ left: -amount, behavior: 'smooth' });
        });

        thumbNextBtn.addEventListener('click', () => {
            const amount = Math.max(200, modalThumbnails.clientWidth * 0.6);
            modalThumbnails.scrollBy({ left: amount, behavior: 'smooth' });
        });

        modalThumbnails.addEventListener('scroll', updateThumbArrowsState);
        window.addEventListener('resize', updateThumbArrowsState);
    }

    // Zoom effect on modal main image (Pan on hover)
    modalImgContainer.addEventListener('mousemove', (e) => {
        const rect = modalImgContainer.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        modalImg.style.transformOrigin = `${x}% ${y}%`;
        modalImg.style.transform = 'scale(1.8)';
    });

    modalImgContainer.addEventListener('mouseleave', () => {
        modalImg.style.transformOrigin = 'center center';
        modalImg.style.transform = 'scale(1)';
    });
}

// Update state of thumbnail navigation arrows
function updateThumbArrowsState() {
    if (!modalThumbnails || !thumbPrevBtn || !thumbNextBtn) return;
    
    const scrollLeft = modalThumbnails.scrollLeft;
    const scrollWidth = modalThumbnails.scrollWidth;
    const clientWidth = modalThumbnails.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    
    const hasOverflow = scrollWidth > clientWidth + 2;
    
    if (!hasOverflow) {
        thumbPrevBtn.classList.add('hidden');
        thumbNextBtn.classList.add('hidden');
        thumbPrevBtn.disabled = true;
        thumbNextBtn.disabled = true;
        modalThumbnails.style.justifyContent = 'center';
        if (modalThumbnailsWrapper) modalThumbnailsWrapper.style.padding = '10px 15px';
        return;
    }
    
    if (modalThumbnailsWrapper) modalThumbnailsWrapper.style.padding = '10px 40px';
    thumbPrevBtn.classList.remove('hidden');
    thumbNextBtn.classList.remove('hidden');
    modalThumbnails.style.justifyContent = 'flex-start';
    
    // Disable/Enable Left Arrow
    if (scrollLeft <= 2) {
        thumbPrevBtn.disabled = true;
        thumbPrevBtn.classList.add('disabled');
    } else {
        thumbPrevBtn.disabled = false;
        thumbPrevBtn.classList.remove('disabled');
    }
    
    // Disable/Enable Right Arrow
    if (scrollLeft >= maxScroll - 2) {
        thumbNextBtn.disabled = true;
        thumbNextBtn.classList.add('disabled');
    } else {
        thumbNextBtn.disabled = false;
        thumbNextBtn.classList.remove('disabled');
    }
}

// Open Product Modal
function openModal(product) {
    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    modalDesc.textContent = product.description;
    modalCategory.textContent = translateCategory(product.category);

    // Gallery Render Logic
    modalThumbnails.innerHTML = '';
    const productImages = product.images || [product.image];
    
    if (productImages.length > 1) {
        modalThumbnailsWrapper.style.display = 'flex';
        productImages.forEach((imgUrl, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgUrl;
            thumb.alt = `${product.name} - Foto ${index + 1}`;
            thumb.className = 'modal-thumb' + (index === 0 ? ' active' : '');
            
            // Hover/Click to change main image in modal
            const setActiveImage = () => {
                modalImg.src = imgUrl;
                document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };
            
            thumb.addEventListener('click', setActiveImage);
            thumb.addEventListener('mouseover', setActiveImage); // Switch on hover for premium feel
            
            modalThumbnails.appendChild(thumb);
        });

        modalThumbnails.scrollLeft = 0;
        setTimeout(() => {
            updateThumbArrowsState();
        }, 50);
    } else {
        modalThumbnailsWrapper.style.display = 'none';
    }

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

// Hero Section Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 6000; // 6 segundos por banner

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // Eventos dos botões de controle
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });
    }

    // Eventos dos indicadores (dots)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetTimer();
        });
    });

    // Iniciar temporizador
    slideInterval = setInterval(nextSlide, intervalTime);
});
