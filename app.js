// STOCERS — interactive layer (plain JS build for production)
// Hero flame canvas · drifting embers · scroll reveals · forms · samples popup

const TWEAK_DEFAULTS = {
  palette: "oxblood",
  flameIntensity: 0.7,
  flameAccent: "ember",
  showEmbers: true,
  heroHeadline: "Your <em>fire</em> starts here."
};

const PALETTES = {
  bordeaux: { bordeaux: '#8F0009', deep: '#5C0008', dark: '#2E0005' },
  oxblood:  { bordeaux: '#6B0E18', deep: '#3E0810', dark: '#1F0306' },
  cherry:   { bordeaux: '#A8141E', deep: '#5C0A14', dark: '#33060B' },
  burgundy: { bordeaux: '#5C1622', deep: '#360D14', dark: '#1B060A' },
};

const ACCENTS = {
  ember:    { ember: '#FF6A2E', bright: '#FFB347' },
  amber:    { ember: '#F59E0B', bright: '#FCD34D' },
  vermilion:{ ember: '#E84A1A', bright: '#FF8C5C' },
  gold:     { ember: '#D4A340', bright: '#F2D472' },
};

// ─── Hero flame canvas ──────────────────────────────────────────────────────
function startFlameCanvas(canvas, opts = {}) {
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let intensity = opts.intensity || 1;
  let accent = opts.accent || ACCENTS.ember;

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const spawn = () => {
    const x = W * (0.15 + Math.random() * 0.7);
    const y = H + 10;
    const vy = -(1.2 + Math.random() * 1.8) * intensity;
    const vx = (Math.random() - 0.5) * 0.6;
    const r = 40 + Math.random() * 80;
    const life = 80 + Math.random() * 90;
    particles.push({ x, y, vx, vy, r, life, age: 0 });
  };

  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    const spawns = Math.max(1, Math.floor(4 * intensity));
    for (let i = 0; i < spawns; i++) spawn();

    ctx.globalCompositeOperation = 'lighter';

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx += (Math.random() - 0.5) * 0.08;
      p.age++;
      const t = p.age / p.life;
      if (t >= 1) { particles.splice(i, 1); continue; }

      const radius = p.r * (1 - Math.pow(2*t - 1, 2)) * 0.9 + 8;
      const alpha = (1 - t) * 0.32;
      const yFrac = 1 - (p.y / H);
      const ember = accent.ember;
      const bright = accent.bright;

      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
      grad.addColorStop(0, `${bright}`);
      grad.addColorStop(0.3, `${ember}`);
      grad.addColorStop(0.7, `rgba(126, 18, 31, ${0.5 * (1-t)})`);
      grad.addColorStop(1, 'rgba(74, 8, 16, 0)');

      ctx.globalAlpha = alpha * (yFrac * 0.5 + 0.5);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    raf = requestAnimationFrame(draw);
  };
  let raf = requestAnimationFrame(draw);

  return {
    setIntensity(v) { intensity = v; },
    setAccent(a) { accent = a; },
    stop() { cancelAnimationFrame(raf); },
  };
}

// ─── Embers ─────────────────────────────────────────────────────────────────
function buildEmbers(container, count = 18) {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const e = document.createElement('div');
    e.className = 'ember';
    const dur = 6 + Math.random() * 9;
    const delay = Math.random() * dur;
    const left = 5 + Math.random() * 90;
    const drift = (Math.random() - 0.5) * 180;
    const size = 1.5 + Math.random() * 3;
    e.style.left = left + '%';
    e.style.bottom = '0';
    e.style.width = size + 'px';
    e.style.height = size + 'px';
    e.style.animationDuration = dur + 's';
    e.style.animationDelay = -delay + 's';
    e.style.setProperty('--drift', drift + 'px');
    container.appendChild(e);
  }
}

// ─── Reveal on scroll ───────────────────────────────────────────────────────
function setupReveals() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
}

// ─── Apply defaults to CSS variables + flame ────────────────────────────────
let flameApi = null;

function applyTweaks(t) {
  const root = document.documentElement;
  const p = PALETTES[t.palette] || PALETTES.oxblood;
  const a = ACCENTS[t.flameAccent] || ACCENTS.ember;
  root.style.setProperty('--bordeaux', p.bordeaux);
  root.style.setProperty('--bordeaux-deep', p.deep);
  root.style.setProperty('--bordeaux-dark', p.dark);
  root.style.setProperty('--ember', a.ember);
  root.style.setProperty('--ember-bright', a.bright);
  root.style.setProperty('--flame-opacity', t.flameIntensity > 0.05 ? 1 : 0);

  if (flameApi) {
    flameApi.setIntensity(Math.max(0, t.flameIntensity));
    flameApi.setAccent(a);
  }

  const embersEl = document.querySelector('.embers');
  if (embersEl) embersEl.style.display = t.showEmbers ? 'block' : 'none';

  const headlineEl = document.querySelector('[data-headline]');
  if (headlineEl && typeof t.heroHeadline === 'string') {
    headlineEl.innerHTML = t.heroHeadline;
  }
}

// ─── Boot ───────────────────────────────────────────────────────────────────
function boot() {
  const canvas = document.querySelector('.hero__flames canvas');
  if (canvas) {
    flameApi = startFlameCanvas(canvas, {
      intensity: TWEAK_DEFAULTS.flameIntensity,
      accent: ACCENTS[TWEAK_DEFAULTS.flameAccent],
    });
  }

  const embers = document.querySelector('.embers');
  if (embers) buildEmbers(embers, 12);

  setupReveals();
  applyTweaks(TWEAK_DEFAULTS);

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  setupDealerForm();
  setupSamplesForm();
  setupMailLinks();
  setupSamplesPopup();
}

// shared email (base64 in two halves so it isn't in the source verbatim)
function stocersEmail() {
  return atob('c2FsZXNAc3Rv' + 'Y2Vycy5jb20=');
}
function stocersEndpoint() {
  return 'https://formsubmit.co/ajax/' + stocersEmail();
}

function wireForm(form, opts) {
  if (!form) return;
  const status = form.querySelector('[data-status]');
  const submit = form.querySelector('[data-submit]');
  const originalLabel = submit ? submit.textContent : '';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    if (submit) { submit.disabled = true; submit.textContent = 'Sending…'; }
    if (status) { status.removeAttribute('data-state'); status.textContent = ''; }

    const data = new FormData(form);
    const payload = opts.payload(data);
    payload._captcha = 'false';
    payload._honey = data.get('_honey') || '';

    try {
      const res = await fetch(stocersEndpoint(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && (json.success === 'true' || json.success === true)) {
        if (status) { status.setAttribute('data-state', 'success'); status.textContent = opts.success; }
        if (submit) submit.textContent = 'Sent';
        form.reset();
      } else {
        throw new Error(json.message || 'submit_failed');
      }
    } catch (err) {
      if (status) { status.setAttribute('data-state', 'error'); status.textContent = opts.error; }
      if (submit) { submit.disabled = false; submit.textContent = originalLabel; }
    }
  });
}

function setupDealerForm() {
  wireForm(document.getElementById('dealer-form'), {
    success: 'Thank you — we’ll be in touch shortly.',
    error: 'Something went wrong. Please try again or email us directly.',
    payload: (data) => {
      const company = data.get('company') || '';
      const name = data.get('name') || '';
      return {
        _subject: `Dealer enquiry — ${company || name}`,
        _template: 'table',
        Name: name,
        Company: company,
        Email: data.get('email') || '',
        Message: data.get('message') || '',
      };
    },
  });
}

function setupSamplesForm() {
  wireForm(document.getElementById('samples-form'), {
    success: 'Thank you — your free samples are on the way.',
    error: 'Something went wrong. Please try again or email us directly.',
    payload: (data) => {
      const company = data.get('company') || '';
      return {
        _subject: `FREE SAMPLES request — ${company}`,
        _template: 'table',
        Company: company,
        Email: data.get('email') || '',
        Request: 'Free samples + commercial proposal',
      };
    },
  });
}

function setupMailLinks() {
  const mail = stocersEmail();
  document.querySelectorAll('[data-mail], [data-mail-foot], [data-mail-pl]').forEach((el) => {
    const subject = el.hasAttribute('data-mail-pl')
      ? 'Private label enquiry — STOCERS'
      : 'Dealer enquiry — STOCERS';
    el.setAttribute('href', 'mailto:' + mail + '?subject=' + encodeURIComponent(subject));
  });
}

function setupSamplesPopup() {
  const popup = document.getElementById('samples');
  if (!popup) return;
  const KEY = 'stocers_samples_seen';

  const open = () => {
    popup.setAttribute('data-state', 'open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    popup.setAttribute('data-state', 'hidden');
    popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  popup.querySelectorAll('[data-close-samples]').forEach((el) => el.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.getAttribute('data-state') === 'open') close();
  });

  document.querySelectorAll('[data-open-samples]').forEach((el) => {
    el.addEventListener('click', (e) => { e.preventDefault(); open(); });
  });

  let seen = false;
  try { seen = localStorage.getItem(KEY) === '1'; } catch (e) {}
  if (!seen) {
    setTimeout(() => {
      if (popup.getAttribute('data-state') !== 'open') open();
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
    }, 10000);
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
