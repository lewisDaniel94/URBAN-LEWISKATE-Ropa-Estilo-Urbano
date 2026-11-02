// Lógica de la tienda. Los productos viven en data.js (productsData).
const $ = (s, r = document) => r.querySelector(s);
const WA = '584126613818';
const NAMES = { all: 'Colección completa', tees: 'Franelas oversized', pants: 'Pantalones', caps: 'Gorras', accessories: 'Accesorios', fav: 'Tus favoritos' };

const state = { cat: 'all', query: '', sort: 'default', favs: new Set(), onlyFavs: false };

try { JSON.parse(localStorage.getItem('lewis_favs') || '[]').forEach(id => state.favs.add(id)); } catch (e) {}
const saveFavs = () => { try { localStorage.setItem('lewis_favs', JSON.stringify([...state.favs])); } catch (e) {} };

const grid = $('#productsGrid');
const money = n => '$' + n.toFixed(2);
const FALLBACK = 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80';

// Observer que revela las tarjetas al entrar en pantalla
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });

function getList() {
  let list = productsData.filter(p =>
    (state.onlyFavs ? state.favs.has(p.id) : (state.cat === 'all' || p.category === state.cat)) &&
    (p.name + ' ' + p.desc).toLowerCase().includes(state.query)
  );
  if (state.sort === 'asc') list.sort((a, b) => a.price - b.price);
  if (state.sort === 'desc') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function render() {
  const list = getList();
  $('#catalogTitle').textContent = state.onlyFavs ? NAMES.fav : NAMES[state.cat];
  $('#resultCount').textContent = list.length + (list.length === 1 ? ' prenda' : ' prendas');
  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = `<p class="empty">${state.onlyFavs ? 'Aún no guardas favoritos. Toca el corazón en una prenda.' : 'No hay prendas con esa búsqueda. Prueba otra palabra.'}</p>`;
    return;
  }

  list.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.id = p.id;
    card.style.transitionDelay = (i % 4) * 90 + 'ms';
    card.innerHTML = `
      <div class="card-img">
        <span class="tag">${p.tag}</span>
        <button class="heart ${state.favs.has(p.id) ? 'on' : ''}" data-fav="${p.id}" aria-label="Guardar en favoritos">
          <i class="${state.favs.has(p.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="quick">Vista rápida</div>
      </div>
      <div class="card-info">
        <h3 class="card-name">${p.name}</h3>
        <span class="card-price">${money(p.price)}</span>
      </div>`;
    card.querySelector('img').onerror = e => { e.target.onerror = null; e.target.src = FALLBACK; };
    grid.appendChild(card);
    io.observe(card);
  });
}

function updateFavUI() {
  $('#favCount').textContent = state.favs.size;
  const btn = $('#favToggle');
  btn.classList.add('bump');
  setTimeout(() => btn.classList.remove('bump'), 400);
  btn.classList.toggle('active', state.onlyFavs);
  btn.querySelector('i').className = (state.favs.size ? 'fa-solid' : 'fa-regular') + ' fa-heart';
}

function toggleFav(id) {
  state.favs.has(id) ? state.favs.delete(id) : state.favs.add(id);
  saveFavs();
  updateFavUI();
  if (state.onlyFavs) render();
}

// --- Eventos del catálogo ---
$('#filters').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  state.cat = chip.dataset.cat;
  state.onlyFavs = false;
  updateFavUI();
  render();
});

$('#searchInput').addEventListener('input', e => { state.query = e.target.value.toLowerCase().trim(); render(); });
$('#sortSelect').addEventListener('change', e => { state.sort = e.target.value; render(); });

$('#favToggle').addEventListener('click', () => {
  state.onlyFavs = !state.onlyFavs;
  if (state.onlyFavs) document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  else document.querySelector(`.chip[data-cat="${state.cat}"]`).classList.add('active');
  updateFavUI();
  render();
  $('#coleccion').scrollIntoView({ behavior: 'smooth' });
});

grid.addEventListener('click', e => {
  const heart = e.target.closest('[data-fav]');
  if (heart) {
    e.stopPropagation();
    const id = +heart.dataset.fav;
    toggleFav(id);
    const on = state.favs.has(id);
    heart.classList.toggle('on', on);
    heart.querySelector('i').className = (on ? 'fa-solid' : 'fa-regular') + ' fa-heart';
    return;
  }
  const card = e.target.closest('.card');
  if (card) openModal(+card.dataset.id);
});

// --- Vista rápida ---
const modal = $('#modal');
let currentId = null;

function openModal(id) {
  const p = productsData.find(x => x.id === id);
  if (!p) return;
  currentId = id;
  $('#mImg').src = p.img;
  $('#mImg').alt = p.name;
  $('#mTag').textContent = p.tag;
  $('#mName').textContent = p.name;
  $('#mDesc').textContent = p.desc;
  $('#mPrice').textContent = money(p.price);
  $('#mBuy').href = `https://wa.me/${WA}?text=` + encodeURIComponent(`Hola, quiero pedir: ${p.name} (${money(p.price)}). ¿Qué tallas hay disponibles?`);
  syncModalFav();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lock');
}

function syncModalFav() {
  const on = state.favs.has(currentId);
  $('#mFav i').className = (on ? 'fa-solid' : 'fa-regular') + ' fa-heart';
  $('#mFav span').textContent = on ? 'Quitar de favoritos' : 'Guardar en favoritos';
}

modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
$('#mFav').addEventListener('click', () => {
  toggleFav(currentId);
  syncModalFav();
  const h = grid.querySelector(`[data-fav="${currentId}"]`);
  if (h) {
    const on = state.favs.has(currentId);
    h.classList.toggle('on', on);
    h.querySelector('i').className = (on ? 'fa-solid' : 'fa-regular') + ' fa-heart';
  }
});

// --- Efectos de scroll: barra de progreso, header y parallax del hero ---
const header = $('#header'), bar = $('#progress'), heroImg = $('#heroImg');
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
  header.classList.toggle('scrolled', y > 40);
  if (y < innerHeight && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroImg.style.transform = `translateY(${-y * 0.08}px)`;
  }
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });

// --- Botón magnético (solo con mouse) ---
if (matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

// --- Inicio: carga + entrada del hero ---
updateFavUI();
render();
onScroll();
window.addEventListener('load', () => {
  setTimeout(() => {
    $('#preloader').classList.add('done');
    document.body.classList.add('loaded');
    setTimeout(() => $('#preloader').remove(), 1400);
  }, 1300);
});
