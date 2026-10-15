// Base de datos completa actualizada con tus modificaciones
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

/* ===================== Lógica de la tienda ===================== */
const WA = '584126613818';
const CATS = { all: 'Todo el catálogo', tees: 'Franelas Oversized', pants: 'Pantalones', caps: 'Gorras', accessories: 'Accesorios' };
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => '$' + Number(n).toFixed(2);
const state = { cat: 'all', q: '', sort: 'feat', max: 0 };
const MAXP = Math.ceil(Math.max(...productsData.map(p => p.price)));
let view = [], current = -1, favs = [];
try { favs = JSON.parse(localStorage.getItem('ls-favs') || '[]'); } catch (e) {}
const saveFavs = () => { try { localStorage.setItem('ls-favs', JSON.stringify(favs)); } catch (e) {} };
const byId = id => productsData.find(p => p.id === +id);
const wa = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
let tT; const toast = m => { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tT); tT = setTimeout(() => t.classList.remove('show'), 2200); };
const imgTag = p => `<img loading="lazy" src="${p.img}" alt="${p.name}" onerror="this.parentNode.classList.add('noimg');this.remove()">`;

/* ---------- Filtros, orden y render ---------- */
function applyFilters() {
  let l = productsData.filter(p => (state.cat === 'all' || p.category === state.cat) && p.price <= state.max &&
    (!state.q || (p.name + ' ' + p.desc + ' ' + p.tag + ' ' + CATS[p.category]).toLowerCase().includes(state.q)));
  if (state.sort === 'asc') l.sort((a, b) => a.price - b.price);
  if (state.sort === 'desc') l.sort((a, b) => b.price - a.price);
  if (state.sort === 'az') l.sort((a, b) => a.name.localeCompare(b.name, 'es'));
  return l;
}
function render() {
  view = applyFilters();
  $('#title').textContent = CATS[state.cat];
  $('#count').textContent = `${view.length} ${view.length === 1 ? 'pieza' : 'piezas'}`;
  $('#reset').style.display = (state.q || state.cat !== 'all' || state.max < MAXP) ? '' : 'none';
  $$('.pill').forEach(b => b.classList.toggle('on', b.dataset.cat === state.cat));
  $$('.links button').forEach(b => b.classList.toggle('on', b.dataset.cat === state.cat));
  $('#grid').innerHTML = view.length ? view.map((p, i) => {
    const on = favs.includes(p.id);
    return `<article class="card" style="--i:${Math.min(i, 14)}" data-id="${p.id}">
      <div class="media"><span class="tag">${p.tag}</span>
        <button class="fav ${on ? 'on' : ''}" data-fav="${p.id}" aria-label="Guardar en favoritos"><i class="fa-${on ? 'solid' : 'regular'} fa-heart"></i></button>
        ${imgTag(p)}<button class="qv" type="button">Vista rápida</button></div>
      <div class="info"><h3>${p.name}</h3><span class="price">${money(p.price)}</span></div><p class="cat">${CATS[p.category]}</p></article>`;
  }).join('') : `<div class="empty"><h3>Sin resultados</h3><p>Prueba con otra búsqueda o limpia los filtros.</p></div>`;
}
function buildStatic() {
  $('#pills').innerHTML = Object.keys(CATS).map(k => `<button class="pill" data-cat="${k}">${k === 'all' ? 'Todo' : CATS[k]}<sup>${k === 'all' ? productsData.length : productsData.filter(p => p.category === k).length}</sup></button>`).join('');
  $('#tiles').innerHTML = ['tees', 'pants', 'caps', 'accessories'].map(k => {
    const f = productsData.find(p => p.category === k), n = productsData.filter(p => p.category === k).length;
    return `<button class="tile" data-cat="${k}" data-go><img loading="lazy" src="${f.img}" alt="${CATS[k]}" onerror="this.remove()"><div><h3>${CATS[k]}</h3><span>${n} piezas <i class="fa-solid fa-arrow-right-long"></i></span></div></button>`;
  }).join('');
  const r = $('#max'); r.min = 5; r.max = MAXP; r.value = MAXP; state.max = MAXP; $('#maxv').textContent = money(MAXP);
  $('#mq').innerHTML = ('<span>Black &amp; White Edition</span><span>Streetwear 2026</span><span>Alta gama</span><span>Expresión urbana</span>').repeat(4);
}
function setCat(c, scroll = true) { state.cat = c; $('#q').value = ''; state.q = ''; render(); if (scroll) scrollToCatalog(); }
function scrollToCatalog() { $('#catalogo')?.scrollIntoView({ behavior: 'smooth' }); }
window.filterCategory = setCat; window.scrollToCatalog = scrollToCatalog;

/* ---------- Favoritos ---------- */
function toggleFav(id) {
  id = +id; const i = favs.indexOf(id);
  if (i >= 0) { favs.splice(i, 1); toast('Quitado de tu selección'); } else { favs.push(id); toast('Guardado en tu selección'); }
  saveFavs(); updateFavUI();
}
function updateFavUI() {
  const b = $('#fcount'); b.textContent = favs.length; b.classList.toggle('show', favs.length > 0); b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
  $$('[data-fav]').forEach(el => { const on = favs.includes(+el.dataset.fav); el.classList.toggle('on', on); el.innerHTML = `<i class="fa-${on ? 'solid' : 'regular'} fa-heart"></i>`; });
  const mf = $('#mfav'); if (mf && current >= 0) mf.innerHTML = favs.includes(view[current].id) ? '<i class="fa-solid fa-heart"></i> Guardado' : '<i class="fa-regular fa-heart"></i> Guardar';
  const items = favs.map(byId).filter(Boolean), tot = items.reduce((s, p) => s + p.price, 0);
  $('#dbody').innerHTML = items.length ? items.map(p => `<div class="fi"><div class="ph">${imgTag(p)}</div><div><h4>${p.name}</h4><p>${money(p.price)}</p></div><button data-rm="${p.id}" aria-label="Quitar"><i class="fa-solid fa-xmark"></i></button></div>`).join('')
    : '<div class="dempty"><i class="fa-regular fa-heart"></i>Aún no has guardado piezas.<br>Toca el corazón en cualquier producto.</div>';
  $('#dtotal').textContent = money(tot); $('#dfoot').style.display = items.length ? '' : 'none';
  $('#dwa').href = wa('Hola Lewis Skate, me interesan estas piezas:\n' + items.map(p => `• ${p.name} — ${money(p.price)}`).join('\n') + `\nTotal: ${money(tot)}\n¿Tienen disponibilidad y tallas?`);
}

/* ---------- Vista rápida ---------- */
function openQV(id) {
  current = view.findIndex(p => p.id === +id); if (current < 0) return;
  fillQV(); $('#modal').classList.add('show'); $('#ov').classList.add('show'); document.body.classList.add('lock');
}
function fillQV() {
  const p = view[current];
  $('#mimg').innerHTML = imgTag(p); $('#mcat').textContent = CATS[p.category] + ' · ' + p.tag; $('#mname').textContent = p.name;
  $('#mprice').textContent = money(p.price); $('#mdesc').textContent = p.desc;
  $('#mwa').href = wa(`Hola Lewis Skate, me interesa: ${p.name} (${money(p.price)}). ¿Tienen disponibilidad y tallas?`);
  $$('.arrow').forEach(a => a.style.display = view.length > 1 ? '' : 'none'); updateFavUI();
}
const stepQV = d => { current = (current + d + view.length) % view.length; fillQV(); };
function closeAll() { ['#modal', '#ov', '#drawer'].forEach(s => $(s).classList.remove('show')); document.body.classList.remove('lock'); }
window.openImageModal = () => {}; window.closeImageModal = closeAll;

/* ---------- Eventos ---------- */
document.addEventListener('click', e => {
  const t = e.target;
  const fav = t.closest('[data-fav]'); if (fav) { e.stopPropagation(); return toggleFav(fav.dataset.fav); }
  const card = t.closest('.card'); if (card) return openQV(card.dataset.id);
  const cat = t.closest('[data-cat]'); if (cat) { $('.links').classList.remove('open'); return setCat(cat.dataset.cat); }
  const rm = t.closest('[data-rm]'); if (rm) return toggleFav(rm.dataset.rm);
});
$('#q').addEventListener('input', e => { state.q = e.target.value.toLowerCase().trim(); render(); });
$('#sort').addEventListener('change', e => { state.sort = e.target.value; render(); });
$('#max').addEventListener('input', e => { state.max = +e.target.value; $('#maxv').textContent = money(state.max); render(); });
$('#reset').addEventListener('click', () => { state.cat = 'all'; state.q = ''; state.max = MAXP; $('#q').value = ''; $('#max').value = MAXP; $('#maxv').textContent = money(MAXP); render(); });
$('#hero-cta').addEventListener('click', scrollToCatalog);
$('#mclose').addEventListener('click', closeAll); $('#ov').addEventListener('click', closeAll); $('#dclose').addEventListener('click', closeAll);
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeAll(); });
$('#prev').addEventListener('click', () => stepQV(-1)); $('#next').addEventListener('click', () => stepQV(1));
$('#mfav').addEventListener('click', () => toggleFav(view[current].id));
$('#favbtn').addEventListener('click', () => { $('#drawer').classList.add('show'); $('#ov').classList.add('show'); document.body.classList.add('lock'); });
$('#burger').addEventListener('click', () => $('.links').classList.toggle('open'));
$('#searchbtn').addEventListener('click', () => { scrollToCatalog(); setTimeout(() => $('#q').focus(), 500); });
addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAll();
  if ($('#modal').classList.contains('show')) { if (e.key === 'ArrowRight') stepQV(1); if (e.key === 'ArrowLeft') stepQV(-1); }
  if (e.key === '/' && !/INPUT|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); $('#q').focus(); }
});

/* ---------- Efectos ---------- */
const bg = $('.hero-bg');
addEventListener('scroll', () => {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  $('#progress').style.width = (h > 0 ? y / h * 100 : 0) + '%';
  if (bg && y < innerHeight) bg.style.transform = `translateY(${y * .22}px)`;
}, { passive: true });
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
$$('[data-reveal]').forEach(el => io.observe(el));

window.onload = () => { buildStatic(); render(); updateFavUI(); };
