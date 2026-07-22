export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#specializations", label: "Focus" },
  { href: "#approach", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const profile = {
  name: "Rahul Goti",
  title: "Senior Java Developer",
  subtitle: "Java · Spring Boot · Microservices · AWS · GCP",
  location: "Surat, Gujarat, India",
  email: "gotirahul1@gmail.com",
  phone: "+91 99250 87707",
  yearsExperience: "8+",
  photo: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  currentRole: "Sr. Java Developer @ InsightTimer Network",
  focusAreas: ["Backend Systems", "Microservices Architecture", "Cloud & DevOps"],
  summary: `Software engineer with 8+ years of experience in the IT industry building backend systems in Java. I specialize in J2SE/J2EE, Spring Boot, and Hibernate, with hands-on experience across microservices architecture, CI/CD, and DevOps on AWS and GCP. Currently a Senior Java Developer at Insight Timer Network, where I help build and operate the backend for a top-rated meditation and mindfulness app.`,
  extendedSummary: `Over the years I've worked across a wide range of backend systems — from JSP/Servlet-based enterprise applications to modern Spring Boot microservices built with Netflix OSS (Zuul, Feign) and Eureka. I'm comfortable across a polyglot data layer (MySQL, MongoDB, Neo4j, Redis, Elasticsearch, Firebase) and have shipped systems for both consumer-scale products and financial services platforms, including trading systems and a multi-currency, multi-jurisdictional financial planning platform. Beyond application code, I have strong shell scripting experience (Bash, Perl, Python, Ruby) and a CI/CD-first mindset using Jenkins, Gradle, and Maven. I'm a quick learner with a proactive, self-driven approach to solving problems, and I work well under tight deadlines as part of a team.`,
};

export type Specialization = {
  icon: "microservices" | "devops" | "database" | "finance" | "scripting" | "api";
  title: string;
  description: string;
};

export const specializations: Specialization[] = [
  {
    icon: "microservices",
    title: "Microservices Architecture",
    description:
      "Building and operating service-oriented systems with Spring Boot and Netflix OSS (Zuul, Feign, Eureka), designed to scale independently and stay resilient under load.",
  },
  {
    icon: "devops",
    title: "CI/CD & DevOps",
    description:
      "End-to-end delivery pipelines using Jenkins, Gradle, and Maven, deployed and operated on AWS and GCP with CDN-backed infrastructure.",
  },
  {
    icon: "database",
    title: "Polyglot Data Layer",
    description:
      "Comfortable across MySQL, MongoDB, Neo4j, Redis, Elasticsearch, and Firebase — picking the right store for the access pattern rather than forcing one database to do everything.",
  },
  {
    icon: "finance",
    title: "Financial & Enterprise Systems",
    description:
      "Delivered trading, partner, and client-management platforms for the investment and financial advisory space, including multi-currency, multi-jurisdictional planning logic.",
  },
  {
    icon: "scripting",
    title: "Scripting & Automation",
    description:
      "Strong command-line and shell scripting background (Bash, Perl, Python, Ruby) for build automation, tooling, and operational scripts.",
  },
  {
    icon: "api",
    title: "REST & SOAP APIs",
    description:
      "Designing and integrating APIs across both modern REST/JSON services and legacy SOAP/XML systems, often in the same platform.",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "InsightTimer Network",
    role: "Senior Java Developer",
    period: "March 2018 — Present",
    summary:
      "Backend engineering for Insight Timer, a meditation and mindfulness app that made Time magazine's list of 10 best apps of 2022, home to 16,000+ meditation teachers publishing free guided content.",
    points: [
      "Designed and maintained microservices using Spring Boot, Hibernate, Ratpack, and Netflix OSS (Zuul, Feign) for a high-traffic mobile app backend.",
      "Worked across a polyglot data layer spanning MySQL, Redis, Neo4j, Elasticsearch, and Google Firebase.",
      "Built and operated REST APIs and JPA-based services deployed on AWS and GCP with ElastiCache and CDN.",
      "Used Gradle, Jenkins, and JIRA to support CI/CD pipelines and team delivery workflows.",
    ],
    stack: ["Java", "Spring Boot", "Hibernate", "Netflix OSS", "AWS", "GCP", "MySQL", "Redis", "Neo4j", "Elasticsearch"],
  },
  {
    company: "Finlogic Technologies India Pvt. Ltd.",
    role: "Sr. Executive Developer",
    period: "July 2016 — March 2018",
    summary:
      "Backend development for financial services platforms — trading, partner management, and client portfolio systems for the investment advisory space.",
    points: [
      "Built REST- and SOAP-based services with Java, JSP, and Servlets for trading and investment platforms.",
      "Developed Partner Desk and Client Desk applications for portfolio management, transaction tracking, and reporting.",
      "Worked with Spring (3.x/4.x) and Hibernate on MySQL-backed systems deployed on Tomcat.",
      "Contributed to PlanPlus, a multi-lingual, multi-currency financial planning and robo-advisory platform, using Spring Boot, JPA, and Eureka-based microservices.",
    ],
    stack: ["Java", "JSP", "Servlet", "Spring", "Hibernate", "MySQL", "SOAP", "REST API"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Java 8/9", "J2EE", "Node.js"],
  },
  {
    category: "Frameworks",
    items: ["Spring 5.x", "Spring Boot", "Hibernate", "Ratpack"],
  },
  {
    category: "Component Technology",
    items: ["JSP", "Servlet", "JDBC", "Jasper Report"],
  },
  {
    category: "Databases",
    items: ["MySQL", "Neo4j", "MongoDB", "Google Firebase", "Redis", "Elasticsearch"],
  },
  {
    category: "Web & Scripting",
    items: ["HTML", "JavaScript", "jQuery", "XML", "Ajax", "JSON", "REST API"],
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS", "GCP", "Jenkins", "CDN", "Agora", "Tomcat"],
  },
  {
    category: "Tools & IDEs",
    items: ["Gradle", "Maven", "JIRA", "IntelliJ IDEA", "Eclipse", "NetBeans", "Unix"],
  },
];

export type Project = {
  name: string;
  stack: string;
  tagline: string;
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "Insight Timer",
    stack: "Java, Spring Boot, Hibernate, Netflix OSS, AWS, GCP, MySQL, Redis, Neo4j, Elasticsearch",
    tagline: "Meditation app — Time magazine's Top 10 Apps of 2022",
    description:
      "Backend engineering for Insight Timer, a meditation and mindfulness app available on iOS and Android, home to 16,000+ meditation teachers publishing free guided meditations, music, and talks.",
    highlights: [
      "Built microservices with Spring Boot, Hibernate, and Netflix OSS (Zuul, Feign) for a large-scale consumer app.",
      "Worked across a polyglot data layer: MySQL, Redis, Neo4j, Elasticsearch, and Firebase.",
      "Deployed and operated services on AWS and GCP with ElastiCache and CDN.",
    ],
  },
  {
    name: "PlanPlus Inc.",
    stack: "Java, Spring Boot, JPA, REST API, Eureka, AWS, MongoDB, MySQL",
    tagline: "Global financial planning & robo-advisory platform",
    description:
      "A multi-lingual, multi-currency, multi-jurisdictional financial planning platform serving the worldwide financial advice community, including next-gen automated (robo-advisor) planning tools.",
    highlights: [
      "Built microservices with Spring Boot, JPA, and Eureka service discovery.",
      "Worked with MySQL and MongoDB across a distributed backend.",
      "Supported multi-currency and multi-jurisdictional (taxation) financial logic.",
    ],
  },
  {
    name: "Online Trading",
    stack: "Java, JSP, Servlet, SOAP, Spring 3.0, Hibernate, MySQL, Jasper Report",
    tagline: "Share market trading platform (BSE)",
    description:
      "An online trading platform for share market customers, supporting BSE trading and mutual fund operations including purchase, redemption, SIP, switch, and STP.",
    highlights: [
      "Built SOAP-integrated services with Spring and Hibernate.",
      "Implemented Jasper Report-based reporting for trading and fund activity.",
      "Delivered a data-heavy DHTMLX frontend backed by Java/JSP/Servlet services.",
    ],
  },
  {
    name: "Partner Desk",
    stack: "Java, JSP, Servlet, SOAP, REST, Spring 3.0, MySQL, Jasper Report",
    tagline: "Partner platform for NJ India Invest",
    description:
      "A platform for registered NJ India Invest partners to manage client investments — purchase, redemption, SIP, switch, and STP — with reporting and analysis tools to support client recommendations.",
    highlights: [
      "Built partner-facing investment management workflows on Java and Spring.",
      "Delivered SOAP and REST integrations for transaction processing.",
      "Implemented Jasper Report-based analysis and client reporting.",
    ],
  },
  {
    name: "Client Desk",
    stack: "Java, JSP, Servlet, SOAP, REST, Spring 3.0, Hibernate, MySQL",
    tagline: "Client portfolio management platform",
    description:
      "A client-facing companion to Partner Desk, giving investors portfolio management, profile management, and reporting tools to track their own investments.",
    highlights: [
      "Built profile and portfolio management features for individual investors.",
      "Delivered investment tracking and analysis reports.",
      "Shared backend architecture (Spring, Hibernate, MySQL) with the Partner Desk platform.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  field: string;
  school: string;
  year: string;
  score: string;
};

export const education: EducationItem[] = [
  { degree: "B.Tech", field: "Computer Engineering", school: "Uka Tarsadia University, Gujarat", year: "2016", score: "9.20 / 10 CGPA" },
  { degree: "H.S.C", field: "Higher Secondary Certificate", school: "GHSEB, Gujarat", year: "2012", score: "77.53%" },
  { degree: "S.S.C", field: "Secondary School Certificate", school: "GSEB, Gujarat", year: "2010", score: "74.92%" },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: "discover" | "build" | "ship" | "support";
};

export const process: ProcessStep[] = [
  {
    step: "01",
    icon: "discover",
    title: "Understand the Domain",
    description:
      "Start by understanding the business rules and data model — especially in financial and enterprise systems, where getting this wrong is expensive.",
  },
  {
    step: "02",
    icon: "build",
    title: "Design for Scale",
    description:
      "Architect services and choose the right data store — SQL, NoSQL, cache, or search — for the access pattern rather than forcing everything through one database.",
  },
  {
    step: "03",
    icon: "ship",
    title: "Build & Integrate",
    description:
      "Implement with Spring Boot and Hibernate, wire up REST/SOAP integrations, and ship through CI/CD pipelines rather than manual deploys.",
  },
  {
    step: "04",
    icon: "support",
    title: "Operate & Harden",
    description:
      "Monitor systems in production, tune performance under real load, and keep services reliable as usage grows.",
  },
];

export type QuickFact = {
  label: string;
  value: string;
};

export const quickFacts: QuickFact[] = [
  { label: "Location", value: profile.location },
  { label: "Experience", value: `${profile.yearsExperience} years` },
  { label: "Current role", value: "Sr. Java Developer" },
  { label: "Works best as", value: "Backend / Microservices" },
];
