// ─── NAVBAR ACTIVE STATE ──────────────────────────
(function setActiveNav() {
  const current = location.pathname.split('/').pop() || '/home.html';
  document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.includes(current) || (current === '/home.html' && href.includes('home'))) {
      link.classList.add('active');
    }
  });
})();

// ─── MOBILE HAMBURGER ────────────────────────────
function initHamburger() {
  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
      }
    });
  }

  if (btn && sidebar && overlay) {
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }
}

// ─── COPY CODE BUTTONS ───────────────────────────
function initCopyButtons() {
  document.querySelectorAll('.code-copy').forEach(btn => {
    btn.addEventListener('click', function () {
      const block = this.closest('.code-block').querySelector('.code-body');
      const text = block.innerText || block.textContent;
      navigator.clipboard.writeText(text.trim()).then(() => {
        const orig = this.textContent;
        this.textContent = '✓ Copied!';
        this.style.color = 'var(--accent-green)';
        this.style.borderColor = 'var(--accent-green)';
        setTimeout(() => {
          this.textContent = orig;
          this.style.color = '';
          this.style.borderColor = '';
        }, 1800);
      });
    });
  });
}

// ─── SCROLL REVEAL ───────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeUp 0.5s ease both';
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.chapter-card, .code-block, .info-box, .video-container').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ─── TERMINAL TYPEWRITER ─────────────────────────
function initTypewriter() {
  const lines = document.querySelectorAll('[data-type]');
  if (!lines.length) return;
  let delay = 400;
  lines.forEach(line => {
    const text = line.getAttribute('data-type');
    const speed = parseInt(line.getAttribute('data-speed') || '40');
    line.textContent = '';
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        line.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    delay += text.length * speed + 300;
  });
}

// ─── INIT ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initCopyButtons();
  initScrollReveal();
  initTypewriter();
});
