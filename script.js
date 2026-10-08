// Base de datos completa (36 productos)
const productsData = [
    // --- HOODIES (9 ítems) ---
    { id: 1, category: 'hoodies', name: 'Hoodie Oversized Skull', price: 48.00, desc: 'Algodón peinado 450GSM con estampa trasera en alta densidad.', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80', tag: 'Nuevo' },
    { id: 2, category: 'hoodies', name: 'Hoodie Minimalist Black', price: 45.00, desc: 'Diseño minimalista liso con capucha de doble capa reforzada.', img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=500&q=80', tag: 'Bestseller' },
    { id: 3, category: 'hoodies', name: 'Hoodie Graphic Acid', price: 52.00, desc: 'Efecto lavado ácido artesanal estilo vintage underground.', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=500&q=80', tag: 'Hot' },
    { id: 4, category: 'hoodies', name: 'Hoodie Heavyweight White', price: 48.00, desc: 'Blanco nieve puro, corte boxy fit holgado y costuras ocultas.', img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80', tag: 'Stock' },
    { id: 5, category: 'hoodies', name: 'Hoodie Industrial Zip', price: 55.00, desc: 'Cierre metálico frontal reforzado y bolsillos canguro amplios.', img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=500&q=80', tag: 'Exclusivo' },
    { id: 6, category: 'hoodies', name: 'Hoodie Cyberpunk Print', price: 50.00, desc: 'Estampado gráfico frontal en contraste hiperdefinido.', img: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=500&q=80', tag: 'Limitado' },
    { id: 7, category: 'hoodies', name: 'Hoodie Raw Edge', price: 46.00, desc: 'Terminaciones deshilachadas estilo punk rock callejero.', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80', tag: 'Popular' },
    { id: 8, category: 'hoodies', name: 'Hoodie Nocturnal Shadow', price: 49.00, desc: 'Negro absoluto mate que absorbe la luz directa.', img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=500&q=80', tag: 'Nuevo' },
    { id: 9, category: 'hoodies', name: 'Hoodie Street Heritage', price: 53.00, desc: 'Inspirado en la vieja escuela del skate de los años 90.', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=500&q=80', tag: 'Clásico' },

    // --- OVERSIZED TEES (9 ítems) ---
    { id: 10, category: 'tees', name: 'Tee Oversized Graffiti', price: 26.00, desc: 'Jersey de algodón 280GSM con serigrafía frontal urbana.', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80', tag: 'Hot' },
    { id: 11, category: 'tees', name: 'Tee Boxy Fit White', price: 24.00, desc: 'Cuello redondo acanalado grueso y calce cuadrado perfecto.', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80', tag: 'Esencial' },
    { id: 12, category: 'tees', name: 'Tee Dark Ritual', price: 28.00, desc: 'Gráfica frontal de alta durabilidad resistente a lavados.', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80', tag: 'Nuevo' },
    { id: 13, category: 'tees', name: 'Tee Minimalist Tag', price: 25.00, desc: 'Pequeño bordado lateral en contraste blanco sobre negro.', img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=500&q=80', tag: 'Clean' },
    { id: 14, category: 'tees', name: 'Tee Heavy Asphalt', price: 27.00, desc: 'Textura suave con tratamiento pre-encogido de fábrica.', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80', tag: 'Popular' },
    { id: 15, category: 'tees', name: 'Tee Cyber Grid', price: 29.00, desc: 'Diseño geométrico inspirado en arquitectura brutalista.', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80', tag: 'Limitado' },
    { id: 16, category: 'tees', name: 'Tee Drop Shoulder Pure', price: 25.00, desc: 'Hombros caídos para un look relajado e impecable.', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80', tag: 'Bestseller' },
    { id: 17, category: 'tees', name: 'Tee Underground Club', price: 28.00, desc: 'Estampa posterior de gran formato con tinta ecológica.', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80', tag: 'Hot' },
    { id: 18, category: 'tees', name: 'Tee Blank Canvas White', price: 22.00, desc: 'Remera lisa versátil de máxima calidad y pureza visual.', img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=500&q=80', tag: 'Básico' },

    // --- PANTALONES BAGGY (9 ítems) ---
    { id: 19, category: 'pants', name: 'Pantalón Baggy Denim Dark', price: 54.00, desc: 'Denim rígido 14oz corte ancho extragrande para skate.', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80', tag: 'Pro' },
    { id: 20, category: 'pants', name: 'Cargo Parachute Black', price: 50.00, desc: 'Tela técnica ligera con múltiples bolsillos utilitarios.', img: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=500&q=80', tag: 'Trend' },
    { id: 21, category: 'pants', name: 'Baggy Worker Stitched', price: 56.00, desc: 'Costuras reforzadas de triple puntada y presillas anchas.', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80', tag: 'Nuevo' },
    { id: 22, category: 'pants', name: 'Pantalón Wide Leg White', price: 52.00, desc: 'Lona de algodón pesada en color blanco blanqueado.', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80', tag: 'Exclusivo' },
    { id: 23, category: 'pants', name: 'Cargo Industrial Straps', price: 58.00, desc: 'Correas ajustables y bolsillos de carga laterales profundos.', img: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=500&q=80', tag: 'Hot' },
    { id: 24, category: 'pants', name: 'Baggy Skate Fatigue', price: 49.00, desc: 'Corte holgado clásico diseñado para total libertad de movimiento.', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80', tag: 'Popular' },
    { id: 25, category: 'pants', name: 'Denim Washed Black Baggy', price: 55.00, desc: 'Lavado oscuro desgastado con efecto vintage natural.', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80', tag: 'Bestseller' },
    { id: 26, category: 'pants', name: 'Pantalón Track Nylon', price: 46.00, desc: 'Nylon impermeable de alta resistencia con cordón ajustable.', img: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=500&q=80', tag: 'Sport' },
    { id: 27, category: 'pants', name: 'Baggy Heavy Twill', price: 53.00, desc: 'Sarga de algodón pesada con caída impecable sobre zapatillas.', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80', tag: 'Nuevo' },

    // --- ACCESORIOS (9 ítems) ---
    { id: 28, category: 'accessories', name: 'Gorra Snapback Urban', price: 19.00, desc: 'Visera plana con bordado frontal en relieve monocromático.', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500&q=80', tag: 'Essential' },
    { id: 29, category: 'accessories', name: 'Beanie Knit Black', price: 16.00, desc: 'Gorro tejido de invierno en lana acrílica de alta densidad.', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500&q=80', tag: 'Hot' },
    { id: 30, category: 'accessories', name: 'Cangurera Crossbody Tech', price: 24.00, desc: 'Bolso bandolera impermeable con cremalleras selladas.', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80', tag: 'Utilidad' },
    { id: 31, category: 'accessories', name: 'Medias Altas Skate Pack x3', price: 15.00, desc: 'Algodón peinado reforzado en talón y puntera con líneas.', img: 'https://images.unsplash.com/photo-1582533561751-ef6f6598c8f6?auto=format&fit=crop&w=500&q=80', tag: 'Pack x3' },
    { id: 32, category: 'accessories', name: 'Cinto Industrial Heavy Buckle', price: 18.00, desc: 'Cinturón de lona con hebilla metálica de liberación rápida.', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80', tag: 'Nuevo' },
    { id: 33, category: 'accessories', name: 'Bandana Paisley Monochrome', price: 10.00, desc: 'Pañuelo de algodón puro con estampado clásico en blanco y negro.', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500&q=80', tag: 'Clásico' },
    { id: 34, category: 'accessories', name: 'Mochila Rolltop Tactical', price: 65.00, desc: 'Mochila de gran capacidad con compartimento para portátil.', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80', tag: 'Pro' },
    { id: 35, category: 'accessories', name: 'Llavero Lanyard Industrial', price: 9.00, desc: 'Cinta resistente con herraje metálico de alta durabilidad.', img: 'https://images.unsplash.com/photo-1582533561751-ef6f6598c8f6?auto=format&fit=crop&w=500&q=80', tag: 'Detalle' },
    { id: 36, category: 'accessories', name: 'Gafas de Sol Cyberpunk', price: 22.00, desc: 'Montura geométrica oscura con protección UV400 total.', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500&q=80', tag: 'Limitado' }
];

let cart = [];

window.onload = function() {
    displayProducts(productsData);
};

// Función para filtrar productos por categoría desde el menú desplegable
function filterCategory(category) {
    const titleHeader = document.getElementById('sectionTitleHeader');
    
    if (category === 'all') {
        if (titleHeader) titleHeader.innerText = "Catálogo Completo";
        displayProducts(productsData);
    } else {
        const filtered = productsData.filter(p => p.category === category);
        const categoryNames = {
            'hoodies': 'Hoodies',
            'tees': 'Oversized Tees',
            'pants': 'Pantalones Baggy',
            'accessories': 'Accesorios'
        };
        if (titleHeader) titleHeader.innerText = categoryNames[category] || 'Catálogo';
        displayProducts(filtered);
    }
    
    const catalogSection = document.getElementById('catalogSection');
    if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
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
                
                <div class="product-quantity-selector">
                    <button class="qty-btn" onclick="changeQty(${product.id}, -1)">-</button>
                    <input type="text" class="qty-input" id="qty-${product.id}" value="1" readonly>
                    <button class="qty-btn" onclick="changeQty(${product.id}, 1)">+</button>
                </div>

                <button class="btn-add-cart" onclick="addToCartWithQuantity(${product.id})">
                    <i class="fa-solid fa-bag-shopping"></i> Agregar a Bolsa
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function changeQty(productId, delta) {
    const input = document.getElementById(`qty-${productId}`);
    if (!input) return;
    let currentVal = parseInt(input.value) + delta;
    if (currentVal < 1) currentVal = 1;
    input.value = currentVal;
}

function addToCartWithQuantity(productId) {
    const input = document.getElementById(`qty-${productId}`);
    const quantity = input ? parseInt(input.value) : 1;
    const product = productsData.find(p => p.id === productId);
    
    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({ ...product, quantity: quantity });
    }
    
    updateCartUI();
    if (input) input.value = 1;
}

function updateCartUI() {
    let totalCount = 0;
    let totalPrice = 0;
    
    const itemsListContainer = document.getElementById('cartItemsList');
    if (!itemsListContainer) return;
    
    itemsListContainer.innerHTML = '';

    if (cart.length === 0) {
        itemsListContainer.innerHTML = '<p style="text-align:center; color:#777; margin-top:40px;">Tu bolsa está vacía</p>';
    } else {
        cart.forEach(item => {
            totalCount += item.quantity;
            let subtotal = item.price * item.quantity;
            totalPrice += subtotal;

            itemsListContainer.innerHTML += `
                <div class="cart-item-row">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                        <span class="cart-item-subtotal">$${subtotal.toFixed(2)}</span>
                        <button class="btn-remove-item" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            `;
        });
    }

    const cartCountEl = document.getElementById('cartCount');
    const drawerCartTotalEl = document.getElementById('drawerCartTotal');

    if (cartCountEl) cartCountEl.innerText = totalCount;
    if (drawerCartTotalEl) drawerCartTotalEl.innerText = `$${totalPrice.toFixed(2)}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function clearCart() {
    if (cart.length === 0) return;
    if (confirm("¿Estás seguro de que deseas vaciar toda la bolsa?")) {
        cart = [];
        updateCartUI();
    }
}

function toggleCartDrawer(open) {
    updateCartUI();
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');
    if (drawer && overlay) {
        if (open) {
            drawer.classList.add('active');
            overlay.classList.add('active');
        } else {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
}

// --- FUNCIONES DE CHECKOUT Y MODAL DE WHATSAPP ---

function openCheckoutModal() {
    if (cart.length === 0) {
        alert("Tu bolsa está vacía. Agrega productos antes de finalizar la compra.");
        return;
    }
    
    toggleCartDrawer(false);

    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const modalTotalEl = document.getElementById('checkoutModalTotal');
    if (modalTotalEl) {
        modalTotalEl.innerText = `$${totalPrice.toFixed(2)}`;
    }

    const modalOverlay = document.getElementById('checkoutModalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.add('active');
    }
}

function closeCheckoutModal() {
    const modalOverlay = document.getElementById('checkoutModalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
    }
}

function submitOrderToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const address = document.getElementById('clientAddress').value.trim();
    const note = document.getElementById('clientNote').value.trim();

    if (!name || !phone || !address) {
        alert("Por favor completa los campos obligatorios (*).");
        return;
    }

    let message = `* NUEVO PEDIDO - URBAN SKATE LWIS *\n\n`;
    message += `*Cliente:* ${name}\n`;
    message += `*Teléfono:* ${phone}\n`;
    message += `*Dirección:* ${address}\n`;
    if (note) {
        message += `*Nota:* ${note}\n`;
    }
    message += `\n*--- DETALLE DE LA COMPRA ---*\n`;

    let totalPrice = 0;
    cart.forEach((item, index) => {
        let subtotal = item.price * item.quantity;
        totalPrice += subtotal;
        message += `${index + 1}. ${item.name} (x${item.quantity}) - $${subtotal.toFixed(2)}\n`;
    });

    message += `\n*TOTAL A PAGAR: $${totalPrice.toFixed(2)}*`;

    const phoneNumber = "584126613818"; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
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