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
                    detail: "Al asumir el proyecto, realicé entrevistas con los custodios para identificar dolores en terreno y dificultades en el monitoreo. Ejecuté un <b>rediseño integral</b> enfocado en la simplicidad y la reducción de carga cognitiva. <br><br><b>Mis hipótesis de diseño:</b> <br><ul><li><b>Centralización:</b> Si conectamos la data con Saphiro, eliminamos la falta de visibilidad y aceleramos la respuesta ante incidentes.</li><li><b>Minimalismo y jerarquía visual:</b> Si simplificamos la interfaz al mínimo, reduciremos el error humano en un 90% mediante procesos automatizados.</li><li><b>Validación con IA:</b> Si utilizamos modelos de IA, podremos anticipar fallos operativos antes del despliegue.</li></ul>"
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
                    title: "Proactividad: Push Automation y Comandos de Voz",
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
                    title: "Sistema de diseño: Modo oscuro, Variables y Tokens",
                    description: "Construcción de un ecosistema visual flexible y accesible para todas las plataformas.",
                    image: "projects/app-centaurus/sc-7.png",
                    detail: "Para garantizar una experiencia óptima en cualquier condición de iluminación, construí un <b>sistema de diseño con soporte nativo para Modo Oscuro</b>. <br><br><b>Puntos clave del desarrollo:</b> <br><ul><li><b>Gestión de Fatiga Visual:</b> Diseñamos el modo oscuro específicamente para reducir el cansancio visual de los custodios durante servicios nocturnos o en cabinas de baja luz.</li><li><b>Alineación Técnica (Design Tokens):</b> Colaboré estrechamente con el equipo de tecnología para definir una nomenclatura uniforme de variables, asegurando que el nombre de los colores fuera idéntico en diseño y desarrollo.</li><li><b>Accesibilidad Garantizada:</b> Auditamos cada contraste para asegurar que todos los componentes fueran legibles y accesibles en ambos modos, cumpliendo con estándares de usabilidad para entornos críticos.</li></ul>"
                },
                {
                    title: "Prototipo",
                    description: "Navegación interactiva de la App Centaurus 2.0.",
                    detail: "<iframe src='https://player.vimeo.com/video/1186110597?title=0&byline=0&portrait=0' width='100%' style='aspect-ratio: 16/9; border-radius: 16px;' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>"
                },
                {
                    title: "Conclusión: Resultados e Impacto",
                    description: "De la suposición a la data estructurada y confiable.",
                    image: "projects/centaurus/impacto-final.png",
                    detail: "Centaurus transformó la ceguera operativa en <b>evidencia real</b>. Al digitalizar el terreno, logramos métricas que impactaron directamente en la rentabilidad del negocio: <div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Eficiencia Operativa</span><span class='kpi-value'>-120h</span><span class='kpi-desc'>mensuales ahorradas en revisión de chats y transcripción manual.</span></div><div class='kpi-card'><span class='kpi-label'>Precisión de Data</span><span class='kpi-value'>98%</span><span class='kpi-desc'>de efectividad en el registro de sucesos, reduciendo drásticamente el ruido informativo.</span></div><div class='kpi-card'><span class='kpi-label'>Satisfacción (NPS)</span><span class='kpi-value'>+45%</span><span class='kpi-desc'>de mejora en el sentimiento del custodio gracias al registro sin conexión y la visibilidad de sus evidencias de gastos.</span></div></div><br><br>¿Quieres verla en acción? <a href='https://play.google.com/store/apps/details?id=io.detectasecurity.centaurus&hl=es' target='_blank' class='blue-link'>Descarga la App Centaurus en Google Play ↗</a>.<br>Para entender el ecosistema completo, te invito a revisar el detalle del proyecto de la <a href='#' class='blue-link' onclick='openProject(\"detecta-monitoring-console\"); return false;'>Consola de Monitoreo</a>."
                }
            ]
        },
        {
            id: "hubbing",
            title: "Hubbing",
            category: "product",
            tagline: "Plataforma web y apps móviles para gestión interna.",
            tags: ["Sistema de Gestión", "Web Platform", "Mobile Apps", "UX/UI", "Figma"],
            image: "projects/hubbing/hero.png",
            challenge: "Diseño de una plataforma integral de gestión interna que centraliza operaciones, equipos y flujos de trabajo en una sola interfaz web y móvil.",
            description: "Desarrollé la experiencia UX/UI de <b>Hubbing Latam</b>: un sistema de gestión interna con plataforma web y apps móviles nativas, enfocado en centralizar procesos operativos y mejorar la eficiencia de los equipos.",
            externalLink: "https://www.behance.net/gallery/198662859/Hubbing-Latam-Web-Platform-and-Mobile-Apps"
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
                    "detail": "Cerramos el ecosistema con dos herramientas clave: <ul><li><b>Vista de Coordinador:</b> Permite supervisar el cumplimiento de tiempos de todo el equipo y reasignar servicios manualmente si un operador está saturado.</li><li><b>Alertas Sonoras Inteligentes:</b> Implementamos un sistema de notificaciones de audio para monitoristas y coordinadores. Los sonidos varían en intensidad (sutiles para reportes de rutina e incrementales para alertas críticas), permitiendo reaccionar a incidentes sin necesidad de estar mirando la pantalla constantemente.</li><li><b>Portal del Cliente:</b> Los clientes pueden visualizar sus reportes y 'Solicitar Reporte' bajo demanda, lo que mueve automáticamente su servicio al <b>Top 1 de la lista</b> en la consola de monitoreo.</li></ul>"
                },
                {
                    "title": "Sistema de diseño: Accesibilidad y Componentización",
                    "description": "Ampliación del sistema de diseño de Detecta para la nueva consola de monitoreo.",
                    "image": "projects/monitoring/sc-7.png",
                    "detail": "Para este proyecto, extendí el sistema de diseño existente enfocándome en la eficiencia operativa y la claridad visual bajo estrés. <br><br><b>Puntos clave:</b> <br><ul><li><b>Legibilidad y Contraste:</b> Implementamos estándares de accesibilidad AA, asegurando que cada componente fuera legible incluso en jornadas de monitoreo prolongadas y bajo diferentes condiciones lumínicas de oficina.</li><li><b>Variables y Tokens:</b> Construí una librería de variables semánticas que alinean perfectamente el diseño con el código, permitiendo que el equipo de desarrollo implementara componentes complejos de forma ágil y sin fricciones.</li><li><b>Eficiencia Técnica:</b> La creación de componentes modulares y reutilizables redujo significativamente el tiempo de construcción de la plataforma, garantizando una consistencia visual absoluta en todo el ecosistema de Detecta.</li></ul>"
                },
                {
                    "title": "Prototipo",
                    "description": "Navegación interactiva de la consola de monitoreo.",
                    "detail": "<iframe src='https://player.vimeo.com/video/1187143635?title=0&byline=0&portrait=0' width='100%' style='aspect-ratio: 16/9; border-radius: 16px;' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>"
                },
                {
                    "title": "Impacto y Resultados (KPIs)",
                    "description": "Resultados tangibles de la implementación del sistema.",
                    "detail": "<div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Tiempo de Respuesta</span><span class='kpi-value'>15 min</span><span class='kpi-desc'>Promedio de reporte alcanzado tras la optimización, superando el compromiso inicial de 25 min.</span></div><div class='kpi-card'><span class='kpi-label'>Precisión de Datos</span><span class='kpi-value'>98%</span><span class='kpi-desc'>En trazabilidad histórica y facturación gracias a la validación de detenciones.</span></div><div class='kpi-card'><span class='kpi-label'>SLA Compliance</span><span class='kpi-value'>100%</span><span class='kpi-desc'>Cumplimiento medible y auditable del compromiso de reporte con el cliente.</span></div></div>"
                },
                {
                    "title": "Conclusión: De la reactividad a la cultura operativa",
                    "description": "Un sistema que transformó el cómo trabaja el equipo, no solo las herramientas.",
                    "detail": "La Consola de Monitoreo no fue solo un rediseño de interfaz: fue el catalizador de un cambio cultural dentro del equipo operativo. Al estructurar el trabajo alrededor de <b>datos en tiempo real y protocolos claros</b>, transformamos la intuición individual en un proceso reproducible y auditable. <ul><li><b>Impacto en el equipo:</b> Los monitoristas pasaron de operar con ansiedad y herramientas dispersas a trabajar con certeza, sabiendo exactamente a qué atender y cuándo.</li><li><b>Impacto en el negocio:</b> Cumplir el SLA de 25 minutos de forma consistente fortaleció la confianza del cliente y posicionó a Detecta Security como un referente de seguridad preventiva en el mercado.</li><li><b>Base para escalar:</b> La arquitectura del sistema está diseñada para crecer: nuevas reglas, nuevos roles y nuevas integraciones pueden incorporarse sin romper el flujo existente.</li></ul>"
                }
            ]
        },
        {
            id: "torre-control",
            title: "Torre de control",
            category: "product",
            tagline: "Centralización y automatización de flotas logísticas.",
            isConstruction: false,
            image: "projects/control-tower/hero.png",
            tags: ["Logística de Seguridad", "Eficiencia Operativa", "SASS", "Figma"],
            challenge: "La fragmentación de datos causada por múltiples proveedores de GPS obligaba a los clientes a monitorear hasta <b>300 cuentas espejo independientes</b>. Esta dispersión generaba una ceguera operativa crítica, donde la detección de un incidente ocurría cuando la recuperación del activo ya era irreversible.",
            description: "Diseñamos un <b>Hub de centralización agnóstico</b> que unifica APIs de rastreo en una sola interfaz proactiva. El sistema transforma la vigilancia manual en una gestión por excepción, utilizando algoritmos visuales y alertas sonoras para garantizar una respuesta inmediata ante riesgos en ruta.",
            details: {
                role: "Lead Product Designer",
                client: "Detecta Security",
                pillar: "Interoperabilidad y Eficiencia Operativa",
                platform: "Web (Desktop-First)",
                focus: "SaaS / Torre de Control / Respuesta ante Emergencias"
            },
            sections: [
                {
                    title: "Introducción: El Costo del Silencio y la Fragmentación",
                    description: "Contexto de seguridad logística y el desafío de las Cuentas Espejo.",
                    detail: "<div class='context-stats'><div class='context-stat-card'><span class='context-stat-value'>$7,000 MDP</span><span class='context-stat-label'>pérdidas anuales por robo al transporte de carga en México</span></div><div class='context-stat-card'><span class='context-stat-value'>300</span><span class='context-stat-label'>Cuentas Espejo individuales que cada cliente gestionaba manualmente</span></div><div class='context-stat-card'><span class='context-stat-value'>3 horas</span><span class='context-stat-label'>de ciclos de revisión manual, permitiendo que los incidentes fueran ya irreversibles</span></div></div><ul><li><b>El Caos Inicial:</b> Revisar manualmente cada unidad tomaba ciclos de hasta 3 horas, permitiendo que un incidente fuera detectado cuando ya era irreversible.</li><li><b>La Transformación:</b> Diseñamos <b>Torre de Control</b>, un Hub que unifica APIs de rastreo en una interfaz proactiva para eliminar el 'gap' de tiempo entre el evento y la reacción.</li></ul>"
                },
                {
                    title: "Diagnóstico y Hipótesis de Diseño",
                    description: "Definiendo la estrategia basada en la Gestión por Excepción.",
                    image: "projects/control-tower/sc-1.png",
                    detail: "Partimos de la premisa de que el valor del diseño no es mostrar datos, sino facilitar decisiones bajo estrés. Establecimos tres hipótesis críticas: <ul><li><b>Centralización:</b> Unificar proveedores en una fuente única de verdad reduciría el tiempo de detección de incidentes en un 80%.</li><li><b>Eficiencia Operativa:</b> Priorizar visualmente solo lo que requiere acción (alertas) liberaría el 70% del ancho de banda del operador.</li><li><b>Diseño Sensorial:</b> Sonidos de alerta desde leves hasta intensos permitiría una atención inmediata sin dependencia visual absoluta.</li></ul>"
                },
                {
                    title: "Diseño para el Estado de Flujo: Flexibilidad de Vistas",
                    description: "Equilibrando simplicidad y densidad de datos según el contexto.",
                    image: "projects/control-tower/sc-2.png",
                    detail: "Entendimos que el operador alterna entre el monitoreo general y el análisis profundo. Diseñamos dos modos de visualización: <ul><li><b>Vista de Tarjetas (Cards):</b> Una interfaz minimalista con información mínima viable, ideal para una supervisión rápida de alertas y estados generales.</li><li><b>Vista de Lista (Data Grid):</b> Diseñada para la máxima eficiencia operativa, permitiendo gestionar detalles críticos (ID, Origen, Destino, ETA) de múltiples servicios sin navegar individualmente.</li></ul>"
                },
                {
                    title: "Alertas Sonoras y Accesibilidad Cognitiva",
                    description: "Diseño sensorial para la reducción del tiempo de reacción.",
                    image: "projects/control-tower/sc-3.png",
                    detail: "Para liberar la vista del operador y reducir el estrés, implementamos un <b>Ecosistema de Notificaciones Sonoras Inteligentes</b>: <ul><li><b>Nivel Informativo:</b> Tonos tenues para hitos de rutina (Llegada a origen, punto de detención o destino).</li><li><b>Nivel Medio:</b> Alertas como detención prolongada o exceso de velocidad.</li><li><b>Nivel Crítico:</b> Alarmas de alta frecuencia para emergencias, botones de pánico o desviaciones de ruta.</li><li><b>Valor:</b> El operador puede reaccionar a un incidente crítico de forma inmediata, incluso si no está fijando la vista en la pantalla en ese instante.</li></ul>"
                },
                {
                    title: "Detalle del Servicio: Arquitectura de Información Proactiva",
                    description: "Visibilidad total del viaje y trazabilidad telemétrica.",
                    image: "projects/control-tower/sc-4.png",
                    detail: "Al profundizar en un servicio, la interfaz se adapta a la capacidad técnica del dispositivo: <ul><li><b>Control de Ruta y Geocercas:</b> Visualización del trazado planeado vs. real para detección inmediata de desvíos.</li><li><b>Timeline de Detenciones:</b> Registro preciso de paradas autorizadas y no autorizadas.</li><li><b>Telemetría Adaptativa:</b> Integración dinámica de datos (velocidad, coordenadas, sensores) según el proveedor del GPS.</li></ul>"
                },
                {
                    title: "Gobernanza y Ecosistema de Seguridad",
                    description: "Definiendo flujos de trabajo para múltiples stakeholders.",
                    image: "projects/control-tower/sc-5.png",
                    detail: "Torre de Control escala el acceso según el rol para mantener la integridad del negocio: <ul><li><b>Operadores:</b> Foco en respuesta rápida a alertas e incidentes.</li><li><b>Transportes:</b> Autogestión de flotas y carga masiva de cuentas espejo.</li><li><b>Administradores:</b> Auditoría total de logs y configuración de reglas de negocio personalizadas.</li></ul>"
                },
                {
                    title: "Prototipo",
                    description: "Video del flujo en construcción.",
                    detail: "<div style='padding:40px 0; text-align:center; color:var(--muted-text); font-style:italic;'>🚧 Video del flujo en construcción — Próximamente se agregará un prototipo interactivo detallando el flujo completo de la Torre de Control.</div>"
                },
                {
                    title: "Impacto y Resultados (KPIs)",
                    description: "Resultados tangibles de la implementación del Hub.",

                    detail: "<div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Centralización</span><span class='kpi-value'>100%</span><span class='kpi-desc'>De las cuentas espejo unificadas en un solo comando central.</span></div><div class='kpi-card'><span class='kpi-label'>Tiempo de Reacción</span><span class='kpi-value'>Inmediato</span><span class='kpi-desc'>Reducción drástica del gap de respuesta gracias a la jerarquía sonora y visual.</span></div><div class='kpi-card'><span class='kpi-label'>Carga Cognitiva</span><span class='kpi-value'>Mínima</span><span class='kpi-desc'>Optimización del bienestar del operador al eliminar el monitoreo de 300 pestañas.</span></div></div>"
                },
                {
                    title: "Conclusión: Escalabilidad y Automatización",
                    description: "Visión de producto y colaboración técnica.",
                    detail: "El éxito de Torre de Control radica en su capacidad de adaptación. Trabajamos intensamente con el <b>equipo técnico</b> para preparar un ecosistema capaz de automatizar flujos críticos mediante reglas de negocio dinámicas. <ul><li><b>Personalización Operativa:</b> Cada cliente puede definir qué eventos son críticos para su operación, transformando una herramienta de monitoreo en un motor de automatización inteligente.</li><li><b>Diseño Estratégico:</b> Esta colaboración asegura que el producto no solo resuelva el problema actual, sino que esté listo para escalar hacia una gestión autónoma de la seguridad logística.</li></ul>"
                }
            ]
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
                    title: "Proactivity: Push Automation and Voice Commands",
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
                    title: "Design System: Dark Mode, Variables & Tokens",
                    description: "Building a flexible and accessible visual ecosystem for all platforms.",
                    image: "projects/app-centaurus/sc-7.png",
                    detail: "To ensure an optimal experience in any lighting condition, I built a <b>design system with native Dark Mode support</b>. <br><br><b>Key development highlights:</b> <br><ul><li><b>Visual Fatigue Management:</b> We designed dark mode specifically to reduce eye strain for escorts during night shifts or in low-light cab environments.</li><li><b>Technical Alignment (Design Tokens):</b> I collaborated closely with the engineering team to define a unified variable naming convention, ensuring color names were identical in design and development.</li><li><b>Guaranteed Accessibility:</b> We audited every contrast ratio to ensure all components were readable and accessible in both modes, meeting usability standards for critical environments.</li></ul>"
                },
                {
                    title: "Prototype",
                    description: "Interactive walkthrough of Centaurus App 2.0.",
                    detail: "<iframe src='https://player.vimeo.com/video/1186110597?title=0&byline=0&portrait=0' width='100%' style='aspect-ratio: 16/9; border-radius: 16px;' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>"
                },
                {
                    title: "Conclusion: Results and Impact",
                    description: "From guesswork to structured and reliable data.",
                    image: "projects/centaurus/impacto-final.png",
                    detail: "Centaurus transformed operational blindness into <b>real evidence</b>. By digitizing the field, we achieved metrics that directly impacted business profitability: <div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Operational Efficiency</span><span class='kpi-value'>-120h</span><span class='kpi-desc'>saved monthly in chat reviews and manual transcription.</span></div><div class='kpi-card'><span class='kpi-label'>Data Accuracy</span><span class='kpi-value'>98%</span><span class='kpi-desc'>effectiveness in event logging, drastically reducing informational noise.</span></div><div class='kpi-card'><span class='kpi-label'>Satisfaction (NPS)</span><span class='kpi-value'>+45%</span><span class='kpi-desc'>improvement in escort sentiment thanks to offline logging and the visibility of their expense evidence.</span></div></div><br><br>Want to see it in action? <a href='https://play.google.com/store/apps/details?id=io.detectasecurity.centaurus&hl=es' target='_blank' class='blue-link'>Download the Centaurus App on Google Play ↗</a>.<br>To understand the complete ecosystem, I invite you to review the details of the <a href='#' class='blue-link' onclick='openProject(\"detecta-monitoring-console\"); return false;'>Monitoring Console</a> project."
                }
            ]
        },
        {
            id: "hubbing",
            title: "Hubbing",
            category: "product",
            tagline: "Web platform and mobile apps for internal management.",
            tags: ["Management System", "Web Platform", "Mobile Apps", "UX/UI", "Figma"],
            image: "projects/hubbing/hero.png",
            challenge: "Design of a comprehensive internal management platform that centralizes operations, teams, and workflows in a single web and mobile interface.",
            description: "I designed the UX/UI experience for <b>Hubbing Latam</b>: an internal management system with a web platform and native mobile apps, focused on centralizing operational processes and improving team efficiency.",
            externalLink: "https://www.behance.net/gallery/198662859/Hubbing-Latam-Web-Platform-and-Mobile-Apps"
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
                    "detail": "We closed the ecosystem with two key tools: <ul><li><b>Coordinator View:</b> Enables supervision of the entire team's time compliance and manual reassignment of services if an operator is overloaded.</li><li><b>Smart Audio Alerts:</b> We implemented an audio notification system for monitors and coordinators. Sounds vary in intensity (subtle for routine reports and escalating for critical alerts), enabling reaction to incidents without needing to constantly watch the screen.</li><li><b>Client Portal:</b> Clients can view their reports and 'Request Report' on demand, which automatically moves their service to the <b>Top 1 of the list</b> in the monitoring console.</li></ul>"
                },
                {
                    "title": "Design System: Accessibility & Componentization",
                    "description": "Expanding the Detecta design system for the new monitoring console.",
                    "image": "projects/monitoring/sc-7.png",
                    "detail": "For this project, I extended the existing design system focusing on operational efficiency and visual clarity under stress. <br><br><b>Key highlights:</b> <br><ul><li><b>Readability & Contrast:</b> We implemented AA accessibility standards, ensuring every component was legible even during long monitoring shifts and under varying office lighting conditions.</li><li><b>Variables & Tokens:</b> I built a library of semantic variables that perfectly align design with code, allowing the development team to implement complex components quickly and smoothly.</li><li><b>Technical Efficiency:</b> The creation of modular, reusable components significantly reduced the platform's build time, ensuring absolute visual consistency across the entire Detecta ecosystem.</li></ul>"
                },
                {
                    "title": "Prototype",
                    "description": "Interactive walkthrough of the monitoring console.",
                    "detail": "<iframe src='https://player.vimeo.com/video/1187143635?title=0&byline=0&portrait=0' width='100%' style='aspect-ratio: 16/9; border-radius: 16px;' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>"
                },
                {
                    "title": "Impact and Results (KPIs)",
                    "description": "Tangible results from the system implementation.",
                    "detail": "<div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Response Time</span><span class='kpi-value'>15 min</span><span class='kpi-desc'>Average reporting time achieved after optimization, surpassing the initial 25 min commitment.</span></div><div class='kpi-card'><span class='kpi-label'>Data Accuracy</span><span class='kpi-value'>98%</span><span class='kpi-desc'>In historical traceability and billing thanks to stop validation.</span></div><div class='kpi-card'><span class='kpi-label'>SLA Compliance</span><span class='kpi-value'>100%</span><span class='kpi-desc'>Measurable and auditable compliance of the reporting commitment with the client.</span></div></div>"
                },
                {
                    "title": "Conclusion: From Reactivity to Operational Culture",
                    "description": "A system that transformed how the team works, not just the tools they use.",
                    "detail": "The Monitoring Console was not just an interface redesign: it was the catalyst for a cultural shift within the operational team. By structuring work around <b>real-time data and clear protocols</b>, we transformed individual intuition into a reproducible, auditable process. <ul><li><b>Team impact:</b> Monitors went from operating with anxiety and scattered tools to working with certainty — knowing exactly what to attend to and when.</li><li><b>Business impact:</b> Consistently meeting the 25-minute SLA strengthened client trust and positioned Detecta Security as a benchmark for preventive security in the market.</li><li><b>Foundation to scale:</b> The system architecture is designed to grow: new rules, new roles, and new integrations can be incorporated without breaking the existing flow.</li></ul>"
                }
            ]
        },
        {
            id: "torre-control",
            title: "Control Tower",
            category: "product",
            tagline: "Centralization and automation of logistics fleets.",
            isConstruction: false,
            image: "projects/control-tower/hero.png",
            tags: ["Security Logistics", "Operational Efficiency", "SASS", "Figma"],
            challenge: "Data fragmentation caused by multiple GPS providers forced clients to monitor up to <b>300 independent mirror accounts</b>. This dispersion created critical operational blindness, where incident detection occurred when asset recovery was already irreversible.",
            description: "We designed an <b>agnostic centralization Hub</b> that unifies tracking APIs into a single proactive interface. The system transforms manual surveillance into exception-based management, using visual algorithms and audio alerts to guarantee an immediate response to route risks.",
            details: {
                role: "Lead Product Designer",
                client: "Detecta Security",
                pillar: "Interoperability & Operational Efficiency",
                platform: "Web (Desktop-First)",
                focus: "SaaS / Control Tower / Emergency Response"
            },
            sections: [
                {
                    title: "Introduction: The Cost of Silence and Fragmentation",
                    description: "Logistics security context and the Mirror Accounts challenge.",
                    detail: "<div class='context-stats'><div class='context-stat-card'><span class='context-stat-value'>$7,000 MDP</span><span class='context-stat-label'>annual losses from freight theft in Mexico alone</span></div><div class='context-stat-card'><span class='context-stat-value'>300</span><span class='context-stat-label'>individual Mirror Accounts each client manually managed</span></div><div class='context-stat-card'><span class='context-stat-value'>3 hours</span><span class='context-stat-label'>manual review cycles, letting incidents become irreversible before detection</span></div></div><ul><li><b>The Initial Chaos:</b> Manually reviewing each unit took up to 3-hour cycles, allowing an incident to be detected only when it was already irreversible.</li><li><b>The Transformation:</b> We designed <b>Control Tower</b>, a Hub that unifies tracking APIs into a proactive interface to eliminate the time gap between the event and the reaction.</li></ul>"
                },
                {
                    title: "Diagnosis and Design Hypotheses",
                    description: "Defining the strategy based on Exception Management.",
                    image: "projects/control-tower/sc-1.png",
                    detail: "We started from the premise that the value of design is not to display data, but to facilitate decisions under stress. We established three critical hypotheses: <ul><li><b>Centralization:</b> Unifying providers into a single source of truth would reduce incident detection time by 80%.</li><li><b>Operational Efficiency:</b> Visually prioritizing only what requires action (alerts) would free up 70% of the operator's bandwidth.</li><li><b>Sensory Design:</b> Alert sounds ranging from mild to intense would allow immediate attention without absolute visual dependency.</li></ul>"
                },
                {
                    title: "Designing for Flow State: View Flexibility",
                    description: "Balancing simplicity and data density based on context.",
                    image: "projects/control-tower/sc-2.png",
                    detail: "We understood that the operator alternates between general monitoring and deep analysis. We designed two visualization modes: <ul><li><b>Card View:</b> A minimalist interface with minimum viable information, ideal for quick alert supervision and general status checks.</li><li><b>List View (Data Grid):</b> Designed for maximum operational efficiency, allowing management of critical details (ID, Origin, Destination, ETA) of multiple services without individual navigation.</li></ul>"
                },
                {
                    title: "Audio Alerts and Cognitive Accessibility",
                    description: "Sensory design for reaction time reduction.",
                    image: "projects/control-tower/sc-3.png",
                    detail: "To free the operator's attention and reduce stress, we implemented an <b>Intelligent Sound Notification Ecosystem</b>: <ul><li><b>Informational Level:</b> Subtle tones for routine milestones (Arrival at origin, stopover, or destination).</li><li><b>Medium Level:</b> Alerts such as prolonged stops or speeding.</li><li><b>Critical Level:</b> High-frequency alarms for emergencies, panic buttons, or route deviations.</li><li><b>Value:</b> The operator can react to a critical incident immediately, even if they are not looking at the screen at that moment.</li></ul>"
                },
                {
                    title: "Service Detail: Proactive Information Architecture",
                    description: "Total journey visibility and telemetric traceability.",
                    image: "projects/control-tower/sc-4.png",
                    detail: "When diving into a service, the interface adapts to the technical capability of the device: <ul><li><b>Route Control and Geofencing:</b> Visualization of planned vs. actual route for immediate deviation detection.</li><li><b>Stop Timeline:</b> Precise log of authorized and unauthorized stops.</li><li><b>Adaptive Telemetry:</b> Dynamic integration of data (speed, coordinates, sensors) based on the GPS provider.</li></ul>"
                },
                {
                    title: "Governance and Security Ecosystem",
                    description: "Defining workflows for multiple stakeholders.",
                    image: "projects/control-tower/sc-5.png",
                    detail: "Control Tower scales access by role to maintain business integrity: <ul><li><b>Operators:</b> Focus on rapid response to alerts and incidents.</li><li><b>Carriers:</b> Fleet self-management and bulk uploading of mirror accounts.</li><li><b>Administrators:</b> Full log auditing and configuration of custom business rules.</li></ul>"
                },
                {
                    title: "Prototype",
                    description: "Flow video under construction.",
                    detail: "<div style='padding:40px 0; text-align:center; color:var(--muted-text); font-style:italic;'>🚧 Flow video under construction — An interactive prototype detailing the full Control Tower flow will be added soon.</div>"
                },
                {
                    title: "Impact and Results (KPIs)",
                    description: "Tangible results from the Hub implementation.",

                    detail: "<div class='kpi-grid'><div class='kpi-card'><span class='kpi-label'>Centralization</span><span class='kpi-value'>100%</span><span class='kpi-desc'>Of mirror accounts unified in a single central command.</span></div><div class='kpi-card'><span class='kpi-label'>Reaction Time</span><span class='kpi-value'>Immediate</span><span class='kpi-desc'>Dramatic reduction of the response gap thanks to the sound and visual hierarchy.</span></div><div class='kpi-card'><span class='kpi-label'>Cognitive Load</span><span class='kpi-value'>Minimal</span><span class='kpi-desc'>Optimization of operator wellbeing by eliminating the monitoring of 300 tabs.</span></div></div>"
                },
                {
                    title: "Conclusion: Scalability and Automation",
                    description: "Product vision and technical collaboration.",
                    detail: "The success of Control Tower lies in its adaptability. We worked intensively with the <b>technical team</b> to prepare an ecosystem capable of automating critical flows through dynamic business rules. <ul><li><b>Operational Customization:</b> Each client can define which events are critical to their operation, transforming a monitoring tool into an intelligent automation engine.</li><li><b>Strategic Design:</b> This collaboration ensures that the product not only solves the current problem, but is ready to scale toward autonomous logistics security management.</li></ul>"
                }
            ]
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