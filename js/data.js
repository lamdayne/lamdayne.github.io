/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Bạn có thể tự do chỉnh sửa, thêm hoặc xóa các thông tin ở file này
 * mà không cần phải can thiệp vào mã nguồn HTML hay CSS!
 * =========================================================================
 */

const portfolioData = {
  // --- Thông tin cá nhân & Giới thiệu ---
  personal: {
    name: "Nguyen Hoang Phuong Lam",
    title: "Software Engineer / Backend Developer",
    tagline: "I build reliable, modular backend services, clean RESTful APIs, and modern web applications.",
    email: "phuonglam.dev@gmail.com",
    githubUrl: "https://github.com/lamdayne",
    githubUsername: "lamdayne",
    linkedinUrl: "https://linkedin.com/in/lamdayne",
    linkedinUsername: "lamdayne",
    location: "Vietnam · UTC+7",

    // Các đoạn văn trong phần About
    aboutParagraphs: [
      "I am a software engineer with a deep interest in backend architecture, database systems, and building clean web services. My journey started with exploring object-oriented programming in Java and grew through engineering full-stack web platforms and data pipelines.",
      "Currently, I focus on building reliable RESTful APIs and web applications with <span class='text-slate-200 font-medium'>Java</span>, <span class='text-slate-200 font-medium'>Spring Boot</span>, and relational databases like <span class='text-slate-200 font-medium'>PostgreSQL</span> and <span class='text-slate-200 font-medium'>MySQL</span>. I enjoy designing normalized database schemas, optimizing query indexes, and keeping application architecture maintainable and testable.",
      "When I'm not writing code or reading technical documentation, you can find me exploring open-source repositories, refining developer tools, or sharing technical concepts with peers."
    ]
  },

  // --- Kinh nghiệm làm việc (Experience) ---
  experiences: [
    {
      period: "03/2024 — PRESENT",
      role: "Junior Backend Developer",
      company: "FPT Software",
      companyUrl: "https://fptsoftware.com",
      location: "Hanoi, Vietnam · Enterprise Business Unit",
      description: "Develop and maintain robust RESTful APIs and backend services using Java 17 and Spring Boot. Design relational database schemas across PostgreSQL and MySQL, write indexed queries for high-efficiency transactions, implement role-based access control (RBAC) with Spring Security, and write unit/integration tests with JUnit 5 and Mockito.",
      tags: ["Java 17", "Spring Boot", "PostgreSQL", "Spring Security", "Docker", "JUnit 5"]
    },
    {
      period: "09/2023 — 02/2024",
      role: "Software Engineering Intern",
      company: "NextTech Solutions",
      companyUrl: "https://nexttech.asia",
      location: "Vietnam · Web Engineering Team",
      description: "Engineered backend modules and CRUD API services for inventory and order management using Spring MVC, Spring Data JPA, and MySQL. Integrated front-end administration views with asynchronous REST endpoints and authored comprehensive OpenAPI/Swagger documentation.",
      tags: ["Spring MVC", "MySQL", "JPA / Hibernate", "JavaScript", "Git"]
    }
  ],

  // --- Học vấn (Education) ---
  educations: [
    {
      period: "08/2024 — 08/2026",
      degree: "Software Development (Information Technology)",
      school: "FPT Polytechnic College",
      schoolUrl: "https://caodang.fpt.edu.vn",
      location: "Diploma Degree · Software Engineering Focus",
      description: "Comprehensive computer science and software development program covering object-oriented programming (Java OOP), relational database systems (SQL), and enterprise web architectures. Served as an active peer mentor assisting junior classmates in core Java concepts and relational schema modeling.",
      tags: ["Java OOP", "Database Systems (SQL)", "Spring Framework", "Agile / Scrum"]
    }
  ],

  // --- Dự án tiêu biểu (Projects) ---
  // Mỗi dự án có thể có:
  // - githubUrl: Link đến GitHub repository (sẽ hiển thị icon GitHub)
  // - liveUrl: Link đến trang web đã deploy (sẽ hiển thị icon external mở live). Nếu chưa có thì để null!
  projects: [
    {
      title: "EzSpend — Personal Expense Tracker",
      badge: "FINANCE APP",
      description: "A responsive personal finance tracking platform engineered for fast transaction logging, monthly categorization budgets, and visual spending analytics. Structured with clean domain services and optimized MySQL indexed queries.",
      githubUrl: "https://github.com/lamdayne/ezspend",
      liveUrl: null, // Thay bằng link demo live nếu có, ví dụ: "https://ezspend.vercel.app"
      tags: ["Java", "Spring Boot", "MySQL", "Chart.js"]
    },
    {
      title: "E-Commerce Laptop Store",
      badge: "COMMERCE",
      description: "Full-featured hardware commerce platform handling multifaceted technical filters (CPU, RAM, GPU), transactional shopping cart checkout with strict stock deduction locks, and administrative role-based back-office controls.",
      githubUrl: "https://github.com/lamdayne/ecommerce-laptop",
      liveUrl: null,
      tags: ["Spring Boot", "Spring Security", "PostgreSQL", "Hibernate"]
    },
    {
      title: "SneakerStore — Footwear Platform",
      badge: "RETAIL WEB",
      description: "Footwear commerce engine designed around a normalized SKU variant architecture for managing complex size-color matrices, real-time availability feedback, and checkout workflows.",
      githubUrl: "https://github.com/lamdayne/sneaker-store",
      liveUrl: null,
      tags: ["Java", "Spring Boot", "MySQL", "JavaScript"]
    },
    {
      title: "Humify — Human Resource Suite",
      badge: "HR TOOL",
      description: "Internal workspace management application unifying employee profile directories, departmental hierarchies, daily attendance records, and automated payroll computations.",
      githubUrl: "https://github.com/lamdayne/humify",
      liveUrl: null,
      tags: ["Java", "Spring Framework", "JPA", "REST API"]
    }
  ]
};
