document.addEventListener('DOMContentLoaded', () => {
    initTheme(); // Sincronizar UI con el tema guardado
    initTypewriter();
    initPills();
    renderProjects();
});

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
            "AI Data Insights",
            "Métricas y Negocio",
            "Vibe Coding",
            "Design Systems",
            "Lottifiles y Animaciones"
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
            exp: "Experiencia",
            edu: "Educación",
            themeLight: "Ver en modo claro",
            themeDark: "Ver en modo oscuro",
            toggleDark: "OSC",
            toggleLight: "CLA"
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
            "AI Data Insights",
            "Metrics & Business",
            "Vibe Coding",
            "Design Systems",
            "Lottifiles & Animations"
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
            exp: "Experience",
            edu: "Education",
            themeLight: "View in light mode",
            themeDark: "View in dark mode",
            toggleDark: "DRK",
            toggleLight: "LIG"
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
        div.className = 'project-row' + (p.category === 'product' && index === 0 ? ' open' : '');

        let linkHTML = `<a href="#" class="blue-link" style="margin:0; padding:0; font-weight:500; font-size:14px;" onclick="openProject('${p.id}'); event.stopPropagation(); return false;">${T.ui.viewProject}</a>`;
        
        if (p.isConstruction) {
            linkHTML = ``; // The tagline will say "En construcción" / "Under construction"
        } else if (p.externalLink) {
            linkHTML = `<a href="${p.externalLink}" target="_blank" class="blue-link" style="margin:0; padding:0; font-weight:500; font-size:14px;" onclick="event.stopPropagation();">${T.ui.viewBehance}</a>`;
        }

        div.innerHTML = `
            <div class="project-header">
                <h4 style="font-size:18px; font-weight:700; color:var(--black);">${p.title}</h4>
                <span class="material-symbols-outlined chevron" style="color:var(--black);">chevron_right</span>
            </div>
            <div class="accordion-content">
                <img src="${p.image}" style="width:100%; border-radius:16px; margin:5px 0 12px 0;" onerror="this.style.display='none'">
                <p style="font-size:14px; color:var(--gray); line-height:1.4; margin-bottom:12px;">${p.tagline}</p>
                ${linkHTML}
            </div>
        `;

        // Accordion click specific to header area
        div.querySelector('.project-header').addEventListener('click', () => {
            const allRows = list.querySelectorAll('.project-row');
            const isOpen = div.classList.contains('open');

            // Close others 
            allRows.forEach(row => row.classList.remove('open'));

            // If it wasn't open previously, open it now (toggle logic)
            if (!isOpen) { div.classList.add('open'); }
        });

        list.appendChild(div);
    });
}

// MODAL CONTROLLERS
function openProject(id) {
    const p = DB.projects.find(x => x.id === id);
    if (!p) return;

    const body = document.getElementById('modal-body');
    const stickyTitle = document.getElementById('modal-sticky-title');
    const modalContent = document.querySelector('.modal-content');
    const modalHeader = document.querySelector('.modal-header');

    if (stickyTitle) stickyTitle.textContent = p.title;
    
    // Banner de sección dinámico
    const sectionBanner = document.getElementById('modal-section-banner');
    if (sectionBanner) {
        sectionBanner.classList.remove('visible');
        sectionBanner.textContent = '';
    }

    if (modalContent) {
        modalContent.scrollTop = 0;
        modalContent.onscroll = () => {
            if (modalContent.scrollTop > 10) {
                modalHeader.classList.add('scrolled');
            } else {
                modalHeader.classList.remove('scrolled');
            }

            // Banner de sección dinámico: detectar título oculto
            if (sectionBanner) {
                const sections = document.querySelectorAll('.modal-section');
                const modalRect = modalContent.getBoundingClientRect();
                const modalTop = modalRect.top;
                
                let activeSection = null;
                let anyTitleVisible = false;

                sections.forEach(sec => {
                    const titleEl = sec.querySelector('.section-title');
                    if (!titleEl) return;
                    
                    const titleRect = titleEl.getBoundingClientRect();

                    // 1. ¿Este título ya pasó el sticky header (80px)?
                    if (titleRect.bottom < modalTop + 80) {
                        activeSection = sec;
                    }
                    
                    // 2. ¿Este título está visible y claro en la pantalla (debajo del header)?
                    if (titleRect.top >= modalTop + 80 && titleRect.top < modalTop + 500) {
                        anyTitleVisible = true;
                    }
                });

                if (activeSection && !anyTitleVisible) {
                    const titleStr = activeSection.querySelector('.section-title').textContent;
                    sectionBanner.textContent = titleStr;
                    sectionBanner.classList.add('visible');
                } else {
                    sectionBanner.classList.remove('visible');
                }
            }
        };

        // Eliminar observer anterior si existía
        if (window.modalObserver) {
            window.modalObserver.disconnect();
            window.modalObserver = null;
        }
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
        <h2 style="font-size:36px; margin:10px 0;">${p.title}</h2>
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
                                    <dotlottie-player src="${url}" background="transparent" speed="1" loop autoplay></dotlottie-player>
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
                    
                    <img src="${sec.image}" class="section-full-img" alt="${sec.title}" onerror="this.style.display='none'">
                    
                    ${lottieHTML}
                    
                    <div class="section-detail">${sec.detail}</div>
                </div>
                `;
            }).join('')}
        </div>
    `;
    document.getElementById('project-modal').style.display = 'block';
    document.body.classList.add('modal-open');
}

function openTab(section) {
    const titleMap = {
        'exp': T.ui.exp,
        'edu': T.ui.edu
    };

    const title = titleMap[section] || section;
    const body = document.getElementById('modal-body');
    const stickyTitle = document.getElementById('modal-sticky-title');

    if (stickyTitle) stickyTitle.textContent = title;

    let itemsHTML = '';
    if (section === 'exp') {
        itemsHTML = (DB.experience || []).map(item => `
            <div class="timeline-item">
                <div class="timeline-date">${item.period}</div>
                <div class="timeline-marker">
                    <div class="timeline-dot"></div>
                </div>
                <div class="timeline-content">
                    <div class="timeline-card">
                        <h4>${item.company}</h4>
                        <p>${item.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
    } else if (section === 'edu') {
        itemsHTML = (DB.education || []).map(item => `
            <div class="timeline-item">
                <div class="timeline-date">${item.year}</div>
                <div class="timeline-marker">
                    <div class="timeline-dot"></div>
                </div>
                <div class="timeline-content">
                    <div class="timeline-card">
                        <h4>${item.institution}</h4>
                        <p>${item.degree}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    body.innerHTML = `
        <span style="color:var(--muted-text); font-size:12px; font-weight:600;">${T.ui.section}</span>
        <h2 style="font-size:48px; margin:10px 0;">${title}</h2>
        <div class="timeline-container">
            ${itemsHTML}
        </div>
    `;

    document.getElementById('project-modal').style.display = 'block';
    document.body.classList.add('modal-open');
}

function closeModal() {
    if (window.modalObserver) window.modalObserver.disconnect();
    const sectionBanner = document.getElementById('modal-section-banner');
    if (sectionBanner) sectionBanner.classList.remove('visible');
    
    document.getElementById('project-modal').style.display = 'none';
    document.body.classList.remove('modal-open');
}

// THEME PERSISTENCE & INITIALIZATION
function initTheme() {
    const storedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;

    if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.getElementById('themeText').textContent = T.ui.toggleLight;
        document.getElementById('themeIcon').textContent = 'light_mode';
        btn.setAttribute('data-tooltip', T.ui.themeLight);
    } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('themeText').textContent = T.ui.toggleDark;
        document.getElementById('themeIcon').textContent = 'dark_mode';
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
            document.getElementById('themeText').textContent = T.ui.toggleLight;
            document.getElementById('themeIcon').textContent = 'light_mode';
            btn.setAttribute('data-tooltip', T.ui.themeLight);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.getElementById('themeText').textContent = T.ui.toggleDark;
            document.getElementById('themeIcon').textContent = 'dark_mode';
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
