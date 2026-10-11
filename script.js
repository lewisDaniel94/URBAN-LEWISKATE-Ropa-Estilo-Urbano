// Base de datos completa (36 productos) con categorías adaptadas
const productsData = [
    // --- FRANELAS OVERSIZED (Tees) ---
    { id: 10, category: 'tees', name: 'Tee Oversized Graffiti', price: 26.00, desc: 'Jersey de algodón 280GSM con serigrafía frontal urbana.', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80', tag: 'Hot' },
    { id: 11, category: 'tees', name: 'Tee Boxy Fit White', price: 24.00, desc: 'Cuello redondo acanalado grueso y calce cuadrado perfecto.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhmNPv89k1bRZCkbBEayNtfrqgZZYnjBuH1zzFujjOQ&s=10', tag: 'Esencial' },
    { id: 12, category: 'tees', name: 'Tee Dark Ritual', price: 28.00, desc: 'Gráfica frontal de alta durabilidad resistente a lavados.', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80', tag: 'Nuevo' },
    { id: 13, category: 'tees', name: 'Tee Minimalist Tag', price: 25.00, desc: 'Pequeño bordado lateral en contraste blanco sobre negro.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-0jaWJcX0GUWXru2G_mYi05NjflFGgFoLPNG0lUFrBJRm7ShGJNmvPL-&s=10', tag: 'Clean' },
    { id: 14, category: 'tees', name: 'Tee Heavy Asphalt', price: 27.00, desc: 'Textura suave con tratamiento pre-encogido de fábrica.', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80', tag: 'Popular' },
    { id: 15, category: 'tees', name: 'Tee Cyber Grid', price: 29.00, desc: 'Diseño geométrico inspirado en arquitectura brutalista.', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80', tag: 'Limitado' },
    { id: 16, category: 'tees', name: 'Tee Drop Shoulder Pure', price: 25.00, desc: 'Hombros caídos para un look relajado e impecable.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwRQUIua2isy2KLqjY-mUJIWkdKbGzxuh0opHE_K6RQ&s=10', tag: 'Bestseller' },
    { id: 17, category: 'tees', name: 'Tee Underground Club', price: 28.00, desc: 'Estampa posterior de gran formato con tinta ecológica.', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80', tag: 'Hot' },
    { id: 18, category: 'tees', name: 'Tee Blank Canvas White', price: 22.00, desc: 'Remera lisa versátil de máxima calidad y pureza visual.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8wlyQb7oTNtJiY4EK0pIfucjtZFll_QQBl1omy_U9Q&s=10', tag: 'Básico' },

    // --- PANTALONES (Pants) ---
    { id: 19, category: 'pants', name: 'Pantalón Baggy Denim Dark', price: 54.00, desc: 'Denim rígido 14oz corte ancho extragrande para skate.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rOqKkQ3kzHZ-EZJ5oAh0vqGXFZ7C7BPVteiaavrOf9pIIaIY56qmHgg&s=10', tag: 'Pro' },
    { id: 20, category: 'pants', name: 'Cargo Parachute Black', price: 50.00, desc: 'Tela técnica ligera con múltiples bolsillos utilitarios.', img: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=500&q=80', tag: 'Trend' },
    { id: 21, category: 'pants', name: 'Pantalon Worker Stitched', price: 56.00, desc: 'Costuras reforzadas de triple puntada y presillas anchas.', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80', tag: 'Nuevo' },
    { id: 22, category: 'pants', name: 'Pantalón Wide Leg White', price: 52.00, desc: 'Lona de algodón pesada en color blanco blanqueado.', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80', tag: 'Exclusivo' },
    { id: 23, category: 'pants', name: 'Cargo Industrial Straps', price: 58.00, desc: 'Correas ajustables y bolsillos de carga laterales profundos.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0BUzcn8SualDqPbrrU6SI9HUH5Urj3NFxHQDqgON07tFBd3qiRuxAxtr&s=10', tag: 'Hot' },
    { id: 24, category: 'pants', name: 'Pantalon Skate Fatigue', price: 49.00, desc: 'Corte holgado clásico diseñado para total libertad de movimiento.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1kB_qzPCCGSRAoYdd5cnTlJlOZp__vJEZ3SuKYkbvg&s=10', tag: 'Popular' },
    { id: 25, category: 'pants', name: 'Denim Washed Black Baggy', price: 55.00, desc: 'Lavado oscuro desgastado con efecto vintage natural.', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80', tag: 'Bestseller' },
    { id: 26, category: 'pants', name: 'Pantalón Track Nylon', price: 46.00, desc: 'Nylon impermeable de alta resistencia con cordón ajustable.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhf1f76lVtMJpahD1ueKCZEykGk8cHZBGhBiluWtaRvAFenVCLFzQQFZD&s=10', tag: 'Sport' },
    { id: 27, category: 'pants', name: 'Pantalon Heavy Twill', price: 53.00, desc: 'Sarga de algodón pesada con caída impecable sobre zapatillas.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjE-CBBcmaXwt-s_yv5gN77j-n6tiv0ajPcdL54fn_3xWnpcGDgI_UdQ&s=10', tag: 'Nuevo' },

    // --- GORRAS (Caps) ---
    { id: 28, category: 'caps', name: 'Gorra Snapback Urban', price: 19.00, desc: 'Visera plana con bordado frontal en relieve monocromático.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgZm6paeL_qWF6P--8zyCWtpSmcTdpuciramBd4qrCw&s=10', tag: 'Essential' },
    { id: 29, category: 'caps', name: 'Gorra urban', price: 16.00, desc: 'Frente estructurado de algodón con malla posterior ventilada.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZnvnA5cxVrzpo4ikx7KzY1PmFsDuv8O9xbkZ3w5Ntw&s=10', tag: 'Hot' },
    { id: 37, category: 'caps', name: 'Gorra Dad Hat Monochrome', price: 18.00, desc: 'Diseño clásico curvado con hebilla metálica ajustable.', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80', tag: 'Nuevo' },
    { id: 38, category: 'caps', name: 'Gorra Trucker Mesh Black', price: 17.00, desc: 'Frente estructurado de algodón con malla posterior ventilada.', img: 'https://http2.mlstatic.com/D_NQ_NP_722134-MLV109893759509_032026-O.webp', tag: 'Popular' },
    { id: 39, category: 'caps', name: 'Gorra Bucket Hat Tech', price: 20.00, desc: 'Sombrero estilo pescador en tejido impermeable técnico.', img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=80', tag: 'Trend' },

    // --- ACCESORIOS (Accessories) ---
    { id: 30, category: 'accessories', name: 'Cangurera Crossbody Tech', price: 24.00, desc: 'Bolso bandolera impermeable con cremalleras selladas.', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80', tag: 'Utilidad' },
    { id: 31, category: 'accessories', name: 'Medias Altas Skate Pack x3', price: 15.00, desc: 'Algodón peinado reforzado en talón y puntera con líneas.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeiomgxGkwmDDW5b4PTeZ8owUyEWS_lortBO751ZJ0g&s', tag: 'Pack x3' },
    { id: 32, category: 'accessories', name: 'Cinto Industrial Heavy Buckle', price: 18.00, desc: 'Cinturón de lona con hebilla metálica de liberación rápida.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxM8OFnog0epG6ri3YN-u39bCUZpFpfpOtw5DrmrwukQ&s=10', tag: 'Nuevo' },
    { id: 33, category: 'accessories', name: 'Bandana Paisley Monochrome', price: 10.00, desc: 'Pañuelo de algodón puro con estampado clásico en blanco y negro.', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500&q=80', tag: 'Clásico' },
    { id: 34, category: 'accessories', name: 'Mochila Rolltop Tactical', price: 65.00, desc: 'Mochila de gran capacidad con compartimento para portátil.', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80', tag: 'Pro' },
    { id: 35, category: 'accessories', name: 'Llavero Lanyard Industrial', price: 9.00, desc: 'Cinta resistente con herraje metálico de alta durabilidad.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ShaXN4zaBxtyLJtulwH-X4itlBDAPjILXv2NGj6HWw&s=10', tag: 'Detalle' },
    { id: 36, category: 'accessories', name: 'Gafas de Sol Cyberpunk', price: 22.00, desc: 'Montura geométrica oscura con protección UV400 total.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8hX6a8w37054qLAp47u-6xGvWcgW03oh8ms8rOL3lQ&s=10', tag: 'Limitado' }
];

let currentCategory = 'all';

window.onload = function() {
    displayProducts(productsData);
};

// Función para filtrar productos por categoría desde el menú desplegable
function filterCategory(category) {
    currentCategory = category;
    const titleHeader = document.getElementById('sectionTitleHeader');
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = ''; // Limpiar buscador al cambiar categoría
    
    if (category === 'all') {
        if (titleHeader) titleHeader.innerText = "Catálogo Completo";
        displayProducts(productsData);
    } else {
        const filtered = productsData.filter(p => p.category === category);
        const categoryNames = {
            'tees': 'Franelas Oversized',
            'pants': 'Pantalones',
            'caps': 'Gorras',
            'accessories': 'Accesorios'
        };
        if (titleHeader) titleHeader.innerText = categoryNames[category] || 'Catálogo';
        displayProducts(filtered);
    }
    
    scrollToCatalog();
}

// Función de Búsqueda en tiempo real
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase().trim();

    // Tomar la base según la categoría actual
    let baseList = currentCategory === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === currentCategory);

    // Filtrar por nombre o descripción
    const filtered = baseList.filter(p => 
        p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)
    );

    displayProducts(filtered);
}

function scrollToCatalog() {
    const catalogSection = document.getElementById('catalogSection');
    if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function displayProducts(products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    if (products.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #777; padding: 40px 0;">No se encontraron productos con esa búsqueda.</p>';
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-container">
                <span class="product-tag">${product.tag}</span>
                <img src="${product.img}" alt="${product.name}" onclick="openImageModal('${product.img}')">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- FUNCIONES PARA EL LIGHTBOX DE IMÁGENES ---

function openImageModal(imgSrc) {
    const modal = document.getElementById('imageModalOverlay');
    const expandedImg = document.getElementById('expandedImg');
    if (modal && expandedImg) {
        expandedImg.src = imgSrc;
        modal.classList.add('active');
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModalOverlay');
    if (modal) {
        modal.classList.remove('active');
    }
}