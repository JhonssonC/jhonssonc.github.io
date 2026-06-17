// Bilingual dictionary
const translations = {
    es: {
        nav_about: "Sobre mí",
        nav_skills: "Habilidades",
        nav_experience: "Experiencia",
        nav_education: "Educación",
        nav_contact: "Contacto",
        hero_tag: "INGENIERO DE SISTEMAS & OBSERVABILIDAD",
        hero_lead: "Ingeniero de Sistemas con más de 10 años de experiencia especializado en desarrollo backend (Python/Django/Odoo), observabilidad a gran escala (Datadog/AppDynamics) y automatización de procesos (RPA). Apasionado por la eficiencia operativa y la automatización inteligente.",
        btn_cv: "Descargar CV (Word)",
        btn_contact: "Contáctame",
        dashboard_title: "Tablero de Observabilidad del CV",
        tab_system: "Sistema",
        tab_traces: "Trazas APM",
        tab_logs: "Registros RPA",
        metric_uptime: "Disponibilidad",
        metric_latency: "Latencia Promedio",
        metric_cpu: "Carga CPU",
        metric_saved: "Tiempo Ahorrado (RPA)",
        sec_skills: "Habilidades Técnicas",
        sec_experience: "Experiencia Profesional",
        sec_education: "Educación & Certificaciones",
        sec_contact: "Información de Contacto",
        contact_lead: "¿Quieres trabajar juntos o tienes alguna pregunta? ¡Escríbeme!",
        contact_loc: "Ubicación",
        footer_text: "Diseñado con ❤️ por Jhonsson Córdova. © 2026. Todos los derechos reservados.",
        
        // Jobs
        job_atdac_role: "Desarrollador Python e Ingeniero de Observabilidad",
        job_atdac_desc1: "Despliegue y optimización de soluciones de monitoreo Full-Stack (Datadog, AppDynamics) en entornos corporativos.",
        job_atdac_desc2: "Desarrollo de scripts en Python para recopilación e ingesta de métricas personalizadas a través de APIs de Datadog.",
        job_atdac_desc3: "Diseño de dashboards analíticos de rendimiento (APM) para reducir el tiempo medio de resolución (MTTR).",
        job_atdac_desc4: "Ajuste fino de perfiles de diagnóstico y umbrales de alerta para evitar alertas falsas.",
        
        job_balances_role: "Ingeniero de Sistemas y de Software",
        job_balances_desc1: "Implementación de servidores de Odoo 15 para balances de energía en entornos de prueba y producción.",
        job_balances_desc2: "Desarrollo del motor de cálculo de pérdidas eléctricas en Python mediante consolidación de lecturas de red.",
        job_balances_desc3: "Creación de pasarelas REST API para integrar datos de consumo en campo con Odoo.",
        
        job_consorcios1_role: "Ingeniero de Sistemas y de Software",
        job_consorcios1_desc1: "Diseño y programación de bots de escritorio (RPA) en Python con la API de IBM Personal Communications.",
        job_consorcios1_desc2: "Aumento del 80% en el rendimiento de registro al automatizar digitación masiva en terminales AS400.",
        job_consorcios1_desc3: "Construcción de portales administrativos con Django y Django REST Framework para auditorías y carga de datos.",
        
        job_consorcios2_role: "Ingeniero de Sistemas y de Software",
        job_consorcios2_desc1: "Automatización de workflows operativos con ProcessMaker BPM para control de pérdidas no técnicas de energía.",
        job_consorcios2_desc2: "Integración frontend con JavaScript y jQuery de formularios ProcessMaker con sistemas comerciales AS400.",
        job_consorcios2_desc3: "Análisis estadístico de consumo eléctrico para identificación de anomalías y fraude.",
        
        job_coniel_role: "Ingeniero de Sistemas y de Software",
        job_coniel_desc1: "Desarrollo de crawlers en Selenium para extraer coordenadas de clientes en CNEL EP Geoportal.",
        job_coniel_desc2: "Diseño e implementación de ConielApp (Android nativo / Java) para lecturas de medidor sin conexión y GPS.",
        job_coniel_desc3: "Sincronización de base de datos móvil con API Django mediante carga en lotes JSON.",
        job_coniel_desc4: "Desarrollo de algoritmo de ordenamiento de lecturas con Django y pandas para secuenciar rutas de campo.",
        
        // Education
        edu_utm: "Ingeniero de Sistemas / Software",
        edu_platzi: "Aprendizaje Continuo (Backend & DevOps)",
        edu_credly: "Ver credenciales en Credly"
    },
    en: {
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_contact: "Contact",
        hero_tag: "SYSTEMS ENGINEER & OBSERVABILITY SPECIALIST",
        hero_lead: "Systems Engineer with 10+ years of experience specializing in backend development (Python/Django/Odoo), large-scale observability (Datadog/AppDynamics), and robotic process automation (RPA). Passionate about operational efficiency and smart automation.",
        btn_cv: "Download CV (Word)",
        btn_contact: "Get In Touch",
        dashboard_title: "CV Observability Dashboard",
        tab_system: "System",
        tab_traces: "APM Traces",
        tab_logs: "RPA Logs",
        metric_uptime: "Availability / Uptime",
        metric_latency: "Avg. Latency",
        metric_cpu: "CPU Load",
        metric_saved: "Time Saved (RPA)",
        sec_skills: "Technical Skills",
        sec_experience: "Professional Experience",
        sec_education: "Education & Certifications",
        sec_contact: "Contact Information",
        contact_lead: "Want to work together or have questions? Drop me a line!",
        contact_loc: "Location",
        footer_text: "Designed with ❤️ by Jhonsson Córdova. © 2026. All rights reserved.",
        
        // Jobs
        job_atdac_role: "Python Developer & Observability Engineer",
        job_atdac_desc1: "Deployed and optimized Full-Stack monitoring solutions (Datadog, AppDynamics) across corporate environments.",
        job_atdac_desc2: "Developed custom Python scripts for ingestion and gathering of metrics through Datadog APIs.",
        job_atdac_desc3: "Designed analytical application performance (APM) dashboards to reduce Mean Time to Resolution (MTTR).",
        job_atdac_desc4: "Fine-tuned alerting thresholds and diagnostic profiles to prevent notification fatigue and false alerts.",
        
        job_balances_role: "Systems Engineer & Software Engineer",
        job_balances_desc1: "Provisioned and deployed Odoo 15 server instances for energy balances across Staging and Production environments.",
        job_balances_desc2: "Programmed electrical loss calculation backend algorithms in Python from grid meter consolidations.",
        job_balances_desc3: "Created REST API interfaces to synchronize field-collected electricity metrics with Odoo.",
        
        job_consorcios1_role: "Systems Engineer & Software Engineer",
        job_consorcios1_desc1: "Designed and coded robotic process automation (RPA) desktop bots in Python utilizing the IBM Personal Communications API.",
        job_consorcios1_desc2: "Boosted registrar typing speeds by 80% through automated terminal key-feeding into AS400 screens.",
        job_consorcios1_desc3: "Built administrative web portals with Django and Django REST Framework for transaction logs and batch uploads.",
        
        job_consorcios2_role: "Systems Engineer & Software Engineer",
        job_consorcios2_desc1: "Automated business workflows via ProcessMaker BPM to audit and process claims for non-technical energy losses.",
        job_consorcios2_desc2: "Integrated ProcessMaker web forms with legacy AS400 terminal APIs using JavaScript and jQuery.",
        job_consorcios2_desc3: "Analyzed power consumption logs to isolate fraud patterns and build network loss margins.",
        
        job_coniel_role: "Systems Engineer & Software Engineer",
        job_coniel_desc1: "Developed web scraping scripts using Selenium to geocode client addresses from CNEL EP Geoportal.",
        job_coniel_desc2: "Built ConielApp (native Android / Java) to capture coordinates and readings offline with automatic sync.",
        job_coniel_desc3: "Linked client database entries with Django REST APIs utilizing JSON serialized formats.",
        job_coniel_desc4: "Developed a coordinate-based routing helper using Django and pandas to calculate optimized reading paths."
        
        // Education
        edu_utm: "Systems / Software Engineer",
        edu_platzi: "Continuous Learning (Backend & DevOps)",
        edu_credly: "Verify credentials on Credly"
    }
};

let currentLanguage = 'es';

// Language Toggle Function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    
    // Update button text
    document.querySelector('.lang-toggle span').textContent = currentLanguage === 'es' ? 'English (EN)' : 'Español (ES)';
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // Update placeholders or links if necessary
    const cvBtn = document.getElementById('cv-download-btn');
    if (cvBtn) {
        if (currentLanguage === 'es') {
            cvBtn.href = "Jhonsson_Cordova_CV_Espanol.docx";
            cvBtn.innerHTML = '<i class="fas fa-file-word"></i> Descargar CV (Word)';
        } else {
            cvBtn.href = "Jhonsson_Cordova_CV_English.docx";
            cvBtn.innerHTML = '<i class="fas fa-file-word"></i> Download CV (Word)';
        }
    }
}

// Observability Dashboard Tabs
function initDashboard() {
    const tabs = document.querySelectorAll('.obs-tab');
    const panels = document.querySelectorAll('.obs-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const panelId = tab.getAttribute('data-panel');
            document.getElementById(panelId).classList.add('active');
        });
    });

    // Simulate metrics fluctuations
    const uptimeEl = document.getElementById('metric-uptime-val');
    const cpuEl = document.getElementById('metric-cpu-val');
    const latencyEl = document.getElementById('metric-latency-val');

    setInterval(() => {
        // Uptime fluctuates decimals
        const baseUptime = 99.999;
        const offset = (Math.random() * 0.0009).toFixed(5);
        if (uptimeEl) uptimeEl.textContent = `${(baseUptime - offset).toFixed(4)}%`;

        // CPU fluctuations
        const baseCpu = 12;
        const cpuOffset = Math.floor(Math.random() * 6) - 3; // -3 to +3
        if (cpuEl) cpuEl.textContent = `${Math.max(5, baseCpu + cpuOffset)}%`;

        // Latency fluctuations
        const baseLatency = 124;
        const latencyOffset = Math.floor(Math.random() * 15) - 7;
        if (latencyEl) latencyEl.textContent = `${baseLatency + latencyOffset}ms`;
    }, 2000);

    // Simulate Logs Terminal
    const logConsole = document.getElementById('console-log-lines');
    if (logConsole) {
        const logTemplates = [
            { type: 'info', es: 'Iniciando conexión a terminal AS400 vía API...', en: 'Initializing connection to AS400 terminal via API...' },
            { type: 'success', es: 'Conexión establecida. Sesión ID: ' + Math.random().toString(16).substr(2, 6).toUpperCase(), en: 'Connection established. Session ID: ' + Math.random().toString(16).substr(2, 6).toUpperCase() },
            { type: 'accent', es: 'Consultando base de datos Odoo 15 para balances de energía...', en: 'Querying Odoo 15 database for energy balance details...' },
            { type: 'success', es: 'Motor de cálculo de pérdidas ejecutado con éxito. 0 anomalías encontradas.', en: 'Loss calculation engine executed successfully. 0 anomalies detected.' },
            { type: 'info', es: 'Inyectando coordenadas geocodificadas vía Selenium en el Geoportal...', en: 'Injecting geocoded coordinates via Selenium into Geoportal...' },
            { type: 'success', es: 'Geocodificación completa: 450 clientes mapeados.', en: 'Geocoding complete: 450 clients mapped.' },
            { type: 'accent', es: 'Consumo de Métricas de Datadog APM: 100% de agentes saludables.', en: 'Ingesting Datadog APM metrics: 100% of agents reported healthy.' },
            { type: 'info', es: 'Sincronizando lecturas de ConielApp con base de datos...', en: 'Syncing readings from ConielApp with backend database...' },
            { type: 'success', es: 'Sincronización finalizada por lote. Registros importados: 120.', en: 'Batch sync complete. Records imported: 120.' },
            { type: 'success', es: 'Proceso robótico finalizado. Ahorro de tiempo registrado: 80%.', en: 'Robotic process finished. Recorded time savings: 80%.' }
        ];

        let logIndex = 0;
        setInterval(() => {
            const template = logTemplates[logIndex % logTemplates.length];
            const p = document.createElement('div');
            p.className = `console-line ${template.type}`;
            const time = new Date().toLocaleTimeString();
            const text = currentLanguage === 'es' ? template.es : template.en;
            p.textContent = `[${time}] ${text}`;
            logConsole.appendChild(p);

            // Keep only last 12 lines
            while (logConsole.children.length > 12) {
                logConsole.removeChild(logConsole.firstChild);
            }
            
            logIndex++;
        }, 3000);
    }
}

// Skills Animation trigger on scroll
function initSkillsAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fillBars = entry.target.querySelectorAll('.skill-bar-fill');
                fillBars.forEach(bar => {
                    const targetPct = bar.getAttribute('data-pct');
                    bar.style.width = `${targetPct}%`;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Add Event Listener to Language Toggle Button
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }

    // Set initial date in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    initDashboard();
    initSkillsAnimation();
});
