document.addEventListener('DOMContentLoaded', () => {
    initTheme(); // Sincronizar UI con el tema guardado
    initTypewriter();
    initPills();
    renderProjects();
    initProjectFilter();
    // Aplicar filtro inicial y expandir primer proyecto
    filterProjects('product');
    openFirstVisibleProject();
    handleRouting(); // Manejar carga inicial con hash

    // Cerrar modal al hacer clic fuera del contenido (en el overlay)
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});

window.addEventListener('popstate', handleRouting);

function handleRouting() {
    const hash = window.location.hash.substring(1);
    if (!hash) {
        closeModal(true);
        return;
    }

    if (hash === 'exp' || hash === 'edu') {
        openTab(hash, true);
    } else {
        // Intentar abrir como proyecto
        openProject(hash, true);
    }
}

const LANG = document.documentElement.lang || 'es';

const TRANSLATIONS = {
    es: {
        typewriter: [
            "una visión integral, de la estrategia al código.",
            "IA para clarificar datos y agilizar entregas.",
            "métricas que validan cada decisión.",
            "flexibilidad para iterar y ajustar el rumbo.",
            "micro-interacciones que elevan la experiencia."
        ],
        pills: [
            "Estrategia de Producto",
            "UX/UI",
            "User Research",
            "Métricas y Negocio",
            "Design Systems",
            "Diseño Visual",
            "WCAG AA",
            "Motion Design",
            "Agile/Scrum",
            "AI-assisted workflows",
            "Vibe Coding",
            "Experto en Figma",
            "Lottie"
        ],
        categories: {
            'product': 'Ux Ui Producto',
            'animation': 'Animaciones y diseño visual' // Corregido: 'visual' estaba en minúscula inicial en el original
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
            exp: "Empleadores",
            edu: "Educación",
            eduSuperior: "ESTUDIOS SUPERIORES",
            eduCursos: "CURSOS",
            themeLight: "Ver en modo claro",
            themeDark: "Ver en modo oscuro",
            toggleDark: "OSC",
            toggleLight: "CLA",
            eduEnd: "Fin.",
            nextProject: "Siguiente proyecto"
        }
    },
    en: {
        typewriter: [
            "a comprehensive vision, from strategy to code.",
            "AI to clarify data and speed up delivery.",
            "metrics that validate every decision.",
            "flexibility to iterate and adjust course.",
            "micro-interactions that elevate experience."
        ],
        pills: [
            "Product Strategy",
            "UX/UI",
            "User Research",
            "Metrics & Business",
            "Design Systems",
            "Visual Design",
            "WCAG AA Accessibility",
            "Motion Design",
            "Agile/Scrum",
            "AI-assisted workflows",
            "Vibe Coding",
            "Figma Expert",
            "Lottie"
        ],
        categories: {
            'product': 'UX UI Product',
            'animation': 'Animations and Visual Design'
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
            exp: "Employers",
            edu: "Education",
            eduSuperior: "HIGHER EDUCATION",
            eduCursos: "CERTIFICATIONS & COURSES",
            themeLight: "View in light mode",
            themeDark: "View in dark mode",
            toggleDark: "DRK",
            toggleLight: "LIG",
            eduEnd: "End.",
            nextProject: "Next project"
        }
    }
};

const T = TRANSLATIONS[LANG] || TRANSLATIONS.es;

// TYPEWRITER EFFECT
function initTypewriter() {
    const textElement = document.getElementById('typewriter-text');
    if (!textElement) return;

    const phrases = T.typewriter;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 15; // Faster delete
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 40; // Typing speed
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause after typing
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400; // Pause before typing next
        }

        if (typeof setTimeout !== 'undefined') {
            setTimeout(type, typeSpeed);
        }
    }

    setTimeout(type, 1000); // Initial start delay
}

// PILLS ROTATION (Marquee)
function initPills() {
    const container = document.getElementById('pills-container');
    if (!container) return;

    container.innerHTML = ''; // Clear
    const track = document.createElement('div');
    track.className = 'pills-track';

    const pillTexts = T.pills;

    // Doblar la lista para permitir el bucle infinito perfecto (-50% en CSS)
    const fullList = [...pillTexts, ...pillTexts];

    fullList.forEach(text => {
        const span = document.createElement('span');
        span.className = 'pill pill-marquee';
        span.textContent = text;
        track.appendChild(span);
    });

    container.appendChild(track);
}

// ACCORDION PROJECTS
function renderProjects() {
    const list = document.getElementById('project-list');
    if (!list) return;
    list.innerHTML = '';

    const categoryTitles = T.categories;

    let lastCategory = null;

    DB.projects.forEach((p, index) => {
        // Insertar título de sección si la categoría cambia
        if (p.category !== lastCategory) {
            const sectionTitle = document.createElement('div');
            sectionTitle.className = 'project-section-title';
            sectionTitle.textContent = categoryTitles[p.category] || p.category;
            list.appendChild(sectionTitle);
            lastCategory = p.category;
        }

        const div = document.createElement('div');
        div.className = 'project-row';

        let linkHTML = `<button class="accordion-btn accordion-btn-secondary" onclick="openProject('${p.id}'); event.stopPropagation();">${T.ui.viewProject}</button>`;

        if (p.isConstruction) {
            linkHTML = ``; // The tagline will say "En construcción" / "Under construction"
        } else if (p.externalLink) {
            linkHTML = `<a href="${p.externalLink}" target="_blank" class="accordion-btn accordion-btn-secondary" onclick="event.stopPropagation();">${T.ui.viewBehance}<span class="material-symbols-outlined">open_in_new</span></a>`;
        }

        div.innerHTML = `
            <div class="project-header">
                <h4 style="font-size:18px; font-weight:700; color:var(--black);">${p.title}</h4>
                <span class="material-symbols-outlined chevron" style="color:var(--black);">chevron_right</span>
            </div>
            <div class="accordion-content">
                <img src="${p.image}" style="width:100%; border-radius:16px; margin:5px 0 12px 0;" onerror="this.style.display='none'" class="accordion-clickable" onclick="${p.isConstruction ? '' : p.externalLink ? `window.open('${p.externalLink}','_blank')` : `openProject('${p.id}')`}">
                <p style="font-size:14px; color:var(--gray); line-height:1.4; margin-bottom:12px;" class="${p.isConstruction ? '' : 'accordion-tagline-clickable'}" onclick="${p.isConstruction ? '' : p.externalLink ? `window.open('${p.externalLink}','_blank'); event.stopPropagation()` : `openProject('${p.id}'); event.stopPropagation()`}">${p.tagline}</p>
                ${linkHTML}
            </div>
        `;

        // Accordion click on the whole row (except internal interactive elements)
        div.addEventListener('click', (e) => {
            // Ignore clicks on interactive elements inside the content area
            if (e.target.closest('.accordion-content')) return;

            const allRows = list.querySelectorAll('.project-row');
            const isOpen = div.classList.contains('open');

            // Close others 
            allRows.forEach(row => row.classList.remove('open'));

            // If it wasn't open previously, open it now (toggle logic)
            if (!isOpen) { div.classList.add('open'); }
        });

        div.dataset.category = p.category; // Store category for filtering
        list.appendChild(div);
    });
}

// PROJECT FILTER TABS
function initProjectFilter() {
    const tabs = document.querySelectorAll('#project-filter-tabs .filter-tab');
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            const filter = tab.dataset.filter;
            filterProjects(filter);
            openFirstVisibleProject();
        });
    });
}

function openFirstVisibleProject() {
    const list = document.getElementById('project-list');
    if (!list) return;
    const rows = list.querySelectorAll('.project-row:not(.hidden)');
    // Close all first
    list.querySelectorAll('.project-row').forEach(r => r.classList.remove('open'));
    // Open the first visible one
    if (rows.length > 0) rows[0].classList.add('open');
}

function filterProjects(filter) {
    const list = document.getElementById('project-list');
    if (!list) return;

    const rows = list.querySelectorAll('.project-row');
    const sectionTitles = list.querySelectorAll('.project-section-title');

    rows.forEach(row => {
        if (filter === 'all' || row.dataset.category === filter) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
            row.classList.remove('open'); // Collapse hidden items
        }
    });

    // Show/hide section titles based on whether any visible rows follow them
    let firstVisibleTitle = true;
    sectionTitles.forEach(title => {
        let hasVisibleSibling = false;
        let next = title.nextElementSibling;
        while (next && !next.classList.contains('project-section-title')) {
            if (next.classList.contains('project-row') && !next.classList.contains('hidden')) {
                hasVisibleSibling = true;
                break;
            }
            next = next.nextElementSibling;
        }
        title.classList.toggle('hidden', !hasVisibleSibling);

        // Mark the first visible title to reset its top margin
        title.classList.remove('first-visible');
        if (hasVisibleSibling && firstVisibleTitle) {
            title.classList.add('first-visible');
            firstVisibleTitle = false;
        }
    });
}

// MODAL CONTROLLERS
function openProject(id, fromRouting = false) {
    const p = DB.projects.find(x => x.id === id);
    if (!p) {
        if (fromRouting) closeModal(true);
        return;
    }

    // Actualizar hash si no viene de routing
    if (!fromRouting) {
        window.history.pushState(null, null, `#${id}`);
    }

    const body = document.getElementById('modal-body');
    const stickyTitle = document.getElementById('modal-sticky-title');
    const modalContent = document.getElementById('modal-body');
    const modalHeader = document.querySelector('.modal-header');

    if (stickyTitle) stickyTitle.textContent = p.title;

    // Banner de sección dinámico
    const sectionBanner = document.getElementById('modal-section-banner');
    if (sectionBanner) {
        sectionBanner.classList.remove('visible');
        sectionBanner.textContent = '';
    }

    attachModalScrollBehavior(modalContent, modalHeader, sectionBanner);

    // Eliminar observer anterior si existía
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
        <span style="color:var(--muted-text); font-size:12px; font-weight:600;">${T.ui.featuredProject}</span>
        <h2 style="font-size:36px; margin:10px 0; line-height:1.2; padding-top:5px;">${p.title}</h2>
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
                </div>
                `;
    }).join('')}
        </div>

        ${(() => {
            const internalProjects = DB.projects.filter(proj => !proj.externalLink && !proj.isConstruction);
            const currentIndex = internalProjects.findIndex(proj => proj.id === id);
            if (currentIndex !== -1 && internalProjects.length > 1) {
                const nextIndex = (currentIndex + 1) % internalProjects.length;
                const nextProject = internalProjects[nextIndex];
                const nextLabel = T.ui.nextProject;
                return `
                    <div class="modal-next-project-wrapper">
                        <hr class="modal-divider">
                        <div class="modal-next-project-card" onclick="openProject('${nextProject.id}')">
                            <div class="next-project-content">
                                <span class="next-project-pre">${nextLabel}</span>
                                <h3 class="next-project-title">${nextProject.title}</h3>
                                <p class="next-project-tagline">${nextProject.tagline}</p>
                            </div>
                            <div class="next-project-media">
                                <div class="next-project-image">
                                    <img src="${nextProject.image}" alt="${nextProject.title}" onerror="this.style.display='none'">
                                </div>
                                <div class="next-project-arrow">
                                    <span class="material-symbols-outlined">arrow_forward</span>
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
}

function openTab(section, fromRouting = false) {
    const titleMap = {
        'exp': T.ui.exp,
        'edu': T.ui.edu
    };

    if (!fromRouting) {
        window.history.pushState(null, null, `#${section}`);
    }

    const title = titleMap[section] || section;
    const body = document.getElementById('modal-body');
    const stickyTitle = document.getElementById('modal-sticky-title');

    if (stickyTitle) stickyTitle.textContent = title;

    let itemsHTML = '';
    let globalIndex = 0; // Para animación escalonada

    if (section === 'exp') {
        const content = (DB.experience || []).map((item, idx) => `
            <div class="timeline-item animate-in" style="--i: ${idx}">
                <div class="timeline-date">${item.period}</div>
                <div class="timeline-marker">
                    <div class="timeline-dot"></div>
                </div>
                <div class="timeline-content">
                    <div class="timeline-card">
                        <div class="timeline-date-mobile">${item.period}</div>
                        <h4>${item.company}</h4>
                        <p>${item.role}${item.location ? ` - ${item.location}` : ''}</p>
                        ${item.description ? `<ul>${item.description.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
                    </div>
                </div>
            </div>
        `).join('');

        itemsHTML = `
            <div class="modal-section" style="margin-top:0;">
                <h4 class="section-title sr-only">${T.ui.exp}</h4>
                ${content}
            </div>
        `;
    } else if (section === 'edu') {
        const superior = (DB.education || []).filter(e => e.type === 'superior');
        const cursos = (DB.education || []).filter(e => e.type === 'curso');

        const renderGroup = (groupTitle, items) => {
            if (items.length === 0) return '';
            const html = `
                <div class="modal-section group-section">
                    <div class="edu-group-header section-title">${groupTitle}</div>
                    ${items.map(item => {
                const s = `
                        <div class="timeline-item animate-in" style="--i: ${globalIndex}">
                            <div class="timeline-date">${item.year}</div>
                            <div class="timeline-marker">
                                <div class="timeline-dot"></div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-card">
                                    <div class="timeline-date-mobile">${item.year}</div>
                                    <h4>${item.degree}</h4>
                                    <p>${item.institution}</p>
                                </div>
                            </div>
                        </div>`;
                globalIndex++;
                return s;
            }).join('')}
                </div>
            `;
            return html;
        };

        itemsHTML = renderGroup(T.ui.eduSuperior, superior) + renderGroup(T.ui.eduCursos, cursos);
    }

    body.innerHTML = `
        <h2 style="font-size:48px; margin:10px 0; line-height:1.2; padding-top:5px;">${title}</h2>
        <div class="timeline-container">
            ${itemsHTML}
        </div>
    `;

    const modal = document.getElementById('project-modal');
    modal.classList.add('modal-small');
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Inicializar scroll behavior
    const modalContent = document.getElementById('modal-body');
    const modalHeader = document.querySelector('.modal-header');
    const sectionBanner = document.getElementById('modal-section-banner');

    if (sectionBanner) {
        sectionBanner.classList.remove('visible');
        sectionBanner.textContent = '';
    }

    // Pasar null al banner para estos modales por petición del usuario
    attachModalScrollBehavior(modalContent, modalHeader, null);
}

// HELPER: Inicializar comportamiento de scroll en modales
function attachModalScrollBehavior(scrollContainer, modalHeader, sectionBanner) {
    if (!scrollContainer) return;

    scrollContainer.scrollTop = 0;
    scrollContainer.onscroll = () => {
        if (scrollContainer.scrollTop > 10) {
            modalHeader.classList.add('scrolled');
        } else {
            modalHeader.classList.remove('scrolled');
        }

        // Banner de sección dinámico
        if (sectionBanner) {
            const sections = scrollContainer.querySelectorAll('.modal-section');
            const modalRect = scrollContainer.getBoundingClientRect();
            const modalTop = modalRect.top;

            let activeSec = null;
            let showBanner = false;

            // 1. Encontrar la sección "bajo la cabecera" (línea de 81px)
            sections.forEach(sec => {
                const secRect = sec.getBoundingClientRect();
                if (secRect.top < modalTop + 81) {
                    activeSec = sec;
                }
            });

            if (activeSec) {
                const titleEl = activeSec.querySelector('.section-title');
                if (titleEl) {
                    const titleRect = titleEl.getBoundingClientRect();
                    // Si el título ya pasó el header, mostrar banner
                    if (titleRect.bottom < modalTop + 80) {
                        showBanner = true;
                        sectionBanner.textContent = titleEl.textContent;
                    }
                }

                // 2. Ocultar si el SIGUIENTE título está por aparecer (buffer de 280px)
                let nextSec = activeSec.nextElementSibling;
                while (nextSec && !nextSec.classList.contains('modal-section')) {
                    nextSec = nextSec.nextElementSibling;
                }

                if (nextSec) {
                    const nextTitle = nextSec.querySelector('.section-title');
                    if (nextTitle) {
                        const nextTitleRect = nextTitle.getBoundingClientRect();
                        if (nextTitleRect.top < modalTop + 280) {
                            showBanner = false;
                        }
                    }
                }
            }

            if (showBanner) {
                sectionBanner.classList.add('visible');
            } else {
                sectionBanner.classList.remove('visible');
            }
        }
    };
}

function closeModal(fromRouting = false) {
    if (window.modalObserver) window.modalObserver.disconnect();
    const sectionBanner = document.getElementById('modal-section-banner');
    if (sectionBanner) sectionBanner.classList.remove('visible');

    const modal = document.getElementById('project-modal');
    
    // Solo limpiar hash si no viene de routing y el hash actual no está vacío
    if (!fromRouting && window.location.hash !== "") {
        window.history.pushState(null, null, window.location.pathname + window.location.search);
    }

    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}


// THEME PERSISTENCE & INITIALIZATION
function initTheme() {
    const storedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;

    if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.getElementById('themeText').textContent = T.ui.toggleDark;
        document.getElementById('themeIcon').textContent = 'dark_mode';
        btn.setAttribute('data-tooltip', T.ui.themeLight);
    } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('themeText').textContent = T.ui.toggleLight;
        document.getElementById('themeIcon').textContent = 'light_mode';
        btn.setAttribute('data-tooltip', T.ui.themeDark);
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const newThemeDark = !isDark;

    function applyTheme() {
        const btn = document.getElementById('themeToggleBtn');
        if (newThemeDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            document.getElementById('themeText').textContent = T.ui.toggleDark;
            document.getElementById('themeIcon').textContent = 'dark_mode';
            btn.setAttribute('data-tooltip', T.ui.themeLight);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.getElementById('themeText').textContent = T.ui.toggleLight;
            document.getElementById('themeIcon').textContent = 'light_mode';
            btn.setAttribute('data-tooltip', T.ui.themeDark);
        }
    }

    if (!document.startViewTransition) {
        applyTheme();
    } else {
        document.startViewTransition(() => {
            applyTheme();
        });
    }
}
