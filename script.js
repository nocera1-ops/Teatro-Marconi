/* ==========================================================================
   Sociedad Italiana de Socorros Mutuos (Gálvez) — interacciones
   Primera sección: header + hero. JavaScript vanilla, sin dependencias.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initSearchToggle();
  initPageSearch();
  initLangSwitch();
  initMobileNav();
  initActiveNavLink();
});

/* ==========================================================================
   Buscador (mostrar / ocultar)
   ========================================================================== */
function initSearchToggle() {
  const toggle = document.getElementById('search-toggle');
  const bar = document.getElementById('search-bar');
  if (!toggle || !bar) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    bar.hidden = isOpen;
    if (!isOpen) {
      const input = bar.querySelector('input');
      if (input) input.focus();
    }
  });
}

/* ==========================================================================
   Búsqueda real dentro de toda la página
   ========================================================================== */
function initPageSearch() {
  const form = document.getElementById('site-search-form');
  const input = document.getElementById('site-search-input');
  const status = document.getElementById('search-status');
  const root = document.getElementById('contenido');
  if (!form || !input || !root) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();

    clearHighlights(root);

    if (!query) {
      if (status) status.textContent = '';
      return;
    }

    const { count, firstMark } = highlightMatches(root, query);

    if (status) {
      status.textContent = count > 0
        ? `${count} resultado${count === 1 ? '' : 's'} encontrado${count === 1 ? '' : 's'}.`
        : 'No se encontraron resultados.';
    }

    if (firstMark) {
      firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

function clearHighlights(root) {
  root.querySelectorAll('mark.search-hit').forEach((mark) => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightMatches(root, query) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const tag = node.parentNode && node.parentNode.nodeName;
      if (['SCRIPT', 'STYLE', 'MARK', 'TITLE'].includes(tag)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const regex = new RegExp(escapeRegExp(query), 'gi');
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) textNodes.push(node);

  let count = 0;
  let firstMark = null;

  textNodes.forEach((textNode) => {
    const text = textNode.nodeValue;
    regex.lastIndex = 0;
    if (!regex.test(text)) return;
    regex.lastIndex = 0;

    const frag = document.createDocumentFragment();
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text))) {
      if (match.index > lastIndex) {
        frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }
      const mark = document.createElement('mark');
      mark.className = 'search-hit';
      mark.textContent = match[0];
      frag.appendChild(mark);
      if (!firstMark) firstMark = mark;
      count += 1;
      lastIndex = match.index + match[0].length;
      if (match[0].length === 0) regex.lastIndex += 1;
    }

    if (lastIndex < text.length) {
      frag.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    textNode.parentNode.replaceChild(frag, textNode);
  });

  return { count, firstMark };
}

/* ==========================================================================
   Selector de idioma (Español / English / Italiano)
   ========================================================================== */
const translations = {
  es: {
    'nav.historia': 'Historia',
    'nav.consulado': 'Consulado',
    'nav.cultura': 'Cultura',
    'nav.colabora': 'Colaborá',
    'hero.title1': 'Cultura.',
    'hero.title2': 'Comunidad.',
    'hero.title3': 'Identidad.',
    'hero.lede': 'Desde 1910 acompañamos a familias de origen italiano en Gálvez y la región: trámites consulares, clases de idioma, encuentros culturales y una red de socios que se cuida entre sí.',
    'hero.button': 'Nuestra historia →',
  },
  en: {
    'nav.historia': 'History',
    'nav.consulado': 'Consulate',
    'nav.cultura': 'Culture',
    'nav.colabora': 'Get involved',
    'hero.title1': 'Culture.',
    'hero.title2': 'Community.',
    'hero.title3': 'Identity.',
    'hero.lede': 'Since 1910 we have supported Italian-descendant families in Gálvez and the region: consular paperwork, language classes, cultural gatherings and a network of members who look out for one another.',
    'hero.button': 'Our history →',
  },
  it: {
    'nav.historia': 'Storia',
    'nav.consulado': 'Consolato',
    'nav.cultura': 'Cultura',
    'nav.colabora': 'Collabora',
    'hero.title1': 'Cultura.',
    'hero.title2': 'Comunità.',
    'hero.title3': 'Identità.',
    'hero.lede': 'Dal 1910 accompagniamo le famiglie di origine italiana a Gálvez e nella regione: pratiche consolari, corsi di lingua, incontri culturali e una rete di soci che si prende cura gli uni degli altri.',
    'hero.button': 'La nostra storia →',
  },
};

const flagMarkup = {
  es: '<svg viewBox="0 0 30 20" width="26" height="18"><rect width="30" height="20" fill="#74ACDF"/><rect y="6.66" width="30" height="6.66" fill="#FFFFFF"/><circle cx="15" cy="10" r="2.6" fill="#F6B40E" stroke="#85340A" stroke-width="0.4"/></svg>',
  en: '<svg viewBox="0 0 30 20" width="26" height="18"><rect width="30" height="20" fill="#1A2B5C"/><rect y="8.5" width="30" height="3" fill="#fff"/><rect x="13.5" width="3" height="20" fill="#fff"/><rect y="9.3" width="30" height="1.4" fill="#C8102E"/><rect x="14.3" width="1.4" height="20" fill="#C8102E"/></svg>',
  it: '<svg viewBox="0 0 30 20" width="26" height="18"><rect width="10" height="20" fill="#008C45"/><rect x="10" width="10" height="20" fill="#F4F5F0"/><rect x="20" width="10" height="20" fill="#CD212A"/></svg>',
};

const htmlLang = { es: 'es-AR', en: 'en', it: 'it' };

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  const flagSlot = document.getElementById('lang-flag');
  if (flagSlot && flagMarkup[lang]) flagSlot.innerHTML = flagMarkup[lang];

  document.documentElement.lang = htmlLang[lang] || lang;
  document.documentElement.setAttribute('data-lang', lang);
}

function initLangSwitch() {
  const toggle = document.getElementById('lang-toggle');
  const menu = document.getElementById('lang-menu');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };
  const openMenu = () => {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  };

  toggle.addEventListener('click', () => {
    menu.hidden ? openMenu() : closeMenu();
  });

  menu.querySelectorAll('button[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.lang);
      closeMenu();
    });
  });

  document.addEventListener('click', (event) => {
    if (!menu.hidden && !menu.contains(event.target) && event.target !== toggle && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      toggle.focus();
    }
  });
}

/* ==========================================================================
   Menú móvil a pantalla completa
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const close = document.getElementById('nav-close');
  const list = document.getElementById('nav-list');
  if (!toggle || !list) return;

  const closeNav = () => {
    list.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (close) close.classList.remove('is-visible');
    document.body.style.overflow = '';
  };

  const openNav = () => {
    list.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (close) close.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  };

  toggle.addEventListener('click', () => {
    list.classList.contains('is-open') ? closeNav() : openNav();
  });

  if (close) close.addEventListener('click', closeNav);

  list.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 760px)').matches) closeNav();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && list.classList.contains('is-open')) {
      closeNav();
      toggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 761px)').matches) closeNav();
  });
}

/* ==========================================================================
   Resaltar el link activo del nav según la sección visible
   (queda listo para cuando se agreguen las próximas secciones)
   ========================================================================== */
function initActiveNavLink() {
  const navLinks = Array.from(document.querySelectorAll('#nav-list a'));
  if (!navLinks.length || !('IntersectionObserver' in window)) return;

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
