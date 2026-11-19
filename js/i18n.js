// Translations. Each entry is keyed by the English text in data.js or index.html;
// text without an entry falls back to English.
window.I18N = {
  languages: [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
  ],

  months: {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    de: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."],
  },

  ui: [
    { en: "About", es: "Sobre mí", fr: "À propos", de: "Über mich" },
    { en: "Research", es: "Investigación", fr: "Recherche", de: "Forschung" },
    { en: "Projects", es: "Proyectos", fr: "Projets", de: "Projekte" },
    { en: "Talks", es: "Charlas", fr: "Conférences", de: "Vorträge" },
    { en: "Teaching", es: "Docencia", fr: "Enseignement", de: "Lehre" },
    { en: "News", es: "Noticias", fr: "Actualités", de: "Neuigkeiten" },
    { en: "Awards &amp; recognitions", es: "Premios y reconocimientos", fr: "Prix et distinctions", de: "Auszeichnungen und Anerkennungen" },
    { en: "Research systems I build and maintain.", es: "Sistemas de investigación que construyo y mantengo.", fr: "Systèmes de recherche que je développe et maintiens.", de: "Forschungssysteme, die ich entwickle und betreue." },
    { en: "Conference presentations, webinars and internal sessions.", es: "Presentaciones en congresos, webinars y sesiones internas.", fr: "Présentations en conférence, webinaires et sessions internes.", de: "Konferenzvorträge, Webinare und interne Sessions." },
    { en: "Teaching &amp; Outreach", es: "Docencia y divulgación", fr: "Enseignement et vulgarisation", de: "Lehre und Outreach" },
    { en: "Courses and workshops.", es: "Cursos y talleres.", fr: "Cours et ateliers.", de: "Kurse und Workshops." },
    { en: "Static site, no tracking.", es: "Sitio estático, sin rastreo.", fr: "Site statique, sans suivi.", de: "Statische Website, kein Tracking." },
    { en: "Language", es: "Idioma", fr: "Langue", de: "Sprache" },
    { en: "Visiting Student", es: "Estudiante visitante", fr: "Étudiant invité", de: "Gaststudent" },
    { en: "at", es: "en el", fr: "au", de: "am" },
    { en: "Email", es: "Correo", fr: "E-mail", de: "E-Mail" },
    { en: "Download my CV", es: "Descarga mi CV", fr: "Télécharger mon CV", de: "Lebenslauf herunterladen" },
    { en: "copied!", es: "¡copiado!", fr: "copié !", de: "kopiert!" },
    { en: "paper", es: "artículo", fr: "article", de: "Paper" },
    { en: "code", es: "código", fr: "code", de: "Code" },
    { en: "website", es: "sitio web", fr: "site web", de: "Website" },
    { en: "(in press)", es: "(en prensa)", fr: "(sous presse)", de: "(im Druck)" },
    { en: "Revised and resubmitted", es: "Revisado y reenviado", fr: "Révisé et soumis à nouveau", de: "Überarbeitet und erneut eingereicht" },
    { en: "Under review", es: "En revisión", fr: "En cours d'évaluation", de: "In Begutachtung" },
  ],

  content: [
    // About
    {
      en: "Building reliable intelligent systems for real-world machines.",
      es: "Construyendo sistemas inteligentes confiables para máquinas del mundo real.",
      fr: "Concevoir des systèmes intelligents fiables pour des machines réelles.",
      de: "Zuverlässige intelligente Systeme für reale Maschinen entwickeln.",
    },
    {
      en: `I am a Visiting Student at the <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a>,
       working with <a href="https://fredfactory.mit.edu/team/banthony">Prof. Brian W. Anthony</a>, and a final-year undergraduate in
       Mechatronics Engineering at <a href="https://tec.mx/">Tecnológico de Monterrey</a>.
       I also do research at the MIT–Tec <a href="https://fredfactory.mit.edu/">FrED Factory Lab</a>.`,
      es: `Soy estudiante visitante en el <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a>,
       donde trabajo con el <a href="https://fredfactory.mit.edu/team/banthony">Prof. Brian W. Anthony</a>, y estudiante de último
       año de Ingeniería en Mecatrónica en el <a href="https://tec.mx/">Tecnológico de Monterrey</a>.
       También hago investigación en el <a href="https://fredfactory.mit.edu/">FrED Factory Lab</a> del MIT y el Tec.`,
      fr: `Je suis étudiant invité au <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a>,
       où je travaille avec le <a href="https://fredfactory.mit.edu/team/banthony">Prof. Brian W. Anthony</a>, et en dernière année
       de licence en génie mécatronique au <a href="https://tec.mx/">Tecnológico de Monterrey</a>.
       Je mène également des recherches au <a href="https://fredfactory.mit.edu/">FrED Factory Lab</a> MIT–Tec.`,
      de: `Ich bin Gaststudent am <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a>
       bei <a href="https://fredfactory.mit.edu/team/banthony">Prof. Brian W. Anthony</a> und studiere im letzten Jahr meines
       Bachelorstudiums Mechatronik am <a href="https://tec.mx/">Tecnológico de Monterrey</a>.
       Außerdem forsche ich am MIT–Tec <a href="https://fredfactory.mit.edu/">FrED Factory Lab</a>.`,
    },
    {
      en: `My research focuses on making learning-based and agentic systems reliable on physical
       hardware: machines that detect their own faults, verify actions before execution, and
       keep human operators involved when they reach their limits. I lead
       <a href="#project-nerve">NERVE</a>, a framework for fault detection and compensation on
       fiber-extrusion machines, and founded <a href="https://n-soul.ai">(n) Soul</a>, a platform
       for operating heterogeneous industrial hardware through natural language.`,
      es: `Mi investigación busca que los sistemas basados en aprendizaje y los sistemas agénticos sean
       confiables en hardware físico: máquinas que detectan sus propias fallas, verifican las acciones
       antes de ejecutarlas y mantienen involucrados a los operadores humanos cuando llegan a sus
       límites. Dirijo <a href="#project-nerve">NERVE</a>, un framework para detectar y compensar
       fallas en máquinas de extrusión de fibra, y fundé <a href="https://n-soul.ai">(n) Soul</a>, una
       plataforma para operar hardware industrial heterogéneo mediante lenguaje natural.`,
      fr: `Mes recherches visent à rendre fiables, sur du matériel physique, les systèmes fondés sur
       l'apprentissage et les systèmes agentiques : des machines qui détectent leurs propres défaillances,
       vérifient leurs actions avant de les exécuter et gardent les opérateurs humains impliqués lorsqu'elles
       atteignent leurs limites. Je dirige <a href="#project-nerve">NERVE</a>, un framework de détection
       et de compensation des défaillances sur des machines d'extrusion de fibres, et j'ai fondé
       <a href="https://n-soul.ai">(n) Soul</a>, une plateforme permettant de piloter du matériel
       industriel hétérogène en langage naturel.`,
      de: `Meine Forschung zielt darauf ab, lernbasierte und agentische Systeme auf physischer Hardware
       zuverlässig zu machen: Maschinen, die ihre eigenen Fehler erkennen, Aktionen vor der Ausführung
       verifizieren und menschliche Bediener einbeziehen, wenn sie an ihre Grenzen stoßen. Ich leite
       <a href="#project-nerve">NERVE</a>, ein Framework zur Fehlererkennung und -kompensation an
       Faserextrusionsmaschinen, und habe <a href="https://n-soul.ai">(n) Soul</a> gegründet, eine
       Plattform zur Steuerung heterogener Industriehardware über natürliche Sprache.`,
    },
    {
      en: `Previously, I worked on reinforcement learning and perception for surgical robotics at
       Healthengroup, on industrial data infrastructure at Schneider Electric, and as a Data
       Engineer Consultant at dataIQ, where I designed ML and generative AI systems and led
       national webinars on enterprise AI adoption.`,
      es: `Anteriormente trabajé en aprendizaje por refuerzo y percepción para robótica quirúrgica en
       Healthengroup, en infraestructura de datos industriales en Schneider Electric y como Data
       Engineer Consultant en dataIQ, donde diseñé sistemas de ML e IA generativa e impartí
       webinars nacionales sobre la adopción de IA en las empresas.`,
      fr: `Auparavant, j'ai travaillé sur l'apprentissage par renforcement et la perception pour la
       robotique chirurgicale chez Healthengroup, sur l'infrastructure de données industrielles chez
       Schneider Electric, et en tant que Data Engineer Consultant chez dataIQ, où j'ai conçu des
       systèmes de ML et d'IA générative et animé des webinaires nationaux sur l'adoption de l'IA en entreprise.`,
      de: `Zuvor habe ich bei Healthengroup an Reinforcement Learning und Wahrnehmung für die
       chirurgische Robotik gearbeitet, bei Schneider Electric an industrieller Dateninfrastruktur und
       bei dataIQ als Data Engineer Consultant, wo ich ML- und Generative-AI-Systeme entworfen und
       landesweite Webinare zur Einführung von KI in Unternehmen geleitet habe.`,
    },
    {
      en: `I am applying to PhD programs in machine learning, robot learning, and physical AI for Fall 2027.`,
      es: `Estoy aplicando a programas de doctorado en machine learning, robot learning e IA física para otoño de 2027.`,
      fr: `Je postule à des programmes de doctorat en apprentissage automatique, apprentissage robotique et IA physique pour une rentrée à l'automne 2027.`,
      de: `Ich bewerbe mich für Promotionsprogramme in Machine Learning, Robot Learning und Physical AI zum Herbst 2027.`,
    },

    // Research
    {
      en: `How can intelligent systems act on real machines when failures are costly,
      conditions change, and data is limited? Manufacturing makes this question concrete: it
      receives far less attention from machine learning than digital domains, yet depends on
      human expertise that is scarce and hard to transfer. My work studies three related
      challenges: learning from failures that are difficult to reproduce, verifying actions
      before they reach a machine, and supporting the people who operate complex equipment. See my
      <a href="https://scholar.google.com/citations?user=1G54gdUAAAAJ&hl=es">Google Scholar</a>
      for a full list of publications.`,
      es: `¿Cómo pueden los sistemas inteligentes actuar sobre máquinas reales cuando las fallas son
      costosas, las condiciones cambian y los datos son limitados? La manufactura vuelve concreta esta
      pregunta: recibe mucha menos atención del machine learning que los dominios digitales, pero
      depende de experiencia humana escasa y difícil de transferir. Mi trabajo estudia tres retos
      relacionados: aprender de fallas difíciles de reproducir, verificar las acciones antes de que
      lleguen a una máquina y apoyar a las personas que operan equipos complejos. Consulta mi
      <a href="https://scholar.google.com/citations?user=1G54gdUAAAAJ&hl=es">Google Scholar</a>
      para ver la lista completa de publicaciones.`,
      fr: `Comment des systèmes intelligents peuvent-ils agir sur des machines réelles lorsque les
      défaillances coûtent cher, que les conditions changent et que les données sont limitées ? La
      fabrication rend cette question concrète : elle reçoit bien moins d'attention de l'apprentissage
      automatique que les domaines numériques, et dépend pourtant d'une expertise humaine rare et
      difficile à transmettre. Mes travaux portent sur trois défis liés : apprendre de défaillances
      difficiles à reproduire, vérifier les actions avant qu'elles n'atteignent une machine, et
      accompagner les personnes qui exploitent des équipements complexes. La liste complète de mes
      publications est sur mon profil
      <a href="https://scholar.google.com/citations?user=1G54gdUAAAAJ&hl=es">Google Scholar</a>.`,
      de: `Wie können intelligente Systeme auf realen Maschinen handeln, wenn Fehler teuer sind, sich
      Bedingungen ändern und Daten begrenzt sind? In der Fertigung wird diese Frage konkret: Sie erhält
      deutlich weniger Aufmerksamkeit vom maschinellen Lernen als digitale Domänen, ist aber auf
      menschliche Expertise angewiesen, die knapp und schwer weiterzugeben ist. Meine Arbeit untersucht
      drei zusammenhängende Herausforderungen: aus schwer reproduzierbaren Fehlern lernen, Aktionen
      verifizieren, bevor sie eine Maschine erreichen, und die Menschen unterstützen, die komplexe
      Anlagen bedienen. Eine vollständige Publikationsliste gibt es auf meinem
      <a href="https://scholar.google.com/citations?user=1G54gdUAAAAJ&hl=es">Google Scholar</a>-Profil.`,
    },
    {
      en: `A VR factory digital twin where a neural network predicts operator KPIs and an
          LLM turns them into concrete actions such as reassignments or breaks. In a
          three-station assembly study it raised throughput by 28.6% and cut scrap by 35.4%.`,
      es: `Un gemelo digital de fábrica en realidad virtual en el que una red neuronal predice los KPIs
          de los operadores y un LLM los convierte en acciones concretas, como reasignaciones o
          descansos. En un estudio de ensamble con tres estaciones aumentó la producción en 28.6% y
          redujo el desperdicio en 35.4%.`,
      fr: `Un jumeau numérique d'usine en réalité virtuelle dans lequel un réseau de neurones prédit
          les KPI des opérateurs et un LLM les traduit en actions concrètes, comme des réaffectations
          ou des pauses. Dans une étude d'assemblage à trois postes, il a augmenté le débit de 28,6 %
          et réduit les rebuts de 35,4 %.`,
      de: `Ein digitaler VR-Fabrikzwilling, in dem ein neuronales Netz Bediener-KPIs vorhersagt und ein
          LLM daraus konkrete Maßnahmen wie Umbesetzungen oder Pausen ableitet. In einer Montagestudie
          mit drei Stationen steigerte er den Durchsatz um 28,6 % und senkte den Ausschuss um 35,4 %.`,
    },
    {
      en: `A traceability architecture for the FrED learning factory that links a low-code
          MES (Tulip) to a private MultiChain network, hashing inspection results and operator
          actions into a tamper-proof production record.`,
      es: `Una arquitectura de trazabilidad para la learning factory de FrED que conecta un MES
          low-code (Tulip) con una red privada de MultiChain y registra mediante hashes los resultados
          de inspección y las acciones de los operadores en un historial de producción a prueba de
          manipulaciones.`,
      fr: `Une architecture de traçabilité pour l'usine-école FrED qui relie un MES low-code (Tulip)
          à un réseau MultiChain privé, en hachant les résultats d'inspection et les actions des
          opérateurs dans un registre de production infalsifiable.`,
      de: `Eine Rückverfolgbarkeitsarchitektur für die FrED-Lernfabrik, die ein Low-Code-MES (Tulip)
          mit einem privaten MultiChain-Netzwerk verbindet und Prüfergebnisse sowie Bedieneraktionen
          per Hash in einem manipulationssicheren Produktionsprotokoll festhält.`,
    },
    {
      en: `MES-based traceability for a learning factory that integrates ERP, PLC-controlled
          stations and cobots, using time-stamped execution data on operator interactions to
          expose bottlenecks, learning curves and process adherence.`,
      es: `Trazabilidad basada en MES para una learning factory que integra ERP, estaciones
          controladas por PLC y cobots, usando datos de ejecución con marca de tiempo sobre las
          interacciones de los operadores para revelar cuellos de botella, curvas de aprendizaje y
          apego al proceso.`,
      fr: `Une traçabilité fondée sur un MES pour une usine-école intégrant ERP, postes pilotés par
          automate et cobots, qui exploite des données d'exécution horodatées sur les interactions des
          opérateurs pour révéler goulets d'étranglement, courbes d'apprentissage et respect des procédures.`,
      de: `MES-basierte Rückverfolgbarkeit für eine Lernfabrik mit ERP, SPS-gesteuerten Stationen und
          Cobots, die zeitgestempelte Ausführungsdaten zu Bedienerinteraktionen nutzt, um Engpässe,
          Lernkurven und Prozesstreue sichtbar zu machen.`,
    },
    {
      en: `An LLM-based assistant with orchestrated APIs and AR overlays on physical equipment
          that guides students through troubleshooting of robots, PLCs, HMIs and vision systems
          in a learning factory, reducing laboratory downtime.`,
      es: `Un asistente basado en LLM, con APIs orquestadas y superposiciones de realidad aumentada
          sobre el equipo físico, que guía a los estudiantes en la solución de problemas de robots,
          PLCs, HMIs y sistemas de visión en una learning factory, reduciendo el tiempo muerto del laboratorio.`,
      fr: `Un assistant fondé sur un LLM, avec des API orchestrées et des superpositions de réalité
          augmentée sur l'équipement physique, qui guide les étudiants dans le dépannage de robots,
          d'automates, d'IHM et de systèmes de vision dans une usine-école, réduisant les temps
          d'arrêt du laboratoire.`,
      de: `Ein LLM-basierter Assistent mit orchestrierten APIs und AR-Overlays auf realer Ausrüstung,
          der Studierende bei der Fehlersuche an Robotern, SPS, HMIs und Bildverarbeitungssystemen in
          einer Lernfabrik anleitet und so Ausfallzeiten im Labor reduziert.`,
    },
    {
      en: `A conversational multi-agent monitoring layer deployed above a certified PL e / SIL 3
          safety boundary on a KUKA KR6 cell, adding graduated speed limiting and operator
          alerts on top of the existing safety system.`,
      es: `Una capa de monitoreo conversacional multiagente desplegada por encima de una frontera de
          seguridad certificada PL e / SIL 3 en una celda KUKA KR6, que agrega limitación gradual de
          velocidad y alertas al operador sobre el sistema de seguridad existente.`,
      fr: `Une couche de surveillance conversationnelle multi-agents déployée au-dessus d'une
          barrière de sécurité certifiée PL e / SIL 3 sur une cellule KUKA KR6, qui ajoute une
          limitation progressive de la vitesse et des alertes opérateur au système de sécurité existant.`,
      de: `Eine konversationelle Multi-Agenten-Überwachungsschicht oberhalb einer zertifizierten
          PL e / SIL 3-Sicherheitsgrenze an einer KUKA-KR6-Zelle, die das bestehende Sicherheitssystem
          um eine abgestufte Geschwindigkeitsbegrenzung und Bedienerwarnungen ergänzt.`,
    },
    {
      en: `A platform with an AI agent and device-level validation that records what student
          teams commit to versus what they deliver in a six-team ISA-95 manufacturing cell.
          Across 248 commits only 23.8% closed on schedule, and planning intensity and
          execution discipline emerged as two near-orthogonal behaviors.`,
      es: `Una plataforma con un agente de IA y validación a nivel de dispositivo que registra lo que
          los equipos de estudiantes se comprometen a hacer frente a lo que entregan, en una celda de
          manufactura ISA-95 con seis equipos. De 248 commits, solo el 23.8% se cerró a tiempo, y la
          intensidad de planeación y la disciplina de ejecución resultaron ser dos comportamientos
          casi ortogonales.`,
      fr: `Une plateforme dotée d'un agent d'IA et d'une validation au niveau des équipements, qui
          enregistre ce à quoi les équipes d'étudiants s'engagent par rapport à ce qu'elles livrent,
          dans une cellule de fabrication ISA-95 à six équipes. Sur 248 commits, seuls 23,8 % ont été
          clôturés dans les délais, et l'intensité de planification et la discipline d'exécution sont
          apparues comme deux comportements quasi orthogonaux.`,
      de: `Eine Plattform mit KI-Agent und Validierung auf Geräteebene, die festhält, wozu sich
          studentische Teams verpflichten und was sie tatsächlich liefern, in einer
          ISA-95-Fertigungszelle mit sechs Teams. Von 248 Commits wurden nur 23,8 % termingerecht
          abgeschlossen; Planungsintensität und Ausführungsdisziplin erwiesen sich als zwei nahezu
          orthogonale Verhaltensweisen.`,
    },
    {
      en: `A physical AI multi-agent system in which devices register through a capability card,
          from which an agent generates practice sessions and evaluation rubrics without manual
          authoring, then adapts pacing in closed loop from EEG-based engagement. Evaluated with
          eleven participants on a physical robotic arm.`,
      es: `Un sistema multiagente de IA física en el que los dispositivos se registran mediante una
          capability card, a partir de la cual un agente genera sesiones de práctica y rúbricas de
          evaluación sin redacción manual, y luego adapta el ritmo en lazo cerrado según el
          engagement medido por EEG. Evaluado con once participantes en un brazo robótico físico.`,
      fr: `Un système multi-agents d'IA physique dans lequel les équipements s'enregistrent au moyen
          d'une capability card, à partir de laquelle un agent génère des séances d'entraînement et
          des grilles d'évaluation sans rédaction manuelle, puis adapte le rythme en boucle fermée
          selon l'engagement mesuré par EEG. Évalué avec onze participants sur un bras robotique réel.`,
      de: `Ein Multi-Agenten-System für Physical AI, in dem sich Geräte über eine Capability Card
          registrieren; daraus erzeugt ein Agent Übungseinheiten und Bewertungsrubriken ohne manuelles
          Erstellen und passt das Tempo im geschlossenen Regelkreis anhand von EEG-basiertem
          Engagement an. Evaluiert mit elf Teilnehmenden an einem realen Roboterarm.`,
    },

    {
      en: `Paired fault injection on a fiber-extrusion machine and its digital twin shows that a
          twin calibrated only on healthy data reproduces closed-loop fault masking, but mispredicts
          the unregulated fiber diameter and overestimates motor-duty response by up to 47%.`,
      es: `La inyección pareada de fallas en una máquina de extrusión de fibra y en su gemelo digital
          muestra que un gemelo calibrado solo con datos sanos reproduce el enmascaramiento de fallas
          en lazo cerrado, pero predice mal el diámetro de fibra no regulado y sobrestima la respuesta
          del ciclo de trabajo del motor hasta en un 47%.`,
      fr: `L'injection appariée de défaillances dans une machine d'extrusion de fibres et dans son
          jumeau numérique montre qu'un jumeau calibré uniquement sur des données saines reproduit le
          masquage des défaillances en boucle fermée, mais prédit mal le diamètre de fibre non régulé
          et surestime la réponse du rapport cyclique du moteur jusqu'à 47 %.`,
      de: `Gepaarte Fehlerinjektion an einer Faserextrusionsmaschine und ihrem digitalen Zwilling
          zeigt, dass ein nur mit fehlerfreien Daten kalibrierter Zwilling die Fehlermaskierung im
          geschlossenen Regelkreis reproduziert, aber den ungeregelten Faserdurchmesser falsch
          vorhersagt und die Reaktion des Motor-Tastgrads um bis zu 47 % überschätzt.`,
    },
    {
      en: `A data-centric framework that lets manufacturing experts build and modify a full MES
          on low-code/no-code platforms without software engineering expertise. Deployed end to end
          at the MIT and Tec FrED Factories, with a citizen-developer usability study (n=10, SUS 70.75)
          and a workshop (n=15) with a mean app build time of 5.5 minutes.`,
      es: `Un framework centrado en datos que permite a expertos en manufactura construir y modificar
          un MES completo en plataformas low-code/no-code sin experiencia en ingeniería de software.
          Desplegado de principio a fin en las FrED Factories del MIT y del Tec, con un estudio de
          usabilidad con citizen developers (n=10, SUS 70.75) y un taller (n=15) con un tiempo medio de
          construcción de aplicaciones de 5.5 minutos.`,
      fr: `Un framework centré sur les données qui permet à des experts de la production de construire
          et de modifier un MES complet sur des plateformes low-code/no-code, sans expertise en génie
          logiciel. Déployé de bout en bout dans les FrED Factories du MIT et du Tec, avec une étude
          d'utilisabilité auprès de citizen developers (n=10, SUS 70,75) et un atelier (n=15) où une
          application est construite en 5,5 minutes en moyenne.`,
      de: `Ein datenzentriertes Framework, mit dem Fertigungsexperten ein vollständiges MES auf
          Low-Code/No-Code-Plattformen ohne Softwareentwicklungskenntnisse aufbauen und anpassen können.
          End-to-End eingesetzt in den FrED Factories des MIT und des Tec, mit einer Usability-Studie
          mit Citizen Developern (n=10, SUS 70,75) und einem Workshop (n=15) mit einer mittleren
          Erstellungszeit von 5,5 Minuten pro Anwendung.`,
    },

    // News
    {
      en: `Released <strong>ORION MCP</strong>, an MCP server and Python library for coding agents to control industrial hardware. In a 540-session study in simulation, it raised task success over the vendor SDK from 63–70% to 95–98% for smaller models. <a href="#project-orion-mcp">See project</a>`,
      es: `Publiqué <strong>ORION MCP</strong>, un servidor MCP y una biblioteca de Python para que agentes de programación controlen hardware industrial. En un estudio de 540 sesiones en simulación, elevó la tasa de éxito frente al SDK del fabricante de 63–70% a 95–98% en los modelos más pequeños. <a href="#project-orion-mcp">Ver proyecto</a>`,
      fr: `Publication d'<strong>ORION MCP</strong>, un serveur MCP et une bibliothèque Python permettant à des agents de codage de piloter du matériel industriel. Dans une étude de 540 sessions en simulation, il a fait passer le taux de réussite, par rapport au SDK du fabricant, de 63–70 % à 95–98 % pour les modèles plus petits. <a href="#project-orion-mcp">Voir le projet</a>`,
      de: `<strong>ORION MCP</strong> veröffentlicht, ein MCP-Server und eine Python-Bibliothek, mit denen Coding-Agenten Industriehardware steuern. In einer Simulationsstudie mit 540 Sitzungen stieg die Erfolgsquote gegenüber dem Hersteller-SDK bei kleineren Modellen von 63–70 % auf 95–98 %. <a href="#project-orion-mcp">Zum Projekt</a>`,
    },
    {
      en: `Our paper <strong>"ORION: Teaching Itself to Teach"</strong> was presented at Prototypes for Humanity in Dubai.`,
      es: `Nuestro artículo <strong>"ORION: Teaching Itself to Teach"</strong> se presentó en Prototypes for Humanity, en Dubái.`,
      fr: `Notre article <strong>« ORION: Teaching Itself to Teach »</strong> a été présenté à Prototypes for Humanity, à Dubaï.`,
      de: `Unser Paper <strong>„ORION: Teaching Itself to Teach“</strong> wurde bei Prototypes for Humanity in Dubai vorgestellt.`,
    },
    {
      en: `Started a research stay at the <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a>.`,
      es: `Comencé una estancia de investigación en el <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a>.`,
      fr: `Début d'un séjour de recherche au <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a>.`,
      de: `Forschungsaufenthalt am <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a> begonnen.`,
    },
    {
      en: `Papers accepted at <strong>NAMRC 54</strong> (one), <strong>CLF 2026</strong> (two), <strong>MICAI 2026</strong> (one) and <strong>IEEE TALE 2026</strong> (one).`,
      es: `Artículos aceptados en <strong>NAMRC 54</strong> (uno), <strong>CLF 2026</strong> (dos), <strong>MICAI 2026</strong> (uno) e <strong>IEEE TALE 2026</strong> (uno).`,
      fr: `Articles acceptés à <strong>NAMRC 54</strong> (un), <strong>CLF 2026</strong> (deux), <strong>MICAI 2026</strong> (un) et <strong>IEEE TALE 2026</strong> (un).`,
      de: `Beiträge angenommen bei <strong>NAMRC 54</strong> (einer), <strong>CLF 2026</strong> (zwei), <strong>MICAI 2026</strong> (einer) und <strong>IEEE TALE 2026</strong> (einer).`,
    },

    // Awards
    {
      en: "<strong>Trayectoria Sobresaliente</strong> distinction, School of Engineering and Sciences, Tecnológico de Monterrey, for research, entrepreneurship and social impact work.",
      es: "Distinción <strong>Trayectoria Sobresaliente</strong>, Escuela de Ingeniería y Ciencias, Tecnológico de Monterrey, por trabajo en investigación, emprendimiento e impacto social.",
      fr: "Distinction <strong>Trayectoria Sobresaliente</strong>, École d'ingénierie et de sciences, Tecnológico de Monterrey, pour des travaux de recherche, d'entrepreneuriat et d'impact social.",
      de: "Auszeichnung <strong>Trayectoria Sobresaliente</strong>, Fakultät für Ingenieurwesen und Naturwissenschaften, Tecnológico de Monterrey, für Forschung, Unternehmertum und soziales Engagement.",
    },
    {
      en: "<strong>Leader of the School</strong> recognition, School of Engineering and Sciences, Tecnológico de Monterrey.",
      es: "Reconocimiento <strong>Leader of the School</strong>, Escuela de Ingeniería y Ciencias, Tecnológico de Monterrey.",
      fr: "Distinction <strong>Leader of the School</strong>, École d'ingénierie et de sciences, Tecnológico de Monterrey.",
      de: "Anerkennung <strong>Leader of the School</strong>, Fakultät für Ingenieurwesen und Naturwissenschaften, Tecnológico de Monterrey.",
    },

    // Projects: NERVE
    { en: "Machines that keep running when they fail", es: "Máquinas que siguen funcionando cuando fallan", fr: "Des machines qui continuent de fonctionner quand elles tombent en panne", de: "Maschinen, die auch bei Fehlern weiterlaufen" },
    {
      en: `Industrial machines stop when something breaks. NERVE aims to let them notice
        their own faults and compensate in real time, using a digital twin to learn failures that
        are too costly to produce on real hardware.`,
      es: `Las máquinas industriales se detienen cuando algo se descompone. NERVE busca que detecten
        sus propias fallas y las compensen en tiempo real, usando un gemelo digital para aprender
        fallas demasiado costosas de provocar en hardware real.`,
      fr: `Les machines industrielles s'arrêtent quand quelque chose casse. NERVE vise à leur permettre
        de détecter leurs propres défaillances et de les compenser en temps réel, en s'appuyant sur un
        jumeau numérique pour apprendre des défaillances trop coûteuses à provoquer sur du matériel réel.`,
      de: `Industriemaschinen stehen still, wenn etwas kaputtgeht. NERVE soll sie befähigen, ihre
        eigenen Fehler zu erkennen und in Echtzeit zu kompensieren, und nutzt dazu einen digitalen
        Zwilling, um Fehler zu lernen, deren Erzeugung auf realer Hardware zu teuer wäre.`,
    },
    { en: "Learning from simulated failures", es: "Aprender de fallas simuladas", fr: "Apprendre de défaillances simulées", de: "Lernen aus simulierten Fehlern" },
    {
      en: `we inject identical faults into a real
          fiber-extrusion machine and its digital twin to measure when simulated failures can be
          trusted. A twin calibrated only on healthy data hides some faults and mispredicts others
          by up to 47%. (under review, NAMRC 2027)`,
      es: `inyectamos fallas idénticas en una máquina real de extrusión de fibra y en su gemelo
          digital para medir cuándo se puede confiar en las fallas simuladas. Un gemelo calibrado solo
          con datos sanos oculta algunas fallas y predice mal otras hasta en un 47%. (en revisión, NAMRC 2027)`,
      fr: `nous injectons des défaillances identiques dans une machine d'extrusion de fibres réelle
          et dans son jumeau numérique afin de mesurer quand les défaillances simulées sont fiables.
          Un jumeau calibré uniquement sur des données saines masque certaines défaillances et en
          prédit mal d'autres, avec un écart allant jusqu'à 47 %. (en cours d'évaluation, NAMRC 2027)`,
      de: `wir speisen identische Fehler in eine reale Faserextrusionsmaschine und ihren digitalen
          Zwilling ein, um zu messen, wann simulierten Fehlern zu trauen ist. Ein nur mit
          fehlerfreien Daten kalibrierter Zwilling verbirgt manche Fehler und sagt andere um bis zu
          47 % falsch voraus. (in Begutachtung, NAMRC 2027)`,
    },
    { en: "Compensating while running", es: "Compensar sin detenerse", fr: "Compenser en fonctionnement", de: "Kompensieren im laufenden Betrieb" },
    {
      en: `we are now training controllers on the validated twin to
          detect and correct faults on the physical machine without stopping production.`,
      es: `ahora entrenamos controladores sobre el gemelo validado para detectar y corregir fallas en
          la máquina física sin detener la producción.`,
      fr: `nous entraînons actuellement des contrôleurs sur le jumeau validé pour détecter et corriger
          les défaillances sur la machine réelle sans arrêter la production.`,
      de: `derzeit trainieren wir Regler auf dem validierten Zwilling, um Fehler an der realen
          Maschine zu erkennen und zu korrigieren, ohne die Produktion anzuhalten.`,
    },
    {
      en: `Built on FrED, the MIT–Tec desktop fiber-extrusion platform.`,
      es: `Construido sobre FrED, la plataforma de escritorio de extrusión de fibra del MIT y el Tec.`,
      fr: `Développé sur FrED, la plateforme de bureau d'extrusion de fibres MIT–Tec.`,
      de: `Aufgebaut auf FrED, der Desktop-Faserextrusionsplattform von MIT und Tec.`,
    },
    { en: "code: available on request", es: "código: disponible bajo solicitud", fr: "code : disponible sur demande", de: "Code: auf Anfrage erhältlich" },

    // Projects: (n) Soul
    {
      en: "A safety-first multi-agent platform for industrial robots, PLCs and vision systems",
      es: "Una plataforma multiagente que prioriza la seguridad, para robots industriales, PLCs y sistemas de visión",
      fr: "Une plateforme multi-agents axée sur la sécurité pour robots industriels, automates et systèmes de vision",
      de: "Eine sicherheitsorientierte Multi-Agenten-Plattform für Industrieroboter, SPS und Bildverarbeitungssysteme",
    },
    {
      en: `Operates a heterogeneous factory cell as a single system through natural language.`,
      es: `Opera una celda de manufactura heterogénea como un solo sistema mediante lenguaje natural.`,
      fr: `Pilote une cellule de production hétérogène comme un système unique, en langage naturel.`,
      de: `Steuert eine heterogene Fertigungszelle als ein einziges System über natürliche Sprache.`,
    },
    { en: "Hardware", es: "Hardware", fr: "Matériel", de: "Hardware" },
    {
      en: `robot arms from Universal Robots, ABB, KUKA and UFactory; PLCs from Siemens
          and Schneider Electric; Cognex vision systems; custom microcontroller-based devices.`,
      es: `brazos robóticos de Universal Robots, ABB, KUKA y UFactory; PLCs de Siemens y Schneider
          Electric; sistemas de visión Cognex; dispositivos propios basados en microcontroladores.`,
      fr: `bras robotiques Universal Robots, ABB, KUKA et UFactory ; automates Siemens et Schneider
          Electric ; systèmes de vision Cognex ; dispositifs sur mesure à base de microcontrôleurs.`,
      de: `Roboterarme von Universal Robots, ABB, KUKA und UFactory; SPS von Siemens und Schneider
          Electric; Cognex-Bildverarbeitungssysteme; eigene mikrocontrollerbasierte Geräte.`,
    },
    { en: "Abstraction", es: "Abstracción", fr: "Abstraction", de: "Abstraktion" },
    {
      en: `Saiph Bridge exposes every device through one hardware-abstraction layer.`,
      es: `Saiph Bridge expone cada dispositivo a través de una sola capa de abstracción de hardware.`,
      fr: `Saiph Bridge expose chaque équipement via une couche unique d'abstraction matérielle.`,
      de: `Saiph Bridge stellt jedes Gerät über eine einzige Hardware-Abstraktionsschicht bereit.`,
    },
    { en: "Verified action", es: "Acción verificada", fr: "Action vérifiée", de: "Verifizierte Aktionen" },
    {
      en: `agents can propose actions but not execute them unchecked; every
          motion command is simulated against a MuJoCo collision gate before it reaches the hardware.`,
      es: `los agentes pueden proponer acciones, pero no ejecutarlas sin verificación; cada comando de
          movimiento se simula contra una compuerta de colisiones en MuJoCo antes de llegar al hardware.`,
      fr: `les agents peuvent proposer des actions mais pas les exécuter sans contrôle ; chaque
          commande de mouvement est simulée face à une barrière anticollision MuJoCo avant d'atteindre le matériel.`,
      de: `Agenten können Aktionen vorschlagen, aber nicht ungeprüft ausführen; jeder Bewegungsbefehl
          wird vor Erreichen der Hardware gegen ein Kollisions-Gate in MuJoCo simuliert.`,
    },
    { en: "Research use", es: "Uso en investigación", fr: "Usage en recherche", de: "Forschungseinsatz" },
    {
      en: `a testbed for safe natural-language operation across diverse industrial systems.`,
      es: `un banco de pruebas para operar de forma segura, en lenguaje natural, sistemas industriales diversos.`,
      fr: `un banc d'essai pour le pilotage sûr, en langage naturel, de systèmes industriels variés.`,
      de: `eine Testumgebung für die sichere Bedienung unterschiedlichster Industriesysteme in natürlicher Sprache.`,
    },
    { en: "code: proprietary, available on request", es: "código: propietario, disponible bajo solicitud", fr: "code : propriétaire, disponible sur demande", de: "Code: proprietär, auf Anfrage erhältlich" },

    // Projects: ORION MCP
    {
      en: "Industrial hardware as tools for coding agents",
      es: "Hardware industrial como herramientas para agentes de programación",
      fr: "Du matériel industriel comme outils pour agents de codage",
      de: "Industriehardware als Werkzeuge für Coding-Agenten",
    },
    {
      en: `An MCP server and Python library that let coding agents control industrial
        hardware. Robot and camera primitives (motion, pixel-to-base transforms, object
        localization) become tools an LLM agent calls directly, instead of writing code against
        each vendor's SDK.`,
      es: `Un servidor MCP y una biblioteca de Python que permiten a agentes de programación controlar
        hardware industrial. Las primitivas de robot y cámara (movimiento, transformaciones de píxel a
        base, localización de objetos) se vuelven herramientas que un agente LLM llama directamente, en
        lugar de escribir código contra el SDK de cada fabricante.`,
      fr: `Un serveur MCP et une bibliothèque Python qui permettent à des agents de codage de piloter du
        matériel industriel. Les primitives robot et caméra (mouvement, transformations pixel-base,
        localisation d'objets) deviennent des outils qu'un agent LLM appelle directement, au lieu
        d'écrire du code pour le SDK de chaque fabricant.`,
      de: `Ein MCP-Server und eine Python-Bibliothek, mit denen Coding-Agenten Industriehardware steuern.
        Roboter- und Kameraprimitive (Bewegung, Pixel-zu-Basis-Transformationen, Objektlokalisierung)
        werden zu Werkzeugen, die ein LLM-Agent direkt aufruft, statt Code gegen das SDK jedes
        Herstellers zu schreiben.`,
    },
    { en: "Evaluation", es: "Evaluación", fr: "Évaluation", de: "Evaluation" },
    {
      en: `Claude Code on a simulated xArm in MuJoCo: 3 tasks, 20 seeds each,
          540 sessions.`,
      es: `Claude Code sobre un xArm simulado en MuJoCo: 3 tareas, 20 semillas cada una, 540 sesiones.`,
      fr: `Claude Code sur un xArm simulé dans MuJoCo : 3 tâches, 20 graines chacune, 540 sessions.`,
      de: `Claude Code an einem simulierten xArm in MuJoCo: 3 Aufgaben, je 20 Seeds, 540 Sitzungen.`,
    },
    { en: "Results", es: "Resultados", fr: "Résultats", de: "Ergebnisse" },
    {
      en: `compared with the vendor SDK, task success rose from 63–70% to 95–98% for
          smaller models and to 100% for all models with a one-call localization tool, using up to
          3.5x fewer tokens on the smallest model. Gains narrow for the strongest model.`,
      es: `frente al SDK del fabricante, la tasa de éxito subió de 63–70% a 95–98% en los modelos más
          pequeños y a 100% en todos los modelos con una herramienta de localización de una sola
          llamada, usando hasta 3.5 veces menos tokens en el modelo más pequeño. La ventaja se reduce
          en el modelo más potente.`,
      fr: `par rapport au SDK du fabricant, le taux de réussite passe de 63–70 % à 95–98 % pour les
          modèles plus petits et à 100 % pour tous les modèles avec un outil de localisation en un seul
          appel, avec jusqu'à 3,5 fois moins de tokens pour le plus petit modèle. L'écart se réduit pour
          le modèle le plus performant.`,
      de: `im Vergleich zum Hersteller-SDK stieg die Erfolgsquote bei kleineren Modellen von 63–70 % auf
          95–98 % und mit einem Lokalisierungswerkzeug mit nur einem Aufruf bei allen Modellen auf 100 %,
          bei bis zu 3,5-mal weniger Tokens für das kleinste Modell. Beim stärksten Modell fällt der
          Vorteil geringer aus.`,
    },

    // Projects: ORION TRACE Data HUB
    {
      en: "Late-risk prediction from commit history",
      es: "Predicción de riesgo de retraso a partir del historial de commits",
      fr: "Prédiction du risque de retard à partir de l'historique des commits",
      de: "Vorhersage von Verzugsrisiken aus der Commit-Historie",
    },
    {
      en: `A follow-up to our IEEE TALE 2026 paper: a client-side ML layer for the Data HUB
        that learns from the commit history of each course mission.`,
      es: `Continuación de nuestro artículo en IEEE TALE 2026: una capa de ML del lado del cliente para
        el Data HUB que aprende del historial de commits de cada misión del curso.`,
      fr: `Suite de notre article à IEEE TALE 2026 : une couche de ML côté client pour le Data HUB, qui
        apprend de l'historique des commits de chaque mission du cours.`,
      de: `Fortsetzung unseres Beitrags bei IEEE TALE 2026: eine clientseitige ML-Schicht für den Data
        HUB, die aus der Commit-Historie jeder Kursmission lernt.`,
    },
    { en: "Late-risk prediction", es: "Predicción de riesgo de retraso", fr: "Prédiction du risque de retard", de: "Vorhersage von Verzugsrisiken" },
    {
      en: `a regularized logistic regression and a boosted-stumps model
          estimate which work areas are likely to miss their deadlines, using only information
          available before each deadline.`,
      es: `una regresión logística regularizada y un modelo de boosted stumps estiman qué áreas de
          trabajo probablemente no cumplirán sus fechas límite, usando solo información disponible antes
          de cada fecha límite.`,
      fr: `une régression logistique régularisée et un modèle de boosted stumps estiment quels domaines
          de travail risquent de manquer leurs échéances, en n'utilisant que les informations
          disponibles avant chaque échéance.`,
      de: `eine regularisierte logistische Regression und ein Boosted-Stumps-Modell schätzen, welche
          Arbeitsbereiche ihre Fristen wahrscheinlich verpassen, und nutzen dabei nur Informationen, die
          vor der jeweiligen Frist verfügbar sind.`,
    },
    { en: "Behavior profiles", es: "Perfiles de comportamiento", fr: "Profils de comportement", de: "Verhaltensprofile" },
    {
      en: `K-means, with k selected by silhouette score, groups students into
          behavior profiles.`,
      es: `K-means, con k elegido mediante el coeficiente de silueta, agrupa a los estudiantes en
          perfiles de comportamiento.`,
      fr: `K-means, avec k choisi par le score de silhouette, regroupe les étudiants en profils de
          comportement.`,
      de: `K-Means, mit k ausgewählt über den Silhouettenkoeffizienten, gruppiert die Studierenden in
          Verhaltensprofile.`,
    },
    { en: "Pilot", es: "Piloto", fr: "Pilote", de: "Pilotprojekt" },
    {
      en: `a flexible-manufacturing course with 31 students, 6 teams and 248 commits.`,
      es: `un curso de manufactura flexible con 31 estudiantes, 6 equipos y 248 commits.`,
      fr: `un cours de fabrication flexible avec 31 étudiants, 6 équipes et 248 commits.`,
      de: `ein Kurs zur flexiblen Fertigung mit 31 Studierenden, 6 Teams und 248 Commits.`,
    },

    // Projects: Earlier work
    { en: "Earlier work", es: "Trabajo previo", fr: "Travaux antérieurs", de: "Frühere Arbeiten" },
    {
      en: `Applied ML and data engineering projects: a cervical cancer risk classifier,
        a glucose level predictor, and a Kafka-based streaming and batch pipeline with PostgreSQL.`,
      es: `Proyectos de ML aplicado e ingeniería de datos: un clasificador de riesgo de cáncer
        cervicouterino, un predictor de niveles de glucosa y un pipeline de streaming y batch basado
        en Kafka con PostgreSQL.`,
      fr: `Projets de ML appliqué et d'ingénierie des données : un classifieur de risque de cancer du
        col de l'utérus, un prédicteur de glycémie et un pipeline streaming et batch basé sur Kafka avec PostgreSQL.`,
      de: `Projekte in angewandtem ML und Data Engineering: ein Klassifikator für das
        Gebärmutterhalskrebsrisiko, ein Prädiktor für den Glukosespiegel und eine Kafka-basierte
        Streaming- und Batch-Pipeline mit PostgreSQL.`,
    },

    // Talks
    {
      en: `Agentic AI for enterprise analytics: replacing static dashboards with conversational agents over governed data, with a live incident-response agent for network operations. National webinar, dataIQ.`,
      es: `IA agéntica para analítica empresarial: reemplazar dashboards estáticos con agentes conversacionales sobre datos gobernados, con un agente de respuesta a incidentes en vivo para operaciones de red. Webinar nacional, dataIQ.`,
      fr: `IA agentique pour l'analytique d'entreprise : remplacer les tableaux de bord statiques par des agents conversationnels sur des données gouvernées, avec un agent de réponse aux incidents en direct pour les opérations réseau. Webinaire national, dataIQ.`,
      de: `Agentische KI für Unternehmensanalytik: statische Dashboards durch Konversationsagenten auf kontrollierten Daten ersetzen, mit einem Live-Agenten für Incident Response im Netzwerkbetrieb. Landesweites Webinar, dataIQ.`,
    },
    {
      en: `Internal technical sessions at dataIQ: deploying machine learning in enterprise environments (experiment tracking, feature stores and model registries, demonstrated on a credit default risk model); AI coding agents for data engineering, analytics and ML workflows; and building AI applications end to end with coding agents, from raw data to a deployed app.`,
      es: `Sesiones técnicas internas en dataIQ: despliegue de machine learning en entornos empresariales (seguimiento de experimentos, feature stores y registros de modelos, demostrado con un modelo de riesgo de incumplimiento crediticio); agentes de programación con IA para flujos de ingeniería de datos, analítica y ML; y desarrollo de aplicaciones de IA de principio a fin con agentes de programación, desde los datos crudos hasta una app desplegada.`,
      fr: `Sessions techniques internes chez dataIQ : déployer le machine learning en entreprise (suivi d'expériences, feature stores et registres de modèles, démontrés sur un modèle de risque de défaut de crédit) ; agents de codage IA pour les workflows d'ingénierie des données, d'analytique et de ML ; et création d'applications d'IA de bout en bout avec des agents de codage, des données brutes à une application déployée.`,
      de: `Interne technische Sessions bei dataIQ: Machine Learning in Unternehmensumgebungen bereitstellen (Experiment-Tracking, Feature Stores und Model Registries, demonstriert an einem Kreditausfallrisikomodell); KI-Coding-Agenten für Data-Engineering-, Analytics- und ML-Workflows; und KI-Anwendungen End-to-End mit Coding-Agenten entwickeln, von Rohdaten bis zur bereitgestellten App.`,
    },
    {
      en: `Enterprise data integration pipelines: turning raw, multi-system data into analytics-ready insights, with a live data-integration demo. National webinar, dataIQ.`,
      es: `Pipelines de integración de datos empresariales: convertir datos crudos de múltiples sistemas en información lista para analítica, con una demostración en vivo de integración de datos. Webinar nacional, dataIQ.`,
      fr: `Pipelines d'intégration de données d'entreprise : transformer des données brutes issues de multiples systèmes en informations prêtes pour l'analyse, avec une démonstration en direct. Webinaire national, dataIQ.`,
      de: `Datenintegrations-Pipelines für Unternehmen: Rohdaten aus mehreren Systemen in analysebereite Erkenntnisse verwandeln, mit einer Live-Demo zur Datenintegration. Landesweites Webinar, dataIQ.`,
    },

    // Teaching & Outreach
    {
      en: "Machine Learning for Data-Driven Production. Course, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Mexico City</strong>.",
      es: "Machine Learning for Data-Driven Production. Curso, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Ciudad de México</strong>.",
      fr: "Machine Learning for Data-Driven Production. Cours, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Mexico</strong>.",
      de: "Machine Learning for Data-Driven Production. Kurs, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Mexiko-Stadt</strong>.",
    },
    {
      en: "Introduction to Data Analytics and Machine Learning. Course, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Monterrey</strong>.",
      es: "Introduction to Data Analytics and Machine Learning. Curso, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Monterrey</strong>.",
      fr: "Introduction to Data Analytics and Machine Learning. Cours, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Monterrey</strong>.",
      de: "Introduction to Data Analytics and Machine Learning. Kurs, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Monterrey</strong>.",
    },
    {
      en: "Workshop on mechanical design for competition robots, RoboChamp, organized by RoBorregos (Tecnológico de Monterrey robotics team), <strong>Monterrey</strong>.",
      es: "Taller de diseño mecánico para robots de competencia, RoboChamp, organizado por RoBorregos (equipo de robótica del Tecnológico de Monterrey), <strong>Monterrey</strong>.",
      fr: "Atelier de conception mécanique de robots de compétition, RoboChamp, organisé par RoBorregos (équipe de robotique du Tecnológico de Monterrey), <strong>Monterrey</strong>.",
      de: "Workshop zur mechanischen Konstruktion von Wettbewerbsrobotern, RoboChamp, organisiert von RoBorregos (Robotik-Team des Tecnológico de Monterrey), <strong>Monterrey</strong>.",
    },
    {
      en: "Introductory courses on electronics and mechanics for biomedical engineering students, organized by SEIMD (Tecnológico de Monterrey), <strong>Monterrey</strong>.",
      es: "Cursos introductorios de electrónica y mecánica para estudiantes de ingeniería biomédica, organizados por SEIMD (Tecnológico de Monterrey), <strong>Monterrey</strong>.",
      fr: "Cours d'introduction à l'électronique et à la mécanique pour des étudiants en génie biomédical, organisés par SEIMD (Tecnológico de Monterrey), <strong>Monterrey</strong>.",
      de: "Einführungskurse in Elektronik und Mechanik für Studierende der Biomedizintechnik, organisiert von SEIMD (Tecnológico de Monterrey), <strong>Monterrey</strong>.",
    },
    {
      en: "Hands-on STEAM workshops for secondary-school students in <strong>Juárez</strong> and <strong>General Zuazua, Nuevo León</strong>, over two consecutive semesters. ITERAndo con Javer social service program (Javer–Tecnológico de Monterrey).",
      es: "Talleres prácticos de STEAM para estudiantes de secundaria en <strong>Juárez</strong> y <strong>General Zuazua, Nuevo León</strong>, durante dos semestres consecutivos. Programa de servicio social ITERAndo con Javer (Javer–Tecnológico de Monterrey).",
      fr: "Ateliers STEAM pratiques pour des collégiens à <strong>Juárez</strong> et à <strong>General Zuazua, Nuevo León</strong>, pendant deux semestres consécutifs. Programme de service social ITERAndo con Javer (Javer–Tecnológico de Monterrey).",
      de: "Praxisnahe STEAM-Workshops für Schülerinnen und Schüler der Sekundarstufe in <strong>Juárez</strong> und <strong>General Zuazua, Nuevo León</strong>, über zwei aufeinanderfolgende Semester. Sozialdienstprogramm ITERAndo con Javer (Javer–Tecnológico de Monterrey).",
    },
  ],
};
