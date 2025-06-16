export type Language = "en" | "pt" | "es"

export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.skills"
  | "nav.projects"
  | "nav.education"
  | "nav.contact"
  | "hero.hello"
  | "hero.title"
  | "hero.occupation"
  | "hero.subtitle"
  | "hero.viewProjects"
  | "hero.downloadResume"
  | "hero.retroMode"
  | "hero.modernMode"
  | "about.title"
  | "about.subtitle"
  | "about.paragraph1"
  | "about.paragraph2"
  | "about.name"
  | "about.email"
  | "about.location"
  | "about.study"
  | "skills.title"
  | "skills.technicalSkills"
  | "skills.whatIDo"
  | "skills.webDev"
  | "skills.webDevDesc"
  | "skills.mobileApps"
  | "skills.mobileAppsDesc"
  | "skills.backendDev"
  | "skills.backendDevDesc"
  | "skills.problemSolving"
  | "skills.problemSolvingDesc"
  | "projects.title"
  | "projects.subtitle"
  | "projects.viewAll"
  | "projects.code"
  | "projects.demo"
  | "projects.project1Title"
  | "projects.project1Desc"
  | "projects.project1Details"
  | "projects.project2Title"
  | "projects.project2Desc"
  | "projects.project2Details"
  | "projects.project3Title"
  | "projects.project3Desc"
  | "projects.project3Details"
  | "projects.project4Title"
  | "projects.project4Desc"
  | "projects.project4Details"
  | "projects.project5Title"
  | "projects.project5Desc"
  | "projects.project5Details"
  | "projects.project6Title"
  | "projects.project6Desc"
  | "projects.project6Details"
  | "education.title"
  | "education.educationTitle"
  | "education.experienceTitle"
  | "education.firstDegreeTitle"
  | "education.firstDegreePeriod"
  | "education.firstDegreeDesc"
  | "education.secondDegreeTitle"
  | "education.secondDegreePeriod"
  | "education.secondDegreeDesc"
  | "education.firstExpTitle"
  | "education.firstExpPeriod"
  | "education.firstExpDesc"
  | "contact.title"
  | "contact.subtitle"
  | "contact.location"
  | "contact.email"
  | "contact.phone"
  | "contact.followMe"
  | "contact.yourName"
  | "contact.yourEmail"
  | "contact.subject"
  | "contact.message"
  | "contact.sendMessage"
  | "footer.rights"
  | "footer.madeWith"
  | "footer.bestViewed"

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.hello": "Hello, I'm",
    "hero.title": "João Suzuki",
    "hero.occupation": "Software Engineer",
    "hero.subtitle":
      "A passionate developer and engineering student creating innovative solutions and turning ideas into reality through clean and efficient code.",
    "hero.viewProjects": "View Projects",
    "hero.downloadResume": "Download Resume",
    "hero.retroMode": "Retro Mode",
    "hero.modernMode": "Modern Mode",

    "about.title": "About Me",
    "about.subtitle": "Software Engineering Student",
    "about.paragraph1":
      "I'm a passionate software engineering student with a strong foundation in computer science and a love for creating elegant solutions to complex problems. My journey in tech began in 2019, when I started writing Python scripts to automate repetitive tasks, and I've been hooked ever since.",
    "about.paragraph2":
      "Currently pursuing my degree in Software Engineering at FATEC, I balance my academic studies with hands-on projects and continuous learning. I'm particularly interested in web development, machine learning, and creating software that makes a positive impact.",
    "about.name": "Name:",
    "about.email": "Email:",
    "about.location": "Location:",
    "about.study": "Study:",

    "skills.title": "My Skills",
    "skills.technicalSkills": "Technical Skills",
    "skills.whatIDo": "What I Do",
    "skills.webDev": "Web Development",
    "skills.webDevDesc": "Building responsive and performant web applications with modern frameworks.",
    "skills.mobileApps": "Mobile Apps",
    "skills.mobileAppsDesc": "Creating cross-platform mobile applications with React Native.",
    "skills.backendDev": "Backend Development",
    "skills.backendDevDesc": "Designing robust APIs and server-side applications.",
    "skills.problemSolving": "Problem Solving",
    "skills.problemSolvingDesc": "Finding efficient solutions to complex technical challenges.",

    "projects.title": "My Projects",
    "projects.subtitle":
      "Here are some of my recent projects that showcase my skills and experience. Each project reflects my ability to solve complex problems and work with different technologies.",
    "projects.viewAll": "View All Projects",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "projects.project1Title": "Corporate website - CFI Consultoria",
    "projects.project1Desc": "A complete corporate website featuring a blog page and a virtual AI assistant.",
    "projects.project1Details": 
      "This project is a corporate website developed for the company CFI Consultoria. It was built using WordPress, with additional PHP and JavaScript for advanced features such as the AI assistant, CFI IA, which answers questions about Caixa auctions. It replaced the outdated old site that had poor performance and lacked SEO optimization.",
    "projects.project2Title": "Customers and Sales Management System - CFI Consultoria",
    "projects.project2Desc": "An application for managing and analyzing company data, including customer and financial operations.",
    "projects.project2Details": 
      "This project is an internal system for managing and analyzing CFI Consultoria’s internal data. The goal was to replace the old system that used outdated and slower methods.\n\nI was responsible for the complete development of the application, using Laravel as the main technology — a PHP framework known for its robustness and structure. The system includes features such as client registration and control, report generation, an analytical dashboard, dynamic filters, and financial management.\n\nI used Blade to build the views, Eloquent ORM for data manipulation, and implemented secure authentication, form validations, and a scalable modular structure. The new system provided a faster experience, with better performance and usability compared to the previous solution.",
    "projects.project3Title": "Streaming Website - CFI Consultoria",
    "projects.project3Desc": "A streaming platform for subscribers with legal support and auction property updates.",
    "projects.project3Details": 
      "This project was developed for the company CFI Consultoria. The system’s goal was to offer subscribers a video streaming platform, which also featured a channel for chatting with a lawyer and sending real estate auction opportunities.\n\nI developed the entire project modeling and the actual code, including the monthly payment system (the site would function as a SaaS), video viewing system, video publishing by admins, direct chat channel with a lawyer, and an area for sending and receiving real estate opportunities. In this project, I used technologies like React, Tailwind, Axios, and on the back end, Express.js and Prisma ORM.",
    "projects.project4Title": "Smart-Farm Project - BugBusters",
    "projects.project4Desc": "A platform for real-time monitoring and analysis of smart greenhouse data.",
    "projects.project4Details": 
      "This project was carried out for FATEC alongside the I9 team to simulate a real development environment using the agile methodology. The goal of the project was to develop a system for monitoring a smart greenhouse.\n\nIn this project, I served as the Product Owner, responsible for creating the Product Backlog and organizing the sprints, and also handled the prototyping of the project. I contributed to code development on both the front end and back end, using technologies like HTML, CSS, JavaScript, and Flask, creating the functionality for processing data from the greenhouse and displaying it on the graphical interface.",
    "projects.project5Title": "Inv.sort - BugBusters",
    "projects.project5Desc": "Web application to manage and analyze warehouse data.",
    "projects.project5Details":
      "This project was carried out for FATEC to simulate a real development environment using the agile methodology. The goal of the system was to create a web application capable of storing data for a fictional inventory company, as well as allowing analysis and management of that data. I acted as a full stack developer, contributing to both the front end and the back end.\n\nOn the front end, I used technologies such as React, Tailwind CSS, and Axios to create a modern, responsive, and functional interface. I was responsible for components such as the product and category management dashboard, dynamic tables with filters for products, categories, employees, and stock, validated forms, and API consumption.\n\nOn the back end, I worked with Express.js and Prisma ORM, developing the database structure and REST routes for operations like registration, update, deletion, and listing of items. I also implemented error handling and middleware for security and code organization.",
    "projects.project6Title": "Checkpoint - From Zer0_",
    "projects.project6Desc": "Website for time-tracking and employee management.",
    "projects.project6Details":
      "This project was done for FATEC in partnership with the company Necto Systems to simulate a real development environment using the agile methodology. The goal was to create a time tracking and attendance management system, with an area for employees and another for managers/admins. In this project, I acted as the Product Owner, managing communication between the client and our team.\n\nI was responsible for prototyping the project interface and used Figma to design it. I structured the Product Backlog based on the client’s needs and led task prioritization with the team. I also actively participated in the system’s development, contributing to both the front end — using technologies such as React, Tailwind, and Axios — and the back end, using the Java Spring Boot framework. I collaborated in sprint organization, user story refinement, and testing to ensure a functional product aligned with client requirements.",

    "education.title": "Education & Experience",
    "education.educationTitle": "Education",
    "education.experienceTitle": "Experience",
    "education.firstDegreeTitle": "Bachelor of Software Enginnering",
    "education.firstDegreePeriod": "2024 - Present",
    "education.firstDegreeDesc":
      "Focusing on software engineering, algorithms, data structures, devops and agile development methods, while also actively engaging in coding competitions and extracurricular initiatives.",
    "education.secondDegreeTitle": "IT Technician Certificate",
    "education.secondDegreePeriod": "2022 - 2024",
    "education.secondDegreeDesc":
      "Studied the fundamentals of web development, including HTML, CSS, JavaScript, and backend technologies. Also trained in computer maintenance, Windows and Linux server setup and administration, and networking fundamentals.",
    "education.firstExpTitle": "Software Engineering",
    "education.firstExpPeriod": "2024 - present",
    "education.firstExpDesc":
      "Developed and maintained the company’s management system and main website. Contributed to process automation and implemented solutions for data collection and analysis. Worked with technologies such as Python, Laravel, Next.js, MySQL, React, and Node.js, following agile development practices.",

    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Feel free to reach out if you have any questions, project inquiries, or just want to connect. I'm always open to discussing new opportunities.",
    "contact.location": "Location",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.followMe": "Follow Me",
    "contact.yourName": "Your Name",
    "contact.yourEmail": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.sendMessage": "Send Message",

    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Designed and built with ❤️ using Next.js, React, and Tailwind CSS",
    "footer.bestViewed": "Best viewed with Netscape Navigator 4.0 or Internet Explorer 5.0",
  },

  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.education": "Educação",
    "nav.contact": "Contato",

    "hero.hello": "Olá, eu sou",
    "hero.title": "João Suzuki",
		"hero.occupation": "Engenheiro de Software",
    "hero.subtitle":
      "Um desenvolvedor apaixonado e estudante de engenharia criando soluções inovadoras e transformando ideias em realidade através de código limpo e eficiente.",
    "hero.viewProjects": "Ver Projetos",
    "hero.downloadResume": "Baixar Currículo",
    "hero.retroMode": "Modo Retrô",
    "hero.modernMode": "Modo Moderno",

    "about.title": "Sobre Mim",
    "about.subtitle": "Estudante de Engenharia de Software",
    "about.paragraph1":
      "Sou um estudante apaixonado de engenharia de software, com uma base sólida em ciência da computação e um amor por criar soluções elegantes para problemas complexos. Minha jornada na tecnologia começou em 2019, quando comecei a escrever scripts em Python para automatizar tarefas repetitivas, e desde então não parei mais.",
    "about.paragraph2":
      "Atualmente cursando meu tecnólogo em Desenvolvimento de Software Multiplataforma pela FATEC, equilibro meus estudos acadêmicos com projetos práticos e aprendizado contínuo. Estou particularmente interessado em desenvolvimento web, aprendizado de máquina e criação de software que cause um impacto positivo.",
    "about.name": "Nome:",
    "about.email": "Email:",
    "about.location": "Localização:",
    "about.study": "Estudo:",

    "skills.title": "Minhas Habilidades",
    "skills.technicalSkills": "Habilidades Técnicas",
    "skills.whatIDo": "O Que Eu Faço",
    "skills.webDev": "Desenvolvimento Web",
    "skills.webDevDesc": "Construindo aplicações web responsivas e performáticas com frameworks modernos.",
    "skills.mobileApps": "Aplicativos Móveis",
    "skills.mobileAppsDesc": "Criando aplicativos móveis multiplataforma com React Native.",
    "skills.backendDev": "Desenvolvimento Backend",
    "skills.backendDevDesc": "Projetando APIs robustas e aplicações server-side.",
    "skills.problemSolving": "Resolução de Problemas",
    "skills.problemSolvingDesc": "Encontrando soluções eficientes para desafios técnicos complexos.",

    "projects.title": "Meus Projetos",
    "projects.subtitle":
      "Aqui estão alguns dos meus projetos recentes que demonstram minhas habilidades e experiência. Cada projeto reflete minha capacidade de resolver problemas complexos e trabalhar com diferentes tecnologias.",
    "projects.viewAll": "Ver Todos os Projetos",
    "projects.code": "Código",
    "projects.demo": "Demo",
    "projects.project1Title": "Website Corporativo - CFI Consultoria",
    "projects.project1Desc": "Um site corporativo completo com blog e assistente virtual de IA.",
    "projects.project1Details": 
      "Este projeto é um site corporativo feito para a empresa CFI Consultoria. Foi desenvolvido usando o WordPress e ocasionalmente usei PHP e JavaScript para implementar outras funcionalidades no site, como a CFI IA, um assistente de IA para responder perguntas sobre os leilões da Caixa. Ele substituiu o antigo site da CFI, que possuía um visual antiquado, performance lenta e SEO sem otimização.",
    "projects.project2Title": "Sistema de Gerenciamento de Clientes e Vendas - CFI Consultoria",
    "projects.project2Desc": "Aplicação para gerenciamento e análise de dados da empresa, incluindo operações financeiras e de clientes.",
    "projects.project2Details": 
      "Este projeto é um sistema interno para gerenciamento e análise dos dados internos da empresa CFI Consultoria. O objetivo era substituir o antigo sistema que utilizava métodos mais antiquados e lentos.\n\nFui responsável pelo desenvolvimento completo da aplicação, utilizando como tecnologia principal o Laravel, framework PHP conhecido por sua robustez e organização. O sistema inclui funcionalidades como cadastro e controle de clientes, geração de relatórios, dashboard analítico, filtros dinâmicos e gestão da parte financeira.\n\nUtilizei Blade para a criação das views, Eloquent ORM para manipulação de dados, e implementei autenticação segura, validações de formulários e uma estrutura modular escalável. O novo sistema proporcionou uma experiência mais ágil, com melhor desempenho e usabilidade em comparação à solução anterior.",
    "projects.project3Title": "Website de Streaming - CFI Consultoria",
    "projects.project3Desc": "Plataforma de streaming com suporte jurídico e envio de oportunidades de imóveis.",
    "projects.project3Details": 
      "Este projeto foi realizado para a empresa CFI Consultoria. O objetivo deste sistema era oferecer aos assinantes da empresa uma plataforma de streaming de vídeos, que também oferecia um canal para conversar com um advogado e o envio de oportunidades de imóveis em leilão.\n\nDesenvolvi toda a modelagem do projeto e o código em si, como: sistema de pagamento mensal (O site funcionaria como um Saas), sistema de visualização de vídeos, bem como a parte de publicação dos vídeos e da criação dos módulos por parte dos admins, canal direto para conversa do advogado com o assinante, área para envio de oportunidades e do recebimento por parte do assinante. Neste projeto utilizei tecnologias como React, Tailwind, Axios e para o back-end Express.js e Prisma ORM.",
    "projects.project4Title": "Projeto Smart-Farm - BugBusters",
    "projects.project4Desc": "Plataforma para monitoramento e análise em tempo real de dados de uma estufa inteligente.",
    "projects.project4Details": "Este projeto foi realizado para a Fatec junto à equipe I9 para simular um ambiente real de desenvolvimento utilizando a metodologia ágil. O objetivo deste projeto era desenvolver um sistema para monitoramento de uma estufa inteligente.\n\nNeste projeto desempenhei o papel de Product Owner, fui responsável pela criação do Product Backlog e pela organização dos sprints, também realizei a prototipação do projeto. Atuei no desenvolvimento do código, tanto no front-end como no back-end, usando tecnologias como html, css, javascript e flask, criando a funcionalidade de processamento dos dados vindos da estufa e na exibiçaõ deles na interface gráfica.",
    "projects.project5Title": "Inv.sort - BugBusters",
    "projects.project5Desc": "Aplicação web para gerenciamento e análise de dados de estoque.",
    "projects.project5Details":
      "Este projeto foi realizado para a Fatec para simular um ambiente real de desenvolvimento utilizando a metodologia ágil. O objetivo deste sistema era criar uma aplicação web capaz de armazenar dados para uma empresa de estoque fictícia, bem como a possibilidade de realizar a análise e o gerenciamento destes dados. Atuei como desenvolvedor full stack, contribuindo tanto no front-end quanto no back-end.\n\nNo front-end, utilizei tecnologias como React, Tailwind CSS e Axios para criar uma interface moderna, responsiva e funcional. Fui responsável por componentes como o dashboard de gerenciamento de produtos e categorias, tabelas dinâmicas com filtros dos produtos, categorias, funcionários e estoque, formulários com validação e o consumo das APIs.\n\nNo back-end, trabalhei com Express.js e Prisma ORM, desenvolvendo a estrutura de banco de dados e as rotas REST para operações como cadastro, atualização, remoção e listagem de itens. Também implementei tratativas de erro e middleware para segurança e organização do código.",
    "projects.project6Title": "Checkpoint - From Zer0_",
    "projects.project6Desc": "Website para gerenciamento de marcação de pontos.",
    "projects.project6Details":
      "Este projeto foi feito para a FATEC em conjunto com a empresa Necto Systems para simular um ambiente real de desenvolvimento utilizando a metodologia ágil. O objetivo era criar um sistema de marcação e gerenciamento de ponto, com uma área voltada para o colaborador e outra para o gestor/admin. Neste projeto atuei como o Product Owner, estabelecendo a comunicação entre a cliente e a nossa equipe.\n\nFui responsável pela prototipação da interface do projeto e utilizei o Figma para criar o design, estruturei o Product Backlog com base nas necessidades da cliente, e conduzi a priorização das tarefas junto ao time. também participei ativamente do desenvolvimento do sistema, contribuindo tanto no front-end - onde utilizei tecnologias como React, Tailwind e Axios - quanto no back-end - utilizei o framework Java Spring Boot. Colaborei na organização dos sprints, refinamento das user stories e na realização de testes para garantir a entrega de um produto funcional e alinhado com os requisitos do cliente.",

    "education.title": "Educação & Experiência",
    "education.educationTitle": "Educação",
    "education.experienceTitle": "Experiência",
    "education.firstDegreeTitle": "Tecnólogo em Desenvolvimento de Software Multiplataforma",
    "education.firstDegreePeriod": "2024 - Presente",
    "education.firstDegreeDesc":
      "Com foco em engenharia de software, algoritmos, estruturas de dados, DevOps e métodos ágeis de desenvolvimento, também participando ativamente de competições de programação e iniciativas extracurriculares.",
    "education.secondDegreeTitle": "Técnico em Informática",
    "education.secondDegreePeriod": "2022 - 2024",
    "education.secondDegreeDesc":
      "Estudei os fundamentos do desenvolvimento web, incluindo HTML, CSS, JavaScript e tecnologias de backend. Também fui treinado em manutenção de computadores, configuração e administração de servidores Windows e Linux, além dos fundamentos de redes.",
    "education.firstExpTitle": "Engenheiro de Software",
    "education.firstExpPeriod": "2024 - Presente",
    "education.firstExpDesc":
      "Desenvolvi e mantive o sistema de gestão da empresa e o site principal. Contribuí para a automação de processos e implementei soluções para coleta e análise de dados. Trabalhei com tecnologias como Python, Laravel, Next.js, MySQL, React e Node.js, seguindo práticas ágeis de desenvolvimento.",

    "contact.title": "Entre em Contato",
    "contact.subtitle":
      "Sinta-se à vontade para entrar em contato se tiver alguma dúvida, consulta sobre projetos ou apenas quiser se conectar. Estou sempre aberto a discutir novas oportunidades.",
    "contact.location": "Localização",
    "contact.email": "Email",
    "contact.phone": "Telefone",
    "contact.followMe": "Siga-me",
    "contact.yourName": "Seu Nome",
    "contact.yourEmail": "Seu Email",
    "contact.subject": "Assunto",
    "contact.message": "Mensagem",
    "contact.sendMessage": "Enviar Mensagem",

    "footer.rights": "Todos os direitos reservados.",
    "footer.madeWith": "Projetado e construído com ❤️ usando Next.js, React e Tailwind CSS",
    "footer.bestViewed": "Melhor visualizado com Netscape Navigator 4.0 ou Internet Explorer 5.0",
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.education": "Educación",
    "nav.contact": "Contacto",

    "hero.hello": "Hola, soy",
    "hero.title": "João Suzuki",
		"hero.occupation": "Ingeniero de Software",
    "hero.subtitle":
      "Un desarrollador apasionado y estudiante de ingeniería creando soluciones innovadoras y convirtiendo ideas en realidad a través de código limpio y eficiente.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.downloadResume": "Descargar CV",
    "hero.retroMode": "Modo Retro",
    "hero.modernMode": "Modo Moderno",

    "about.title": "Sobre Mí",
    "about.subtitle": "Estudiante de Ingeniería de Software",
    "about.paragraph1":
      "Soy un estudiante apasionado de ingeniería de software, con una base sólida en ciencias de la computación y un amor por crear soluciones elegantes para problemas complejos. Mi trayectoria en la tecnología comenzó en 2019, cuando empecé a escribir scripts en Python para automatizar tareas repetitivas, y desde entonces no he parado.",
    "about.paragraph2":
      "Actualmente estoy cursando mi tecnólogo en Desarrollo de Software Multiplataforma en la FATEC. Equilibro mis estudios académicos con proyectos prácticos y aprendizaje continuo. Me interesa especialmente el desarrollo web, el aprendizaje automático y la creación de software que genere un impacto positivo.",
    "about.name": "Nombre:",
    "about.email": "Email:",
    "about.location": "Ubicación:",
    "about.study": "Estudio:",

    "skills.title": "Mis Habilidades",
    "skills.technicalSkills": "Habilidades Técnicas",
    "skills.whatIDo": "Lo Que Hago",
    "skills.webDev": "Desarrollo Web",
    "skills.webDevDesc": "Construyendo aplicaciones web responsivas y de alto rendimiento con frameworks modernos.",
    "skills.mobileApps": "Aplicaciones Móviles",
    "skills.mobileAppsDesc": "Creando aplicaciones móviles multiplataforma con React Native.",
    "skills.backendDev": "Desarrollo Backend",
    "skills.backendDevDesc": "Diseñando APIs robustas y aplicaciones del lado del servidor.",
    "skills.problemSolving": "Resolución de Problemas",
    "skills.problemSolvingDesc": "Encontrando soluciones eficientes para desafíos técnicos complejos.",

    "projects.title": "Mis Proyectos",
    "projects.subtitle":
      "Aquí hay algunos de mis proyectos recientes que muestran mis habilidades y experiencia. Cada proyecto refleja mi capacidad para resolver problemas complejos y trabajar con diferentes tecnologías.",
    "projects.viewAll": "Ver Todos los Proyectos",
    "projects.code": "Código",
    "projects.demo": "Demo",
    "projects.project1Title": "Sitio Corporativo - CFI Consultoria",
    "projects.project1Desc": "Un sitio web corporativo completo con página de blog y asistente virtual de IA.",
    "projects.project1Details": 
      "Este proyecto es un sitio corporativo desarrollado para la empresa CFI Consultoria. Fue creado utilizando WordPress y, ocasionalmente, utilicé PHP y JavaScript para implementar funcionalidades adicionales en el sitio, como el CFI IA, un asistente de inteligencia artificial para responder preguntas sobre las subastas de Caixa. Reemplazó el antiguo sitio de CFI, que tenía un diseño anticuado, bajo rendimiento y sin optimización SEO.",
    "projects.project2Title": "Sistema de Gestión de Clientes y Ventas - CFI Consultoria",
    "projects.project2Desc": "Aplicación para la gestión y análisis de datos de la empresa, incluyendo operaciones financieras y de clientes.",
    "projects.project2Details": 
      "Este proyecto es un sistema interno para la gestión y análisis de los datos de la empresa CFI Consultoria. El objetivo era reemplazar el antiguo sistema, que utilizaba métodos más anticuados y lentos.\n\nFui responsable del desarrollo completo de la aplicación, utilizando Laravel como tecnología principal, un framework PHP conocido por su robustez y organización. El sistema incluye funcionalidades como registro y control de clientes, generación de informes, panel analítico, filtros dinámicos y gestión financiera.\n\nUtilicé Blade para crear las vistas, Eloquent ORM para manipular datos, e implementé autenticación segura, validaciones de formularios y una estructura modular escalable. El nuevo sistema proporcionó una experiencia más ágil, con mejor rendimiento y usabilidad en comparación con la solución anterior.",
    "projects.project3Title": "Sitio de Streaming - CFI Consultoria",
    "projects.project3Desc": "Plataforma de streaming con soporte legal y envío de oportunidades inmobiliarias.",
    "projects.project3Details": 
      "Este proyecto fue desarrollado para la empresa CFI Consultoria. El objetivo del sistema era ofrecer a los suscriptores una plataforma de streaming de videos, que también contaba con un canal para hablar con un abogado y el envío de oportunidades de inmuebles en subasta.\n\nDesarrollé todo el modelado del proyecto y el código en sí, como el sistema de pago mensual (el sitio funcionaría como un SaaS), sistema de visualización de videos, así como la parte de publicación de videos y creación de módulos por parte de los administradores, canal directo para comunicación entre abogado y suscriptor, área para el envío de oportunidades y su recepción por parte del suscriptor. En este proyecto utilicé tecnologías como React, Tailwind, Axios y, para el back-end, Express.js y Prisma ORM.",
    "projects.project4Title": "Proyecto Smart-Farm - BugBusters",
    "projects.project4Desc": "Plataforma para monitoreo y análisis en tiempo real de datos de un invernadero inteligente.",
    "projects.project4Details": 
      "Este proyecto fue realizado para la FATEC junto al equipo I9 para simular un entorno real de desarrollo utilizando la metodología ágil. El objetivo del proyecto era desarrollar un sistema para el monitoreo de un invernadero inteligente.\n\nEn este proyecto desempeñé el papel de Product Owner, siendo responsable de la creación del Product Backlog y de la organización de los sprints, además de realizar la prototipación del proyecto. También trabajé en el desarrollo del código, tanto en el front-end como en el back-end, utilizando tecnologías como HTML, CSS, JavaScript y Flask, creando la funcionalidad para procesar los datos provenientes del invernadero y su visualización en la interfaz gráfica.",
    "projects.project5Title": "Inv.sort - BugBusters",
    "projects.project5Desc": "Aplicación web para gestionar y analizar datos de inventario.",
    "projects.project5Details":
      "Este proyecto fue realizado para la FATEC para simular un entorno real de desarrollo utilizando la metodología ágil. El objetivo del sistema era crear una aplicación web capaz de almacenar datos para una empresa ficticia de inventario, así como permitir el análisis y la gestión de dichos datos. Actué como desarrollador full stack, contribuyendo tanto en el front-end como en el back-end.\n\nEn el front-end, utilicé tecnologías como React, Tailwind CSS y Axios para crear una interfaz moderna, responsiva y funcional. Fui responsable de componentes como el panel de gestión de productos y categorías, tablas dinámicas con filtros de productos, categorías, empleados e inventario, formularios con validación y consumo de las APIs.\n\nEn el back-end, trabajé con Express.js y Prisma ORM, desarrollando la estructura de base de datos y las rutas REST para operaciones como registro, actualización, eliminación y listado de ítems. También implementé manejo de errores y middleware para la seguridad y organización del código.",
    "projects.project6Title": "Checkpoint - From Zer0_",
    "projects.project6Desc": "Sitio web para control de asistencia y gestión de empleados.",
    "projects.project6Details":
      "Este proyecto fue realizado para la FATEC en conjunto con la empresa Necto Systems para simular un entorno real de desarrollo utilizando la metodología ágil. El objetivo era crear un sistema de marcaje y gestión de asistencia, con un área dirigida al colaborador y otra al gestor/admin. En este proyecto actué como Product Owner, estableciendo la comunicación entre la clienta y nuestro equipo.\n\nFui responsable por la prototipación de la interfaz del proyecto y utilicé Figma para crear el diseño. Estructuré el Product Backlog basándome en las necesidades de la clienta y conduje la priorización de tareas con el equipo. También participé activamente en el desarrollo del sistema, contribuyendo tanto en el front-end —donde utilicé tecnologías como React, Tailwind y Axios— como en el back-end, utilizando el framework Java Spring Boot. Colaboré en la organización de los sprints, el refinamiento de las user stories y en la realización de pruebas para garantizar la entrega de un producto funcional y alineado con los requisitos del cliente.",

    "education.title": "Educación y Experiencia",
    "education.educationTitle": "Educación",
    "education.experienceTitle": "Experiencia",
    "education.firstDegreeTitle": "Tecnólogo en Desarrollo de Software Multiplataforma",
    "education.firstDegreePeriod": "2024 - Presente",
    "education.firstDegreeDesc":
      "Con enfoque en ingeniería de software, algoritmos, estructuras de datos, DevOps y métodos ágiles de desarrollo, participando también activamente en competencias de programación e iniciativas extracurriculares.",
    "education.secondDegreeTitle": "Técnico en Informática",
    "education.secondDegreePeriod": "2022 - 2024",
    "education.secondDegreeDesc":
      "Estudié los fundamentos del desarrollo web, incluyendo HTML, CSS, JavaScript y tecnologías backend. También recibí formación en mantenimiento de computadoras, configuración y administración de servidores Windows y Linux, además de los fundamentos de redes.",
    "education.firstExpTitle": "Ingeniería de Software",
    "education.firstExpPeriod": "2024 - Presente",
    "education.firstExpDesc":
      "Desarrollé y mantuve el sistema de gestión de la empresa y el sitio web principal. Contribuí a la automatización de procesos e implementé soluciones para la recopilación y el análisis de datos. Trabajé con tecnologías como Python, Laravel, Next.js, MySQL, React y Node.js, siguiendo prácticas ágiles de desarrollo.",


    "contact.title": "Ponte en Contacto",
    "contact.subtitle":
      "No dudes en contactarme si tienes alguna pregunta, consulta sobre proyectos o simplemente quieres conectar. Siempre estoy abierto a discutir nuevas oportunidades.",
    "contact.location": "Ubicación",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.followMe": "Sígueme",
    "contact.yourName": "Tu Nombre",
    "contact.yourEmail": "Tu Email",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.sendMessage": "Enviar Mensaje",

    "footer.rights": "Todos los derechos reservados.",
    "footer.madeWith": "Diseñado y construido con ❤️ usando Next.js, React y Tailwind CSS",
    "footer.bestViewed": "Mejor visualizado con Netscape Navigator 4.0 o Internet Explorer 5.0",
  },
}

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key]
}
