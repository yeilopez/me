const DB_ES = {
    projects: [
        {
            id: "centaurus",
            title: "App Centaurus 2.0",
            category: "product",
            tagline: "Visibilidad total y control operativo de sucesos en ruta.",
            tags: ["Logística de Seguridad", "Eficiencia Operativa", "Animaciones", "App para celulares", "Figma"],
            image: "projects/app-centaurus/hero.png",
            challenge: "La falta de visibilidad en terreno de las custodias físicas de camiones que impedía conocer el estado real de los servicios, limitando la respuesta ante <b>sucesos en ruta</b> y generando una ceguera informativa que impactaba directamente en la facturación y seguridad.",
            description: "Desarrollamos una experiencia <b>End-to-End</b> proactiva integrada a la consola de monitoreo, donde el sistema sugiere e inicia acciones automáticamente para garantizar la trazabilidad total mediante una interfaz de alta eficiencia y con soporte sin conexión.",
            details: {
                role: "Senior Product / Motion Designer",
                client: "Detecta Security / Centaurus 2.0",
                pillar: "Visibilidad y Eficiencia Operativa",
                platform: "App Mobile (Android)",
                focus: "Integración con <b>la consola de monitoreo interna</b> y eliminación del 90% del ruido informativo en canales de reporte."
            },
            sections: [
                {
                    title: "Contexto: Seguridad logística en tiempo real",
                    description: "<b>Detecta Security</b> ofrece soluciones tecnológicas de custodia física y rastreo satelital para evitar robos de transportes de carga.",
                    detail: "La app Centaurus nació para digitalizar la custodia física de vehículos y reemplazar un ecosistema fragmentado. Hasta ese momento, clientes, custodios y operadores coordinaban servicios mediante grupos de WhatsApp. Esta informalidad causaba una pérdida masiva de información crítica: las transcripciones de llamadas y los reportes manuales dificultaban el seguimiento en terreno, impidiendo una respuesta rápida ante incidentes."
                },
                {
                    title: "V1.0: El bache de la ingeniería",
                    description: "Una digitalización funcional pero desconectada de la realidad del custodio.",
                    image: "projects/app-centaurus/sc-1.png",
                    detail: "La primera versión fue diseñada solo por el equipo técnico, priorizando la funcionalidad sobre la experiencia. Su interfaz densa obligaba al custodio a navegar flujos complejos bajo alto estrés. Además, el sistema no permitía registros sin conexión, una falla crítica en rutas con señal inestable. Esto resultó en un rechazo constante de los usuarios y data imprecisa para el equipo de monitoreo."
                },
                {
                    title: "Mi Intervención: Diagnóstico y Rediseño",
                    description: "Transformando la herramienta en un activo centrado en el usuario y el negocio.",
                    image: "projects/app-centaurus/sc-2.png",
                    detail: "Al asumir el proyecto, realicé entrevistas con los custodios para identificar dolores en terreno y dificultades en el monitoreo. Ejecuté un <b>rediseño integral</b> enfocado en la simplicidad y la reducción de carga cognitiva. <br><br><b>Mis hipótesis de diseño:</b> <br><ul><li><b>Centralización:</b> Si conectamos la data con Saphiro, eliminamos la falta de visibilidad y aceleramos la respuesta ante incidentes.</li><li><b>Minimalismo y jerarquía visual:</b> If we simplify the interface to the minimum, we will reduce human error by 90% through automated processes.</li><li><b>Validación con IA:</b> Si utilizamos modelos de IA, podremos anticipar fallos operativos antes del despliegue.</li></ul>"
                },
                {
                    title: "Aprendizaje continuo: Ajustes de Campo",
                    description: "Validación ágil para adaptar la app al comportamiento humano real.",
                    image: "projects/app-centaurus/sc-3.png",
                    detail: "Trabajamos en ciclos ágiles junto a la Product Owner y Customer Success. <b>Hitos clave:</b> <br><ul><li><b>Usuarios Sintéticos:</b> Generamos perfiles con IA basados en entrevistas para validar decisiones rápidamente.</li><li><b>Pivot de Gastos:</b> Al detectar que los custodios preferían fotos grupales de evidencias, cambiamos la carga individual por masiva (margen 48h), eliminando horas de retrabajo administrativo.</li><li><b>Visibilidad del Estado (Nielsen #1):</b> Añadimos indicadores de sincronización detallados. Esto dio certeza al usuario sobre si su información fue recibida, logrando que el 100% de los custodios reportara satisfacción con la visibilidad de su trabajo.</li></ul>"
                },
                {
                    title: "Ejecución: Arquitectura Sin Conexión",
                    description: "Garantizando la trazabilidad operativa incluso sin conectividad.",
                    image: "projects/app-centaurus/sc-4.png",
                    detail: "Diseñamos una arquitectura <b>sin conexión</b> que permite el registro ininterrumpido de eventos en zonas sin señal. Esta solución eliminó la ansiedad del custodio por la pérdida de datos y garantizó que la consola de monitoreo recibiera información precisa de forma asincrónica, reduciendo la fricción operativa en un 70%."
                },
                {
                    title: "Proactividad: Push Automation y Voz",
                    description: "Un asistente pasivo que prioriza la seguridad y la respuesta rápida.",
                    image: "projects/app-centaurus/sc-5.png",
                    detail: "Implementamos un motor de reglas que activa <b>notificaciones Push proactivas</b>: si el custodio no responde, el sistema actúa automáticamente. Además, integramos comandos de voz para una operación <b>hands-free</b>, permitiendo reportar hitos críticos sin desviar la vista del camino, minimizando riesgos de accidentes y optimizando la atención en ruta."
                },
                {
                    title: "Feedback Visual: Microinteracciones",
                    description: "Reforzando la comunicación del sistema a través del movimiento.",
                    lotties: [
                        "projects/app-centaurus/Sucess_confetti.json",
                        "projects/app-centaurus/Onboarding-1.json",
                        "projects/app-centaurus/Onboarding-2.json"
                    ],
                    detail: "Reforcé secciones clave con <b>microinteracciones realizadas en Lottie</b>. Estas animaciones no solo mejoran la estética, sino que sirven como confirmación visual inmediata de acciones exitosas y estados de carga, humanizando la tecnología y guiando al custodio de forma intuitiva durante su jornada."
                },
                {
                    title: "Prototipo",
                    description: "Navegación interactiva de la App Centaurus 2.0.",
                    detail: "<div style='padding:40px 0; text-align:center; color:var(--muted-text); font-style:italic;'>🚧 Video en construcción — Próximamente se agregará un prototipo interactivo en Vimeo.</div>"
                },
                {
                    title: "Conclusión: Resultados e Impacto",
                    description: "De la suposición a la data estructurada y confiable.",
                    image: "projects/centaurus/impacto-final.png",
                    detail: "Centaurus transformó la ceguera operativa en <b>evidencia real</b>. Al digitalizar el terreno, logramos métricas que impactaron directamente en la rentabilidad del negocio: <div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Eficiencia Operativa</span><span class='kpi-value'>-120h</span><span class='kpi-desc'>mensuales ahorradas en revisión de chats y transcripción manual.</span></div><div class='kpi-card'><span class='kpi-label'>Precisión de Data</span><span class='kpi-value'>98%</span><span class='kpi-desc'>de efectividad en el registro de sucesos, reduciendo drásticamente el ruido informativo.</span></div><div class='kpi-card'><span class='kpi-label'>Satisfacción (NPS)</span><span class='kpi-value'>+45%</span><span class='kpi-desc'>de mejora en el sentimiento del custodio gracias al registro sin conexión y la visibilidad de sus evidencias de gastos.</span></div></div> Para entender el ecosistema completo, te invito a revisar el detalle del proyecto de la <a href='#' class='blue-link' onclick='openProject(\"detecta-monitoring-console\"); return false;'>Consola de Monitoreo</a>."
                }
            ]
        },
        {
            "id": "detecta-monitoring-console",
            "title": "Consola de Monitoreo",
            "category": "product",
            "tagline": "De la reactividad al control proactivo: Cumpliendo promesas de seguridad logística.",
            "tags": ["Control Tower", "SLA Strategy", "Product Strategy", "Crisis Management"],
            "image": "projects/monitoring/hero.png",
            "challenge": "Garantizar el cumplimiento del compromiso de reporte cada 25 minutos y eliminar la brecha de información que permitía que los clientes detectaran incidentes antes que el equipo interno.",
            "description": "Rediseño integral del centro de control operativo. Transformamos un ecosistema fragmentado (WhatsApp/Excel) en una plataforma unificada que integra telemetría, comunicaciones VoIP y protocolos de emergencia automatizados.",
            "details": {
                "role": "Lead Product Designer",
                "client": "Detecta Security",
                "pillar": "Business Impact & Operational Reliability",
                "platform": "Web (Desktop-First)",
                "focus": "SaaS / Control Tower / Emergency Response"
            },
            "sections": [
                {
                    "title": "Contexto: La promesa de Detecta Security",
                    "description": "El modelo de negocio basado en la seguridad preventiva.",
                    "image": "projects/monitoring/sc-1.png",
                    "detail": "Detecta Security ofrece custodia física para transporte de carga pesada. <b>Nuestro valor diferencial es la seguridad preventiva</b>. <ul><li><b>El Compromiso (SLA):</b> La empresa garantiza por contrato un reporte de estado cada 25 minutos por cada servicio en ruta.</li><li><b>El Caos Inicial:</b> Antes de mi intervención, los monitoristas operaban con Excels manuales y grupos de WhatsApp, lo que impedía medir el tiempo real transcurrido entre reportes y causaba que el cliente detectara anomalías antes que la propia central.</li></ul>"
                },
                {
                    "title": "Diagnóstico y Lógica de Priorización Temporal",
                    "description": "Definiendo el algoritmo visual basado en la visibilidad del tiempo.",
                    "image": "projects/monitoring/sc-2.png",
                    "detail": "Tras auditar el proceso, establecimos que el diseño debía dictar el orden de atención basándose estrictamente en el <b>tiempo de vida del reporte</b>: <ul><li><b>Priorización por Antigüedad:</b> El sistema ordena automáticamente los servicios que llevan más tiempo sin reportar en la parte superior.</li><li><b>Visibilidad del Contador:</b> Al completar un reporte, el contador se reinicia a cero y el servicio se desplaza al final del listado. Esto permite un flujo circular de atención constante para asegurar el cumplimiento del compromiso de 25 minutos.</li><li><b>Excepciones Críticas:</b> Las alertas de seguridad rompen esta cola temporal, posicionándose arriba de todo para una intervención inmediata.</li></ul>"
                },
                {
                    "title": "Iteración y Pivot: El aprendizaje del fallo",
                    "description": "Cómo el testeo de usabilidad redefinió la arquitectura.",
                    "image": "projects/monitoring/sc-3.png",
                    "detail": "Nuestra primera propuesta separaba la interfaz en dos columnas (servicios y alertas). <b>Los tests revelaron una confusión crítica</b>: los monitoristas no percibían la urgencia del panel lateral. <blockquote>'Pensé que la derecha era un buzón de mensajes secundarios, no alertas de seguridad críticas'.</blockquote> <ul><li><b>El Cambio:</b> Eliminamos la división de columnas para unificar el flujo. Ahora, las alertas se ubican arriba de todo, forzando la atención inmediata.</li><li><b>Feedback Clave:</b> Integramos un botón de 'Copiar coordenadas' con un solo clic, permitiendo informar a autoridades de forma instantánea bajo presión.</li></ul>"
                },
                {
                    "title": "Comunicaciones y Continuidad Operativa",
                    "description": "Centralizando la evidencia y eliminando teléfonos externos.",
                    "image": "projects/monitoring/sc-4.png",
                    "detail": "Centralizamos la operación para eliminar la dispersión de información: <ul><li><b>Contexto en < 2 Minutos:</b> Gracias al historial, un monitorista entrante puede entender todo lo ocurrido en un servicio en menos de 2 minutos, eliminando la fricción con el cliente por pérdida de información en cambios de turno.</li><li><b>Auditoría Total:</b> Las evidencias registradas en terreno se vinculan automáticamente al historial del servicio, centralizando la 'verdad' de la operación y eliminando el uso de múltiples plataformas de información.</li></ul>"
                },
                {
                    "title": "Protocolo de Emergencia y Voz IP",
                    "description": "Diseño para el estrés con comunicaciones integradas.",
                    "image": "projects/monitoring/sc-5.png",
                    "detail": "Diseñamos un <b>asistente de emergencia paso a paso</b> que integra telefonía VoIP para una respuesta letal: <ul><li><b>Llamadas Tripartitas:</b> El monitorista puede enlazar simultáneamente al custodio, al 911 y al coordinador desde la misma interfaz sin perder el hilo del protocolo.</li><li><b>Automatización de Alertas:</b> Mientras el monitorista sigue el flujo guiado, el sistema llama automáticamente a los líderes de seguridad en orden jerárquico.</li><li><b>Cierre de Crisis:</b> La emergencia la inicia el monitorista pero la documentación final y el cierre técnico lo realiza el Coordinador, asegurando una bitácora profesional y completa.</li></ul>"
                },
                {
                    "title": "Gobernanza Macro, Feedback Sonoro y Portal del Cliente",
                    "description": "Ecosistema para coordinadores y transparencia para el cliente.",
                    "image": "projects/monitoring/sc-6.png",
                    "detail": "Cerramos el ecosistema con dos herramientas clave: <ul><li><b>Vista de Coordinador:</b> Permite supervisar el cumplimiento de tiempos de todo el equipo y reasignar servicios dinámicamente si un operador está saturado.</li><li><b>Alertas Sonoras Inteligentes:</b> Implementamos un sistema de notificaciones de audio para monitoristas y coordinadores. Los sonidos varían en intensidad (sutiles para reportes de rutina e incrementales para alertas críticas), permitiendo reaccionar a incidentes sin necesidad de estar mirando la pantalla constantemente.</li><li><b>Portal del Cliente:</b> Los clientes pueden visualizar sus reportes y 'Solicitar Reporte' bajo demanda, lo que mueve automáticamente su servicio al <b>Top 1 de la lista</b> en la consola de monitoreo.</li></ul>"
                },
                {
                    "title": "Prototipo",
                    "description": "Navegación interactiva de la consola de monitoreo.",
                    "detail": "<div style='padding:40px 0; text-align:center; color:var(--muted-text); font-style:italic;'>🚧 Video en construcción — Próximamente se agregará un prototipo interactivo detallando el flujo de emergencia y llamadas.</div>"
                },
                {
                    "title": "Impacto y Resultados (KPIs)",
                    "description": "Resultados tangibles de la implementación del sistema.",
                    "image": "projects/monitoring/sc-7.png",
                    "detail": "<div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Tiempo de Respuesta</span><span class='kpi-value'>15 min</span><span class='kpi-desc'>Promedio de reporte alcanzado tras la optimización, superando el compromiso inicial de 25 min.</span></div><div class='kpi-card'><span class='kpi-label'>Precisión de Datos</span><span class='kpi-value'>98%</span><span class='kpi-desc'>En trazabilidad histórica y facturación gracias a la validación de detenciones.</span></div><div class='kpi-card'><span class='kpi-label'>SLA Compliance</span><span class='kpi-value'>100%</span><span class='kpi-desc'>Cumplimiento medible y auditable del compromiso de reporte con el cliente.</span></div></div>"
                }
            ]
        },
        {
            id: "torre-control",
            title: "Torre de control",
            category: "product",
            tagline: "En construcción",
            isConstruction: true,
            image: "projects/tower/hero.png",
            tags: ["Logística", "Monitoreo", "Figma"],
            description: "En construcción"
        },
        {
            id: "suitable-1",
            title: "Suitable - Animación de proceso logístico",
            category: "animation",
            tagline: "Proceso logístico animado",
            tags: ["Figma"],
            image: "projects/suitable/hero.png",
            externalLink: "https://www.behance.net/gallery/130881673/Suitable-Business-logistic-process"
        },
        {
            id: "suitable-2",
            title: "Suitable - 4 animaciones",
            category: "animation",
            tagline: "Set de 4 animaciones Lottie",
            tags: ["Figma"],
            image: "projects/suitable/4-a.png",
            externalLink: "https://www.behance.net/gallery/140125135/Logistic-Process-Part-2-LottieFiles-Animations"
        },
        {
            id: "teatro-argentino",
            title: "Identidad visual - Teatro Argentino de la plata",
            category: "animation",
            tagline: "Diseño de identidad visual",
            tags: ["Figma"],
            image: "projects/ta/hero.png",
            externalLink: "https://www.behance.net/gallery/78036325/Identidad-Teatro-Argentino-de-la-Plata"
        }
    ],
    experience: [
        {
            company: "DETECTA SECURITY",
            period: "2024 - 2026",
            role: "Product designer",
            location: "Remoto (México)"
        },
        {
            company: "BELOG IT",
            period: "2023 - 2024",
            role: "Product designer",
            location: "Híbrido (Argentina)"
        },
        {
            company: "FIERA STUDIO",
            period: "2021 - 2022",
            role: "UX UI Motion",
            location: "Híbrido (Argentina)"
        },
        {
            company: "EDUCAEDU",
            period: "2017 - 2021",
            role: "Contenido web / Ui design",
            location: "Presencial (Argentina)"
        },
        {
            company: "POTENCIAL DIGITAL",
            period: "2015 - 2017",
            role: "Diseñador web junior",
            location: "Presencial (Argentina)"
        }
    ],
    education: [
        {
            institution: "UNIVERSIDAD TECNOLÓGICA NACIONAL (UTN)",
            year: "Fin. 2023",
            degree: "Posgrado en Gestión de Proyectos",
            type: "superior"
        },
        {
            institution: "UNIVERSIDAD TECNOLÓGICA NACIONAL (UTN)",
            year: "Fin. 2019",
            degree: "Diplomatura, UX y Accesibilidad",
            type: "superior"
        },
        {
            institution: "UNIVERSIDAD DE BUENOS AIRES (UBA)",
            year: "Fin. 2018",
            degree: "Carrera de Diseño Gráfico",
            type: "superior"
        },
        {
            institution: "NELSON RODRÍGUEZ-PEÑA",
            year: "Fin. 2024",
            degree: "IA para Diseñadores",
            type: "curso"
        },
        {
            institution: "SOL MESZ",
            year: "Fin. 2024",
            degree: "Métricas y Diseño",
            type: "curso"
        },
        {
            institution: "SOL MESZ",
            year: "Fin. 2022",
            degree: "Product Designer",
            type: "curso"
        },
        {
            institution: "CENTRO UNIVERSITARIO DE IDIOMAS (CUI)",
            year: "Fin. 2022",
            degree: "Inglés",
            type: "curso"
        }
    ]
};

const DB_EN = {
    projects: [
        {
            id: "centaurus",
            title: "Centaurus App 2.0",
            category: "product",
            tagline: "Full visibility and operational control of route events.",
            tags: ["Security Logistics", "Operational Efficiency", "Animations", "Mobile App", "Figma"],
            image: "projects/app-centaurus/hero.png",
            challenge: "The lack of field visibility in physical truck escorts prevented knowing the real status of services, limiting response to <b>route events</b> and generating information blindness that directly impacted billing and security.",
            description: "We developed a proactive <b>End-to-End</b> experience integrated into the monitoring console, where the system automatically suggests and initiates actions to ensure total traceability through a high-efficiency interface with offline support.",
            details: {
                role: "Senior Product / Motion Designer",
                client: "Detecta Security / Centaurus 2.0",
                pillar: "Visibility and Operational Efficiency",
                platform: "Mobile App (Android)",
                focus: "Integration with <b>internal monitoring console</b> and elimination of 90% of information noise in reporting channels."
            },
            sections: [
                {
                    title: "Context: Real-time logistics security",
                    description: "<b>Detecta Security</b> offers physical escort and satellite tracking technology solutions to prevent freight theft.",
                    detail: "The Centaurus app was born to digitize physical vehicle escorts and replace a fragmented ecosystem. Until that moment, clients, escorts, and operators coordinated services through WhatsApp groups. This informality caused a massive loss of critical information: call transcriptions and manual reports made field tracking difficult, preventing a quick response to incidents."
                },
                {
                    title: "V1.0: The engineering gap",
                    description: "A functional but disconnected digitization from the escort's reality.",
                    image: "projects/app-centaurus/sc-1.png",
                    detail: "The first version was designed only by the technical team, prioritizing functionality over experience. Its dense interface forced the escort to navigate complex flows under high stress. Furthermore, the system did not allow offline logs, a critical failure in routes with unstable signal. This resulted in constant user rejection and imprecise data for the monitoring team."
                },
                {
                    title: "My Intervention: Diagnosis and Redesign",
                    description: "Transforming the tool into an asset centered on the user and the business.",
                    image: "projects/app-centaurus/sc-2.png",
                    detail: "Upon taking over the project, I conducted interviews with escorts to identify field pain points and monitoring difficulties. I executed an <b>integral redesign</b> focused on simplicity and reduction of cognitive load. <br><br><b>My design hypotheses:</b> <br><ul><li><b>Centralization:</b> If we connect the data with Saphiro, we eliminate information blindness and accelerate incident response.</li><li><b>Minimalism and visual hierarchy:</b> If we simplify the interface to the minimum, we will reduce human error by 90% through automated processes.</li><li><b>AI Validation:</b> If we use AI models, we can anticipate operational failures before deployment.</li></ul>"
                },
                {
                    title: "Continuous Learning: Field Adjustments",
                    description: "Agile validation to adapt the app to real human behavior.",
                    image: "projects/app-centaurus/sc-3.png",
                    detail: "We worked in agile cycles with the Product Owner and Customer Success. <b>Key milestones:</b> <br><ul><li><b>Synthetic Users:</b> We generated AI-based profiles from interviews to quickly validate decisions.</li><li><b>Expense Pivot:</b> Noticing escorts preferred group photos of evidence, we changed individual uploads to bulk uploads (48h window), eliminating hours of administrative rework.</li><li><b>Status Visibility (Nielsen #1):</b> We added detailed synchronization indicators. This gave users certainty about their information being received, achieving 100% escort satisfaction with their work visibility.</li></ul>"
                },
                {
                    title: "Execution: Offline Architecture",
                    description: "Guaranteed operational traceability even without connectivity.",
                    image: "projects/app-centaurus/sc-4.png",
                    detail: "We designed an <b>offline-first</b> architecture that allows uninterrupted event logging in signal-free areas. This solution eliminated escort anxiety about data loss and guaranteed the monitoring console received precise information asynchronously, reducing operational friction by 70%."
                },
                {
                    title: "Proactivity: Push Automation and Voice",
                    description: "A passive assistant that prioritizes security and quick response.",
                    image: "projects/app-centaurus/sc-5.png",
                    detail: "We implemented a rules engine that triggers <b>proactive Push notifications</b>: if the escort doesn't respond, the system acts automatically. Additionally, we integrated voice commands for <b>hands-free</b> operation, allowing reporting of critical milestones without taking eyes off the road, minimizing accident risks."
                },
                {
                    title: "Visual Feedback: Microinteractions",
                    description: "Reinforcing system communication through movement.",
                    lotties: [
                        "projects/app-centaurus/Sucess_confetti.json",
                        "projects/app-centaurus/Onboarding-1.json",
                        "projects/app-centaurus/Onboarding-2.json"
                    ],
                    detail: "I reinforced key sections with <b>Lottie microinteractions</b>. These animations not only improve aesthetics but serve as immediate visual confirmation of successful actions and loading states, humanizing technology and guiding the escort intuitively during their day."
                },
                {
                    title: "Prototype",
                    description: "Interactive walkthrough of Centaurus App 2.0.",
                    detail: "<div style='padding:40px 0; text-align:center; color:var(--muted-text); font-style:italic;'>🚧 Video under construction — An interactive Vimeo prototype will be added soon.</div>"
                },
                {
                    title: "Conclusion: Results and Impact",
                    description: "From guesswork to structured and reliable data.",
                    image: "projects/centaurus/impacto-final.png",
                    detail: "Centaurus transformed operational blindness into <b>real evidence</b>. By digitizing the field, we achieved metrics that directly impacted business profitability: <div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Operational Efficiency</span><span class='kpi-value'>-120h</span><span class='kpi-desc'>saved monthly in chat reviews and manual transcription.</span></div><div class='kpi-card'><span class='kpi-label'>Data Accuracy</span><span class='kpi-value'>98%</span><span class='kpi-desc'>effectiveness in event logging, drastically reducing informational noise.</span></div><div class='kpi-card'><span class='kpi-label'>Satisfaction (NPS)</span><span class='kpi-value'>+45%</span><span class='kpi-desc'>improvement in escort sentiment thanks to offline logging and the visibility of their expense evidence.</span></div></div> To understand the complete ecosystem, I invite you to review the details of the <a href='#' class='blue-link' onclick='openProject(\"detecta-monitoring-console\"); return false;'>Monitoring Console</a> project."
                }
            ]
        },
        {
            "id": "detecta-monitoring-console",
            "title": "Monitoring Console",
            "category": "product",
            "tagline": "From reactivity to proactive control: Fulfilling logistics security promises.",
            "tags": ["Control Tower", "SLA Strategy", "Product Strategy", "Crisis Management"],
            "image": "projects/monitoring/hero.png",
            "challenge": "Ensuring compliance with the 25-minute reporting commitment and eliminating the information gap that allowed clients to detect incidents before the internal team.",
            "description": "End-to-end redesign of the operational control center. We transformed a fragmented ecosystem (WhatsApp/Excel) into a unified platform integrating telemetry, VoIP communications, and automated emergency protocols.",
            "details": {
                "role": "Lead Product Designer",
                "client": "Detecta Security",
                "pillar": "Business Impact & Operational Reliability",
                "platform": "Web (Desktop-First)",
                "focus": "SaaS / Control Tower / Emergency Response"
            },
            "sections": [
                {
                    "title": "Context: Detecta Security's Promise",
                    "description": "The business model built on preventive security.",
                    "image": "projects/monitoring/sc-1.png",
                    "detail": "Detecta Security provides physical escort for heavy cargo transportation. <b>Our differentiator is preventive security</b>. <ul><li><b>The Commitment (SLA):</b> The company contractually guarantees a status report every 25 minutes for each service in transit.</li><li><b>The Initial Chaos:</b> Before my intervention, monitors operated with manual Excel spreadsheets and WhatsApp groups, making it impossible to measure the actual time elapsed between reports and causing clients to detect anomalies before the control center itself.</li></ul>"
                },
                {
                    "title": "Diagnosis and Temporal Prioritization Logic",
                    "description": "Defining the visual algorithm based on time visibility.",
                    "image": "projects/monitoring/sc-2.png",
                    "detail": "After auditing the process, we established that the design had to dictate the order of attention based strictly on <b>report lifetime</b>: <ul><li><b>Age-based Prioritization:</b> The system automatically sorts the services that have gone the longest without reporting to the top.</li><li><b>Counter Visibility:</b> Upon completing a report, the counter resets to zero and the service moves to the bottom of the list. This enables a circular flow of constant attention to ensure compliance with the 25-minute commitment.</li><li><b>Critical Exceptions:</b> Security alerts break this temporal queue, positioning themselves at the very top for immediate intervention.</li></ul>"
                },
                {
                    "title": "Iteration and Pivot: Learning from Failure",
                    "description": "How usability testing redefined the architecture.",
                    "image": "projects/monitoring/sc-3.png",
                    "detail": "Our first proposal separated the interface into two columns (services and alerts). <b>Testing revealed a critical confusion</b>: monitors didn't perceive the urgency of the side panel. <blockquote>'I thought the right side was a secondary message inbox, not critical security alerts.'</blockquote> <ul><li><b>The Change:</b> We eliminated the column division to unify the flow. Now, alerts are placed at the very top, forcing immediate attention.</li><li><b>Key Feedback:</b> We integrated a one-click 'Copy coordinates' button, enabling instant reporting to authorities under pressure.</li></ul>"
                },
                {
                    "title": "Communications and Operational Continuity",
                    "description": "Centralizing evidence and eliminating external phones.",
                    "image": "projects/monitoring/sc-4.png",
                    "detail": "We centralized operations to eliminate information dispersion: <ul><li><b>Context in < 2 Minutes:</b> Thanks to the history log, an incoming monitor can understand everything that occurred in a service in under 2 minutes, eliminating client friction from information loss during shift changes.</li><li><b>Total Audit Trail:</b> Field evidence is automatically linked to the service history, centralizing the operational 'truth' and eliminating the use of multiple information platforms.</li></ul>"
                },
                {
                    "title": "Emergency Protocol and VoIP",
                    "description": "Designing for stress with integrated communications.",
                    "image": "projects/monitoring/sc-5.png",
                    "detail": "We designed a <b>step-by-step emergency assistant</b> integrating VoIP telephony for a lethal response: <ul><li><b>Three-way Calls:</b> The monitor can simultaneously connect the escort, 911, and the coordinator from the same interface without losing track of the protocol.</li><li><b>Alert Automation:</b> While the monitor follows the guided flow, the system automatically calls security leaders in hierarchical order.</li><li><b>Crisis Closure:</b> The emergency is initiated by the monitor but the final documentation and technical closure is performed by the Coordinator, ensuring a professional and complete log.</li></ul>"
                },
                {
                    "title": "Macro Governance, Audio Feedback, and Client Portal",
                    "description": "Ecosystem for coordinators and transparency for clients.",
                    "image": "projects/monitoring/sc-6.png",
                    "detail": "We closed the ecosystem with two key tools: <ul><li><b>Coordinator View:</b> Enables supervision of the entire team's time compliance and dynamic reassignment of services if an operator is overloaded.</li><li><b>Smart Audio Alerts:</b> We implemented an audio notification system for monitors and coordinators. Sounds vary in intensity (subtle for routine reports and escalating for critical alerts), enabling reaction to incidents without needing to constantly watch the screen.</li><li><b>Client Portal:</b> Clients can view their reports and 'Request Report' on demand, which automatically moves their service to the <b>Top 1 of the list</b> in the monitoring console.</li></ul>"
                },
                {
                    "title": "Prototype",
                    "description": "Interactive walkthrough of the monitoring console.",
                    "detail": "<div style='padding:40px 0; text-align:center; color:var(--muted-text); font-style:italic;'>🚧 Video under construction — An interactive prototype detailing the emergency and call flow will be added soon.</div>"
                },
                {
                    "title": "Impact and Results (KPIs)",
                    "description": "Tangible results from the system implementation.",
                    "image": "projects/monitoring/sc-7.png",
                    "detail": "<div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Response Time</span><span class='kpi-value'>15 min</span><span class='kpi-desc'>Average reporting time achieved after optimization, surpassing the initial 25 min commitment.</span></div><div class='kpi-card'><span class='kpi-label'>Data Accuracy</span><span class='kpi-value'>98%</span><span class='kpi-desc'>In historical traceability and billing thanks to stop validation.</span></div><div class='kpi-card'><span class='kpi-label'>SLA Compliance</span><span class='kpi-value'>100%</span><span class='kpi-desc'>Measurable and auditable compliance of the reporting commitment with the client.</span></div></div>"
                }
            ]
        },
        {
            id: "torre-control",
            title: "Control Tower",
            category: "product",
            tagline: "Under construction",
            isConstruction: true,
            image: "projects/tower/hero.png",
            tags: ["Logistics", "Monitoring", "Figma"],
            description: "Under construction"
        },
        {
            id: "suitable-1",
            title: "Suitable - Logistic process animation",
            category: "animation",
            tagline: "Animated logistic process",
            tags: ["Figma"],
            image: "projects/suitable/hero.png",
            externalLink: "https://www.behance.net/gallery/130881673/Suitable-Business-logistic-process"
        },
        {
            id: "suitable-2",
            title: "Suitable - 4 animations",
            category: "animation",
            tagline: "Set of 4 Lottie animations",
            tags: ["Figma"],
            image: "projects/suitable/4-a.png",
            externalLink: "https://www.behance.net/gallery/140125135/Logistic-Process-Part-2-LottieFiles-Animations"
        },
        {
            id: "teatro-argentino",
            title: "Visual Identity - Teatro Argentino de la plata",
            category: "animation",
            tagline: "Visual identity design",
            tags: ["Figma"],
            image: "projects/ta/hero.png",
            externalLink: "https://www.behance.net/gallery/78036325/Identidad-Teatro-Argentino-de-la-Plata"
        }
    ],
    experience: [
        {
            company: "DETECTA SECURITY",
            period: "2024 - 2026",
            role: "Product designer",
            location: "Remote (Mexico)"
        },
        {
            company: "BELOG IT",
            period: "2023 - 2024",
            role: "Product designer",
            location: "Hybrid (Argentina)"
        },
        {
            company: "FIERA STUDIO",
            period: "2021 - 2022",
            role: "UX UI Motion",
            location: "Hybrid (Argentina)"
        },
        {
            company: "EDUCAEDU",
            period: "2017 - 2021",
            role: "Web Content / Ui design",
            location: "On-site (Argentina)"
        },
        {
            company: "POTENCIAL DIGITAL",
            period: "2015 - 2017",
            role: "Junior Web Designer",
            location: "On-site (Argentina)"
        }
    ],
    education: [
        {
            institution: "NATIONAL TECHNOLOGICAL UNIVERSITY (UTN)",
            year: "End. 2023",
            degree: "Postgraduate in Project Management",
            type: "superior"
        },
        {
            institution: "NATIONAL TECHNOLOGICAL UNIVERSITY (UTN)",
            year: "End. 2019",
            degree: "Diploma, UX and Accessibility",
            type: "superior"
        },
        {
            institution: "UNIVERSITY OF BUENOS AIRES (UBA)",
            year: "End. 2018",
            degree: "Bachelor of Graphic Design",
            type: "superior"
        },
        {
            institution: "NELSON RODRÍGUEZ-PEÑA",
            year: "End. 2024",
            degree: "AI for Designers",
            type: "curso"
        },
        {
            institution: "SOL MESZ",
            year: "End. 2024",
            degree: "Metrics & Design",
            type: "curso"
        },
        {
            institution: "SOL MESZ",
            year: "End. 2022",
            degree: "Product Designer",
            type: "curso"
        },
        {
            institution: "LANGUAGES UNIVERSITY CENTER (CUI)",
            year: "End. 2022",
            degree: "English",
            type: "curso"
        }
    ]
};

const DB = document.documentElement.lang === 'en' ? DB_EN : DB_ES;