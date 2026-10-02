export const siteConfig = {
  name: "Jayasurya A",
  role: "Software Engineer",
  tagline:
    "Building scalable backend and enterprise e-commerce solutions with Java, Spring Boot, SAP Commerce Cloud, and cloud technologies.",
  resumePath: "/jayasurya-resume.pdf",
  summary:
    "I’m a Software Engineer focused on Java, Spring Boot, microservices, and SAP Commerce Cloud. I build backend services and enterprise e-commerce features, and bring experience with AWS and Azure, production troubleshooting, and root cause analysis. I’m currently learning about Python for AI, LLMs, RAG, and AI agents.",
  socials: [
    { label: "Email", value: "jayasurya0206@gmail.com", href: "mailto:jayasurya0206@gmail.com" },
    { label: "LinkedIn", value: "jayasurya009", href: "https://www.linkedin.com/in/jayasurya009/" },
    { label: "GitHub", value: "AutoDictate", href: "https://github.com/AutoDictate" },
  ],
};

export const experience = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Associate Software Engineer",
    summary: "B2B healthcare e-commerce platform built on SAP Commerce Cloud / CCv2.",
    bullets: [
      "Develop and maintain Java features across Product, Cart, Checkout, Order, User, Search, and Payment modules.",
      "Develop and modify OCC APIs; work with the hscore and hsfacade extensions, FlexibleSearch, Impex, and SOLR.",
      "Troubleshoot application and SOLR issues, support Azure and deployment activities, and perform server health checks.",
      "Contribute to L2 production support, resolve issues within the defined 24-hour target, and perform root cause analysis with sustainable fixes.",
      "Participate in Agile and Scrum ceremonies.",
    ],
    recognition:
      "Received appreciation for learning the project quickly, understanding the domain, resolving production issues, and providing accurate root cause analysis with considered solutions.",
    technologies: [
      "Java", "SAP Commerce Cloud", "SAP Hybris", "CCv2", "hscore", "hsfacade",
      "OCC", "SOLR", "FlexibleSearch", "Impex", "Azure", "SQL", "SAP CDC",
    ],
  },
  {
    company: "Adhiran Infotech",
    role: "Software Developer",
    summary:
      "Worked on Java and Spring Boot projects, including Japan Tourism and Oxfyn Gaming platforms.",
    bullets: [
      "Built backend flows, REST APIs, business logic, and microservices for web applications.",
      "Worked with SQL, AWS, Docker, JWT authentication, and Razorpay payment processing on the Japan Tourism Platform.",
      "Developed Spring Boot microservices for gaming platform workflows using Spring Cloud, Eureka, Config Server, OpenFeign, and Spring Data JPA.",
    ],
    technologies: [
      "Java", "Spring Boot", "Microservices", "REST APIs", "SQL", "AWS", "Docker",
    ],
  },
  {
    company: "Techno Kryon",
    role: "Software Engineer Trainee – Java",
    summary:
      "Started my professional career learning Java, Spring Boot, Spring Security, database integration, and application deployment.",
    bullets: [
      "Developed a Java and Spring Boot application to automate employee payslip generation from monthly payroll data.",
      "Used MySQL for persistence, Spring Security for application security, and generated individual payslip PDFs.",
      "Deployed the application to AWS EC2.",
    ],
    technologies: [
      "Java", "Spring Boot", "Spring Security", "MySQL", "React", "PDF generation", "AWS EC2",
    ],
  },
];

export const skillGroups = [
  {
    title: "Core backend",
    skills: [
      "Java", "Spring Boot", "REST APIs", "Microservices", "Spring Security",
      "Spring Data JPA", "Hibernate",
    ],
  },
  {
    title: "SAP Commerce & integrations",
    skills: [
      "SAP Commerce Cloud", "CCv2", "OCC APIs", "FlexibleSearch", "SOLR",
      "Impex", "hscore", "hsfacade", "SAP CDC",
    ],
  },
  {
    title: "Java ecosystem",
    skills: ["Spring Cloud", "OpenFeign", "Eureka", "Config Server", "JWT", "Maven"],
  },
  {
    title: "Cloud & delivery",
    skills: [
      "AWS", "EC2", "RDS", "Azure", "Docker", "Kubernetes", "CI/CD",
    ],
  },
  {
    title: "Data stores",
    skills: ["SQL", "MySQL", "MongoDB", "H2"],
  },
  {
    title: "Frontend",
    skills: [
      "JavaScript", "TypeScript", "React", "HTML/CSS",
    ],
  },
  {
    title: "Developer tools",
    skills: [
      "Git", "GitHub", "Jira", "SonarQube", "Swagger", "Postman", "IntelliJ IDEA",
    ],
  },
];

export const learningSkills = [
  "Python",
  "LLMs",
  "RAG",
  "AI Agents"
];

export const projects = [
  {
    title: "Japan Tourism Platform",
    context: "Professional work · Adhiran Infotech",
    description:
      "Developed the complete Java backend for a Japan-focused tourism platform supporting customizable trip plans, hotels, activities and tours, booking workflows, and payment processing. Sole Java/backend developer in a seven-member team.",
    technologies: [
      "Java", "Spring Boot", "Microservices", "REST APIs", "JWT", "Razorpay",
      "SQL", "AWS RDS", "AWS EC2", "Docker", "SonarQube",
    ],
  },
  {
    title: "Oxfyn Gaming Platform",
    context: "Professional work · Adhiran Infotech",
    description:
      "Developed the Java 17 and Spring Boot microservices backend for an online gaming platform, supporting user and player management, wallets, campaigns, bonuses, game catalog and provider integrations, and offline deposits and withdrawals.",
    technologies: [
      "Java 17", "Spring Boot", "Spring Cloud", "Spring Data JPA", "REST APIs",
      "Eureka", "Config Server", "OpenFeign", "Maven",
    ],
  },
  {
    title: "Payslip Generator",
    context: "Professional work · Techno Kryon",
    description:
      "Built an application that automates manual payslip creation by processing monthly employee payroll attributes and generating individual PDF payslips.",
    technologies: [
      "Java", "Spring Boot", "Spring Security", "MySQL", "React", "PDF generation", "AWS EC2",
    ],
  },
  {
    title: "Product Management Application",
    context: "Java / Spring Boot project work",
    description:
      "Developed product CRUD operations and advanced product search with MongoDB Atlas Search, and integrated Swagger UI for interactive API documentation and testing.",
    technologies: [
      "Java", "Spring Boot", "MongoDB", "MongoDB Atlas Search", "REST APIs", "Swagger UI",
    ],
  },
];

export const featuredCertifications = [
  {
    name: "MongoDB Java Developer Path", issuer: "MongoDB", issued: "June 2024",
    skills: ["Java", "MongoDB", "Database access"],
  },
  {
    name: "Spring Boot for Beginners", issuer: "Amigoscode", issued: "June 2024",
    skills: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations", issuer: "Amazon Web Services", issued: "October 2022",
    skills: ["AWS", "Cloud fundamentals", "Cloud architecture"],
  },
  {
    name: "Cloud Computing", issuer: "NPTEL", issued: "May 2022",
    skills: ["Cloud computing", "Virtualization", "Distributed systems"],
  },
  {
    name: "Cybersecurity Essentials", issuer: "Cisco", issued: "August 2022",
    skills: ["Cybersecurity", "Network security", "Threat awareness"],
  },
];

export const additionalCertifications = [
  {
    name: "Web Analytics", issuer: "Accenture", issued: "February 2024",
    skills: ["Web analytics", "Digital measurement", "User behavior"],
  },
  {
    name: "Data Science Training Live", issuer: "Learn With Kushal", issued: "October 2022",
    skills: ["Data science", "Python", "Data analysis"],
  },
  {
    name: "IT Academy: Cloud and Virtualization Concepts", issuer: "VMware", issued: "September 2022",
    skills: ["Cloud computing", "Virtualization", "Virtual machines"],
  },
  {
    name: "Process Automation Bootcamp", issuer: "Celonis", issued: "September 2022",
    skills: ["Process automation", "Process mining", "Workflow analysis"],
  },
  {
    name: "Automation Anywhere RPA Essentials for Students (Automation 360)", issuer: "Automation Anywhere", issued: "September 2022",
    skills: ["Robotic process automation", "Automation 360", "Workflow automation"],
  },
  {
    name: "HOW TO BECOME HIGHLY PAID HACKER", issuer: "HackingFlix", issued: "January 2022",
    skills: ["Cybersecurity", "Security fundamentals", "Ethical hacking concepts"],
  },
  {
    name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", issued: "September 2021",
    skills: ["Cybersecurity", "Threat awareness", "Network security"],
  },
  {
    name: "Python 101 for Data Science", issuer: "Cognitive Class", issued: "October 2021",
    skills: ["Python", "Data analysis", "Data science"],
  },
  {
    name: "Learning Python (2020)", issuer: "LinkedIn", issued: "November 2021",
    skills: ["Python", "Programming basics", "Scripting"],
  },
];

export const withBasePath = (path) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
