window.SITE = {
  profile: {
    firstName: "Leonardo",
    lastName: "Andrade Flores",
    title: "Visiting Student",
    affiliation: "MIT Device Realization Laboratory",
    affiliationUrl: "https://devicerealization.mit.edu/",
    keywords: "Building reliable intelligent systems for real-world machines.",
    email: "leonardoandradeflo27@gmail.com",
    scholar: "https://scholar.google.com/citations?user=1G54gdUAAAAJ&hl=es",
    github: "https://github.com/Starman26",
    linkedin: "https://www.linkedin.com/in/leonardoandradeflores1/",
    cv: "",
    photo: "assets/profile.jpg",
    photoCaption: "Cambridge, 2026",
    bio: [
      `I am a Visiting Student at the <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a>,
       working with <a href="https://fredfactory.mit.edu/team/banthony">Prof. Brian W. Anthony</a>, and a final-year undergraduate in
       Mechatronics Engineering at <a href="https://tec.mx/">Tecnológico de Monterrey</a>.
       I also do research at the MIT–Tec <a href="https://fredfactory.mit.edu/">FrED Factory Lab</a>.`,
      `My research focuses on making learning-based and agentic systems reliable on physical
       hardware: machines that detect their own faults, verify actions before execution, and
       keep human operators involved when they reach their limits. I lead
       <a href="#project-nerve">NERVE</a>, a framework for fault detection and compensation on
       fiber-extrusion machines, and founded <a href="https://n-soul.ai">(n) Soul</a>, a platform
       for operating heterogeneous industrial hardware through natural language.`,
      `Previously, I worked on reinforcement learning and perception for surgical robotics at
       Healthengroup, on industrial data infrastructure at Schneider Electric, and as a Data
       Engineer Consultant at dataIQ, where I designed ML and generative AI systems and led
       national webinars on enterprise AI adoption.`,
      `I am applying to PhD programs in machine learning, robot learning, and physical AI for Fall 2027.`,
    ],
  },

  research: {
    intro: `How can intelligent systems act on real machines when failures are costly,
      conditions change, and data is limited? Manufacturing makes this question concrete: it
      receives far less attention from machine learning than digital domains, yet depends on
      human expertise that is scarce and hard to transfer. My work studies three related
      challenges: learning from failures that are difficult to reproduce, verifying actions
      before they reach a machine, and supporting the people who operate complex equipment. See my
      <a href="https://scholar.google.com/citations?user=1G54gdUAAAAJ&hl=es">Google Scholar</a>
      for a full list of publications.`,
    papers: [
      {
        title: "Immersive cognitive factory twin: optimizing Industry 5.0 with an integrated VR, ML, and LLM framework",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=es&user=1G54gdUAAAAJ&citation_for_view=1G54gdUAAAAJ:d1gkVwhDpl0C",
        authors: "Adán Flores Ramírez, Russel Bradley, Leonardo Andrade Flores, Alejandro Guerrero Carrillo, Alejandro González-Escamilla, Pedro Ponce, Erick Ramírez-Cedillo, Brian W. Anthony",
        meta: `<em>Production &amp; Manufacturing Research</em>, 14(1), Taylor &amp; Francis, 2026`,
        links: { paper: "https://scholar.google.com/citations?view_op=view_citation&hl=es&user=1G54gdUAAAAJ&citation_for_view=1G54gdUAAAAJ:d1gkVwhDpl0C" },
        image: "assets/INMERSIVE_LLM.jpg",
        bibtex: String.raw`@article{floresramirez2026immersive,
  title={Immersive cognitive factory twin: optimizing {Industry} 5.0 with an integrated {VR}, {ML}, and {LLM} framework},
  author={Flores Ram{\'\i}rez, Ad{\'a}n and Bradley, Russel and Andrade Flores, Leonardo and Guerrero Carrillo, Alejandro and Gonz{\'a}lez-Escamilla, Alejandro and Ponce, Pedro and Ram{\'\i}rez-Cedillo, Erick and Anthony, Brian W.},
  journal={Production \& Manufacturing Research},
  volume={14},
  number={1},
  pages={2664909},
  year={2026},
  publisher={Taylor \& Francis}
}`,
        text: `A VR factory digital twin where a neural network predicts operator KPIs and an
          LLM turns them into concrete actions such as reassignments or breaks. In a
          three-station assembly study it raised throughput by 28.6% and cut scrap by 35.4%.`,
      },
      {
        title: "Design and Validation of a Blockchain-Enabled Traceability System in the FrED Smart Learning Factory",
        url: "https://doi.org/10.1016/j.mfglet.2026.08.067",
        authors: "Renzo Solorzano Pinzas, Leonardo Andrade Flores, Alexandro Ortiz Espinoza, Russel Bradley, Brian W. Anthony, Erick Ramírez-Cedillo",
        meta: `<em>Manufacturing Letters</em> (NAMRC 54), 2026`,
        links: { paper: "https://doi.org/10.1016/j.mfglet.2026.08.067" },
        image: "assets/Paper%20Renzo.png",
        bibtex: String.raw`@article{solorzano2026blockchain,
  title={Design and Validation of a {Blockchain}-Enabled Traceability System in the {FrED} Smart Learning Factory},
  author={Solorzano Pinzas, Renzo and Andrade Flores, Leonardo and Ortiz Espinoza, Alexandro and Bradley, Russel and Anthony, Brian W. and Ram{\'\i}rez-Cedillo, Erick},
  journal={Manufacturing Letters},
  note={54th North American Manufacturing Research Conference (NAMRC 54)},
  year={2026},
  doi={10.1016/j.mfglet.2026.08.067}
}`,
        text: `A traceability architecture for the FrED learning factory that links a low-code
          MES (Tulip) to a private MultiChain network, hashing inspection results and operator
          actions into a tamper-proof production record.`,
      },
      {
        title: "Data-driven Learning Factories: Integrating Tulip MES for Enhanced Operator Training",
        authors: "Leonardo Andrade Flores, Gabriela Lizeth Peña Zuñiga, Cristopher Ortiz Maldonado, Erick Ramírez-Cedillo, Alexandro Ortiz-Espinoza, Russel Bradley, Brian W. Anthony",
        meta: `CLF 2026, Springer (to appear)`,
        links: {},
        image: "assets/DATADRIVEN.png",
        bibtex: String.raw`@inproceedings{andradeflores2026datadriven,
  title={Data-driven Learning Factories: Integrating Tulip MES for Enhanced Operator Training},
  author={Andrade Flores, Leonardo and Pe{\~n}a Zu{\~n}iga, Gabriela Lizeth and Ortiz Maldonado, Cristopher and Ram{\'i}rez-Cedillo, Erick and Ortiz-Espinoza, Alexandro and Bradley, Russel and Anthony, Brian W.},
  booktitle={Next-Gen Learning Factories: Proceedings of the 16th Conference on Learning Factories (CLF 2026), Volume 1},
  publisher={Springer},
  year={2026},
  note={To appear}
}`,
        text: `MES-based traceability for a learning factory that integrates ERP, PLC-controlled
          stations and cobots, using time-stamped execution data on operator interactions to
          expose bottlenecks, learning curves and process adherence.`,
      },
      {
        title: "FrEDie: An AI- and AR-Powered Virtual Assistant to Reduce Downtime and Foster Competence Development in Learning Factories",
        authors: "Alexandro Ortiz-Espinoza, Leonardo Andrade Flores, Erick Ramírez-Cedillo, Cesar Cantú, Hector Eduardo Tovar Mendoza, Daniela Herrera García, Pedro Ponce-Cruz",
        meta: `CLF 2026, Springer (to appear)`,
        links: {},
        image: "assets/fredai.png",
        bibtex: String.raw`@inproceedings{ortizespinoza2026fredie,
  title={FrEDie: An AI- and AR-Powered Virtual Assistant to Reduce Downtime and Foster Competence Development in Learning Factories},
  author={Ortiz-Espinoza, Alexandro and Andrade Flores, Leonardo and Ram{\'i}rez-Cedillo, Erick and Cant{\'u}, Cesar and Tovar Mendoza, Hector Eduardo and Herrera Garc{\'i}a, Daniela and Ponce-Cruz, Pedro},
  booktitle={Next-Gen Learning Factories: Proceedings of the 16th Conference on Learning Factories (CLF 2026), Volume 1},
  publisher={Springer},
  year={2026},
  note={To appear}
}`,
        text: `An LLM-based assistant with orchestrated APIs and AR overlays on physical equipment
          that guides students through troubleshooting of robots, PLCs, HMIs and vision systems
          in a learning factory, reducing laboratory downtime.`,
      },
      {
        title: "From Human Patrol to Automated Monitoring: Conversational AI for Safety in Industrial Facilities",
        authors: "Iván Enrique Rodríguez Estrada, Leonardo Andrade Flores, Gabriela Lizeth Peña Zuñiga, Adrián Oswaldo Salazar González, Erick Ramírez-Cedillo",
        meta: `MICAI 2026 (to appear)`,
        links: {},
        image: "assets/fredpatrol.png",
        bibtex: String.raw`@inproceedings{rodriguezestrada2026humanpatrol,
  title={From Human Patrol to Automated Monitoring: Conversational AI for Safety in Industrial Facilities},
  author={Rodr{\'i}guez Estrada, Iv{\'a}n Enrique and Andrade Flores, Leonardo and Pe{\~n}a Zu{\~n}iga, Gabriela Lizeth and Salazar Gonz{\'a}lez, Adri{\'a}n Oswaldo and Ram{\'i}rez-Cedillo, Erick},
  booktitle={Mexican International Conference on Artificial Intelligence (MICAI 2026)},
  year={2026},
  note={To appear}
}`,
        text: `A conversational multi-agent monitoring layer deployed above a certified PL e / SIL 3
          safety boundary on a KUKA KR6 cell, adding graduated speed limiting and operator
          alerts on top of the existing safety system.`,
      },
      {
        title: "From Intention to Action, ORION TRACE: An AI-Driven Platform for Commit Tracking, KPI Transparency, and Project-Management Assessment in a Flexible Manufacturing Cell Challenge",
        authors: "Erick Ramírez-Cedillo, Leonardo Andrade Flores, Gabriela Lizeth Peña Zuñiga, Adrián Oswaldo Salazar González",
        meta: `IEEE TALE 2026 (to appear)`,
        links: {},
        image: "assets/orion_trace.png",
        bibtex: String.raw`@inproceedings{ramirezcedillo2026oriontrace,
  title={From Intention to Action, ORION TRACE: An AI-Driven Platform for Commit Tracking, KPI Transparency, and Project-Management Assessment in a Flexible Manufacturing Cell Challenge},
  author={Ram{\'i}rez-Cedillo, Erick and Andrade Flores, Leonardo and Pe{\~n}a Zu{\~n}iga, Gabriela Lizeth and Salazar Gonz{\'a}lez, Adri{\'a}n Oswaldo},
  booktitle={2026 IEEE International Conference on Teaching, Assessment, and Learning for Engineering (TALE)},
  publisher={IEEE},
  year={2026},
  note={To appear}
}`,
        text: `A platform with an AI agent and device-level validation that records what student
          teams commit to versus what they deliver in a six-team ISA-95 manufacturing cell.
          Across 248 commits only 23.8% closed on schedule, and planning intensity and
          execution discipline emerged as two near-orthogonal behaviors.`,
      },
      {
        title: "ORION: Teaching Itself to Teach, a Cognitively Adaptive Physical AI Framework for Industrial Skill Training",
        authors: "Erick Ramírez-Cedillo, Leonardo Andrade Flores, María Fernanda De la Cruz Rangel, Rodrigo Quintero Casso",
        meta: `Prototypes for Humanity, Dubai, 2026`,
        links: {},
        image: "assets/PFH.png",
        bibtex: String.raw`@inproceedings{ramirezcedillo2026orion,
  title={ORION: Teaching Itself to Teach, a Cognitively Adaptive Physical AI Framework for Industrial Skill Training},
  author={Ram{\'i}rez-Cedillo, Erick and Andrade Flores, Leonardo and De la Cruz Rangel, Mar{\'i}a Fernanda and Quintero Casso, Rodrigo},
  booktitle={Prototypes for Humanity 2026},
  address={Dubai, UAE},
  year={2026}
}`,
        text: `A physical AI multi-agent system in which devices register through a capability card,
          from which an agent generates practice sessions and evaluation rubrics without manual
          authoring, then adapts pacing in closed loop from EEG-based engagement. Evaluated with
          eleven participants on a physical robotic arm.`,
      },
      {
        title: "Fault-response fidelity of a digital twin calibrated under healthy operation: Paired physical-digital fault injection in closed-loop fiber extrusion",
        authors: "Leonardo Andrade Flores, David Ángeles-Rojas, Sofía Pérez-Pineda, Miguel Garzon-Parra, Ibrahim El Khatib, Russel Bradley, Pedro Ponce, Erick Ramírez-Cedillo, Brian W. Anthony",
        meta: `Under review, NAMRC 2027`,
        links: {},
        image: "assets/NERVE.png",
        text: `Paired fault injection on a fiber-extrusion machine and its digital twin shows that a
          twin calibrated only on healthy data reproduces closed-loop fault masking, but mispredicts
          the unregulated fiber diameter and overestimates motor-duty response by up to 47%.`,
      },
    ],
  },

  news: [
    { date: "Nov 2026", text: `Our paper <strong>"ORION: Teaching Itself to Teach"</strong> was presented at Prototypes for Humanity in Dubai.` },
    { date: "Oct 2026", text: `Started a research stay at the <a href="https://devicerealization.mit.edu/">MIT Device Realization Laboratory</a>.` },
    { date: "2026", text: `Papers accepted at <strong>NAMRC 54</strong> (one), <strong>CLF 2026</strong> (two), <strong>MICAI 2026</strong> (one) and <strong>IEEE TALE 2026</strong> (one).` },
  ],

  awards: [
    { year: "2026", text: "<strong>Trayectoria Sobresaliente</strong> distinction, School of Engineering and Sciences, Tecnológico de Monterrey, for research, entrepreneurship and social impact work." },
    { year: "2026", text: "<strong>Leader of the School</strong> recognition, School of Engineering and Sciences, Tecnológico de Monterrey." },
  ],

  projects: [
    {
      id: "project-nerve",
      name: "NERVE",
      tagline: "Machines that keep running when they fail",
      description: `Industrial machines stop when something breaks. NERVE aims to let them notice
        their own faults and compensate in real time, using a digital twin to learn failures that
        are too costly to produce on real hardware.`,
      points: [
        ["Learning from simulated failures", `we inject identical faults into a real
          fiber-extrusion machine and its digital twin to measure when simulated failures can be
          trusted. A twin calibrated only on healthy data hides some faults and mispredicts others
          by up to 47%. (under review, NAMRC 2027)`],
        ["Compensating while running", `we are now training controllers on the validated twin to
          detect and correct faults on the physical machine without stopping production.`],
        `Built on FrED, the MIT–Tec desktop fiber-extrusion platform.`,
      ],
      links: {},
      note: "code: available on request",
      image: "assets/NERVE.png",
    },
    {
      id: "project-nsoul",
      name: "(n) Soul",
      tagline: "A safety-first multi-agent platform for industrial robots, PLCs and vision systems",
      description: `Operates a heterogeneous factory cell as a single system through natural language.`,
      points: [
        ["Hardware", `robot arms from Universal Robots, ABB, KUKA and UFactory; PLCs from Siemens
          and Schneider Electric; Cognex vision systems; custom microcontroller-based devices.`],
        ["Abstraction", `Saiph Bridge exposes every device through one hardware-abstraction layer.`],
        ["Verified action", `agents can propose actions but not execute them unchecked; every
          motion command is simulated against a MuJoCo collision gate before it reaches the hardware.`],
        ["Research use", `a testbed for safe natural-language operation across diverse industrial systems.`],
      ],
      links: { website: "https://n-soul.ai" },
      note: "code: proprietary, available on request",
      image: "assets/NSOUL.png",
    },
    {
      id: "project-earlier",
      name: "Earlier work",
      tagline: "2024",
      description: `Applied ML and data engineering projects: a cervical cancer risk classifier,
        a glucose level predictor, and a Kafka-based streaming and batch pipeline with PostgreSQL.`,
      links: { code: "https://github.com/Starman26" },
      image: "assets/KAFKA.png",
      imageFit: "width",
    },
  ],

  talks: [
    { date: "Apr 2026", text: `Agentic AI for enterprise analytics: replacing static dashboards with conversational agents over governed data, with a live incident-response agent for network operations. National webinar, dataIQ.` },
    { date: "2026", text: `Internal technical sessions at dataIQ: deploying machine learning in enterprise environments (experiment tracking, feature stores and model registries, demonstrated on a credit default risk model); AI coding agents for data engineering, analytics and ML workflows; and building AI applications end to end with coding agents, from raw data to a deployed app.` },
    { date: "Nov 2025", text: `Enterprise data integration pipelines: turning raw, multi-system data into analytics-ready insights, with a live data-integration demo. National webinar, dataIQ.` },
  ],

  teaching: [
    { term: "2026", text: "Machine Learning for Data-Driven Production. Course, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Mexico City</strong>." },
    { term: "2025", text: "Introduction to Data Analytics and Machine Learning. Course, FrED Factory Summit (MIT–Tecnológico de Monterrey), <strong>Monterrey</strong>." },
    { term: "2025", text: "Workshop on mechanical design for competition robots, RoboChamp, organized by RoBorregos (Tecnológico de Monterrey robotics team), <strong>Monterrey</strong>." },
    { term: "2025", text: "Introductory courses on electronics and mechanics for biomedical engineering students, organized by SEIMD (Tecnológico de Monterrey), <strong>Monterrey</strong>." },
    { term: "2024", text: "Hands-on STEAM workshops for secondary-school students in <strong>Juárez</strong> and <strong>General Zuazua, Nuevo León</strong>, over two consecutive semesters. ITERAndo con Javer social service program (Javer–Tecnológico de Monterrey)." },
  ],
};
