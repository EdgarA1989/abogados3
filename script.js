// ── Plantilla Abogados 3 · script.js ──

// ── Íconos SVG ───────────────────────────────────
const ICONS = {
  balance:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="8" x2="21" y2="8"/><path d="M5 8l-2 5h4l-2-5z"/><path d="M19 8l-2 5h4l-2-5z"/><line x1="9" y1="21" x2="15" y2="21"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
  building:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 11h2M13 11h2"/></svg>`,
  family:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  document:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  pen:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  shield:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  chart:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>`,
};

const INFO_ICONS = {
  phone: `<svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.07 5 2 2 0 012 2.82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  email: `<svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  map:   `<svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
};

// ── Imágenes por área ────────────────────────────
const AREA_IMAGES = {
  balance:   'img/derecho_civil.png',
  briefcase: 'img/derecho_laboral.png',
  building:  'img/derecho_comercial.png',
  family:    'img/derecho_familia.png',
  document:  'img/suseciones.png',
  pen:       'img/contratos.png',
  shield:    'img/daños.png',
  chart:     'img/empresas.png',
};

// ── Carga ────────────────────────────────────────
fetch('config.json')
  .then(r => r.json())
  .then(init)
  .catch(() => console.warn('Abrí con Live Server para cargar config.json'));

function init(c) {
  renderNav(c);
  renderHero(c);
  renderStats(c.stats);
  renderAreas(c.areas);
  renderNosotros(c);
  renderProceso(c.proceso);
  renderEquipo(c.equipo);
  renderExperiencia(c.experiencia);
  renderTestimonios(c.testimonios);
  renderContacto(c);
  renderFooter(c);
  renderMobileContact(c);
  initCanvas();
  initNav();
  initReveal();
  initForm();
  setYear();
}

// ── Renderizadores ────────────────────────────────

function renderNav(c) {
  setText('nav-nombre', c.estudio.nombre);
}

function renderHero(c) {
  setText('hero-eyebrow',  c.hero.eyebrow);
  setText('hero-titulo',   c.hero.titulo);
  setText('hero-subtitulo', c.hero.subtitulo);

  const badges = document.getElementById('hero-badges');
  if (badges && c.hero.badges) {
    badges.innerHTML = c.hero.badges.map(b =>
      `<li><span class="badge-dot" aria-hidden="true"></span>${b}</li>`
    ).join('');
  }

  document.title = `${c.estudio.nombre} · Estudio Jurídico · Buenos Aires`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content',
    `${c.estudio.nombre} — Estudio jurídico en Buenos Aires. ${c.hero.subtitulo}`
  );
}

function renderStats(stats) {
  const el = document.getElementById('stats-grid');
  if (!el) return;
  el.innerHTML = stats.map(s => `
    <div class="stat-item reveal" role="listitem">
      <span class="stat-num">${s.valor}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

function renderAreas(areas) {
  const el = document.getElementById('areas-grid');
  if (!el) return;
  el.innerHTML = areas.map(a => `
    <article class="area-card reveal">
      <div class="area-card__img">
        <img src="${AREA_IMAGES[a.icono] || AREA_IMAGES.document}"
             alt="${a.titulo}" loading="lazy">
      </div>
      <div class="area-card__body">
        <h3 class="area-card__title">${a.titulo}</h3>
        <p class="area-card__desc">${a.descripcion}</p>
        <a href="#contacto" class="area-card__link">Conocer más →</a>
      </div>
    </article>
  `).join('');
}

function renderNosotros(c) {
  const n = c.nosotros;
  setText('nv-year',   c.estudio.fundado);
  setText('nv-slogan', `"${n.slogan}"`);

  const textos = document.getElementById('nosotros-textos');
  if (textos) {
    textos.innerHTML = n.texto.map(p => `<p class="nosotros-p">${p}</p>`).join('');
  }

  const lista = document.getElementById('valores-list');
  if (lista) {
    lista.innerHTML = n.valores.map(v => `
      <li>
        <span class="valor-diamond" aria-hidden="true"></span>
        <span>${v}</span>
      </li>
    `).join('');
  }
}

function renderProceso(pasos) {
  const el = document.getElementById('proceso-list');
  if (!el) return;
  el.innerHTML = pasos.map(p => `
    <li class="paso-item reveal">
      <div class="paso-num" aria-hidden="true">${p.num}</div>
      <div class="paso-body">
        <h3 class="paso-title">${p.titulo}</h3>
        <p class="paso-desc">${p.desc}</p>
      </div>
    </li>
  `).join('');
}

function renderEquipo(equipo) {
  const el = document.getElementById('equipo-grid');
  if (!el) return;
  el.innerHTML = equipo.map(m => `
    <article class="team-card reveal">
      <div class="team-card__avatar" aria-label="Inicial de ${m.nombre}" aria-hidden="true">${m.inicial}</div>
      <div class="team-card__body">
        <h3 class="team-card__nombre">${m.nombre}</h3>
        <span class="team-card__cargo">${m.cargo}</span>
        <span class="team-card__esp">${m.especialidad}</span>
        <p class="team-card__desc">${m.descripcion}</p>
        <a href="mailto:${m.email}" class="team-card__email">${m.email}</a>
      </div>
    </article>
  `).join('');
}

function renderExperiencia(items) {
  const el = document.getElementById('exp-list');
  if (!el) return;
  el.innerHTML = items.map((item, i) => `
    <div class="exp-item reveal">
      <span class="exp-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <div>
        <h3 class="exp-title">${item.titulo}</h3>
        <p class="exp-desc-text">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderTestimonios(testimonios) {
  const el = document.getElementById('test-list');
  if (!el) return;
  el.innerHTML = testimonios.map(t => `
    <div class="test-item reveal">
      <div class="test-person">
        <div class="test-avatar" aria-hidden="true">${t.inicial}</div>
        <cite class="test-nombre">${t.nombre}</cite>
        <span class="test-area">${t.area}</span>
      </div>
      <div class="test-quote">
        <span class="test-mark" aria-hidden="true">"</span>
        <p class="test-texto">${t.texto}</p>
      </div>
    </div>
  `).join('');
}

function renderContacto(c) {
  const e   = c.estudio;
  const msg = encodeURIComponent('Hola, me gustaría hacer una consulta.');
  const wa  = `https://wa.me/${e.whatsapp}?text=${msg}`;

  const lista = document.getElementById('contacto-datos');
  if (lista) {
    lista.innerHTML = `
      <li class="info-item">${INFO_ICONS.phone}<div>
        <span class="info-label">Teléfono</span>
        <span class="info-val"><a href="tel:${e.telefono.replace(/\s|-/g,'')}">${e.telefono}</a></span>
      </div></li>
      <li class="info-item">${INFO_ICONS.email}<div>
        <span class="info-label">Email</span>
        <span class="info-val"><a href="mailto:${e.email}">${e.email}</a></span>
      </div></li>
      <li class="info-item">${INFO_ICONS.map}<div>
        <span class="info-label">Dirección</span>
        <span class="info-val">${e.direccion}</span>
      </div></li>
      <li class="info-item">${INFO_ICONS.clock}<div>
        <span class="info-label">Horario</span>
        <span class="info-val">${e.horario}</span>
      </div></li>
    `;
  }

  setText('info-mat', `Matrícula: ${e.matricula}`);
  setHref('contacto-wa', wa);
  setHref('cta-wa',      wa);
  setHref('wa-float',    wa);

  setHref('footer-linkedin',  e.linkedin);
  setHref('footer-instagram', e.instagram);

  const footerC = document.getElementById('footer-contacto');
  if (footerC) {
    footerC.innerHTML = `
      <li>${e.telefono}</li>
      <li>${e.email}</li>
      <li>${e.direccion}</li>
      <li>${e.horario}</li>
    `;
  }
}

function renderFooter(c) {
  setText('footer-nombre',   c.estudio.nombre);
  setText('footer-nombre-2', c.estudio.nombre);
}

// ── Canvas animado ────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  // Respetar prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) { canvas.style.display = 'none'; return; }

  const isMobile = () => window.innerWidth < 768;
  let particles  = [];
  let animId;
  let lastTime   = 0;
  const FPS      = 30;
  const INTERVAL = 1000 / FPS;
  // Colores: dorado champagne y blanco muy suave
  const GOLD  = [201, 162, 39];
  const WHITE = [255, 255, 255];

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function makeParticle() {
    const isGold = Math.random() > 0.3;
    return {
      x:      Math.random() * canvas.width,
      y:      Math.random() * canvas.height,
      vx:     (Math.random() - 0.5) * (isMobile() ? 0.2 : 0.3),
      vy:     (Math.random() - 0.5) * (isMobile() ? 0.2 : 0.3),
      r:      Math.random() * 1.3 + 0.4,
      a:      Math.random() * 0.45 + 0.08,
      isGold,
    };
  }

  function spawnParticles() {
    const count = isMobile() ? 22 : 55;
    particles = Array.from({ length: count }, makeParticle);
  }

  function draw(timestamp) {
    animId = requestAnimationFrame(draw);

    const elapsed = timestamp - lastTime;
    if (elapsed < INTERVAL) return;
    lastTime = timestamp - (elapsed % INTERVAL);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mobile   = isMobile();
    const maxDist  = mobile ? 0 : 120;

    // Líneas entre partículas cercanas (solo desktop)
    if (maxDist > 0) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.11;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${GOLD.join(',')},${alpha})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    // Dibujar partículas
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -4 || p.x > canvas.width  + 4) p.vx *= -1;
      if (p.y < -4 || p.y > canvas.height + 4) p.vy *= -1;

      const [r, g, b] = p.isGold ? GOLD : WHITE;
      const alpha     = p.isGold ? p.a : p.a * 0.35;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
      ctx.fill();
    }
  }

  resize();
  spawnParticles();
  animId = requestAnimationFrame(draw);

  // Resize con debounce
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cancelAnimationFrame(animId);
      resize();
      spawnParticles();
      animId = requestAnimationFrame(draw);
    }, 200);
  }, { passive: true });
}

// ── Nav: scroll + panel mobile ────────────────────
function initNav() {
  const header   = document.getElementById('header');
  const toggle   = document.getElementById('nav-toggle');
  const panel    = document.getElementById('nav-panel');
  const backdrop = document.getElementById('nav-backdrop');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  function openPanel() {
    panel.classList.add('open');
    toggle.classList.add('open');
    backdrop.classList.add('visible');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    panel.classList.remove('open');
    toggle.classList.remove('open');
    backdrop.classList.remove('visible');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    document.body.style.overflow = '';
  }

  toggle?.addEventListener('click', () => {
    panel?.classList.contains('open') ? closePanel() : openPanel();
  });

  backdrop?.addEventListener('click', closePanel);

  panel?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closePanel);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel?.classList.contains('open')) closePanel();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closePanel();
  }, { passive: true });
}

function renderMobileContact(c) {
  const el = document.getElementById('nav-panel-contact');
  if (!el) return;
  const { telefono, whatsapp, email, horario } = c.estudio;
  el.innerHTML = `
    <div class="npc-item">${INFO_ICONS.phone}<span>${telefono}</span></div>
    <div class="npc-item">${INFO_ICONS.email}<a href="mailto:${email}">${email}</a></div>
    <div class="npc-item">${INFO_ICONS.clock}<span>${horario}</span></div>
  `;
}

// ── Reveal on scroll ──────────────────────────────
function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Formulario ────────────────────────────────────
function initForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm()) return;

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled    = true;
    btn.textContent = 'Enviando…';

    setTimeout(() => {
      form.reset();
      clearErrors();
      btn.disabled    = false;
      btn.textContent = 'Enviar consulta';
      success.textContent = '¡Consulta enviada! Nos comunicaremos a la brevedad. Gracias por contactarnos.';
      success.classList.add('visible');
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => success.classList.remove('visible'), 8000);
    }, 1000);
  });

  form.querySelectorAll('.form-input, .check-input').forEach(el => {
    el.addEventListener('change', () => clearOneError(el));
    el.addEventListener('input',  () => clearOneError(el));
  });
}

function validateForm() {
  let ok = true;
  const nombre     = document.getElementById('nombre');
  const email      = document.getElementById('email');
  const area       = document.getElementById('area-form');
  const mensaje    = document.getElementById('mensaje');
  const privacidad = document.getElementById('privacidad');

  if (!nombre.value.trim()) {
    setError(nombre, 'err-nombre', 'Por favor ingresá tu nombre completo.');
    ok = false;
  } else clearError(nombre, 'err-nombre');

  if (!email.value.trim()) {
    setError(email, 'err-email', 'Por favor ingresá tu correo electrónico.');
    ok = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    setError(email, 'err-email', 'El correo electrónico no tiene un formato válido.');
    ok = false;
  } else clearError(email, 'err-email');

  if (!area.value) {
    setError(area, 'err-area', 'Por favor seleccioná un área de consulta.');
    ok = false;
  } else clearError(area, 'err-area');

  if (!mensaje.value.trim() || mensaje.value.trim().length < 20) {
    setError(mensaje, 'err-mensaje', 'Por favor describí tu caso (mínimo 20 caracteres).');
    ok = false;
  } else clearError(mensaje, 'err-mensaje');

  if (!privacidad.checked) {
    const errEl = document.getElementById('err-privacidad');
    if (errEl) errEl.textContent = 'Debés aceptar la política de privacidad para continuar.';
    ok = false;
  } else {
    const errEl = document.getElementById('err-privacidad');
    if (errEl) errEl.textContent = '';
  }

  return ok;
}

function setError(input, errId, msg) {
  input.classList.add('error');
  const el = document.getElementById(errId);
  if (el) el.textContent = msg;
}

function clearError(input, errId) {
  input.classList.remove('error');
  const el = document.getElementById(errId);
  if (el) el.textContent = '';
}

function clearOneError(input) {
  input.classList.remove('error');
  const map = { nombre: 'err-nombre', email: 'err-email', 'area-form': 'err-area', mensaje: 'err-mensaje', privacidad: 'err-privacidad' };
  const errId = map[input.id];
  if (errId) {
    const el = document.getElementById(errId);
    if (el) el.textContent = '';
  }
}

function clearErrors() {
  document.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));
  document.querySelectorAll('.form-error').forEach(e => e.textContent = '');
}

// ── Footer año ────────────────────────────────────
function setYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ── Helpers ───────────────────────────────────────
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
function setHref(id, href) {
  const el = document.getElementById(id);
  if (el) el.href = href;
}
