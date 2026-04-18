const DB_ES = {
    projects: [
        {
            id: "centaurus",
            title: "App Centaurus 2.0",
            category: "product",
            tagline: "Visibilidad total y control operativo de sucesos en ruta.",
            tags: ["Logística de Seguridad", "Eficiencia Operativa", "Animaciones", "App para celulares"],
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
                    title: "Conclusión: Resultados e Impacto",
                    description: "De la suposición a la data estructurada y confiable.",
                    image: "projects/app-centaurus/sc-6.png",
                    detail: "Centaurus transformó la ceguera operativa en <b>evidencia real</b>. Al digitalizar el terreno, logramos métricas que impactaron directamente en la rentabilidad del negocio: <div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Eficiencia Operativa</span><span class='kpi-value'>-120h</span><span class='kpi-desc'>mensuales ahorradas en revisión de chats de WhatsApp y transcripción manual.</span></div><div class='kpi-card'><span class='kpi-label'>Precisión de Data</span><span class='kpi-value'>90%</span><span class='kpi-desc'>de reducción en el ruido informativo y errores de reporte en canales internos.</span></div><div class='kpi-card'><span class='kpi-label'>Satisfacción (NPS)</span><span class='kpi-value'>+45%</span><span class='kpi-desc'>de mejora en el sentimiento del custodio gracias a la visibilidad de sus evidencias de pago.</span></div></div> Para entender el ecosistema completo, te invito a revisar el detalle del proyecto de la <b>Consola de monitoreo</b>."
                }
            ]
        },
        {
            id: "hubbing-latam",
            title: "Hubbing Latam",
            category: "product",
            tagline: "Web Platform & Mobile Apps para logística internacional.",
            tags: ["Logística Internacional", "SaaS", "Cross-border"],
            image: "projects/hubbing/hero.png",
            externalLink: "https://www.behance.net/gallery/198662859/Hubbing-Latam-Web-Platform-and-Mobile-Apps"
        },
        {
            id: "consola-monitoreo",
            title: "Consola de monitoreo",
            category: "product",
            tagline: "En construcción",
            isConstruction: true,
            image: "projects/saphiro.jpg",
            tags: ["Logística", "Dashboard"],
            description: "En construcción"
        },
        {
            id: "torre-control",
            title: "Torre de control",
            category: "product",
            tagline: "En construcción",
            isConstruction: true,
            image: "projects/app-finder.jpg",
            tags: ["Logística", "Monitoreo"],
            description: "En construcción"
        },
        {
            id: "suitable-1",
            title: "Suitable - Animación de proceso logístico",
            category: "animation",
            tagline: "Proceso logístico animado",
            image: "projects/suitable.jpg",
            externalLink: "https://www.behance.net/gallery/130881673/Suitable-Business-logistic-process"
        },
        {
            id: "suitable-2",
            title: "Suitable - 4 animaciones",
            category: "animation",
            tagline: "Set de 4 animaciones Lottie",
            image: "projects/suitable.jpg",
            externalLink: "https://www.behance.net/gallery/140125135/Logistic-Process-Part-2-LottieFiles-Animations"
        },
        {
            id: "teatro-argentino",
            title: "Identidad visual - Teatro Argentino de la plata",
            category: "animation",
            tagline: "Diseño de identidad visual",
            image: "projects/suitable.jpg",
            externalLink: "https://www.behance.net/gallery/78036325/Identidad-Teatro-Argentino-de-la-Plata"
        }
    ],
    experience: [
        {
            company: "BELOG IT",
            period: "2023 - 2024",
            role: "Product Designer"
        },
        {
            company: "FIERA STUDIO",
            period: "2021 - 2022",
            role: "Ux Ui Motion"
        },
        {
            company: "EDUCAEDU",
            period: "2017 - 2021",
            role: "Diseñador Web / de Contenidos"
        },
        {
            company: "POTENCIAL DIGITAL",
            period: "2015 - 2017",
            role: "Diseñador Web Junior"
        }
    ],
    education: [
        {
            institution: "UNIVERSIDAD TECNOLÓGICA NACIONAL (UTN)",
            year: "2025",
            degree: "Diplomatura en Product Management",
            status: "Finalizado"
        },
        {
            institution: "UNIVERSIDAD TECNOLÓGICA NACIONAL (UTN)",
            year: "2023",
            degree: "Posgrado en Gestión de Proyectos",
            status: "Finalizado"
        },
        {
            institution: "UNIVERSIDAD TECNOLÓGICA NACIONAL (UTN)",
            year: "2019",
            degree: "Diplomatura, UX y Accesibilidad",
            status: "Finalizado"
        },
        {
            institution: "UNIVERSIDAD DE BUENOS AIRES (UBA)",
            year: "2018",
            degree: "Licenciatura en Diseño Gráfico",
            status: "Finalizado"
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
            tags: ["Security Logistics", "Operational Efficiency", "Animations", "Mobile App"],
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
                    title: "Conclusion: The Value of Evidence",
                    description: "From assumption to structured and reliable data.",
                    image: "projects/app-centaurus/sc-6.png",
                    detail: "Centaurus transformed operational blindness into <b>real evidence</b>. By digitizing the field, we achieved metrics that directly impacted business profitability: <div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Operational Efficiency</span><span class='kpi-value'>-120h</span><span class='kpi-desc'>monthly saved in WhatsApp chat review and manual transcription.</span></div><div class='kpi-card'><span class='kpi-label'>Data Precision</span><span class='kpi-value'>90%</span><span class='kpi-desc'>reduction in information noise and reporting errors in internal channels.</span></div><div class='kpi-card'><span class='kpi-label'>Satisfaction (NPS)</span><span class='kpi-value'>+45%</span><span class='kpi-desc'>improvement in escort sentiment thanks to visibility of their payment evidence.</span></div></div> To understand the full ecosystem, I invite you to review the details of the <b>Monitoring Console</b> project."
                }
            ]
        },
        {
            id: "hubbing-latam",
            title: "Hubbing Latam",
            category: "product",
            tagline: "Web Platform & Mobile Apps for international logistics.",
            tags: ["International Logistics", "SaaS", "Cross-border"],
            image: "projects/hubbing/hero.png",
            externalLink: "https://www.behance.net/gallery/198662859/Hubbing-Latam-Web-Platform-and-Mobile-Apps"
        },
        {
            id: "consola-monitoreo",
            title: "Monitoring Console",
            category: "product",
            tagline: "Under construction",
            isConstruction: true,
            image: "projects/saphiro.jpg",
            tags: ["Logistics", "Dashboard"],
            description: "Under construction"
        },
        {
            id: "torre-control",
            title: "Control Tower",
            category: "product",
            tagline: "Under construction",
            isConstruction: true,
            image: "projects/app-finder.jpg",
            tags: ["Logistics", "Monitoring"],
            description: "Under construction"
        },
        {
            id: "suitable-1",
            title: "Suitable - Logistic process animation",
            category: "animation",
            tagline: "Animated logistic process",
            image: "projects/suitable.jpg",
            externalLink: "https://www.behance.net/gallery/130881673/Suitable-Business-logistic-process"
        },
        {
            id: "suitable-2",
            title: "Suitable - 4 animations",
            category: "animation",
            tagline: "Set of 4 Lottie animations",
            image: "projects/suitable.jpg",
            externalLink: "https://www.behance.net/gallery/140125135/Logistic-Process-Part-2-LottieFiles-Animations"
        },
        {
            id: "teatro-argentino",
            title: "Visual Identity - Teatro Argentino de la plata",
            category: "animation",
            tagline: "Visual identity design",
            image: "projects/suitable.jpg",
            externalLink: "https://www.behance.net/gallery/78036325/Identidad-Teatro-Argentino-de-la-Plata"
        }
    ],
    experience: [
        {
            company: "BELOG IT",
            period: "2023 - 2024",
            role: "Product Designer"
        },
        {
            company: "FIERA STUDIO",
            period: "2021 - 2022",
            role: "Ux Ui Motion"
        },
        {
            company: "EDUCAEDU",
            period: "2017 - 2021",
            role: "Diseñador Web / de Contenidos"
        },
        {
            company: "POTENCIAL DIGITAL",
            period: "2015 - 2017",
            role: "Diseñador Web Junior"
        }
    ],
    education: [
        {
            institution: "NATIONAL TECHNOLOGICAL UNIVERSITY (UTN)",
            year: "2025",
            degree: "Product Management Diploma",
            status: "Completed"
        },
        {
            institution: "NATIONAL TECHNOLOGICAL UNIVERSITY (UTN)",
            year: "2023",
            degree: "Postgraduate in Project Management",
            status: "Completed"
        },
        {
            institution: "NATIONAL TECHNOLOGICAL UNIVERSITY (UTN)",
            year: "2019",
            degree: "Diploma, UX and Accessibility",
            status: "Completed"
        },
        {
            institution: "UNIVERSITY OF BUENOS AIRES (UBA)",
            year: "2018",
            degree: "Bachelor of Graphic Design",
            status: "Completed"
        }
    ]
};

const DB = document.documentElement.lang === 'en' ? DB_EN : DB_ES;