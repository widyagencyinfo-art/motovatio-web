/* Motovatio — Grupo PlusAuto · comportamiento común (cabecera, pie, marcas, nanocars, carteles) */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var M = window.MOTOVATIO, MARCAS = window.MARCAS, TIPOS = window.TIPOS, VISOR = window.VISOR;
  var PRECIOS = window.PRECIOS || {}, GASTOS = window.GASTOS || null;
  var ORDEN = ['moto', 'scooter', 'ciclo', 'reparto', 'nano'];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var ZONAS = [['sevilla', 'Sevilla'], ['montequinto', 'Montequinto'], ['entrenucleos', 'Entrenúcleos'], ['alcala-de-guadaira', 'Alcalá de Guadaíra'], ['utrera', 'Utrera'], ['los-palacios', 'Los Palacios y Villafranca'], ['mairena-del-aljarafe', 'Mairena del Aljarafe'], ['san-juan-de-aznalfarache', 'San Juan de Aznalfarache'], ['tomares', 'Tomares'], ['bormujos', 'Bormujos'], ['castilleja-de-la-cuesta', 'Castilleja de la Cuesta'], ['camas', 'Camas'], ['gelves', 'Gelves'], ['coria-del-rio', 'Coria del Río'], ['la-puebla-del-rio', 'La Puebla del Río'], ['sanlucar-la-mayor', 'Sanlúcar la Mayor'], ['la-rinconada', 'La Rinconada'], ['carmona', 'Carmona'], ['mairena-del-alcor', 'Mairena del Alcor'], ['el-viso-del-alcor', 'El Viso del Alcor'], ['arahal', 'Arahal'], ['moron-de-la-frontera', 'Morón de la Frontera'], ['ecija', 'Écija'], ['lora-del-rio', 'Lora del Río'], ['el-coronil', 'El Coronil'], ['los-molares', 'Los Molares'], ['las-cabezas-de-san-juan', 'Las Cabezas de San Juan'], ['lebrija', 'Lebrija']];
  var uMoto = function (id) { return 'moto-' + id; };
  var uMarca = function (s) { return 'marca-' + s; };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var wa = function (texto) { return 'https://wa.me/' + M.whatsapp + '?text=' + encodeURIComponent(texto); };
  var pagina = document.body.getAttribute('data-page');
  var raiz = pagina === 'home' ? '' : './';

  // los precios viven en js/precios.js: aquí se le pegan a cada modelo, y cada marca sabe qué tipos tiene
  MARCAS.forEach(function (x) {
    x.modelos.forEach(function (mo) {
      var p = PRECIOS[mo.id];
      if (p) { mo.pvp = p.pvp; mo.conAyudas = p.conAyudas; mo.ayudaTxt = p.ayudaTxt; }
      mo.marca = x;
    });
    x.tipos = ORDEN.filter(function (t) { return x.modelos.some(function (mo) { return mo.tipo === t; }); });
  });
  var TODOS = [];
  MARCAS.forEach(function (x) { x.modelos.forEach(function (mo) { TODOS.push(mo); }); });

  var ICO = {
    ciudad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V8l6-4v17M11 21V11h8v10M8 9v.01M8 13v.01M8 17v.01M15 14v.01M15 17v.01"/></svg>',
    casco: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14a9 9 0 0 1 18 0v2a2 2 0 0 1-2 2h-6l-2-4H3Z"/><path d="M11 14h10"/></svg>',
    moto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="16" r="3"/><circle cx="19" cy="16" r="3"/><path d="M5 16l4-6h5l2 3 3 3M9 10l-1-3H6M14 10l2-3h3"/></svg>',
    micro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16V11l3-5h8l4 5v5"/><path d="M2 16h20M7 6v5h12"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="16.5" cy="17.5" r="2"/></svg>'
  };

  /* ---------- cabecera y pie ---------- */
  function cabecera() {
    var enlaces = [
      ['motos', 'Motos'],
      ['nanocars', 'Nanocars'],
      ['novedades', 'Novedades y reservas'],
      ['comparar', 'Comparar'],
      [raiz + '#carnet', 'Carnets'],
      [raiz + '#contacto', 'Contacto']
    ];
    var links = enlaces.map(function (e) { return '<a href="' + e[0] + '"' + (e[0] === 'nanocars' ? ' class="nav__nano"' : e[0] === 'novedades' ? ' class="nav__nuevo"' : '') + '>' + e[1] + '</a>'; }).join('');
    var tiposDe = function (x) { return x.tipos.map(function (t) { return TIPOS[t].n.toLowerCase(); }).join(', '); };
    var marcasDd = MARCAS.map(function (x) {
      return '<a href="' + uMarca(x.slug) + '"><b>' + esc(x.nombre) + '</b><span>' + x.modelos.length + (x.modelos.length === 1 ? ' modelo' : ' modelos') + '</span><em>' + esc(tiposDe(x)) + '</em></a>';
    }).join('') + '<a href="nanocars"><b>Nanocars</b><span>Silence S04 · 2 plazas</span><em>con techo y aire acondicionado</em></a>';
    var marcasMovil = MARCAS.map(function (x) { return '<a href="' + uMarca(x.slug) + '">' + esc(x.nombre) + '</a>'; }).join('');
    $('#siteHeader').outerHTML =
      '<header class="nav"><div class="wrap nav__in">' +
        '<a class="nav__logo" href="' + (raiz || './') + '" aria-label="Motovatio, inicio"><img src="img/logo-horizontal.svg" width="1046" height="178" alt="Motovatio · Motos eléctricas y movilidad urbana"></a>' +
        '<nav class="nav__links" aria-label="Principal">' +
          '<div class="navdd" id="navdd">' +
            '<button class="navdd__btn" id="navddBtn" aria-expanded="false" aria-controls="navddPanel">Marcas<span class="navdd__chev" aria-hidden="true"></span></button>' +
            '<div class="navdd__panel" id="navddPanel">' +
              '<p class="navdd__tit">Nuestras marcas · todas eléctricas</p>' +
              '<div class="navdd__grid">' + marcasDd + '</div>' +
              '<a class="navdd__all" href="motos">Ver las ' + TODOS.length + ' motos juntas, filtrar y comparar</a>' +
            '</div>' +
          '</div>' + links +
        '</nav>' +
        '<div class="nav__right">' +
          '<a class="btn btn--green btn--s nav__wa" data-wa="Hola, te escribo desde la web">WhatsApp</a>' +
          '<button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="menu"><span></span></button>' +
        '</div>' +
      '</div>' +
      '<div class="menu" id="menu">' +
        '<details class="menu__dd" open><summary>Marcas</summary><div class="menu__marcas">' + marcasMovil + '</div></details>' +
        links + '<a class="btn btn--green" data-wa="Hola, te escribo desde la web">Pregúntanos por WhatsApp</a></div>' +
      '</header>';
    var b = $('#burger'), m = $('#menu');
    b.addEventListener('click', function () {
      var abierto = m.classList.toggle('is-open');
      b.setAttribute('aria-expanded', abierto);
    });
    m.addEventListener('click', function (e) { if (e.target.closest('a')) { m.classList.remove('is-open'); b.setAttribute('aria-expanded', 'false'); } });
    // desplegable de marcas: se abre al pasar el ratón y también al pinchar (táctil y teclado)
    var dd = $('#navdd'), btn = $('#navddBtn'), reloj, porRaton = false;
    function abre(si) { dd.classList.toggle('is-open', si); btn.setAttribute('aria-expanded', si); }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (porRaton && dd.classList.contains('is-open')) { porRaton = false; return; }   // ya lo abrió el ratón: el primer clic no lo cierra
      abre(!dd.classList.contains('is-open'));
    });
    dd.addEventListener('mouseenter', function () { clearTimeout(reloj); if (!dd.classList.contains('is-open')) porRaton = true; abre(true); });
    dd.addEventListener('mouseleave', function () { reloj = setTimeout(function () { abre(false); }, 180); });
    document.addEventListener('click', function (e) { if (!dd.contains(e.target)) abre(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { abre(false); } });
    $('#navddPanel').addEventListener('click', function (e) { if (e.target.closest('a')) abre(false); });
  }

  function pie() {
    var marcas = MARCAS.map(function (x) { return '<li><a href="' + uMarca(x.slug) + '">' + esc(x.nombre) + '</a></li>'; });
    marcas.push('<li><a href="nanocars">Nanocars</a></li>');
    marcas.push('<li><a href="novedades">Novedades y reservas</a></li>');
    marcas.push('<li><a href="motos">Todas las motos</a></li>');
    var mitad = Math.ceil(marcas.length / 2);
    var docks = {
      home: ['Hola, te escribo desde la web', 'Pregúntanos por WhatsApp'],
      nano: ['Hola, quiero más información sobre el Silence S04 Nanocar.', 'Pregúntanos por WhatsApp']
    };
    var dk = docks[pagina] || ['Hola, te escribo desde la web', 'Pregúntanos por WhatsApp'];
    var fichaId = pagina === 'moto' && porId(document.body.getAttribute('data-id') || new URLSearchParams(location.search).get('id'));
    if (fichaId) dk = ['Hola, quiero más información sobre ' + art(fichaId) + nombreModelo(fichaId.marca, fichaId) + '.', 'Pregúntanos por WhatsApp'];
    $('#siteFooter').outerHTML =
      '<footer class="foot"><div class="wrap">' +
        '<div class="foot__in">' +
          '<div class="foot__logo"><img src="img/logo-horizontal-blanco.svg" width="1046" height="178" alt="Motovatio"><p>El espacio de movilidad eléctrica de ' + esc(M.grupo) + '.</p></div>' +
          '<div><h4>Marcas</h4><ul>' + marcas.slice(0, mitad).join('') + '</ul></div>' +
          '<div><h4>&nbsp;</h4><ul>' + marcas.slice(mitad).join('') + '</ul></div>' +
          '<div><h4>Tienda</h4><ul><li>' + esc(M.direccion) + '</li>' + M.horario.split(' · ').map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '<li><a href="tel:+' + M.tel + '">Teléfono ' + M.telefono + '</a></li><li><a data-wa="Hola, te escribo desde la web" target="_blank" rel="noopener">WhatsApp ' + M.whatsappTxt + '</a></li><li><a href="mailto:' + M.email + '">' + M.email + '</a></li><li><a href="https://www.instagram.com/' + M.instagram + '/" target="_blank" rel="noopener">Instagram @' + M.instagram + '</a></li>' + (M.facebook ? '<li><a href="' + M.facebook + '" target="_blank" rel="noopener">Facebook Motovatio</a></li>' : '') + (M.tiktok ? '<li><a href="https://www.tiktok.com/@' + M.tiktok + '" target="_blank" rel="noopener">TikTok @' + M.tiktok + '</a></li>' : '') + '</ul></div>' +
        '</div>' +
        '<p class="foot__zonas"><span>Motos eléctricas en</span> <a href="./">Dos Hermanas</a>' + ZONAS.map(function (z) { return '<a href="motos-electricas-' + z[0] + '">' + esc(z[1]) + '</a>'; }).join('') + '</p>' +
        '<div class="foot__legal"><span>© ' + new Date().getFullYear() + ' Motovatio · ' + esc(M.grupo) + '</span><span>Las marcas y los modelos mostrados pertenecen a sus fabricantes.</span></div>' +
      '</div></footer>' +
      '<div class="dock"><a class="btn btn--line" href="tel:+' + M.tel + '">Llamar</a>' +
      '<a class="btn btn--wa" data-wa="' + esc(dk[0]) + '">' + dk[1] + '</a></div>' +
      '<a class="wa-float" data-wa="' + esc(dk[0]) + '" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp al ' + M.whatsappTxt + '">' +
        '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C9.06 3 3.4 8.6 3.4 15.52c0 2.22.6 4.38 1.72 6.28L3.3 28.7l7.08-1.84a12.7 12.7 0 0 0 5.66 1.34h.01c6.97 0 12.64-5.6 12.64-12.52C28.68 8.6 23.01 3 16.04 3Zm0 22.98h-.01c-1.8 0-3.56-.48-5.1-1.38l-.37-.22-4.2 1.09 1.12-4.06-.24-.39a10.3 10.3 0 0 1-1.6-5.5c0-5.73 4.7-10.4 10.41-10.4 5.75 0 10.42 4.67 10.42 10.41 0 5.74-4.68 10.45-10.43 10.45Zm5.71-7.8c-.31-.16-1.85-.9-2.14-1.01-.29-.1-.5-.16-.7.16-.21.3-.81 1-.99 1.21-.18.21-.37.23-.68.08-.31-.16-1.32-.48-2.51-1.53a9.3 9.3 0 0 1-1.74-2.14c-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.66-.95-2.28-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.55.08-.83.39-.29.3-1.09 1.06-1.09 2.58 0 1.52 1.12 3 1.27 3.2.16.21 2.2 3.33 5.32 4.67.74.32 1.32.51 1.77.65.75.24 1.42.2 1.96.12.6-.09 1.85-.75 2.11-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.21-.6-.36Z"/></svg>' +
        '<span>WhatsApp</span></a>';
  }

  function enlacesWa() {
    $$('[data-wa]').forEach(function (a) {
      a.href = wa(a.getAttribute('data-wa'));
      a.target = '_blank'; a.rel = 'noopener';
    });
  }

  function aparicion() {
    var els = $$('.sec h2, .needs > *, .prod, .acc, .calc, .fact, .bat, .lcard, .pot__c, .vs, .nano, .stat, .steps li, .grupo, .contact > *');
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { el.classList.add('rv'); io.observe(el); });
  }

  /* ---------- datos de cada moto: precio, carnet y potencia ---------- */
  function num(n) { return String(n).replace('.', ','); }
  function eur(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+$)/g, '.') + ' €'; }
  function cv(kw) { return Math.round(kw * 1.36); }
  function gastosTxt() { return GASTOS ? '+ ' + eur(GASTOS.eur) + ' de ' + GASTOS.txt : ''; }
  function gastosHtml() { return GASTOS ? '<p class="gastos">' + esc(gastosTxt()) + '</p>' : ''; }
  function precioHtml(mo) {
    if (!mo.pvp) return '<p class="pr pr--c"><b>Precio a consultar</b></p>';
    return '<p class="pr"><small>Precio guía</small><b' + (mo.conAyudas ? ' class="pr__antes"' : '') + '>' + eur(mo.pvp) + '</b></p>' +
      (mo.conAyudas ? '<p class="pr pr--ay"><b>' + eur(mo.conAyudas) + '*</b><small>' + esc(mo.ayudaTxt) + '</small></p>' : '') + gastosHtml();
  }
  // carnet: «B» = carnet de coche con 3 años o A1 · «AM» = ciclomotor · «Bsolo» = solo carnet de coche
  var LIC = {
    B: ['lic--b', 'Carnet de coche o A1'],
    AM: ['lic--am', 'Carnet AM · desde los 15'],
    Bsolo: ['lic--b', 'Carnet de coche']
  };
  function licHtml(mo) { var l = LIC[mo.lic]; return l ? '<i class="lic ' + l[0] + '">' + l[1] + '</i>' : ''; }
  function potTxt(mo) {
    if (mo.potNom && mo.potPico) return num(mo.potNom) + ' kW nominales (' + cv(mo.potNom) + ' CV) · pico de ' + num(mo.potPico) + ' kW (' + cv(mo.potPico) + ' CV)';
    if (mo.potNom) return num(mo.potNom) + ' kW nominales (' + cv(mo.potNom) + ' CV)';
    if (mo.potPico) return 'pico de ' + num(mo.potPico) + ' kW (' + cv(mo.potPico) + ' CV)';
    if (mo.pot) return num(mo.pot) + ' kW (' + cv(mo.pot) + ' CV)';
    return '';
  }
  function autoTxt(mo) {
    if (mo.auto) return (mo.autoHasta ? 'hasta ' : '') + mo.auto + ' km' + (mo.autoNota ? ' (' + mo.autoNota + ')' : '');
    return mo.autoTxt || '';
  }
  function nombreModelo(x, mo) { return x.nombre + ' ' + mo.n + (mo.version ? ' ' + mo.version : ''); }
  function art(mo) { return mo.tipo === 'nano' ? 'el ' : 'la '; }
  function porId(id) { return TODOS.filter(function (mo) { return mo.id === id; })[0]; }

  function fichaModelo(x, mo) {
    var datos = [];
    if (mo.carnet) datos.push(['Carnet', mo.carnet]);
    if (mo.vmax) datos.push(['Velocidad', mo.vmax + ' km/h' + (mo.vmaxNota ? ' (' + mo.vmaxNota + ')' : '')]);
    if (autoTxt(mo)) datos.push(['Autonomía', autoTxt(mo)]);
    if (potTxt(mo)) datos.push(['Potencia', potTxt(mo)]);
    if (mo.bat) datos.push(['Batería', mo.bat]);
    if (mo.carga) datos.push(['Carga', mo.carga]);
    var nombre = nombreModelo(x, mo);
    return '<article class="mod" data-tipo="' + (mo.tipo || '') + '">' +
      '<div class="mod__col">' +
        (mo.img ? (pagina === 'moto' ? '' : '<a href="' + uMoto(mo.id) + '">') + '<img class="mod__img" src="' + mo.img + '" width="900" height="675" alt="' + esc(nombre) + '" loading="lazy">' + (pagina === 'moto' ? '' : '</a>') : '') +
        '<div class="mod__pr">' + precioHtml(mo) + '</div>' +
        '<div class="mod__cta">' +
          '<a class="btn btn--green" href="' + wa('Hola, quiero más información sobre ' + art(mo) + nombre + '.') + '" target="_blank" rel="noopener">Pregúntanos por WhatsApp</a>' +
          '<a class="btn btn--line" href="tel:+' + M.tel + '">Llamar</a>' +
        '</div>' +
        (pagina === 'moto' ? '' : '<a class="link mod__mas" href="' + uMoto(mo.id) + '">Ver la ficha completa y comparar</a>') +
      '</div>' +
      '<div class="mod__col">' +
        (datos.length ? '<dl class="mod__datos">' + datos.map(function (d) { return '<div><dt>' + d[0] + '</dt><dd>' + esc(d[1]) + '</dd></div>'; }).join('') + '</dl>' : '') +
        (mo.extras && mo.extras.length ? '<ul class="mod__extras">' + mo.extras.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>' : '') +
      '</div>' +
    '</article>';
  }

  // cada moto es un desplegable: arriba lo justo para elegir (carnet, tipo, precio) y dentro la ficha
  function desplegableModelo(x, mo, abierto) {
    var t = mo.tipo ? TIPOS[mo.tipo] : null;
    return '<details class="macc" data-tipo="' + (mo.tipo || '') + '"' + (abierto ? ' open' : '') + '>' +
      '<summary>' +
        (mo.img ? '<img class="macc__th" src="' + mo.img + '" width="900" height="675" alt="" loading="lazy">' : '<span class="macc__th"></span>') +
        '<span class="macc__name">' + esc(mo.n) + (mo.version ? ' <small>' + esc(mo.version) + '</small>' : '') + '</span>' +
        '<span class="macc__res">' + licHtml(mo) + '<b>' + (t ? t.corto : 'Eléctrica') + (mo.extraible ? ' · batería extraíble' : '') + '</b>' + (mo.destacado ? esc(mo.destacado) : '') + '</span>' +
        '<span class="macc__pr">' + (mo.pvp ? (mo.conAyudas ? '<s>' + eur(mo.pvp) + '</s><b>' + eur(mo.conAyudas) + '*</b>' : '<small>desde</small><b>' + eur(mo.pvp) + '</b>') : '<small>precio</small><b class="macc__c">a consultar</b>') + '</span>' +
        '<span class="acc__ico" aria-hidden="true"></span>' +
      '</summary>' +
      '<div class="macc__body">' + fichaModelo(x, mo) + '</div>' +
    '</details>';
  }

  function desde(lista) { var ps = lista.map(function (m) { return m.conAyudas || m.pvp; }).filter(Boolean); return ps.length ? Math.min.apply(null, ps) : 0; }
  function desplegableMarca(x, abierta) {
    var n = x.modelos.length;
    return '<details class="acc" name="marcas" data-tipos="' + x.tipos.join(' ') + '"' + (abierta ? ' open' : '') + '>' +
      '<summary>' +
        '<span class="acc__name">' + esc(x.nombre) + '</span>' +
        '<span class="acc__meta">' + (x.oficial ? '<span class="acc__org"><b>Distribuidor oficial</b></span>' : '') + '<span class="acc__frase">' + esc(x.frase) + '</span></span>' +
        '<span class="acc__n">' + n + (n === 1 ? ' modelo' : ' modelos') + (desde(x.modelos) ? '<b>desde ' + eur(desde(x.modelos)) + '</b>' : '') + '</span>' +
        '<span class="acc__ico" aria-hidden="true"></span>' +
      '</summary>' +
      '<div class="acc__body">' +
        '<p class="acc__txt">' + esc(x.texto) + '</p>' +
        '<div class="mods">' + x.modelos.map(function (mo) { return desplegableModelo(x, mo, false); }).join('') + '</div>' +
      '</div>' +
    '</details>';
  }

  /* ---------- portada ---------- */
  // el precio baja del PVP al precio final al cargar la página
  function cuentaPrecio() {
    var el = $('#adNum');
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var a = +el.getAttribute('data-desde'), b = +el.getAttribute('data-hasta'), t0 = null, dur = 1300;
    var fmt = function (n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+$)/g, '.'); };
    el.textContent = fmt(a);
    function paso(t) {
      if (t0 === null) t0 = t;
      var x = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - x, 4);
      el.textContent = fmt(a + (b - a) * e);
      if (x < 1) requestAnimationFrame(paso);
    }
    setTimeout(function () { requestAnimationFrame(paso); }, 350);
  }

  function marquesina() {
    var m = $('#marquee');
    if (!m) return;
    var fila = MARCAS.map(function (x) { return '<span>' + esc(x.nombre) + '</span>'; }).join('');
    m.innerHTML = fila + fila;
  }

  function marcas() {
    var caja = $('#brands'), filtros = $('#filtros');
    if (!caja) return;
    caja.innerHTML = MARCAS.map(function (x, k) { return desplegableMarca(x, k === 0); }).join('');
    var usados = ORDEN.filter(function (t) { return TODOS.some(function (mo) { return mo.tipo === t; }); });
    filtros.innerHTML = '<button class="chip is-on" data-t="" role="tab" aria-selected="true">Todas</button>' +
      usados.map(function (t) { return '<button class="chip" data-t="' + t + '" role="tab" aria-selected="false">' + TIPOS[t].n + '</button>'; }).join('');
    function filtra(t) {
      var visibles = [];
      $$('.acc', caja).forEach(function (el) {
        var ok = !t || el.getAttribute('data-tipos').split(' ').indexOf(t) >= 0;
        el.hidden = !ok; if (ok) visibles.push(el);
        $$('.macc', el).forEach(function (m) { m.hidden = !!t && m.getAttribute('data-tipo') !== t; });
      });
      $$('.chip', filtros).forEach(function (c) {
        var on = c.getAttribute('data-t') === t;
        c.classList.toggle('is-on', on); c.setAttribute('aria-selected', on);
      });
      $('#brandsEmpty').hidden = visibles.length > 0;
      if (t && visibles.length && !visibles.some(function (el) { return el.open; })) visibles[0].open = true;
    }
    filtros.addEventListener('click', function (e) {
      var c = e.target.closest('.chip');
      if (c) filtra(c.getAttribute('data-t'));
    });
    $$('[data-filtro]').forEach(function (a) {
      a.addEventListener('click', function () { filtra(a.getAttribute('data-filtro')); });
    });
    $$('[data-ico]').forEach(function (s) { s.innerHTML = ICO[s.getAttribute('data-ico')] || ''; });
    // navegadores sin <details name>: que solo quede una marca abierta
    caja.addEventListener('toggle', function (e) {
      if (e.target.open && e.target.classList.contains('acc')) $$('.acc[open]', caja).forEach(function (el) { if (el !== e.target) el.open = false; });
    }, true);
  }

  // las cuatro de arriba se eligen en DESTACADAS (js/data.js)
  function destacadas() {
    var caja = $('#destacadas');
    if (!caja) return;
    caja.innerHTML = (window.DESTACADAS || []).map(function (p) {
      var mo = porId(p[0]); if (!mo) return '';
      var x = mo.marca, nombre = nombreModelo(x, mo), t = TIPOS[mo.tipo];
      return '<article class="prod">' +
        '<a class="prod__img" href="' + uMoto(mo.id) + '"><img src="' + mo.img + '" width="900" height="675" alt="' + esc(nombre) + '" loading="lazy"><span class="prod__tag">' + esc(p[1]) + '</span></a>' +
        '<div class="prod__body">' +
          '<p class="prod__tipo">' + esc(x.nombre) + ' · ' + t.corto + '</p>' +
          '<h3><a href="' + uMoto(mo.id) + '">' + esc(mo.n) + '</a></h3>' +
          licHtml(mo) +
          '<p class="prod__dest">' + esc(mo.destacado) + '</p>' +
          '<div class="prod__pr">' + (mo.pvp ? (mo.conAyudas ? '<s>' + eur(mo.pvp) + '</s><b>' + eur(mo.conAyudas) + '*</b><small>' + esc(mo.ayudaTxt) + '</small>' : '<small>Precio guía</small><b>' + eur(mo.pvp) + '</b>') : '<small>Precio</small><b class="prod__c">a consultar</b>') + '</div>' +
          '<a class="btn btn--navy" href="' + wa('Hola, quiero más información sobre ' + art(mo) + nombre + '.') + '" target="_blank" rel="noopener">Pregúntanos por WhatsApp</a>' +
        '</div></article>';
    }).join('');
    // «desde X €» en los accesos de «¿Qué necesitas hoy?»
    $$('.need[data-desde]').forEach(function (a) {
      var t = a.getAttribute('data-desde');
      var d = desde(TODOS.filter(function (m) { return m.tipo === t; })), go = $('.need__go', a);
      if (d && go) go.insertAdjacentHTML('beforebegin', '<span class="need__desde">desde <b>' + eur(d) + '</b></span>');
    });
    // cuántas se llevan con el carnet de coche
    var nB = $('#nB');
    if (nB) nB.textContent = TODOS.filter(function (m) { return m.lic === 'B'; }).length;
  }

  // frente a una 125 de gasolina: la más rápida de cada marca que se lleva con el carnet de coche
  function frente125() {
    var caja = $('#vs125');
    if (!caja) return;
    var gas = +caja.getAttribute('data-gas'), vistas = {}, lista = [];
    TODOS.filter(function (m) { return m.lic === 'B' && m.vmax; })
      .sort(function (a, b) { return b.vmax - a.vmax; })
      .forEach(function (m) { if (!vistas[m.marca.slug]) { vistas[m.marca.slug] = 1; lista.push(m); } });
    var tope = Math.max.apply(null, lista.map(function (m) { return m.vmax; }).concat([gas]));
    var fila = function (nombre, sub, v, vTxt, clase) {
      return '<li class="vs__f ' + clase + '"><span class="vs__n">' + nombre + (sub ? '<small>' + sub + '</small>' : '') + '</span>' +
        '<span class="vs__b"><i style="width:' + Math.round(v / tope * 100) + '%"></i></span><b class="vs__v">' + vTxt + '</b></li>';
    };
    caja.innerHTML = '<ul class="vs__l">' +
      fila('125 de gasolina', '', gas, caja.getAttribute('data-gas-txt'), 'vs__f--gas') +
      lista.map(function (m) { return fila(esc(m.marca.nombre + ' ' + m.n), m.potPico ? 'pico de ' + num(m.potPico) + ' kW' : '', m.vmax, m.vmax + ' km/h', ''); }).join('') +
      '</ul>';
  }

  // calculadora: gasolina de una 125 frente a electricidad (supuestos a la vista y editables en el HTML)
  function calculadora() {
    var f = $('#calc');
    if (!f) return;
    var km = $('#calcKm'), dias = $('#calcDias');
    var S = { l100: +f.getAttribute('data-l100'), eurL: +f.getAttribute('data-eurl'), kwh100: +f.getAttribute('data-kwh100'), eurKwh: +f.getAttribute('data-eurkwh') };
    function pinta() {
      var kmMes = km.value * dias.value * 4.33;
      var gas = kmMes * S.l100 / 100 * S.eurL, luz = kmMes * S.kwh100 / 100 * S.eurKwh;
      $('#calcKmV').textContent = km.value + ' km';
      $('#calcDiasV').textContent = dias.value + (dias.value === '1' ? ' día' : ' días');
      $('#calcGas').textContent = eur(gas); $('#calcLuz').textContent = eur(Math.max(1, luz));
      $('#calcMes').textContent = eur(gas - luz); $('#calcAno').textContent = eur((gas - luz) * 12);
      $('#calcKmMes').textContent = String(Math.round(kmMes)).replace(/\B(?=(\d{3})+$)/g, '.');
    }
    km.addEventListener('input', pinta); dias.addEventListener('input', pinta); pinta();
  }

  function contacto() {
    if (!$('#cDir')) return;
    $('#cDir').textContent = M.direccion;
    $('#cHor').innerHTML = M.horario.split(' · ').map(esc).join('<br>');
    if ($('#cFb')) { if (M.facebook) { $('#cFb').href = M.facebook; $('#cFb').textContent = 'Motovatio'; } else $('#cFb').closest('li').remove(); }
    if ($('#cTk')) { if (M.tiktok) { $('#cTk').href = 'https://www.tiktok.com/@' + M.tiktok; $('#cTk').textContent = '@' + M.tiktok; } else $('#cTk').closest('li').remove(); }
    $('#cTel').textContent = M.telefono;
    if ($('#cWaTxt')) { $('#cWaTxt').textContent = M.whatsappTxt; $('#cWaTxt').setAttribute('data-wa', 'Hola, te escribo desde la web'); }
    if ($('#cIg')) { $('#cIg').href = 'https://www.instagram.com/' + M.instagram + '/'; $('#cIg').textContent = '@' + M.instagram; }
    $('#cCall').href = 'tel:+' + M.tel;
    $('#cMap').src = M.mapa;
    if (!$('#lkPlus')) return;
    // De momento los 4 botones abren el WhatsApp de PlusAuto (hasta tener su web/número nuevo)
    var wa = function (t) { return 'https://wa.me/' + M.plusautoWhatsapp + '?text=' + encodeURIComponent(t); };
    $('#lkPlus').href = wa('Hola, vengo de la web de Motovatio. Me interesan los coches y motos de ocasión de PlusAuto.');
    $('#lkFin').href = wa('Hola, vengo de la web de Motovatio. Quería información sobre financiación.');
    $('#lkTas').href = wa('Hola, vengo de la web de Motovatio. Quería tasar mi vehículo para dejarlo como parte del pago.');
    $('#lkTal').href = wa('Hola, vengo de la web de Motovatio. Quería pedir cita en el taller.');
    ['#lkPlus', '#lkFin', '#lkTas', '#lkTal'].forEach(function (s) { $(s).target = '_blank'; $(s).rel = 'noopener'; });
  }

  /* ---------- visor: fotos oficiales del fabricante, por colores y ángulos ---------- */
  function visor(caja, v) {
    var c = 0, a = v.inicio || 0;
    caja.innerHTML =
      '<div class="visor"><img id="vImg" width="1400" height="' + v.alto + '" alt="">' +
      '<div class="visor__bar"><div class="visor__sw" id="vSw"></div><button class="visor__turn" id="vTurn">Girar</button></div>' +
      '<p class="visor__cap" id="vCap"></p></div>';
    var img = $('#vImg'), sw = $('#vSw');
    function pinta(suave) {
      var src = v.base + v.colores[c].id + '-' + v.angulos[a] + '.webp';
      if (suave) { img.classList.add('is-out'); setTimeout(function () { img.src = src; img.classList.remove('is-out'); }, 200); }
      else img.src = src;
      img.alt = v.nombre + ' en color ' + v.colores[c].n.toLowerCase();
      $('#vCap').textContent = v.nombre + ' · ' + v.colores[c].n;
      $$('button', sw).forEach(function (b, k) { b.classList.toggle('is-on', k === c); });
    }
    if (v.colores.length > 1) v.colores.forEach(function (col, k) {
      var b = document.createElement('button');
      b.style.background = col.hex; b.setAttribute('aria-label', 'Color ' + col.n);
      b.addEventListener('click', function () { c = k; pinta(true); });
      sw.appendChild(b);
    });
    $('#vTurn').addEventListener('click', function () { a = (a + 1) % v.angulos.length; pinta(false); });
    pinta(false);
  }

  /* ---------- página de marca ---------- */
  function paginaMarca() {
    var slug = document.body.getAttribute('data-m') || new URLSearchParams(location.search).get('m');
    var x = MARCAS.filter(function (m) { return m.slug === slug; })[0] || MARCAS[0];
    if (!document.body.getAttribute('data-m')) document.title = x.nombre + ' eléctricas en Dos Hermanas · Motovatio';
    $('#bNombre').textContent = x.nombre;
    $('#bFrase').textContent = x.frase;
    $('#bTexto').textContent = x.texto;
    $('#bTags').innerHTML = (x.oficial ? '<span class="tag tag--green">Distribuidor oficial</span>' : '') +
      x.tipos.map(function (t) { return '<span class="tag">' + TIPOS[t].n + '</span>'; }).join('');
    var pregunta = 'Hola, quiero información de las ' + x.nombre + ' eléctricas que tenéis en Motovatio.';
    ['#bWa', '#mWa'].forEach(function (s) { $(s).href = wa(pregunta); $(s).target = '_blank'; $(s).rel = 'noopener'; });
    $('#mTitulo').textContent = x.modelos.length === 1 ? 'El modelo de ' + x.nombre : 'La gama ' + x.nombre;

    if (VISOR[x.slug]) visor($('#bVis'), VISOR[x.slug]);
    else {
      // El precio del pie es el de la moto de la foto, no el más bajo de la marca
      var estrella = x.modelos.filter(function (m) { return m.img; })[0], d = estrella ? (estrella.conAyudas || estrella.pvp) : 0;
      $('#bVis').innerHTML = estrella
        ? '<figure class="bfoto"><img src="' + estrella.img + '" width="900" height="675" alt="' + esc(nombreModelo(x, estrella)) + '"><figcaption><span>' + esc(nombreModelo(x, estrella)) + '</span>' + (d ? '<b>' + eur(d) + '</b>' : '') + '</figcaption></figure>'
        : '<div class="bmark" aria-hidden="true">' + esc(x.nombre.split(' ')[0]) + '</div>';
    }

    $('#models').innerHTML = x.modelos.map(function (mo, k) { return desplegableModelo(x, mo, k === 0); }).join('');
    var gn = $('#gastosNota'); if (gn && GASTOS) gn.textContent = ' A todos se les suman ' + eur(GASTOS.eur) + ' de ' + GASTOS.txt + '.';
    var an = $('#ayudasNota'); if (an) an.hidden = !x.modelos.some(function (m) { return m.conAyudas; });

    $('#others').innerHTML = MARCAS.filter(function (m) { return m.slug !== x.slug; })
      .map(function (m) { return '<a href="' + uMarca(m.slug) + '">' + esc(m.nombre) + '</a>'; }).join('') + '<a href="nanocars">Nanocars</a>';
  }

  /* ---------- portada: bloque grande de nanocars (Silence S04) ---------- */
  function nanoPortada() {
    var lista = TODOS.filter(function (m) { return m.tipo === 'nano'; });
    if (!$('#hnVis') || !lista.length) return;
    if (VISOR.nano) visor($('#hnVis'), VISOR.nano);
    var d = desde(lista);
    if (d) $('#hnDesde').innerHTML = 'Desde <b>' + eur(d) + '*</b>';
    $('#hnVers').innerHTML = lista.map(function (mo) {
      var pr = mo.conAyudas || mo.pvp;
      return '<a class="nver" href="' + uMoto(mo.id) + '">' +
        '<span class="nver__v">' + esc(mo.version) + '</span>' +
        '<b class="nver__t">' + esc(mo.titular || mo.n) + '</b>' +
        licHtml(mo) +
        '<span class="nver__p">' + (pr ? 'Desde ' + eur(pr) + (mo.conAyudas ? '*' : '') : 'Precio a consultar') + '</span>' +
      '</a>';
    }).join('') + '<p class="nhome__nota">*Precio final que publica Silence con el Plan Auto+ (sujeto a fondos) y la deducción del 15 % en el IRPF. ' + (GASTOS ? 'Se suman ' + eur(GASTOS.eur) + ' de ' + esc(GASTOS.txt) + '.' : '') + '</p>';
  }

  /* ---------- novedades y reservas anticipadas (window.NOVEDADES) ---------- */
  function paginaNovedades() {
    var N = window.NOVEDADES; if (!N || !$('#novs')) return;
    var tot = N.modelos.length;
    $('#novs').innerHTML = N.modelos.map(function (m, k) {
      var cols = (m.colores || []).map(function (c, i) {
        return '<button type="button" class="nv-sw' + (i ? '' : ' on') + '" data-img="' + c.img + '" data-c="' + esc(c.n) + '" aria-label="Ver en ' + esc(c.n) + '" title="' + esc(c.n) + '"><i style="background:' + (c.hex || '#888') + '"></i></button>';
      }).join('');
      var pr = m.precio ? m.precio.map(function (p) { return '<span><small>' + esc(p[0]) + '</small><b>' + eur(p[1]) + '</b></span>'; }).join('') : '<span><b class="nv-conf">Precio a confirmar</b></span>';
      var vis = m.img ? '<img src="' + m.img + '" width="900" height="600" alt="' + esc(m.nombre) + '" loading="lazy">' : '<p class="nv-sinfoto"><i></i>Foto próximamente</p>';
      return '<article class="nv-moto' + (k % 2 ? ' nv-moto--inv' : '') + '" id="' + m.id + '">' +
        '<div class="nv-moto__vis' + (m.img ? ' nv-moto__vis--foto' : '') + '"' + (m.img && m.fondo ? ' style="background:' + m.fondo + '"' : '') + '>' +
          '<span class="nv-moto__idx">' + ('0' + (k + 1)) + '<small>/ 0' + tot + '</small></span>' +
          '<span class="nv-moto__ghost" aria-hidden="true">' + esc(m.corto) + '</span>' +
          '<div class="nv-moto__img">' + vis + '</div>' +
          (cols ? '<div class="nv-sws"><span class="nv-sws__n">' + esc(m.colores[0].n) + '</span>' + cols + '</div>' : '') +
        '</div>' +
        '<div class="nv-moto__body">' +
          '<p class="nv-chip">' + esc(m.etiqueta) + '</p>' +
          '<h3>' + esc(m.nombre) + '</h3>' +
          '<p class="nv-moto__frase">' + esc(m.frase) + '</p>' +
          '<p class="nv-moto__txt">' + esc(m.txt) + '</p>' +
          '<div class="nv-moto__fila">' +
            '<div class="nv-pr"><em>' + esc(m.precioNota) + '</em><div>' + pr + '</div></div>' +
            '<div class="nv-llega"><em>Llegada</em><b>' + esc(m.llegada) + '</b></div>' +
          '</div>' +
          '<dl class="nv-datos">' + m.datos.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl>' +
          '<a class="nv-btn nv-btn--solid nv-btn--full" href="' + wa(m.wa) + '" target="_blank" rel="noopener">Reservar con ' + eur(N.senal) + '</a>' +
        '</div></article>';
    }).join('');
    $$('.nv-sw').forEach(function (b) {
      b.addEventListener('click', function () {
        var card = b.closest('.nv-moto'); var im = card.querySelector('.nv-moto__img img');
        im.style.opacity = 0; setTimeout(function () { im.src = b.getAttribute('data-img'); im.style.opacity = 1; }, 160);
        card.querySelector('.nv-sws__n').textContent = b.getAttribute('data-c');
        $$('.nv-sw', card).forEach(function (o) { o.classList.toggle('on', o === b); });
      });
    });
    if ($('#novAviso') && N.aviso) {
      var t = N.aviso, i = t.indexOf(':');
      $('#novAviso').innerHTML = '<i></i><span><b>' + esc(t.slice(0, i)) + '</b>' + esc(t.slice(i + 1)) + '</span>';
    }
  }

  /* ---------- página de nanocars: el Silence S04, una tarjeta por versión ---------- */
  function paginaNano() {
    var lista = TODOS.filter(function (m) { return m.tipo === 'nano'; });
    if (VISOR.nano) visor($('#nVis'), VISOR.nano);
    var d = desde(lista), dd = $('#nDesde');
    if (d && dd) dd.innerHTML = 'Desde <b>' + eur(d) + '*</b>';
    $('#nanos').innerHTML = lista.map(function (mo) {
      var x = mo.marca, nombre = nombreModelo(x, mo), filas = [];
      if (mo.vmax) filas.push(['Velocidad', mo.vmax + ' km/h']);
      if (autoTxt(mo)) filas.push(['Autonomía', autoTxt(mo)]);
      if (mo.potNom) filas.push(['Potencia nominal', num(mo.potNom) + ' kW (' + cv(mo.potNom) + ' CV)']);
      if (mo.potPico) filas.push(['Potencia pico', num(mo.potPico) + ' kW (' + cv(mo.potPico) + ' CV)']);
      if (mo.bat) filas.push(['Batería', mo.bat]);
      return '<article class="nano">' +
        (mo.img ? '<a class="nano__img" href="' + uMoto(mo.id) + '"><img src="' + mo.img + '" width="900" height="675" alt="' + esc(nombre) + '" loading="lazy"></a>' : '') +
        '<p class="nano__v">' + esc(mo.version) + '</p>' +
        '<h3><a href="' + uMoto(mo.id) + '">' + esc(mo.titular || mo.n) + '</a></h3>' +
        licHtml(mo) +
        '<p class="nano__d">' + esc(mo.destacado) + '</p>' +
        '<div class="nano__pr">' + (mo.conAyudas ? '<s>' + eur(mo.pvp) + '</s><b>' + eur(mo.conAyudas) + '*</b><small>' + esc(mo.ayudaTxt) + '</small>' : (mo.pvp ? '<small>Precio guía</small><b>' + eur(mo.pvp) + '</b>' : '<b class="prod__c">Precio a consultar</b>')) + gastosHtml() + '</div>' +
        '<dl class="nano__datos">' + filas.map(function (f) { return '<div><dt>' + f[0] + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl>' +
        '<p class="nano__carnet"><b>Carnet:</b> ' + esc(mo.carnet) + '</p>' +
        '<a class="btn btn--green" href="' + wa('Hola, quiero más información sobre el ' + nombre + '.') + '" target="_blank" rel="noopener">Pregúntanos por WhatsApp</a>' +
        '<a class="btn btn--line" href="' + uMoto(mo.id) + '">Ver la ficha completa</a>' +
      '</article>';
    }).join('');
    var ex = $('#nExtras'), extras = lista[0] && lista[0].extras;
    if (ex && extras) ex.innerHTML = extras.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('');
  }

  /* ---------- carteles de precio para la tienda (se imprimen; salen de los mismos datos que la web) ---------- */
  function paginaCarteles() {
    var sel = $('#cMarca'), caja = $('#carteles');
    sel.innerHTML = '<option value="">Todas las marcas</option>' + MARCAS.map(function (x) { return '<option value="' + x.slug + '">' + esc(x.nombre) + '</option>'; }).join('');
    function pinta() {
      var lista = TODOS.filter(function (m) { return !sel.value || m.marca.slug === sel.value; });
      caja.innerHTML = lista.map(function (mo) {
        var x = mo.marca, t = TIPOS[mo.tipo], l = LIC[mo.lic], datos = [];
        if (mo.vmax) datos.push(['Velocidad', mo.vmax + ' km/h']);
        if (mo.auto) datos.push(['Autonomía', (mo.autoHasta ? 'hasta ' : '') + mo.auto + ' km']);
        if (mo.potNom) datos.push(['Potencia nominal', num(mo.potNom) + ' kW · ' + cv(mo.potNom) + ' CV']);
        if (mo.potPico) datos.push(['Potencia pico', num(mo.potPico) + ' kW · ' + cv(mo.potPico) + ' CV']);
        if (!mo.potNom && !mo.potPico && mo.pot) datos.push(['Potencia', num(mo.pot) + ' kW · ' + cv(mo.pot) + ' CV']);
        return '<article class="cartel">' +
          '<header class="cartel__top"><img src="img/logo-horizontal.svg" alt="Motovatio"><span>' + (t ? t.corto : '') + (mo.extraible ? ' · batería extraíble' : '') + '</span></header>' +
          '<div class="cartel__mid">' +
            '<div class="cartel__nom"><p>' + esc(x.nombre) + '</p><h2>' + esc(mo.n) + '</h2>' + (mo.version ? '<small>' + esc(mo.version) + '</small>' : '') + '</div>' +
            '<div class="cartel__pr">' + (mo.pvp
              ? (mo.conAyudas ? '<s>' + eur(mo.pvp) + '</s><b>' + eur(mo.conAyudas) + '*</b><small>*' + esc(mo.ayudaTxt) + '</small>' : '<b>' + eur(mo.pvp) + '</b>') + (GASTOS ? '<em>' + esc(gastosTxt()) + '</em>' : '')
              : '<b class="cartel__c">Pregunta el precio</b>') + '</div>' +
          '</div>' +
          (l ? '<p class="cartel__lic">' + l[1] + '</p>' : '') +
          '<dl class="cartel__datos">' + datos.map(function (d) { return '<div><dt>' + d[0] + '</dt><dd>' + esc(d[1]) + '</dd></div>'; }).join('') + '</dl>' +
          '<footer class="cartel__pie"><span>' + esc(M.web) + '</span><span>WhatsApp ' + esc(M.whatsappTxt) + '</span></footer>' +
        '</article>';
      }).join('');
      $('#cCuantos').textContent = lista.length + (lista.length === 1 ? ' cartel' : ' carteles') + ' · ' + Math.ceil(lista.length / 2) + (Math.ceil(lista.length / 2) === 1 ? ' hoja' : ' hojas');
    }
    sel.addEventListener('change', pinta);
    $('#cPrint').addEventListener('click', function () { window.print(); });
    pinta();
  }


  /* ---------- comparador: hasta tres motos elegidas, guardadas en el navegador ---------- */
  var CMP = {
    max: 3,
    lee: function () {
      try { return (JSON.parse(localStorage.getItem('mv_cmp')) || []).filter(porId).slice(0, this.max); } catch (e) { return this.mem || []; }
    },
    guarda: function (ids) { this.mem = ids; try { localStorage.setItem('mv_cmp', JSON.stringify(ids)); } catch (e) {} },
    cambia: function (id) {
      var ids = this.lee(), k = ids.indexOf(id);
      if (k >= 0) ids.splice(k, 1); else { if (ids.length >= this.max) ids.shift(); ids.push(id); }
      this.guarda(ids); return ids;
    }
  };
  // bandeja flotante: aparece en cuanto se elige una moto para comparar
  function bandeja() {
    var caja = $('#cmpTray');
    if (!caja) { caja = document.createElement('div'); caja.id = 'cmpTray'; caja.className = 'tray'; document.body.appendChild(caja); }
    var ids = CMP.lee();
    $$('[data-cmp]').forEach(function (b) {
      var on = ids.indexOf(b.getAttribute('data-cmp')) >= 0;
      b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on);
      b.textContent = on ? 'En el comparador' : 'Comparar';
    });
    caja.hidden = !ids.length;
    if (!ids.length) return;
    caja.innerHTML = '<span class="tray__n">' + ids.map(function (id) { var m = porId(id); return '<i>' + esc(m.marca.nombre + ' ' + m.n) + '</i>'; }).join('') + '</span>' +
      (ids.length > 1 ? '<a class="btn btn--green btn--s" href="comparar?m=' + ids.join(',') + '">Comparar las ' + ids.length + '</a>' : '<span class="tray__f">Elige otra para comparar</span>') +
      '<button class="tray__x" id="cmpVacia" aria-label="Vaciar el comparador">Vaciar</button>';
    $('#cmpVacia').addEventListener('click', function () { CMP.guarda([]); bandeja(); });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cmp]');
    if (b) { CMP.cambia(b.getAttribute('data-cmp')); bandeja(); }
  });

  function numeros(mo) {
    var n = [];
    if (mo.vmax) n.push([mo.vmax, 'km/h']);
    if (mo.auto) n.push([mo.auto, 'km']);
    var pk = mo.potPico || mo.potNom || mo.pot;
    if (pk) n.push([num(pk), mo.potPico ? 'kW pico' : 'kW']);
    return n;
  }
  // tarjeta de moto para el catálogo y para «motos parecidas»
  function tarjeta(mo, extra) {
    var x = mo.marca, nombre = nombreModelo(x, mo), t = TIPOS[mo.tipo];
    return '<article class="prod mcard">' +
      '<a class="prod__img" href="' + uMoto(mo.id) + '"><img src="' + mo.img + '" width="900" height="675" alt="' + esc(nombre) + '" loading="lazy">' + (mo.extraible ? '<span class="prod__tag">Batería extraíble</span>' : '') + '</a>' +
      '<div class="prod__body">' +
        '<p class="prod__tipo">' + esc(x.nombre) + ' · ' + t.corto + '</p>' +
        '<h3><a href="' + uMoto(mo.id) + '">' + esc(mo.n) + (mo.version ? ' <small>' + esc(mo.version) + '</small>' : '') + '</a></h3>' +
        licHtml(mo) +
        '<ul class="mcard__nums">' + numeros(mo).map(function (n) { return '<li><b>' + n[0] + '</b>' + n[1] + '</li>'; }).join('') + '</ul>' +
        '<div class="prod__pr">' + (mo.pvp ? (mo.conAyudas ? '<s>' + eur(mo.pvp) + '</s><b>' + eur(mo.conAyudas) + '*</b>' : '<small>Precio guía</small><b>' + eur(mo.pvp) + '</b>') : '<small>Precio</small><b class="prod__c">a consultar</b>') + '</div>' +
        '<div class="mcard__cta"><a class="btn btn--navy" href="' + uMoto(mo.id) + '">Ver ficha</a>' +
          (extra || '<button class="cmpbtn" data-cmp="' + mo.id + '" aria-pressed="false">Comparar</button>') + '</div>' +
      '</div></article>';
  }
  function precioDe(mo) { return mo.conAyudas || mo.pvp || 0; }
  function esB(mo) { return mo.lic === 'B' || mo.lic === 'Bsolo'; }

  /* ---------- catálogo: todas las motos, con filtros que se quedan en la dirección ---------- */
  function paginaMotos() {
    var q = new URLSearchParams(location.search);
    var F = { carnet: q.get('carnet') || '', tipo: q.get('tipo') || '', marca: q.get('marca') || '', ext: q.get('ext') === '1', max: +q.get('max') || 0, orden: q.get('orden') || '' };
    var usados = ORDEN.filter(function (t) { return TODOS.some(function (mo) { return mo.tipo === t; }); });
    var chips = function (k, ops) {
      return '<div class="filt__g" data-k="' + k + '">' + ops.map(function (o) { return '<button class="fchip" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>';
    };
    $('#filt').innerHTML =
      '<div class="filt__fila"><span class="filt__et">Carnet</span>' + chips('carnet', [['', 'Cualquiera'], ['B', 'Carnet de coche o A1'], ['AM', 'AM · sin carnet de coche']]) + '</div>' +
      '<div class="filt__fila"><span class="filt__et">Tipo</span>' + chips('tipo', [['', 'Todo']].concat(usados.map(function (t) { return [t, TIPOS[t].n]; }))) + '</div>' +
      '<div class="filt__fila filt__fila--sel">' +
        '<label>Marca<select id="fMarca"><option value="">Todas</option>' + MARCAS.map(function (x) { return '<option value="' + x.slug + '">' + esc(x.nombre) + '</option>'; }).join('') + '</select></label>' +
        '<label>Precio hasta<select id="fMax"><option value="0">Sin tope</option>' + [2500, 4000, 6000, 8000, 12000].map(function (v) { return '<option value="' + v + '">' + eur(v) + '</option>'; }).join('') + '</select></label>' +
        '<label>Ordenar por<select id="fOrden"><option value="">Recomendadas</option><option value="precio">Precio, de menos a más</option><option value="vel">Más velocidad</option><option value="auto">Más autonomía</option><option value="pico">Más potencia pico</option></select></label>' +
        '<label class="filt__chk"><input type="checkbox" id="fExt"><span>Solo con batería extraíble</span></label>' +
      '</div>';
    function pinta() {
      var lista = TODOS.filter(function (mo) {
        if (F.carnet === 'B' && !esB(mo)) return false;
        if (F.carnet === 'AM' && mo.lic !== 'AM') return false;
        if (F.tipo && mo.tipo !== F.tipo) return false;
        if (F.marca && mo.marca.slug !== F.marca) return false;
        if (F.ext && !mo.extraible) return false;
        if (F.max && (!precioDe(mo) || precioDe(mo) > F.max)) return false;
        return true;
      });
      var caro = function (mo) { return precioDe(mo) || 1e9; };
      var orden = {
        '': function (a, b) { return ORDEN.indexOf(a.tipo) - ORDEN.indexOf(b.tipo) || caro(a) - caro(b); },
        precio: function (a, b) { return caro(a) - caro(b); },
        vel: function (a, b) { return (b.vmax || 0) - (a.vmax || 0); },
        auto: function (a, b) { return (b.auto || 0) - (a.auto || 0); },
        pico: function (a, b) { return (b.potPico || b.potNom || b.pot || 0) - (a.potPico || a.potNom || a.pot || 0); }
      };
      lista.sort(orden[F.orden] || orden['']);
      $('#cat').innerHTML = lista.map(function (mo) { return tarjeta(mo); }).join('');
      $('#catN').innerHTML = '<b>' + lista.length + '</b> ' + (lista.length === 1 ? 'moto' : 'motos') + (lista.length < TODOS.length ? ' de ' + TODOS.length : '');
      $('#catVacio').hidden = lista.length > 0;
      $$('.filt__g').forEach(function (g) {
        var k = g.getAttribute('data-k');
        $$('.fchip', g).forEach(function (c) { var on = c.getAttribute('data-v') === F[k]; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', on); });
      });
      $('#fMarca').value = F.marca; $('#fMax').value = String(F.max); $('#fOrden').value = F.orden; $('#fExt').checked = F.ext;
      var p = new URLSearchParams();
      ['carnet', 'tipo', 'marca', 'orden'].forEach(function (k) { if (F[k]) p.set(k, F[k]); });
      if (F.ext) p.set('ext', '1'); if (F.max) p.set('max', F.max);
      history.replaceState(null, '', 'motos' + (p.toString() ? '?' + p : ''));
      bandeja();
    }
    $('#filt').addEventListener('click', function (e) {
      var c = e.target.closest('.fchip'); if (!c) return;
      F[c.parentNode.getAttribute('data-k')] = c.getAttribute('data-v'); pinta();
    });
    $('#fMarca').addEventListener('change', function () { F.marca = this.value; pinta(); });
    $('#fMax').addEventListener('change', function () { F.max = +this.value; pinta(); });
    $('#fOrden').addEventListener('change', function () { F.orden = this.value; pinta(); });
    $('#fExt').addEventListener('change', function () { F.ext = this.checked; pinta(); });
    $('#catLimpia').addEventListener('click', function () { F = { carnet: '', tipo: '', marca: '', ext: false, max: 0, orden: F.orden }; pinta(); });
    pinta();
  }

  /* ---------- ficha de una moto: dirección propia para mandarla por WhatsApp o ponerla en un anuncio ---------- */
  function paginaMoto() {
    var mo = porId(document.body.getAttribute('data-id') || new URLSearchParams(location.search).get('id'));
    if (!mo) { location.replace('motos'); return; }
    var x = mo.marca, nombre = nombreModelo(x, mo), t = TIPOS[mo.tipo];
    if (!document.body.getAttribute('data-id')) document.title = nombre + ' · ' + (esB(mo) ? 'con carnet de coche' : 'con carnet AM') + ' · Motovatio';
    var back = $('#fBack'); back.href = '' + uMarca(x.slug); back.textContent = 'Todas las ' + x.nombre;
    $('#fTags').innerHTML = '<span class="tag tag--green">' + esc(x.nombre) + '</span><span class="tag">' + t.corto + '</span>' +
      (mo.version ? '<span class="tag">' + esc(mo.version) + '</span>' : '') + (mo.extraible ? '<span class="tag">Batería extraíble</span>' : '');
    $('#fNombre').textContent = mo.n;
    $('#fFrase').textContent = mo.destacado || '';
    $('#fLic').innerHTML = licHtml(mo);
    $('#fPrecio').innerHTML = (mo.pvp
      ? (mo.conAyudas ? '<s>' + eur(mo.pvp) + '</s><b>' + eur(mo.conAyudas) + '*</b><small>' + esc(mo.ayudaTxt) + '</small>' : '<small>Precio guía</small><b>' + eur(mo.pvp) + '</b>')
      : '<b class="fprecio__c">Precio a consultar</b>') + (GASTOS ? '<em>' + esc(gastosTxt()) + '</em>' : '');
    $('#fWa').href = wa('Hola, quiero más información sobre ' + art(mo) + nombre + '.');
    $('#fWa').target = '_blank'; $('#fWa').rel = 'noopener';
    $('#fPrueba').href = 'tel:+' + M.tel;
    $('#fVis').innerHTML = '<figure class="bfoto"><img src="' + mo.img + '" width="900" height="675" alt="' + esc(nombre) + '"></figure>';
    $('#fAyudas').hidden = !mo.conAyudas;

    var stats = [];
    if (mo.vmax) stats.push([mo.vmax, 'km/h', 'Velocidad máxima']);
    if (mo.auto) stats.push([mo.auto, 'km', 'Autonomía' + (mo.autoHasta ? ', hasta' : '')]);
    if (mo.potPico) stats.push([num(mo.potPico), 'kW', 'Potencia pico · ' + cv(mo.potPico) + ' CV']);
    if (mo.potNom) stats.push([num(mo.potNom), 'kW', 'Potencia nominal · ' + cv(mo.potNom) + ' CV']);
    else if (mo.pot) stats.push([num(mo.pot), 'kW', 'Potencia · ' + cv(mo.pot) + ' CV']);
    $('#fStats').innerHTML = stats.slice(0, 4).map(function (s) { return '<div class="stat"><b>' + s[0] + '<small>' + s[1] + '</small></b><span>' + s[2] + '</span></div>'; }).join('');
    $('#fFicha').innerHTML = fichaModelo(x, mo);
    $('#fCmp').setAttribute('data-cmp', mo.id);

    // parecidas: mismo carnet (en los nanocars, las otras versiones), primero las del mismo tipo y después por precio más cercano
    var mio = precioDe(mo) || 0;
    var cerca = TODOS.filter(function (m) { return m.id !== mo.id && (mo.tipo === 'nano' ? m.tipo === 'nano' : m.tipo !== 'nano' && esB(m) === esB(mo)); })
      .sort(function (a, b) { return (a.tipo === mo.tipo ? 0 : 1) - (b.tipo === mo.tipo ? 0 : 1) || Math.abs((precioDe(a) || 1e9) - mio) - Math.abs((precioDe(b) || 1e9) - mio); })
      .slice(0, 3);
    $('#fParecidas').innerHTML = cerca.map(function (m) { return tarjeta(m, '<a class="cmpbtn" href="comparar?m=' + mo.id + ',' + m.id + '">Comparar las dos</a>'); }).join('');
    $('#fParTit').textContent = mo.tipo === 'nano' ? 'Las otras versiones' : 'Parecidas, con el mismo carnet';
    bandeja();
  }

  /* ---------- comparador: dos o tres motos lado a lado; la dirección se puede compartir ---------- */
  function paginaComparar() {
    var q = new URLSearchParams(location.search).get('m');
    var ids = (q ? q.split(',') : CMP.lee()).filter(porId).filter(function (id, k, a) { return a.indexOf(id) === k; }).slice(0, CMP.max);
    var caja = $('#cmp');
    function opciones() {
      return '<option value="">Añadir una moto…</option>' + MARCAS.map(function (x) {
        return '<optgroup label="' + esc(x.nombre) + '">' + x.modelos.filter(function (m) { return ids.indexOf(m.id) < 0; })
          .map(function (m) { return '<option value="' + m.id + '">' + esc(m.n + (m.version ? ' ' + m.version : '')) + '</option>'; }).join('') + '</optgroup>';
      }).join('');
    }
    function pinta() {
      CMP.guarda(ids);
      history.replaceState(null, '', 'comparar' + (ids.length ? '?m=' + ids.join(',') : ''));
      var ms = ids.map(porId), hueco = ms.length < CMP.max;
      var cols = ms.length + (hueco ? 1 : 0);
      caja.style.setProperty('--n', cols);
      var cab = ms.map(function (mo) {
        var x = mo.marca;
        return '<div class="cmp__c">' +
          '<button class="cmp__x" data-quita="' + mo.id + '" aria-label="Quitar ' + esc(nombreModelo(x, mo)) + '">×</button>' +
          '<a href="' + uMoto(mo.id) + '"><img src="' + mo.img + '" width="900" height="675" alt="' + esc(nombreModelo(x, mo)) + '"></a>' +
          '<p class="cmp__m">' + esc(x.nombre) + '</p><h3><a href="' + uMoto(mo.id) + '">' + esc(mo.n) + '</a></h3>' + (mo.version ? '<small>' + esc(mo.version) + '</small>' : '') +
        '</div>';
      }).join('') + (hueco ? '<div class="cmp__c cmp__c--add"><span class="cmp__mas" aria-hidden="true">+</span><select id="cmpAdd" aria-label="Añadir una moto al comparador">' + opciones() + '</select></div>' : '');
      // cada fila: etiqueta, texto de cada moto y, si se puede medir, cuál gana
      var bat = function (mo) { var m = /^([\d,]+) kWh/.exec(mo.bat || ''); return m ? parseFloat(m[1].replace(',', '.')) : 0; };
      var filas = [
        ['Precio', function (mo) { return mo.pvp ? (mo.conAyudas ? eur(mo.conAyudas) + '*' : eur(mo.pvp)) : 'A consultar'; }, function (mo) { return precioDe(mo) ? -precioDe(mo) : null; }],
        ['Carnet', function (mo) { return LIC[mo.lic][1]; }],
        ['Tipo', function (mo) { return TIPOS[mo.tipo].corto; }],
        ['Velocidad', function (mo) { return mo.vmax ? mo.vmax + ' km/h' : '—'; }, function (mo) { return mo.vmax || null; }],
        ['Autonomía', function (mo) { return mo.auto ? (mo.autoHasta ? 'hasta ' : '') + mo.auto + ' km' : '—'; }, function (mo) { return mo.auto || null; }],
        ['Potencia nominal', function (mo) { return mo.potNom ? num(mo.potNom) + ' kW · ' + cv(mo.potNom) + ' CV' : (mo.pot ? num(mo.pot) + ' kW' : '—'); }],
        ['Potencia pico', function (mo) { return mo.potPico ? num(mo.potPico) + ' kW · ' + cv(mo.potPico) + ' CV' : '—'; }, function (mo) { return mo.potPico || null; }],
        ['Batería', function (mo) { return bat(mo) ? num(bat(mo)) + ' kWh' : '—'; }, function (mo) { return bat(mo) || null; }],
        ['Se saca para cargar', function (mo) { return mo.extraible ? 'Sí' : 'No, se enchufa la moto'; }]
      ];
      var cuerpo = filas.map(function (f) {
        var vals = f[2] ? ms.map(f[2]) : [], validos = vals.filter(function (v) { return v !== null; });
        var top = validos.length > 1 ? Math.max.apply(null, validos) : null;
        var hayDif = validos.some(function (v) { return v !== top; });
        return '<div class="cmp__f"><p class="cmp__et">' + f[0] + '</p><div class="cmp__v">' +
          ms.map(function (mo, k) { return '<span' + (top !== null && hayDif && vals[k] === top ? ' class="is-top"' : '') + '>' + esc(f[1](mo)) + '</span>'; }).join('') +
          (hueco ? '<span class="cmp__vacio"></span>' : '') + '</div></div>';
      }).join('');
      var pie = '<div class="cmp__f cmp__f--cta"><div class="cmp__v">' + ms.map(function (mo) {
        return '<span><a class="btn btn--green btn--s" href="' + wa('Hola, quiero más información sobre ' + art(mo) + nombreModelo(mo.marca, mo) + '.') + '" target="_blank" rel="noopener">Pregúntanos por WhatsApp</a></span>';
      }).join('') + (hueco ? '<span></span>' : '') + '</div></div>';
      caja.innerHTML = ms.length ? '<div class="cmp__cab">' + cab + '</div>' + cuerpo + pie : '<div class="cmp__cab">' + cab + '</div>';
      $('#cmpAyuda').textContent = ms.length < 2 ? (ms.length ? 'Añade otra moto para ver las diferencias.' : 'Elige dos o tres motos y las verás lado a lado.') : 'En verde, la que gana en cada dato.';
      $('#cmpNota').hidden = !ms.some(function (m) { return m.conAyudas; });
      var add = $('#cmpAdd');
      if (add) add.addEventListener('change', function () { if (this.value) { ids.push(this.value); pinta(); } });
    }
    caja.addEventListener('click', function (e) {
      var b = e.target.closest('[data-quita]');
      if (b) { ids.splice(ids.indexOf(b.getAttribute('data-quita')), 1); pinta(); }
    });
    pinta();
  }

  if (pagina === 'carteles') { paginaCarteles(); return; }
  cabecera();
  pie();
  if (pagina === 'home') { cuentaPrecio(); marquesina(); marcas(); destacadas(); nanoPortada(); frente125(); calculadora(); contacto(); }
  if (pagina === 'marca') paginaMarca();
  if (pagina === 'nano') { paginaNano(); contacto(); }
  if (pagina === 'novedades') { paginaNovedades(); contacto(); }
  if (pagina === 'motos') paginaMotos();
  if (pagina === 'moto') paginaMoto();
  if (pagina === 'comparar') paginaComparar();
  enlacesWa();
  aparicion();
})();
