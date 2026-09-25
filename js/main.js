document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTypewriter();
    initPills();
    renderProjects();
    renderExperience();
    renderEducation();
    initProjectFilter();
    initScrollNav();
    initMobileMenu();
    initSmoothScroll();
    initNameFit();
    initReveal();
    handleRouting();
    refreshIcons();

    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
});

window.addEventListener('popstate', handleRouting);

function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
    // Ensure heart stays themed after Lucide replaces the <i>
    document.querySelectorAll('.credits svg').forEach(svg => {
        svg.classList.add('heart-icon');
        svg.style.color = '';
        svg.style.stroke = '';
        svg.style.fill = 'none';
    });
}

/** Oculta palabras del nombre de la topbar de atrás hacia adelante si no caben */
function initNameFit() {
    const name = document.querySelector('.site-header .name');
    const topBar = document.querySelector('.site-header .top-bar');
    if (!name || !topBar) return;

    const words = [...name.querySelectorAll('.name-word')];
    if (words.length < 2) return;

    const fit = () => {
        words.forEach(w => w.classList.remove('is-hidden'));

        const avatar = topBar.querySelector('.img-profile-wrap');
        const styles = getComputedStyle(topBar);
        const gap = parseFloat(styles.gap) || 28;
        const avail = topBar.clientWidth - (avatar ? avatar.offsetWidth : 0) - gap - 4;

        // Quita LOPEZ, luego BEDOYA… dejando al menos la primera palabra
        for (let i = words.length - 1; i >= 1; i--) {
            if (name.scrollWidth <= avail) break;
            words[i].classList.add('is-hidden');
        }
    };

    fit();
    window.addEventListener('resize', fit);
    if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(fit).observe(topBar);
    }
}

function handleRouting() {
    const hash = window.location.hash.substring(1);
    if (!hash) {
        closeModal(true);
        return;
    }

    if (hash === 'exp' || hash === 'experience') {
        closeModal(true);
        scrollToId('experience');
        return;
    }
    if (hash === 'edu' || hash === 'education') {
        closeModal(true);
        scrollToId('education');
        return;
    }
    if (['about', 'projects', 'contact', 'hero'].includes(hash)) {
        closeModal(true);
        scrollToId(hash);
        return;
    }

    openProject(hash, true);
}

function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;

    // Cierra el menú mobile antes de medir/scroll (cambia alturas)
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('toggle-menu');
    if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        if (toggle) {
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
    }

    const runScroll = () => {
        // Alinear el inicio del contenedor de sección justo debajo del chrome sticky
        const top = el.getBoundingClientRect().top + window.scrollY - getScrollOffset(id);
        animateScrollTo(Math.max(0, top));
    };

    // Esperar un frame para que el layout se asiente tras cerrar el menú
    requestAnimationFrame(() => requestAnimationFrame(runScroll));
}

let _scrollAnimFrame = null;
let _forcedNavId = null;

function easeOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
}

function animateScrollTo(targetY) {
    if (_scrollAnimFrame) {
        cancelAnimationFrame(_scrollAnimFrame);
        _scrollAnimFrame = null;
    }

    const startY = window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 1) {
        _forcedNavId = null;
        updateActiveNav();
        return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
        window.scrollTo(0, targetY);
        _forcedNavId = null;
        updateActiveNav();
        return;
    }

    // Duración según distancia: más sutil, con techo para no alargar de más
    const duration = Math.min(1400, Math.max(700, Math.abs(distance) * 0.55));
    const startTime = performance.now();

    const step = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = easeOutQuint(t);
        window.scrollTo(0, startY + distance * eased);
        if (t < 1) {
            _scrollAnimFrame = requestAnimationFrame(step);
        } else {
            _scrollAnimFrame = null;
            _forcedNavId = null;
            updateActiveNav();
        }
    };

    _scrollAnimFrame = requestAnimationFrame(step);
}

function getScrollOffset(id) {
    const compact = document.getElementById('header-compact');
    const nav = document.querySelector('.nav-menu');
    const isDesktop = window.matchMedia('(min-width: 992px)').matches;
    const root = document.documentElement;

    const compactH = parseFloat(root.style.getPropertyValue('--compact-header-h'))
        || compact?.querySelector('.header-compact-inner')?.offsetHeight
        || compact?.offsetHeight
        || 78;
    const navH = parseFloat(root.style.getPropertyValue('--nav-h'))
        || nav?.offsetHeight
        || 68;

    // Mobile: solo topbar chica
    if (!isDesktop) {
        return compactH;
    }

    // Desktop: anticipar compact+nav en secciones bajo el hero
    const willShowCompact = Boolean(id && id !== 'about' && id !== 'hero');
    const showCompact = willShowCompact
        || document.body.classList.contains('has-compact-header')
        || (compact && compact.classList.contains('visible'));

    if (showCompact) {
        return compactH + navH;
    }

    return navH;
}

const LANG = document.documentElement.lang || 'es';

const TRANSLATIONS = {
    es: {
        typewriter: [
            "utilizo una visión integral, de la estrategia al código.",
            "uso la IA para clarificar datos y agilizar entregas en producción.",
            "me baso en métricas que validan cada decisión.",
            "mantengo la flexibilidad para iterar y ajustar el rumbo.",
            "diseño micro-interacciones que elevan la experiencia."
        ],
        pills: [
            "Estrategia de Producto",
            "Desarrollo asistido por IA",
            "UX/UI",
            "Claude / Cursor / Codex",
            "MCPs",
            "Agentes",
            "Design Thinking",
            "Métricas",
            "Investigación de usuarios",
            "Metodologías ágiles",
            "Figma (Experto)",
            "Prototipado",
            "Sistemas de diseño",
            "Accesibilidad (WCAG)",
            "Motion design / Lottie",
            "HTML CSS",
            "Hotjar",
            "Notion",
            "Suite de Adobe"
        ],
        categories: {
            product: 'UX / UI / Producto',
            animation: 'Gráfico y animaciones',
            all: 'Todos'
        },
        ui: {
            viewProject: "Ver proyecto",
            viewBehance: "Ver en Behance",
            inConstruction: "En construcción",
            featuredProject: "PROYECTO DESTACADO",
            section: "SECCIÓN",
            role: "Mi Rol",
            client: "Cliente / App",
            platform: "Plataforma",
            focus: "Enfoque Estratégico",
            challenge: "Desafío / Contexto",
            solution: "Solución UX/UI",
            exp: "Experiencia",
            edu: "Educación",
            eduSuperior: "Estudios superiores",
            eduCursos: "Últimos cursos",
            themeLight: "Ver en modo claro",
            themeDark: "Ver en modo oscuro",
            toggleDark: "OSCURO",
            toggleLight: "CLARO",
            nextProject: "Siguiente proyecto"
        }
    },
    en: {
        typewriter: [
            "I apply a holistic vision, from strategy to code.",
            "I use AI to clarify data and accelerate production deliveries.",
            "I rely on metrics that validate every decision.",
            "I maintain the flexibility to iterate and adjust course.",
            "I design micro-interactions that elevate the experience."
        ],
        pills: [
            "Product Strategy",
            "AI-assisted Development",
            "UX/UI",
            "Claude / Cursor / Codex",
            "MCPs",
            "Agents",
            "Design Thinking",
            "Metrics",
            "User Research",
            "Agile Methodologies",
            "Figma (Expert)",
            "Prototyping",
            "Design Systems",
            "Accessibility (WCAG)",
            "Motion design / Lottie",
            "HTML CSS",
            "Hotjar",
            "Notion",
            "Adobe Suite"
        ],
        categories: {
            product: 'UX / UI / Product',
            animation: 'Graphic & animation',
            all: 'All'
        },
        ui: {
            viewProject: "View project",
            viewBehance: "View on Behance",
            inConstruction: "Under construction",
            featuredProject: "FEATURED PROJECT",
            section: "SECTION",
            role: "My Role",
            client: "Client / App",
            platform: "Platform",
            focus: "Strategic Focus",
            challenge: "Challenge / Context",
            solution: "UX/UI Solution",
            exp: "Experience",
            edu: "Education",
            eduSuperior: "Higher education",
            eduCursos: "Latest courses",
            themeLight: "View in light mode",
            themeDark: "View in dark mode",
            toggleDark: "DARK",
            toggleLight: "LIGHT",
            nextProject: "Next project"
        }
    }
};

const T = TRANSLATIONS[LANG] || TRANSLATIONS.es;
// DB comes from data.js

function initTypewriter() {
    const textElement = document.getElementById('typewriter-text');
    if (!textElement) return;

    const phrases = T.typewriter;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = phrases[phraseIndex];
        if (isDeleting) {
            textElement.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 12 : 20;

        if (!isDeleting && charIndex === current.length) {
            delay = 900;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 180;
        }

        setTimeout(type, delay);
    }

    setTimeout(type, 300);
}

function initPills() {
    const container = document.getElementById('pills-container');
    if (!container) return;
    container.innerHTML = '';
    T.pills.forEach(text => {
        const span = document.createElement('span');
        span.className = 'skill-pill';
        span.textContent = text;
        container.appendChild(span);
    });
}

function renderProjects() {
    const list = document.getElementById('project-list');
    if (!list) return;
    list.innerHTML = '';

    DB.projects.forEach((p, idx) => {
        const card = document.createElement('article');
        card.className = 'project-card reveal';
        card.style.setProperty('--i', String(idx % 6));
        card.dataset.category = p.category;
        card.dataset.id = p.id;

        const tags = (p.tags || []).slice(0, 3)
            .map(t => `<span>${t}</span>`)
            .join('');

        const metrics = (p.metrics || []).slice(0, 2)
            .map(m => `<div class="project-metric"><span class="project-metric-value">${m.value}</span><span class="project-metric-label">${m.label}</span></div>`)
            .join('');
        const metricsHtml = metrics
            ? `<div class="project-card-metrics">${metrics}</div>`
            : '';

        let actionAttrs = `type="button" onclick="openProject('${p.id}')"`;
        let actionTag = 'button';
        let label = T.ui.viewProject;
        const isBehance = Boolean(p.externalLink && !p.sections);

        if (p.isConstruction) {
            actionAttrs = `type="button" disabled`;
            label = T.ui.inConstruction;
        } else if (isBehance) {
            actionTag = 'a';
            actionAttrs = `href="${p.externalLink}" target="_blank" rel="noopener noreferrer"`;
            label = T.ui.viewBehance;
        } else if (p.externalLink && p.sections) {
            actionAttrs = `type="button" onclick="openProject('${p.id}')"`;
        }

        const mediaClick = p.isConstruction
            ? ''
            : isBehance
                ? `onclick="window.open('${p.externalLink}','_blank','noopener,noreferrer')"`
                : `onclick="openProject('${p.id}')"`;

        card.innerHTML = `
            <div class="project-card-media" ${mediaClick} style="cursor:${p.isConstruction ? 'default' : 'pointer'}">
                <img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async" onerror="this.style.display='none'">
            </div>
            <div class="project-card-body">
                <div class="project-card-tags">${tags}</div>
                <h4 class="project-card-title">${p.title}</h4>
                ${metricsHtml}
                <p class="project-card-desc">${p.tagline}</p>
                <${actionTag} class="project-card-btn" ${actionAttrs}>
                    ${label}
                    <i data-lucide="square-arrow-out-up-right"></i>
                </${actionTag}>
            </div>
        `;

        list.appendChild(card);
    });

    refreshIcons();
}

function initProjectFilter() {
    const tabs = document.querySelectorAll('#project-filter-tabs .filter-tab');
    if (!tabs.length) return;

    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('filter');
    const initial = (fromUrl && ['product', 'animation', 'all'].includes(fromUrl))
        ? fromUrl
        : 'product';

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            filterProjects(filter);
            setFilterInUrl(filter);
        });
    });

    const activeTab = [...tabs].find(t => t.dataset.filter === initial) || tabs[0];
    tabs.forEach(t => {
        const on = t === activeTab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    filterProjects(initial);
}

function setFilterInUrl(filter) {
    const url = new URL(window.location.href);
    if (filter === 'product') url.searchParams.delete('filter');
    else url.searchParams.set('filter', filter);
    window.history.replaceState(null, '', url.pathname + url.search + url.hash);
}

function filterProjects(filter) {
    const list = document.getElementById('project-list');
    const heading = document.getElementById('projects-heading');
    if (!list) return;

    list.querySelectorAll('.project-card').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
    });

    if (heading) {
        heading.textContent = T.categories[filter] || T.categories.product;
    }
}

function initReveal() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = document.querySelectorAll('.reveal, .animate-in');

    if (reduceMotion) {
        nodes.forEach(el => el.classList.add('is-visible'));
        return;
    }

    if (!('IntersectionObserver' in window)) {
        nodes.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    nodes.forEach(el => io.observe(el));
}

function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    container.innerHTML = (DB.experience || []).map((item, idx) => `
        <div class="timeline-item animate-in" style="--i: ${idx}">
            <div class="timeline-date">${item.period}</div>
            <div class="timeline-marker">
                <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
                <div class="timeline-card">
                    <div class="timeline-date-mobile">${item.period}</div>
                    <h4>${item.company}</h4>
                    <p class="timeline-role">${item.role}</p>
                    ${item.location ? `<p class="timeline-location">${item.location}</p>` : ''}
                    ${item.description ? `<ul>${item.description.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-timeline');
    if (!container) return;

    const superior = (DB.education || []).filter(e => e.type === 'superior');
    const cursos = (DB.education || []).filter(e => e.type === 'curso');
    let globalIndex = 0;

    const renderGroup = (title, items) => {
        if (!items.length) return '';
        return `
            <div class="group-section">
                <h3 class="edu-group-header">${title}</h3>
                <div class="timeline-container">
                    ${items.map(item => {
                        const html = `
                            <div class="timeline-item animate-in" style="--i: ${globalIndex}">
                                <div class="timeline-date">${item.year}</div>
                                <div class="timeline-marker">
                                    <div class="timeline-dot"></div>
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-card">
                                        <div class="timeline-date-mobile">${item.year}</div>
                                        <h4>${item.degree}</h4>
                                        <p class="timeline-role">${item.institution}</p>
                                    </div>
                                </div>
                            </div>`;
                        globalIndex++;
                        return html;
                    }).join('')}
                </div>
            </div>
        `;
    };

    container.innerHTML = renderGroup(T.ui.eduSuperior, superior) + renderGroup(T.ui.eduCursos, cursos);
}

function syncStickyOffsets() {
    const root = document.documentElement;
    const inner = document.querySelector('.header-compact-inner');
    const nav = document.querySelector('.nav-menu');

    if (inner) {
        const compactH = Math.round(inner.getBoundingClientRect().height) || 78;
        root.style.setProperty('--compact-header-h', `${compactH}px`);
    }

    if (nav) {
        const navH = Math.round(nav.getBoundingClientRect().height) || 68;
        root.style.setProperty('--nav-h', `${navH}px`);
    }
}

function initScrollNav() {
    const compact = document.getElementById('header-compact');
    const header = document.querySelector('.site-header');
    if (!compact) return;

    const onScroll = () => {
        const isDesktop = window.matchMedia('(min-width: 992px)').matches;
        let show = true;

        if (isDesktop && header) {
            const threshold = Math.max(header.offsetHeight * 0.55, 120);
            show = window.scrollY > threshold;
            compact.classList.toggle('visible', show);
        } else {
            compact.classList.add('visible');
            show = true;
        }

        compact.setAttribute('aria-hidden', show ? 'false' : 'true');
        document.body.classList.toggle('has-compact-header', isDesktop && show);
        updateActiveNav();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
        syncStickyOffsets();
        onScroll();
    });
    syncStickyOffsets();
    onScroll();
}

function updateActiveNav() {
    const sections = ['about', 'projects', 'experience', 'education', 'contact'];
    const offset = getScrollOffset() + 40;
    let current = null;

    if (_forcedNavId && sections.includes(_forcedNavId)) {
        current = _forcedNavId;
    } else {
        const docH = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
        );
        const nearBottom = window.scrollY + window.innerHeight >= docH - 120;

        // Al final de la página, Contacto no siempre cruza el offset → forzar active
        if (nearBottom) {
            current = 'contact';
        } else {
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                if (el.getBoundingClientRect().top - offset <= 0) current = id;
            });
        }
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        const isActive = current && href === `#${current}`;
        link.classList.toggle('active', Boolean(isActive));
    });
}

function initMobileMenu() {
    const toggle = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        toggle.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a.js-scroll-trigger[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const id = anchor.getAttribute('href').slice(1);
            const target = document.getElementById(id);
            if (!target) return;
            e.preventDefault();

            _forcedNavId = id;
            updateActiveNav();

            scrollToId(id);
            history.pushState(null, null, `#${id}`);
        });
    });
}

function openProject(id, fromRouting = false) {
    const p = DB.projects.find(x => x.id === id);
    if (!p) {
        if (fromRouting) closeModal(true);
        return;
    }

    // External-only projects without case study sections
    if (p.externalLink && !p.sections) {
        window.open(p.externalLink, '_blank');
        return;
    }

    if (!fromRouting) {
        window.history.pushState(null, null, `#${id}`);
    }

    const body = document.getElementById('modal-body');
    const stickyTitle = document.getElementById('modal-sticky-title');
    const modalHeader = document.querySelector('.modal-header');
    const sectionBanner = document.getElementById('modal-section-banner');

    if (stickyTitle) stickyTitle.textContent = p.title;

    if (sectionBanner) {
        sectionBanner.classList.remove('visible');
        sectionBanner.textContent = '';
    }

    attachModalScrollBehavior(body, modalHeader, sectionBanner);

    if (window.modalObserver) {
        window.modalObserver.disconnect();
        window.modalObserver = null;
    }

    let metaHTML = '';
    if (p.details) {
        metaHTML = `
            <div class="project-meta-grid">
                <div class="meta-row">
                    <div class="meta-label">${T.ui.role}</div>
                    <div class="meta-value">${p.details.role}</div>
                </div>
                <div class="meta-row">
                    <div class="meta-label">${T.ui.client}</div>
                    <div class="meta-value">${p.details.client}</div>
                </div>
                <div class="meta-row">
                    <div class="meta-label">${T.ui.platform}</div>
                    <div class="meta-value">${p.details.platform}</div>
                </div>
                <div class="meta-row">
                    <div class="meta-label">${T.ui.focus}</div>
                    <div class="meta-value">${p.details.focus || ''}</div>
                </div>
            </div>
        `;
    }

    body.innerHTML = `
        <h2 style="font-size:36px; margin:10px 0; line-height:1.2; padding-top:5px; font-family:'EB Garamond', Georgia, serif;">${p.title}</h2>
        <div style="margin-bottom:20px;">${(p.tags || []).map(t => `<span class="pill-modal">${t}</span>`).join('')}</div>

        <div class="modal-hero-split">
            <div class="hero-img-box">
                <img src="${p.image}" onerror="this.style.display='none'">
            </div>
            <div class="hero-info-box">
                <div class="info-block">
                    <h3>${T.ui.challenge}</h3>
                    <p>${p.challenge || '...'}</p>
                </div>
                <div class="info-block">
                    <h3>${T.ui.solution}</h3>
                    <p>${p.description || '...'}</p>
                </div>
            </div>
        </div>

        ${metaHTML}

        <div id="modal-project-sections">
            ${(p.sections || []).map(sec => {
                let lottieHTML = '';
                if (sec.lotties && sec.lotties.length > 0) {
                    lottieHTML = `
                        <div class="lottie-grid">
                            ${sec.lotties.map(url => `
                                <div class="lottie-item">
                                    <lottie-player src="${url}" background="transparent" speed="1" loop autoplay></lottie-player>
                                </div>
                            `).join('')}
                        </div>
                    `;
                }

                return `
                <div class="modal-section">
                    <div class="section-header">
                        <h4 class="section-title">${sec.title}</h4>
                        <p class="section-desc">${sec.description}</p>
                    </div>
                    ${sec.image ? `<img src="${sec.image}" class="section-full-img" alt="${sec.title}" onerror="this.style.display='none'">` : ''}
                    ${lottieHTML}
                    <div class="section-detail">${sec.detail}</div>
                </div>`;
            }).join('')}
        </div>

        ${(() => {
            const internalProjects = DB.projects.filter(proj => proj.sections && !proj.isConstruction);
            const currentIndex = internalProjects.findIndex(proj => proj.id === id);
            if (currentIndex !== -1 && internalProjects.length > 1) {
                const nextIndex = (currentIndex + 1) % internalProjects.length;
                const nextProject = internalProjects[nextIndex];
                return `
                    <div class="modal-next-project-wrapper">
                        <hr class="modal-divider">
                        <div class="modal-next-project-card" onclick="openProject('${nextProject.id}')">
                            <div class="next-project-content">
                                <span class="next-project-pre">${T.ui.nextProject}</span>
                                <h3 class="next-project-title">${nextProject.title}</h3>
                                <p class="next-project-tagline">${nextProject.tagline}</p>
                            </div>
                            <div class="next-project-media">
                                <div class="next-project-image">
                                    <img src="${nextProject.image}" alt="${nextProject.title}" onerror="this.style.display='none'">
                                </div>
                                <div class="next-project-arrow">
                                    <i data-lucide="arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            return '';
        })()}
    `;

    const modal = document.getElementById('project-modal');
    modal.classList.remove('modal-small');
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    refreshIcons();
}

function attachModalScrollBehavior(scrollContainer, modalHeader, sectionBanner) {
    if (!scrollContainer) return;

    scrollContainer.onscroll = () => {
        if (modalHeader) {
            if (scrollContainer.scrollTop > 20) modalHeader.classList.add('scrolled');
            else modalHeader.classList.remove('scrolled');
        }

        if (!sectionBanner) return;

        const sections = scrollContainer.querySelectorAll('.modal-section');
        const modalRect = scrollContainer.getBoundingClientRect();
        const modalTop = modalRect.top;
        let activeTitle = '';

        sections.forEach(sec => {
            const titleEl = sec.querySelector('.section-title');
            if (!titleEl) return;
            const secRect = sec.getBoundingClientRect();
            if (secRect.top < modalTop + 81) {
                activeTitle = titleEl.textContent;
            }
        });

        if (activeTitle) {
            sectionBanner.textContent = activeTitle;
            sectionBanner.classList.add('visible');
        } else {
            sectionBanner.classList.remove('visible');
        }
    };
}

function closeModal(fromRouting = false) {
    if (window.modalObserver) window.modalObserver.disconnect();
    const sectionBanner = document.getElementById('modal-section-banner');
    if (sectionBanner) sectionBanner.classList.remove('visible');

    const modal = document.getElementById('project-modal');
    if (!modal) return;

    if (!fromRouting && window.location.hash !== '') {
        const hash = window.location.hash.substring(1);
        const pageSections = ['about', 'projects', 'experience', 'education', 'contact', 'hero', 'exp', 'edu'];
        if (!pageSections.includes(hash)) {
            window.history.pushState(null, null, window.location.pathname + window.location.search);
        }
    }

    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

function setThemeIcon(isDark) {
    const wrap = document.getElementById('themeIconWrap');
    const textEl = document.getElementById('themeText');
    const btn = document.getElementById('themeToggleBtn');
    if (wrap) wrap.innerHTML = `<i data-lucide="${isDark ? 'moon' : 'sun'}"></i>`;
    if (textEl) textEl.textContent = isDark ? T.ui.toggleDark : T.ui.toggleLight;
    if (btn) btn.setAttribute('data-tooltip', isDark ? T.ui.themeLight : T.ui.themeDark);

    const wrapMobile = document.getElementById('themeIconWrapMobile');
    const textMobile = document.getElementById('themeTextMobile');
    if (wrapMobile) wrapMobile.innerHTML = `<i data-lucide="${isDark ? 'moon' : 'sun'}"></i>`;
    if (textMobile) textMobile.textContent = isDark ? T.ui.toggleDark : T.ui.toggleLight;

    refreshIcons();
}

function initTheme() {
    const stored = localStorage.getItem('theme');
    let isDark;
    if (stored === 'dark' || stored === 'light') {
        isDark = stored === 'dark';
    } else {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    setThemeIcon(isDark);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const newThemeDark = !isDark;

    function applyTheme() {
        if (newThemeDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        setThemeIcon(newThemeDark);
    }

    if (!document.startViewTransition) {
        applyTheme();
    } else {
        document.startViewTransition(() => applyTheme());
    }
}
