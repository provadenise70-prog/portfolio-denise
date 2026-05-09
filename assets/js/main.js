// =============================================
// main.js — Portfolio Denise La Greca
// =============================================

// ── Navbar sticky shadow ──────────────────────
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── Scroll reveal ────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Contact form validation & submit ─────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Simulate send (replace with fetch() to your backend)
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Invio in corso…';

    setTimeout(() => {
      form.reset();
      form.classList.remove('was-validated');
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-regular fa-paper-plane"></i> Invia messaggio';
      const msg = document.getElementById('successMsg');
      if (msg) {
        msg.style.display = 'block';
        msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => { msg.style.display = 'none'; }, 6000);
      }
    }, 1200);
  });
}

// ── Active nav link highlight ─────────────────
const path = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href && link.href.includes(path) && path !== '/') {
    link.classList.add('active');
  }
});

