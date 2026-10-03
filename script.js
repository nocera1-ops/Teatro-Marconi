/* ===== Configuración: reemplazar por los datos reales ===== */
const SITE = {
  fb: "https://www.facebook.com/",
  ig: "https://www.instagram.com/sociedaditalianagalvez/"
};

const LOCALES = { es: "es-AR", en: "en-US", it: "it-IT" };

/* ===== Textos de la interfaz ===== */
const I18N = {
  es: {
    skip: "Ir al contenido",
    orgName: "Sociedad Italiana de Socorros Mutuos",
    navHistory: "Historia", navConsulate: "Consulado", navCulture: "Cultura", navCollab: "Colaborá",
    heroTitle: 'Creemos un mundo donde <em>nadie</em> quede atrás.',
    heroText: "Sumate a nuestra causa y trabajemos juntos por el respeto y la igualdad de todos los seres humanos.",
    heroBtn: "Nuestra historia →",
    tSug: "Sugerencias", tHist: "Historia", tCons: "Consulado y voto electoral", tNoti: "Noticias",
    tSobre: "Sobre nosotros", tColab: "Colaborá", tConv: "Convertite en socio", tCult: "Cultura italiana",
    newsEyebrow: "Desde Italia", newsTitle: "Noticias de Italia", filterAll: "Todas",
    newsNote: "Titulares de ejemplo. Para noticias en tiempo real, conectar los feeds RSS de cada medio.",
    readIn: "Leer en",
    socialEyebrow: "Comunidad", socialTitle: "Seguinos en redes",
    fbTitle: "Facebook", igTitle: "Instagram", viewPage: "Ver página →", followUs: "Seguinos →",
    comments: "comentarios", author: "Sociedad Italiana",
    footAbout: "Trabajamos desde hace generaciones por la comunidad ítalo-argentina.",
    fNav: "Navegación", fHist: "Historia", fCons: "Consulado y voto", fCult: "Cultura italiana",
    fNews: "Noticias", fAbout: "Sobre nosotros", fContact: "Contacto",
    fAddress: "Dirección de la sociedad, Ciudad, Argentina", fPhone: "Tel: (011) 0000-0000",
    fFollow: "Seguinos", fSugg: "Dejá una sugerencia",
    copy: "© 2026 Sociedad Italiana de Socorros Mutuos. Todos los derechos reservados.",
    langLabel: "Idioma"
  },
  en: {
    skip: "Skip to content",
    orgName: "Italian Mutual Aid Society",
    navHistory: "History", navConsulate: "Consulate", navCulture: "Culture", navCollab: "Get involved",
    heroTitle: 'We believe in a world where <em>no one</em> is left behind.',
    heroText: "Join us in working for respect and equality for all human beings.",
    heroBtn: "Our story →",
    tSug: "Suggestions", tHist: "History", tCons: "Consulate and electoral vote", tNoti: "News",
    tSobre: "About us", tColab: "Get involved", tConv: "Become a member", tCult: "Italian culture",
    newsEyebrow: "From Italy", newsTitle: "News from Italy", filterAll: "All",
    newsNote: "Sample headlines. To show live news, connect each outlet's RSS feed.",
    readIn: "Read on",
    socialEyebrow: "Community", socialTitle: "Follow us on social media",
    fbTitle: "Facebook", igTitle: "Instagram", viewPage: "Visit page →", followUs: "Follow us →",
    comments: "comments", author: "Italian Society",
    footAbout: "For generations we have worked for the Italian-Argentine community.",
    fNav: "Menu", fHist: "History", fCons: "Consulate and vote", fCult: "Italian culture",
    fNews: "News", fAbout: "About us", fContact: "Contact",
    fAddress: "Society address, City, Argentina", fPhone: "Phone: (011) 0000-0000",
    fFollow: "Follow us", fSugg: "Leave a suggestion",
    copy: "© 2026 Italian Mutual Aid Society. All rights reserved.",
    langLabel: "Language"
  },
  it: {
    skip: "Vai al contenuto",
    orgName: "Società Italiana di Mutuo Soccorso",
    navHistory: "Storia", navConsulate: "Consolato", navCulture: "Cultura", navCollab: "Collabora",
    heroTitle: 'Crediamo in un mondo dove <em>nessuno</em> venga lasciato indietro.',
    heroText: "Unisciti a noi per lavorare insieme al rispetto e all'uguaglianza di tutti gli esseri umani.",
    heroBtn: "La nostra storia →",
    tSug: "Suggerimenti", tHist: "Storia", tCons: "Consolato e voto elettorale", tNoti: "Notizie",
    tSobre: "Chi siamo", tColab: "Collabora", tConv: "Diventa socio", tCult: "Cultura italiana",
    newsEyebrow: "Dall'Italia", newsTitle: "Notizie dall'Italia", filterAll: "Tutte",
    newsNote: "Titoli di esempio. Per notizie in tempo reale, collegare i feed RSS di ogni testata.",
    readIn: "Leggi su",
    socialEyebrow: "Comunità", socialTitle: "Seguici sui social",
    fbTitle: "Facebook", igTitle: "Instagram", viewPage: "Vai alla pagina →", followUs: "Seguici →",
    comments: "commenti", author: "Società Italiana",
    footAbout: "Da generazioni lavoriamo per la comunità italo-argentina.",
    fNav: "Menu", fHist: "Storia", fCons: "Consolato e voto", fCult: "Cultura italiana",
    fNews: "Notizie", fAbout: "Chi siamo", fContact: "Contatti",
    fAddress: "Indirizzo della società, Città, Argentina", fPhone: "Tel: (011) 0000-0000",
    fFollow: "Seguici", fSugg: "Lascia un suggerimento",
    copy: "© 2026 Società Italiana di Mutuo Soccorso. Tutti i diritti riservati.",
    langLabel: "Lingua"
  }
};

/* ===== Contenido (cada texto tiene su versión en cada idioma) ===== */
const NEWS = [
  { src:"ANSA", cls:"ansa", url:"https://www.ansa.it", date:"2026-10-02",
    title:{ es:"Italia refuerza los programas de cooperación con América Latina",
            en:"Italy strengthens cooperation programs with Latin America",
            it:"L'Italia rafforza i programmi di cooperazione con l'America Latina" },
    text:{ es:"Roma anunció nuevos intercambios académicos y culturales con países de la región.",
           en:"Rome announced new academic and cultural exchanges with countries in the region.",
           it:"Roma ha annunciato nuovi scambi accademici e culturali con i paesi della regione." } },
  { src:"Corriere", cls:"corr", url:"https://www.corriere.it", date:"2026-10-02",
    title:{ es:"El turismo de otoño supera las previsiones",
            en:"Autumn tourism beats expectations",
            it:"Il turismo autunnale supera le previsioni" },
    text:{ es:"Las ciudades de arte recibieron más visitantes extranjeros.",
           en:"Art cities welcomed more foreign visitors.",
           it:"Le città d'arte hanno accolto più visitatori stranieri." } },
  { src:"Repubblica", cls:"rep", url:"https://www.repubblica.it", date:"2026-10-01",
    title:{ es:"Elecciones regionales: así se perfila el escenario",
            en:"Regional elections: the outlook so far",
            it:"Elezioni regionali: lo scenario che si delinea" },
    text:{ es:"Un resumen de las principales propuestas y alianzas.",
           en:"A summary of the main proposals and alliances.",
           it:"Una sintesi delle principali proposte e alleanze." } },
  { src:"Il Post", cls:"ilp", url:"https://www.ilpost.it", date:"2026-09-30",
    title:{ es:"La gastronomía italiana, entre tradición e innovación",
            en:"Italian cuisine between tradition and innovation",
            it:"La cucina italiana tra tradizione e innovazione" },
    text:{ es:"Nuevas generaciones reinterpretan recetas históricas.",
           en:"New generations are reinventing historic recipes.",
           it:"Le nuove generazioni reinterpretano le ricette storiche." } }
];

const FB_POSTS = [
  { date:"2026-10-01", likes:128, comments:14,
    text:{ es:"¡Gracias a todos los que nos acompañaron en la charla sobre ciudadanía italiana!",
           en:"Thank you to everyone who joined our talk on Italian citizenship!",
           it:"Grazie a tutti coloro che hanno partecipato all'incontro sulla cittadinanza italiana!" } },
  { date:"2026-09-26", likes:214, comments:31,
    text:{ es:"Este fin de semana celebramos la cultura italiana con música, comida y actividades para toda la familia.",
           en:"This weekend we celebrate Italian culture with music, food and activities for the whole family.",
           it:"Questo fine settimana festeggiamo la cultura italiana con musica, cibo e attività per tutta la famiglia." } },
  { date:"2026-09-20", likes:87, comments:9,
    text:{ es:"Recordá que la inscripción para votar desde el exterior está abierta. Consultá los requisitos en nuestra sede.",
           en:"Reminder: registration to vote from abroad is open. Check the requirements at our office.",
           it:"Ricordiamo che le iscrizioni per votare dall'estero sono aperte. Verifica i requisiti presso la nostra sede." } }
];

const IG_POSTS = [
  { g:"linear-gradient(135deg,#00703a,#8fd3a8)", caption:{ es:"Tarde de cine italiano", en:"Italian film afternoon", it:"Pomeriggio di cinema italiano" } },
  { g:"linear-gradient(135deg,#b3002c,#ffb3c5)", caption:{ es:"Clases de idioma", en:"Language classes", it:"Corsi di lingua" } },
  { g:"linear-gradient(135deg,#d9be7e,#f4e7c5)", caption:{ es:"Colecta solidaria", en:"Solidarity drive", it:"Raccolta solidale" } },
  { g:"linear-gradient(135deg,#5b1020,#c2415a)", caption:{ es:"Vino y tradición", en:"Wine and tradition", it:"Vino e tradizione" } },
  { g:"linear-gradient(135deg,#2b5ea8,#dcecf9)", caption:{ es:"Día de la familia", en:"Family day", it:"Giornata della famiglia" } },
  { g:"linear-gradient(135deg,#2e5e3a,#a7c79a)", caption:{ es:"Nuestra sede", en:"Our headquarters", it:"La nostra sede" } }
];

/* ===== Estado y utilidades ===== */
let lang = "es";
let filter = "all";

const $ = sel => document.querySelector(sel);
const t = key => (I18N[lang] && I18N[lang][key]) ?? I18N.es[key];
const L = obj => obj[lang] ?? obj.es;
const fmtDate = iso => new Date(iso + "T12:00:00").toLocaleDateString(LOCALES[lang], { day:"numeric", month:"long", year:"numeric" });

/* ===== Render ===== */
function applyStatic(){
  document.documentElement.lang = lang;
  document.title = t("orgName");
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-html]").forEach(el => el.innerHTML = t(el.dataset.i18nHtml));
  document.querySelector(".lang").setAttribute("aria-label", t("langLabel"));
  document.querySelectorAll(".lang-btn").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  document.querySelector("#fb-link").href = SITE.fb;
  document.querySelector("#ig-link").href = SITE.ig;
  document.querySelectorAll("[data-link='fb']").forEach(a => a.href = SITE.fb);
  document.querySelectorAll("[data-link='ig']").forEach(a => a.href = SITE.ig);
}

function renderFilters(){
  const keys = ["all", ...new Set(NEWS.map(n => n.src))];
  $("#filters").innerHTML = keys.map(k =>
    `<button type="button" data-src="${k}" aria-pressed="${k === filter}">${k === "all" ? t("filterAll") : k}</button>`
  ).join("");
}

function renderNews(){
  const items = NEWS.filter(n => filter === "all" || n.src === filter);
  $("#news").innerHTML = items.map(n => `
    <article class="card">
      <span class="src ${n.cls}">${n.src}</span>
      <span class="date">${fmtDate(n.date)}</span>
      <h3>${L(n.title)}</h3>
      <p>${L(n.text)}</p>
      <a href="${n.url}" target="_blank" rel="noopener">${t("readIn")} ${n.src} →</a>
    </article>`).join("");
}

function renderSocial(){
  $("#fb-posts").innerHTML = FB_POSTS.map(p => `
    <article class="post">
      <div class="who"><span class="av">S</span><div>${t("author")}<small>${fmtDate(p.date)}</small></div></div>
      <p>${L(p.text)}</p>
      <div class="react">♥ ${p.likes} · ${p.comments} ${t("comments")}</div>
    </article>`).join("");

  $("#ig-grid").innerHTML = IG_POSTS.map(p => `
    <a class="ig" href="${SITE.ig}" target="_blank" rel="noopener" style="--g:${p.g}">
      <span>${L(p.caption)}</span>
    </a>`).join("");
}

function render(){
  applyStatic();
  renderFilters();
  renderNews();
  renderSocial();
}

/* ===== Eventos ===== */
document.querySelector(".lang").addEventListener("click", e => {
  const btn = e.target.closest("[data-lang]");
  if(!btn) return;
  lang = btn.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch(_) {}
  render();
});

$("#filters").addEventListener("click", e => {
  const btn = e.target.closest("[data-src]");
  if(!btn) return;
  filter = btn.dataset.src;
  renderFilters();
  renderNews();
});

/* ===== Inicio: recordar el último idioma elegido ===== */
try {
  const saved = localStorage.getItem("lang");
  if(saved && I18N[saved]) lang = saved;
} catch(_) {}

render();
