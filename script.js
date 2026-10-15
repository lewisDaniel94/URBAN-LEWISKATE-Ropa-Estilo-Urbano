(function(){
'use strict';
/* ===================== DATOS ===================== */
var productsData=[
 /* Franelas */
 {id:10,category:'tees',name:'Tee Oversized Graffiti',price:26,desc:'Jersey de algodón 280GSM con serigrafía frontal urbana.',img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80',tag:'Hot',feat:1},
 {id:11,category:'tees',name:'Tee Boxy Fit White',price:24,desc:'Cuello redondo acanalado grueso y calce cuadrado perfecto.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhmNPv89k1bRZCkbBEayNtfrqgZZYnjBuH1zzFujjOQ&s=10',tag:'Esencial'},
 {id:12,category:'tees',name:'Tee Dark Ritual',price:28,desc:'Gráfica frontal de alta durabilidad resistente a lavados.',img:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80',tag:'Nuevo',feat:1},
 {id:13,category:'tees',name:'Tee Minimalist Tag',price:25,desc:'Pequeño bordado lateral en contraste blanco sobre negro.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-0jaWJcX0GUWXru2G_mYi05NjflFGgFoLPNG0lUFrBJRm7ShGJNmvPL-&s=10',tag:'Clean'},
 {id:14,category:'tees',name:'Tee Heavy Asphalt',price:27,desc:'Textura suave con tratamiento pre-encogido de fábrica.',img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80',tag:'Popular'},
 {id:15,category:'tees',name:'Tee Cyber Grid',price:29,desc:'Diseño geométrico inspirado en arquitectura brutalista.',img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80',tag:'Limitado'},
 {id:16,category:'tees',name:'Tee Drop Shoulder Pure',price:25,desc:'Hombros caídos para un look relajado e impecable.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwRQUIua2isy2KLqjY-mUJIWkdKbGzxuh0opHE_K6RQ&s=10',tag:'Bestseller'},
 {id:17,category:'tees',name:'Tee Underground Club',price:28,desc:'Estampa posterior de gran formato con tinta ecológica.',img:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80',tag:'Hot'},
 {id:18,category:'tees',name:'Tee Blank Canvas White',price:22,desc:'Remera lisa versátil de máxima calidad y pureza visual.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8wlyQb7oTNtJiY4EK0pIfucjtZFll_QQBl1omy_U9Q&s=10',tag:'Básico'},
 /* Pantalones */
 {id:19,category:'pants',name:'Pantalón Baggy Denim Dark',price:54,desc:'Denim rígido 14oz corte ancho extragrande para skate.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rOqKkQ3kzHZ-EZJ5oAh0vqGXFZ7C7BPVteiaavrOf9pIIaIY56qmHgg&s=10',tag:'Pro',feat:1},
 {id:20,category:'pants',name:'Cargo Parachute Black',price:50,desc:'Tela técnica ligera con múltiples bolsillos utilitarios.',img:'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=700&q=80',tag:'Trend'},
 {id:21,category:'pants',name:'Pantalon Worker Stitched',price:56,desc:'Costuras reforzadas de triple puntada y presillas anchas.',img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',tag:'Nuevo'},
 {id:22,category:'pants',name:'Pantalón Wide Leg White',price:52,desc:'Lona de algodón pesada en color blanco blanqueado.',img:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',tag:'Exclusivo',feat:1},
 {id:23,category:'pants',name:'Cargo Industrial Straps',price:58,desc:'Correas ajustables y bolsillos de carga laterales profundos.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0BUzcn8SualDqPbrrU6SI9HUH5Urj3NFxHQDqgON07tFBd3qiRuxAxtr&s=10',tag:'Hot',feat:1},
 {id:24,category:'pants',name:'Pantalon Skate Fatigue',price:49,desc:'Corte holgado clásico diseñado para total libertad de movimiento.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1kB_qzPCCGSRAoYdd5cnTlJlOZp__vJEZ3SuKYkbvg&s=10',tag:'Popular'},
 {id:25,category:'pants',name:'Denim Washed Black Baggy',price:55,desc:'Lavado oscuro desgastado con efecto vintage natural.',img:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',tag:'Bestseller'},
 {id:26,category:'pants',name:'Pantalón Track Nylon',price:46,desc:'Nylon impermeable de alta resistencia con cordón ajustable.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhf1f76lVtMJpahD1ueKCZEykGk8cHZBGhBiluWtaRvAFenVCLFzQQFZD&s=10',tag:'Sport'},
 {id:27,category:'pants',name:'Pantalon Heavy Twill',price:53,desc:'Sarga de algodón pesada con caída impecable sobre zapatillas.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjE-CBBcmaXwt-s_yv5gN77j-n6tiv0ajPcdL54fn_3xWnpcGDgI_UdQ&s=10',tag:'Nuevo'},
 /* Gorras */
 {id:28,category:'caps',name:'Gorra Snapback Urban',price:19,desc:'Visera plana con bordado frontal en relieve monocromático.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgZm6paeL_qWF6P--8zyCWtpSmcTdpuciramBd4qrCw&s=10',tag:'Essential',feat:1},
 {id:29,category:'caps',name:'Gorra Urban',price:16,desc:'Frente estructurado de algodón con malla posterior ventilada.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZnvnA5cxVrzpo4ikx7KzY1PmFsDuv8O9xbkZ3w5Ntw&s=10',tag:'Hot'},
 {id:37,category:'caps',name:'Gorra Dad Hat Monochrome',price:18,desc:'Diseño clásico curvado con hebilla metálica ajustable.',img:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=700&q=80',tag:'Nuevo'},
 {id:38,category:'caps',name:'Gorra Trucker Mesh Black',price:17,desc:'Frente estructurado de algodón con malla posterior ventilada.',img:'https://http2.mlstatic.com/D_NQ_NP_722134-MLV109893759509_032026-O.webp',tag:'Popular'},
 {id:39,category:'caps',name:'Gorra Bucket Hat Tech',price:20,desc:'Sombrero estilo pescador en tejido impermeable técnico.',img:'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80',tag:'Trend'},
 /* Accesorios */
 {id:30,category:'accessories',name:'Cangurera Crossbody Tech',price:24,desc:'Bolso bandolera impermeable con cremalleras selladas.',img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80',tag:'Utilidad'},
 {id:31,category:'accessories',name:'Medias Altas Skate Pack x3',price:15,desc:'Algodón peinado reforzado en talón y puntera con líneas.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeiomgxGkwmDDW5b4PTeZ8owUyEWS_lortBO751ZJ0g&s',tag:'Pack x3'},
 {id:32,category:'accessories',name:'Cinto Industrial Heavy Buckle',price:18,desc:'Cinturón de lona con hebilla metálica de liberación rápida.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxM8OFnog0epG6ri3YN-u39bCUZpFpfpOtw5DrmrwukQ&s=10',tag:'Nuevo'},
 {id:33,category:'accessories',name:'Bandana Paisley Monochrome',price:10,desc:'Pañuelo de algodón puro con estampado clásico en blanco y negro.',img:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80',tag:'Clásico'},
 {id:34,category:'accessories',name:'Mochila Rolltop Tactical',price:65,desc:'Mochila de gran capacidad con compartimento para portátil.',img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80',tag:'Pro',feat:1},
 {id:35,category:'accessories',name:'Llavero Lanyard Industrial',price:9,desc:'Cinta resistente con herraje metálico de alta durabilidad.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ShaXN4zaBxtyLJtulwH-X4itlBDAPjILXv2NGj6HWw&s=10',tag:'Detalle'},
 {id:36,category:'accessories',name:'Gafas de Sol Cyberpunk',price:22,desc:'Montura geométrica oscura con protección UV400 total.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8hX6a8w37054qLAp47u-6xGvWcgW03oh8ms8rOL3lQ&s=10',tag:'Limitado',feat:1}
];
var WA='584126613818';
var CATS={all:'Todo el catálogo',tees:'Franelas Oversized',pants:'Pantalones',caps:'Gorras',accessories:'Accesorios'};
var SHORT={all:'Colección',tees:'Franelas',pants:'Pantalones',caps:'Gorras',accessories:'Accesorios'};
var SIZES={tees:['S','M','L','XL'],pants:['28','30','32','34','36'],caps:['Ajustable'],accessories:['Única']};
var SIZE_OVR={39:['S/M','L/XL'],32:['S/M','L/XL']};
var TILE_IMG={tees:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80',pants:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',caps:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=700&q=80',accessories:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80'};
var ANN=['Black & White Edition · Colección 2026','Pedidos directos por WhatsApp','Elige tu talla y arma tu bolsa'];

/* ===================== UTILIDADES ===================== */
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function money(n){return '$'+Number(n).toFixed(2)}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function wa(m){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(m)}
function byId(id){id=+id;for(var i=0;i<productsData.length;i++)if(productsData[i].id===id)return productsData[i];return null}
function sizesFor(p){return SIZE_OVR[p.id]||SIZES[p.category]||['Única']}
var store={get:function(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}},set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
var favs=(store.get('ls2-favs',[])||[]).filter(function(id){return byId(id)});
var cart=(store.get('ls2-cart',[])||[]).filter(function(i){return i&&byId(i.id)&&i.qty>0});
var MAXP=Math.ceil(Math.max.apply(null,productsData.map(function(p){return p.price})));
var state={cat:'all',q:'',sort:'feat',max:MAXP};
var view=[],mlist=[],pid=null,selSize=null,qty=1,lastFocus=null,tab='bag';

var tT;function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tT);tT=setTimeout(function(){t.classList.remove('show')},2300)}
function imgHTML(p,alt){
  return '<img loading="lazy" decoding="async" src="'+esc(p.img)+'" alt="'+esc(alt===undefined?p.name:alt)+'" onload="this.parentNode.classList.add(\'ld\')" onerror="this.parentNode.classList.add(\'noimg\');this.remove()">';
}
function initial(p){return esc(p.name.charAt(0))}
function settleImgs(root){$$('.ph img',root).forEach(function(im){if(im.complete&&im.naturalWidth>0)im.parentNode.classList.add('ld')})}

/* ===================== FILTROS Y RENDER ===================== */
function applyFilters(){
  var q=state.q;
  var l=productsData.filter(function(p){
    return (state.cat==='all'||p.category===state.cat)&&p.price<=state.max&&(!q||(p.name+' '+p.desc+' '+p.tag+' '+CATS[p.category]).toLowerCase().indexOf(q)>-1);
  });
  if(state.sort==='asc')l.sort(function(a,b){return a.price-b.price});
  if(state.sort==='desc')l.sort(function(a,b){return b.price-a.price});
  if(state.sort==='az')l.sort(function(a,b){return a.name.localeCompare(b.name,'es')});
  return l;
}
function cardHTML(p,i){
  var on=favs.indexOf(p.id)>-1;
  return '<article class="card" data-id="'+p.id+'" style="--i:'+Math.min(i,12)+'" tabindex="0" role="button" aria-label="Ver '+esc(p.name)+'">'+
    '<div class="media ph" data-i="'+initial(p)+'"><span class="tag">'+esc(p.tag)+'</span>'+
    '<button class="fav '+(on?'on':'')+'" data-fav="'+p.id+'" aria-label="Guardar en favoritos"><i class="fa-'+(on?'solid':'regular')+' fa-heart"></i></button>'+
    imgHTML(p)+'<span class="quick">Ver pieza</span></div>'+
    '<div class="info"><div><h3>'+esc(p.name)+'</h3><p class="cat">'+esc(SHORT[p.category])+'</p></div><span class="price">'+money(p.price)+'</span></div></article>';
}
function render(){
  view=applyFilters();
  $('#title').textContent=CATS[state.cat];
  $('#count').textContent=view.length+(view.length===1?' pieza':' piezas');
  $$('.pill').forEach(function(b){b.classList.toggle('on',b.dataset.cat===state.cat)});
  $$('.links button').forEach(function(b){b.classList.toggle('on',b.dataset.cat===state.cat)});
  var g=$('#grid');
  g.innerHTML=view.length?view.map(cardHTML).join(''):'<div class="empty"><h3>Sin resultados</h3><p>Prueba con otra búsqueda o limpia los filtros.</p><button class="btn ghost" data-resetbtn>Limpiar filtros</button></div>';
  settleImgs(g);
}
function buildStatic(){
  $('#pills').innerHTML=Object.keys(CATS).map(function(k){
    var n=k==='all'?productsData.length:productsData.filter(function(p){return p.category===k}).length;
    return '<button class="pill" data-cat="'+k+'">'+(k==='all'?'Todo':CATS[k])+'<sup>'+n+'</sup></button>';
  }).join('');
  var order=['tees','pants','caps','accessories'];
  $('#tiles').innerHTML=order.map(function(k,i){
    var n=productsData.filter(function(p){return p.category===k}).length;
    return '<button class="tile" data-cat="'+k+'"><span class="num">0'+(i+1)+'</span><img loading="lazy" decoding="async" src="'+TILE_IMG[k]+'" alt="" onerror="this.remove()"><div class="tt"><h3>'+CATS[k]+'</h3><div class="tm"><span>'+n+' piezas</span><i class="fa-solid fa-arrow-right-long"></i></div></div></button>';
  }).join('');
  $('#rail').innerHTML=productsData.filter(function(p){return p.feat}).map(function(p){return cardHTML(p,0)}).join('');
  settleImgs($('#rail'));
  $('#menunav').innerHTML=Object.keys(CATS).map(function(k){
    var n=k==='all'?productsData.length:productsData.filter(function(p){return p.category===k}).length;
    return '<button data-cat="'+k+'"><span>'+SHORT[k]+'</span><small>'+n+'</small></button>';
  }).join('');
  $('#fcats').innerHTML=Object.keys(CATS).map(function(k){return '<li><button data-cat="'+k+'">'+SHORT[k]+'</button></li>'}).join('');
  var r=$('#max');r.min=5;r.max=MAXP;r.value=MAXP;state.max=MAXP;$('#maxv').textContent=money(MAXP);
  $('#mq').innerHTML=('<span>Black &amp; White Edition</span><span>Streetwear 2026</span><span>Alta gama</span><span>Expresión urbana</span>').repeat(4);
  $('#wafloat').href=wa('Hola, estoy viendo el catálogo de Lewis Skate y quiero más información.');
  $('#paperwa').href=wa('Hola Lewis Skate, quiero hacer un pedido.');
  $$('[data-count]').forEach(function(el){
    var end=el.dataset.count==='pieces'?productsData.length:Object.keys(CATS).length-1,t0=null;
    if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=end;return}
    function step(t){if(!t0)t0=t;var k=Math.min((t-t0)/1400,1);el.textContent=Math.round(end*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);
  });
}
function scrollToCatalog(){var c=$('#catalogo');if(c)c.scrollIntoView({behavior:'smooth'})}
function setCat(c,scroll){
  state.cat=c;state.q='';$('#q').value='';render();
  if(scroll!==false)scrollToCatalog();
}
function resetFilters(){
  state.cat='all';state.q='';state.max=MAXP;state.sort='feat';
  $('#q').value='';$('#max').value=MAXP;$('#maxv').textContent=money(MAXP);$('#sort').value='feat';render();
}

/* ===================== FAVORITOS Y BOLSA ===================== */
function saveAll(){store.set('ls2-favs',favs);store.set('ls2-cart',cart)}
function cartCount(){return cart.reduce(function(s,i){return s+i.qty},0)}
function cartTotal(){return cart.reduce(function(s,i){var p=byId(i.id);return s+(p?p.price*i.qty:0)},0)}
function pop(el){el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop')}
function toggleFav(id){
  id=+id;var i=favs.indexOf(id);
  if(i>-1){favs.splice(i,1);toast('Quitado de favoritos')}else{favs.push(id);toast('Guardado en favoritos')}
  saveAll();syncUI(true,'fav');
}
function addToCart(id,size,q){
  id=+id;var f=null;
  for(var i=0;i<cart.length;i++)if(cart[i].id===id&&cart[i].size===size){f=cart[i];break}
  if(f)f.qty=Math.min(f.qty+q,20);else cart.push({id:id,size:size,qty:q});
  saveAll();syncUI(true,'bag');
}
function changeQty(key,d){
  var p=key.split('|');
  for(var i=0;i<cart.length;i++)if(cart[i].id===+p[0]&&cart[i].size===p[1]){
    cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);else if(cart[i].qty>20)cart[i].qty=20;break;
  }
  saveAll();syncUI();
}
function removeItem(key){
  var p=key.split('|');
  cart=cart.filter(function(i){return !(i.id===+p[0]&&i.size===p[1])});
  saveAll();syncUI();
}
function syncUI(animate,what){
  var fc=$('#fcount'),bc=$('#bcount');
  fc.textContent=favs.length;fc.classList.toggle('show',favs.length>0);
  bc.textContent=cartCount();bc.classList.toggle('show',cartCount()>0);
  if(animate){if(what==='fav')pop(fc);if(what==='bag')pop(bc)}
  $$('[data-fav]').forEach(function(el){
    var on=favs.indexOf(+el.dataset.fav)>-1;el.classList.toggle('on',on);
    el.innerHTML='<i class="fa-'+(on?'solid':'regular')+' fa-heart"></i>';
  });
  if(pid!==null)syncPMFav();
  $('#tabbag').textContent='Bolsa ('+cartCount()+')';$('#tabfav').textContent='Favoritos ('+favs.length+')';
  renderDrawer();
}
function renderDrawer(){
  var body=$('#dbody'),foot=$('#dfoot');
  $('#tabbag').classList.toggle('on',tab==='bag');$('#tabfav').classList.toggle('on',tab==='fav');
  $('#dtitle').textContent=tab==='bag'?'Mi bolsa':'Favoritos';
  if(tab==='bag'){
    if(!cart.length){
      body.innerHTML='<div class="dempty"><i class="fa-solid fa-bag-shopping"></i>Tu bolsa está vacía.<br>Elige una pieza y su talla para empezar.<br><button class="btn ghost" data-closedrawer>Seguir viendo</button></div>';
      foot.style.display='none';return;
    }
    body.innerHTML=cart.map(function(i){
      var p=byId(i.id),key=i.id+'|'+i.size;
      return '<div class="fi"><div class="ph" data-i="'+initial(p)+'">'+imgHTML(p)+'</div>'+
        '<div><h4>'+esc(p.name)+'</h4><p>Talla: '+esc(i.size)+' · '+money(p.price)+'</p>'+
        '<div class="qty"><button data-q="'+key+'" data-d="-1" aria-label="Menos">−</button><b>'+i.qty+'</b><button data-q="'+key+'" data-d="1" aria-label="Más">+</button></div></div>'+
        '<div class="rt"><span>'+money(p.price*i.qty)+'</span><button class="rm" data-rmcart="'+key+'" aria-label="Quitar"><i class="fa-regular fa-trash-can"></i></button></div></div>';
    }).join('');
    settleImgs(body);
    var tot=cartTotal();
    foot.style.display='';
    foot.innerHTML='<div class="tot"><span>Total estimado</span><b>'+money(tot)+'</b></div>'+
      '<a class="btn wa full" id="checkout" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Finalizar pedido por WhatsApp</a>'+
      '<button class="link" data-clearcart>Vaciar bolsa</button>';
    var lines=cart.map(function(i){var p=byId(i.id);return '• '+p.name+' · Talla '+i.size+' · x'+i.qty+' — '+money(p.price*i.qty)});
    $('#checkout').href=wa('Hola Lewis Skate, quiero hacer este pedido:\n\n'+lines.join('\n')+'\n\nTotal estimado: '+money(tot)+'\n¿Tienen disponibilidad?');
  }else{
    var items=favs.map(byId).filter(Boolean);
    if(!items.length){
      body.innerHTML='<div class="dempty"><i class="fa-regular fa-heart"></i>Aún no has guardado piezas.<br>Toca el corazón en cualquier producto.<br><button class="btn ghost" data-closedrawer>Explorar</button></div>';
      foot.style.display='none';return;
    }
    body.innerHTML=items.map(function(p){
      return '<div class="fi"><div class="ph" data-i="'+initial(p)+'">'+imgHTML(p)+'</div>'+
        '<div><h4>'+esc(p.name)+'</h4><p>'+money(p.price)+'</p><button class="go" data-open="'+p.id+'">Ver pieza</button></div>'+
        '<div class="rt"><button class="rm" data-fav="'+p.id+'" aria-label="Quitar de favoritos"><i class="fa-solid fa-xmark"></i></button></div></div>';
    }).join('');
    settleImgs(body);
    var tot=items.reduce(function(s,p){return s+p.price},0);
    foot.style.display='';
    foot.innerHTML='<a class="btn wa full" id="favwa" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Consultar mis favoritos</a>';
    $('#favwa').href=wa('Hola Lewis Skate, me interesan estas piezas:\n'+items.map(function(p){return '• '+p.name+' — '+money(p.price)}).join('\n')+'\nTotal: '+money(tot)+'\n¿Tienen disponibilidad y tallas?');
  }
}

/* ===================== MODAL DE PRODUCTO ===================== */
function lockScroll(on){document.documentElement.classList.toggle('lock',on)}
function openPM(id){
  id=+id;lastFocus=document.activeElement;
  var inList=mlist.some(function(p){return p.id===id});
  if(!inList){mlist=view.some(function(p){return p.id===id})?view.slice():productsData.slice()}
  closeDrawerOnly();
  pid=id;fillPM();
  $('#modal').classList.add('show');$('#ov').classList.add('show');lockScroll(true);
  setTimeout(function(){$('#mclose').focus({preventScroll:true})},50);
}
function fillPM(){
  var p=byId(pid),sz=sizesFor(p);
  selSize=sz.length===1?sz[0]:null;qty=1;
  var img=$('#pmimg');img.className='ph';img.dataset.i=initial(p);img.innerHTML=imgHTML(p);settleImgs(img.parentNode);
  $('#pmcat').textContent=CATS[p.category]+' · '+p.tag;
  $('#pmname').textContent=p.name;$('#pmprice').textContent=money(p.price);$('#pmdesc').textContent=p.desc;
  $('#pmsizes').innerHTML=sz.map(function(s){return '<button class="size '+(s===selSize?'on':'')+'" data-size="'+esc(s)+'">'+esc(s)+'</button>'}).join('');
  $('#qval').textContent=qty;
  $('.pm-txt').scrollTop=0;$('.pm').scrollTop=0;
  var list=mlist.length?mlist:productsData,many=list.length>1;
  $('#prev').style.display=many?'':'none';$('#next').style.display=many?'':'none';
  var rel=productsData.filter(function(x){return x.category===p.category&&x.id!==p.id}).slice(0,4);
  $('#pmrel').innerHTML=rel.map(function(x){return '<button data-open="'+x.id+'"><div class="ph" data-i="'+initial(x)+'">'+imgHTML(x)+'</div><span>'+esc(x.name)+'</span></button>'}).join('');
  settleImgs($('#pmrel'));
  syncPMFav();syncPMSel();
}
function syncPMSel(){
  var p=byId(pid);
  $('#pmsel').textContent=selSize||'Selecciona';
  $$('#pmsizes .size').forEach(function(b){b.classList.toggle('on',b.dataset.size===selSize)});
  $('#pmwa').href=wa('Hola Lewis Skate, me interesa: '+p.name+' ('+money(p.price)+')'+(selSize?' · Talla '+selSize:'')+' · Cantidad '+qty+'. ¿Tienen disponibilidad?');
}
function syncPMFav(){
  var on=favs.indexOf(pid)>-1,b=$('#pmfav');
  b.innerHTML='<i class="fa-'+(on?'solid':'regular')+' fa-heart"></i>';b.setAttribute('aria-pressed',on);
}
function stepPM(d){
  var list=mlist.some(function(p){return p.id===pid})?mlist:productsData;
  var i=list.findIndex(function(p){return p.id===pid});
  pid=list[(i+d+list.length)%list.length].id;fillPM();
}
function closePM(){
  $('#modal').classList.remove('show');
  if(!$('#drawer').classList.contains('show')){$('#ov').classList.remove('show');lockScroll(false)}
  pid=null;if(lastFocus&&lastFocus.focus)try{lastFocus.focus({preventScroll:true})}catch(e){}
}
function closeDrawerOnly(){$('#drawer').classList.remove('show')}
function openDrawer(t){
  if($('#modal').classList.contains('show')){$('#modal').classList.remove('show');pid=null}
  closeMenu();tab=t||'bag';renderDrawer();
  $('#drawer').classList.add('show');$('#ov').classList.add('show');lockScroll(true);
}
function closeAll(){
  $('#modal').classList.remove('show');$('#drawer').classList.remove('show');$('#ov').classList.remove('show');
  closeMenu();lockScroll(false);pid=null;
}

/* ===================== MENÚ MÓVIL ===================== */
function openMenu(){
  $('#menu').classList.add('open');$('#nav').classList.add('menu-on');lockScroll(true);
  $('#burger').setAttribute('aria-expanded','true');$('#burger').innerHTML='<i class="fa-solid fa-xmark"></i>';$('#menu').setAttribute('aria-hidden','false');
}
function closeMenu(){
  if(!$('#menu').classList.contains('open'))return;
  $('#menu').classList.remove('open');$('#nav').classList.remove('menu-on');
  if(!$('#modal').classList.contains('show')&&!$('#drawer').classList.contains('show'))lockScroll(false);
  $('#burger').setAttribute('aria-expanded','false');$('#burger').innerHTML='<i class="fa-solid fa-bars-staggered"></i>';$('#menu').setAttribute('aria-hidden','true');
}

/* ===================== EVENTOS ===================== */
document.addEventListener('click',function(e){
  var t=e.target;
  var el;
  if((el=t.closest('[data-fav]'))){e.stopPropagation();toggleFav(el.dataset.fav);return}
  if((el=t.closest('[data-size]'))){selSize=el.dataset.size;syncPMSel();return}
  if((el=t.closest('[data-q]'))){changeQty(el.dataset.q,+el.dataset.d);return}
  if((el=t.closest('[data-rmcart]'))){removeItem(el.dataset.rmcart);return}
  if(t.closest('[data-clearcart]')){cart=[];saveAll();syncUI();toast('Bolsa vaciada');return}
  if(t.closest('[data-closedrawer]')){closeAll();scrollToCatalog();return}
  if(t.closest('[data-resetbtn]')){resetFilters();return}
  if((el=t.closest('[data-open]'))){openPM(el.dataset.open);return}
  if((el=t.closest('.card'))){openPM(el.dataset.id);return}
  if((el=t.closest('[data-cat]'))){closeAll();setCat(el.dataset.cat);return}
});
document.addEventListener('keydown',function(e){
  if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('card')){e.preventDefault();openPM(e.target.dataset.id)}
});
$('#q').addEventListener('input',function(e){state.q=e.target.value.toLowerCase().trim();render()});
$('#sort').addEventListener('change',function(e){state.sort=e.target.value;render()});
$('#max').addEventListener('input',function(e){state.max=+e.target.value;$('#maxv').textContent=money(state.max);render()});
$('#reset').addEventListener('click',resetFilters);
$('#ftoggle').addEventListener('click',function(){var o=$('#fpanel').classList.toggle('open');this.setAttribute('aria-expanded',o)});
$('#hero-cta').addEventListener('click',scrollToCatalog);
$('#mclose').addEventListener('click',closePM);
$('#ov').addEventListener('click',closeAll);
$('#dclose').addEventListener('click',closeAll);
$('#prev').addEventListener('click',function(){stepPM(-1)});$('#next').addEventListener('click',function(){stepPM(1)});
$('#qminus').addEventListener('click',function(){qty=Math.max(1,qty-1);$('#qval').textContent=qty;syncPMSel()});
$('#qplus').addEventListener('click',function(){qty=Math.min(20,qty+1);$('#qval').textContent=qty;syncPMSel()});
$('#pmfav').addEventListener('click',function(){toggleFav(pid)});
$('#pmadd').addEventListener('click',function(){
  if(!selSize){var s=$('#pmsizes');s.classList.remove('shake');void s.offsetWidth;s.classList.add('shake');toast('Elige tu talla');return}
  addToCart(pid,selSize,qty);toast('Añadido a tu bolsa');
  setTimeout(function(){openDrawer('bag')},250);
});
$('#favbtn').addEventListener('click',function(){openDrawer('fav')});
$('#bagbtn').addEventListener('click',function(){openDrawer('bag')});
$('#tabbag').addEventListener('click',function(){tab='bag';renderDrawer()});
$('#tabfav').addEventListener('click',function(){tab='fav';renderDrawer()});
$('#burger').addEventListener('click',function(){$('#menu').classList.contains('open')?closeMenu():openMenu()});
$('#searchbtn').addEventListener('click',function(){closeAll();scrollToCatalog();setTimeout(function(){$('#q').focus({preventScroll:true})},700)});
$('#totop').addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'})});
$('#rprev').addEventListener('click',function(){$('#rail').scrollBy({left:-340,behavior:'smooth'})});
$('#rnext').addEventListener('click',function(){$('#rail').scrollBy({left:340,behavior:'smooth'})});
$('#rail').addEventListener('scroll',function(){
  var r=this,max=r.scrollWidth-r.clientWidth,k=max>0?r.scrollLeft/max:0;
  $('#rbar').style.transform='translateX('+(k*400)+'%)';
},{passive:true});
addEventListener('keydown',function(e){
  if(e.key==='Escape'){closeAll()}
  if($('#modal').classList.contains('show')){if(e.key==='ArrowRight')stepPM(1);if(e.key==='ArrowLeft')stepPM(-1)}
  if(e.key==='/'&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();scrollToCatalog();setTimeout(function(){$('#q').focus({preventScroll:true})},500)}
});
/* deslizar hacia abajo para cerrar el panel en móvil (modal) */
(function(){
  var pm=$('.pm'),y0=null;
  pm.addEventListener('touchstart',function(e){y0=(pm.scrollTop<=0&&e.target.closest('.pm-img'))?e.touches[0].clientY:null},{passive:true});
  pm.addEventListener('touchend',function(e){if(y0!==null&&e.changedTouches[0].clientY-y0>110)closePM();y0=null},{passive:true});
})();

/* ===================== EFECTOS ===================== */
var bg=$('#herobg'),navEl=$('#nav'),lastY=0,ticking=false,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function onScroll(){
  var y=scrollY||0,h=document.documentElement.scrollHeight-innerHeight;
  $('#progress').style.width=(h>0?y/h*100:0)+'%';
  if(bg&&!reduce&&y<innerHeight)bg.style.transform='translate3d(0,'+(y*.18)+'px,0)';
  var dy=y-lastY;
  if(!$('#menu').classList.contains('open')){
    if(y>260&&dy>6){navEl.classList.add('hide');document.body.classList.add('nav-hidden')}
    else if(dy<-6||y<120){navEl.classList.remove('hide');document.body.classList.remove('nav-hidden')}
  }
  $('#totop').classList.toggle('show',y>900);
  lastY=y;ticking=false;
}
addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
$$('[data-reveal]').forEach(function(el){io.observe(el)});
/* anuncio rotativo */
(function(){var i=0,a=$('#announce');setInterval(function(){i=(i+1)%ANN.length;a.innerHTML='<span>'+ANN[i].replace(/&/g,'&amp;')+'</span>'},3800)})();
/* cerrar menú si se agranda la pantalla */
addEventListener('resize',function(){if(innerWidth>=1000)closeMenu()});

/* ===================== INICIO ===================== */
buildStatic();render();syncUI();
})();
