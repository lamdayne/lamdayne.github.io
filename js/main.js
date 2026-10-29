/**
 * Modern Minimalist Portfolio Logic
 * Nguyen Hoang Phuong Lam (@lamdayne)
 */

// --- Translations Dictionary (EN / VI) ---
const translations = {
  en: {
    statusAvailable: "Available for new roles",
    roleTagline: "Software Engineer specializing in robust backend systems, clean architecture, and modern web applications.",
    basedIn: "Vietnam · UTC+7",
    viewProjects: "View Projects",
    getInTouch: "Get in touch",
    copyEmail: "Copy email",
    emailCopied: "phuonglam.dev@gmail.com copied to clipboard!",
    resumeText: "Resume / CV",
    
    // Pillars
    pillar1Title: "Backend & Systems",
    pillar1Desc: "Designing resilient RESTful services, transactional logic, and clean modular domain architecture in Java & Spring Boot.",
    pillar2Title: "Data & Performance",
    pillar2Desc: "Schema design, relational indexing (MySQL, PostgreSQL), query optimization, and reliable state management.",
    pillar3Title: "Minimalist Craft",
    pillar3Desc: "Obsessed with clean code, zero unnecessary fluff, maintainable structures, and intuitive developer experiences.",

    // Nav
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    navStack: "Stack",
    navContact: "Contact",

    // Section Titles
    projectsLabel: "Selected Work",
    projectsTitle: "Engineered projects with tangible code and architecture.",
    projectsDesc: "Full-stack and backend systems built with focus on clean architecture, performance, and clean maintainability.",
    filterAll: "All",
    filterBackend: "Backend / Fullstack",
    filterWeb: "Web Apps",

    // Deep dive button
    deepDiveBtn: "Architecture & Details →",

    // Experience
    expLabel: "Career Pathway",
    expTitle: "Experience",
    exp1Period: "2024 — Present",
    exp1Role: "Software Engineer / Backend Developer",
    exp1Org: "Technology & Software Solutions",
    exp1Bullet1: "Engineered robust RESTful APIs in Java & Spring Boot with transactional consistency and modular domain-driven design.",
    exp1Bullet2: "Optimized relational database schemas and indexed SQL queries in PostgreSQL & MySQL, reducing average query response time.",
    exp1Bullet3: "Implemented secure authentication and role-based authorization (RBAC) layers.",
    exp1Bullet4: "Maintained rigorous Git workflows, code reviews, and structured API documentation via Postman / OpenAPI.",

    exp2Period: "2023 — 2024",
    exp2Role: "Full Stack Project Lead",
    exp2Org: "FPT Polytechnic Academic Initiatives",
    exp2Bullet1: "Led development cycles for multi-tier web applications from database modeling to frontend integration.",
    exp2Bullet2: "Coordinated team sprint milestones, code standards, and automated testing suites.",

    // Education
    eduLabel: "Academic Background",
    eduTitle: "Education & Foundation",
    eduSchool: "FPT Polytechnic",
    eduDegree: "Software Development / Information Technology",
    eduPeriod: "2022 — 2025",
    eduBullet1: "Core curriculum: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management (SQL), Software Design Patterns.",
    eduBullet2: "Hands-on project work developing enterprise web applications, REST services, and database-driven solutions.",
    eduBullet3: "Active peer mentor for junior students in core Java OOP and database schema design.",

    // Skills
    skillsLabel: "Technical Arsenal",
    skillsTitle: "Skills & Core Technologies",
    skillsCat1: "Languages",
    skillsCat2: "Backend & Architecture",
    skillsCat3: "Databases & Storage",
    skillsCat4: "Frontend & UI",
    skillsCat5: "DevOps & Tooling",
    skillsCat6: "Engineering Practices",

    // Contact
    contactTitle: "Let's build something exceptional together.",
    contactDesc: "Whether you have an open engineering role, a technical project to discuss, or just want to connect — feel free to drop an email.",
    sendEmailBtn: "Send an email",
    copiedToast: "Email address copied to clipboard",
    localTimePrefix: "Vietnam Time",
    backToTop: "Back to top ↑"
  },
  vi: {
    statusAvailable: "Sẵn sàng đón nhận cơ hội mới",
    roleTagline: "Kỹ sư phần mềm tập trung vào hệ thống backend vững chắc, kiến trúc sạch và ứng dụng web hiện đại.",
    basedIn: "Việt Nam · UTC+7",
    viewProjects: "Xem Dự Án",
    getInTouch: "Liên Hệ Trực Tiếp",
    copyEmail: "Sao chép email",
    emailCopied: "Đã sao chép phuonglam.dev@gmail.com!",
    resumeText: "Hồ Sơ / CV",

    // Pillars
    pillar1Title: "Backend & Hệ Thống",
    pillar1Desc: "Thiết kế RESTful APIs tin cậy, xử lý giao dịch chuẩn xác và kiến trúc module hóa với Java & Spring Boot.",
    pillar2Title: "Dữ Liệu & Hiệu Năng",
    pillar2Desc: "Thiết kế cơ sở dữ liệu, tối ưu hóa index (MySQL, PostgreSQL) và quản lý trạng thái luồng dữ liệu an toàn.",
    pillar3Title: "Tư Duy Tối Giản",
    pillar3Desc: "Chú trọng mã nguồn sạch, loại bỏ chi tiết thừa, cấu trúc dễ mở rộng và trải nghiệm người dùng thực chất.",

    // Nav
    navAbout: "Giới thiệu",
    navProjects: "Dự án",
    navExperience: "Kinh nghiệm",
    navEducation: "Học vấn",
    navStack: "Công nghệ",
    navContact: "Liên hệ",

    // Section Titles
    projectsLabel: "Dự Án Nổi Bật",
    projectsTitle: "Dự án kỹ thuật với mã nguồn và kiến trúc thực tế.",
    projectsDesc: "Hệ thống full-stack & backend được xây dựng chú trọng vào kiến trúc rõ ràng, hiệu năng và khả năng mở rộng.",
    filterAll: "Tất cả",
    filterBackend: "Backend / Fullstack",
    filterWeb: "Ứng dụng Web",

    // Deep dive button
    deepDiveBtn: "Kiến trúc & Chi tiết →",

    // Experience
    expLabel: "Lộ Trình Nghề Nghiệp",
    expTitle: "Kinh Nghiệm Thực Tế",
    exp1Period: "2024 — Hiện tại",
    exp1Role: "Kỹ sư Phần mềm / Backend Developer",
    exp1Org: "Dự án & Giải pháp Phần mềm",
    exp1Bullet1: "Phát triển các dịch vụ RESTful API vững chắc bằng Java & Spring Boot với kiến trúc module phân lớp rõ ràng.",
    exp1Bullet2: "Tối ưu hóa lược đồ cơ sở dữ liệu và truy vấn SQL trên PostgreSQL & MySQL, cải thiện tốc độ phản hồi API.",
    exp1Bullet3: "Triển khai cơ chế xác thực và phân quyền người dùng (Role-Based Access Control - RBAC).",
    exp1Bullet4: "Tuân thủ quy trình Git chuyên nghiệp, review code và tài liệu hóa chuẩn REST qua Postman / Swagger.",

    exp2Period: "2023 — 2024",
    exp2Role: "Trưởng Nhóm Dự Án Phần Mềm",
    exp2Org: "Dự Án FPT Polytechnic",
    exp2Bullet1: "Dẫn dắt quy trình phát triển ứng dụng web từ mô hình hóa CSDL đến tích hợp frontend.",
    exp2Bullet2: "Điều phối tiến độ sprint, quy chuẩn viết code và kiểm thử tự động.",

    // Education
    eduLabel: "Nền Tảng Đào Tạo",
    eduTitle: "Học Vấn & Bằng Cấp",
    eduSchool: "FPT Polytechnic",
    eduDegree: "Chuyên ngành Phát triển Phần mềm (CNTT)",
    eduPeriod: "2022 — 2025",
    eduBullet1: "Kiến thức trọng tâm: Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng (Java OOP), Cơ sở dữ liệu quan hệ (SQL), Design Patterns.",
    eduBullet2: "Thực hành xây dựng các ứng dụng web doanh nghiệp, REST APIs và xử lý dữ liệu thực tế.",
    eduBullet3: "Hỗ trợ học tập và chia sẻ kiến thức Java OOP, tư duy thiết kế CSDL cho các sinh viên khóa sau.",

    // Skills
    skillsLabel: "Bộ Kỹ Năng Kỹ Thuật",
    skillsTitle: "Công Nghệ & Kỹ Năng Cốt Lõi",
    skillsCat1: "Ngôn Ngữ Lập Trình",
    skillsCat2: "Backend & Framework",
    skillsCat3: "Cơ Sở Dữ Liệu",
    skillsCat4: "Frontend & Giao Diện",
    skillsCat5: "Công Cụ & DevOps",
    skillsCat6: "Nguyên Tắc Kỹ Thuật",

    // Contact
    contactTitle: "Cùng tạo nên những sản phẩm chất lượng.",
    contactDesc: "Nếu bạn có cơ hội việc làm, dự án cần hợp tác phát triển hoặc muốn trao đổi chuyên môn — hãy gửi email cho tôi.",
    sendEmailBtn: "Gửi Email",
    copiedToast: "Đã sao chép địa chỉ email vào bộ nhớ tạm",
    localTimePrefix: "Giờ Việt Nam",
    backToTop: "Lên đầu trang ↑"
  }
};

// Project Deep Dive Modal Database
const projectDetails = {
  ezspend: {
    title: "EzSpend — Personal Finance & Budget Tracker",
    type: "Backend & Full-Stack System",
    github: "https://github.com/lamdayne/ezspend",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Chart.js", "RESTful API"],
    problem: {
      en: "Personal finance tracking often suffers from friction: overly complicated spreadsheets or bloated mobile apps with intrusive advertisements. Users need a distraction-free, lightning-fast platform to categorize transactions and monitor monthly burn rate.",
      vi: "Quản lý chi tiêu cá nhân thường gặp khó khăn do bảng tính Excel phức tạp hoặc ứng dụng quá cồng kềnh với quảng cáo rác. Người dùng cần một nền tảng tinh gọn, phản hồi tức thì để phân loại chi tiêu và kiểm soát ngân sách tháng."
    },
    solution: {
      en: "EzSpend provides an ergonomic financial dashboard. Backend is structured with clean domain services handling expense balance calculations, categorization engines, and monthly threshold alerts. Built with Spring Boot and optimized MySQL relational indexing for immediate analytic chart generation.",
      vi: "EzSpend cung cấp bảng điều khiển tài chính tối giản và trực quan. Hệ thống backend dùng Spring Boot xử lý logic cân đối dòng tiền, tự động phân loại chi tiêu và cảnh báo vượt hạn mức ngân sách tháng với tốc độ truy vấn tối ưu."
    },
    highlights: {
      en: [
        "Real-time expense & income transaction logging with atomic database updates.",
        "Categorization engine with monthly visual budget limit notifications.",
        "Interactive analytics charts powered by Chart.js aggregating daily and monthly expenditures.",
        "Normalized relational database schema with indexed queries for sub-50ms analytics rendering."
      ],
      vi: [
        "Ghi nhận chi tiêu và thu nhập theo thời gian thực với tính toàn vẹn giao dịch (ACID).",
        "Hệ thống phân loại danh mục thông minh kèm cảnh báo khi sắp chạm trần ngân sách.",
        "Biểu đồ phân tích tài chính trực quan tổng hợp chi phí theo ngày, tuần, tháng.",
        "Thiết kế CSDL quan hệ chuẩn hóa với index tối ưu, truy xuất báo cáo dưới 50ms."
      ]
    }
  },

  ecommerceLaptop: {
    title: "E-Commerce Laptop Store — Retail & Inventory Platform",
    type: "Enterprise E-Commerce Web App",
    github: "https://github.com/lamdayne/ecommerce-laptop",
    tech: ["Java", "Spring Boot", "Spring Security", "Hibernate / JPA", "PostgreSQL / MySQL", "Thymeleaf / JS"],
    problem: {
      en: "Laptop and computer hardware retail features multifaceted specifications (CPU, GPU, RAM, screen size, NVMe expansion). Standard shopping carts fail when handling dynamic technical filters and real-time inventory validation.",
      vi: "Bán lẻ laptop và linh kiện phần cứng đòi hỏi xử lý nhiều thông số kỹ thuật phức tạp (chip, card đồ họa, dung lượng RAM, màn hình). Giỏ hàng thông thường dễ gặp lỗi khi xử lý bộ lọc đa chiều và kiểm tra tồn kho đồng thời."
    },
    solution: {
      en: "Engineered a scalable e-commerce architecture with a faceted specification filtering engine, resilient session & persistent shopping cart synchronization, and administrative back-office for stock/order lifecycle tracking.",
      vi: "Xây dựng kiến trúc thương mại điện tử hoàn chỉnh với bộ lọc thông số kỹ thuật đa tiêu chí, cơ chế đồng bộ giỏ hàng an toàn và trang quản trị back-office quản lý chu kỳ đơn hàng và kho hàng."
    },
    highlights: {
      en: [
        "Multi-attribute faceted search allowing simultaneous filtering by brand, price range, and technical specifications.",
        "Role-Based Access Control (RBAC) separating Customer and Administrator capabilities via Spring Security.",
        "Transactional order placement pipeline ensuring stock quantity accuracy during concurrent purchases.",
        "Admin portal with order status state-machine (Pending, Confirmed, Shipping, Completed, Cancelled)."
      ],
      vi: [
        "Bộ lọc đa thông số cho phép tìm kiếm đồng thời theo thương hiệu, tầm giá và cấu hình phần cứng.",
        "Bảo mật và phân quyền chặt chẽ giữa Khách hàng và Quản trị viên bằng Spring Security.",
        "Pipeline xử lý đơn hàng transactional đảm bảo tính chính xác của số lượng tồn kho khi nhiều khách đặt cùng lúc.",
        "Trang quản trị quản lý trạng thái vòng đời đơn hàng (Chờ duyệt, Đã xác nhận, Đang giao, Hoàn tất, Hủy)."
      ]
    }
  },

  sneakerStore: {
    title: "SneakerStore — Footwear E-Commerce Platform",
    type: "Full-Stack Retail Application",
    github: "https://github.com/lamdayne/sneaker-store",
    tech: ["Java", "Spring Boot", "Spring MVC", "MySQL", "JavaScript ES6+", "Modern CSS"],
    problem: {
      en: "Sneaker e-commerce requires handling product variants with interdependent dimensions: colorways, shoe sizes (EU/US), individual SKU stock counts, and dynamic pricing promotions.",
      vi: "Thương mại điện tử ngành giày đòi hỏi quản lý biến thể sản phẩm phức tạp: màu sắc, bảng kích cỡ (EU/US), mã SKU theo từng biến thể và các chương trình khuyến mãi theo thời điểm."
    },
    solution: {
      en: "Designed a clean relational SKU variant model where each product links to specific size-color matrices. Developed a clean, responsive customer interface with instant size availability feedback and quick checkout.",
      vi: "Thiết kế mô hình CSDL quan hệ chuẩn cho biến thể SKU, mỗi sản phẩm kết nối linh hoạt với ma trận kích cỡ và màu sắc. Giao diện người dùng phản hồi ngay lập tức tình trạng còn/hết hàng theo từng size."
    },
    highlights: {
      en: [
        "Dynamic SKU matrix supporting independent stock levels per size & colorway.",
        "Frictionless checkout workflow with shipping calculation and order invoice generation.",
        "Responsive, mobile-optimized catalog layout with clean imagery and typography.",
        "RESTful endpoints structured with clean DTO mappings and global exception handling."
      ],
      vi: [
        "Ma trận SKU động quản lý số lượng tồn kho độc lập cho từng cỡ giày và màu sắc.",
        "Quy trình đặt hàng tinh gọn, tính toán phí vận chuyển và xuất hóa đơn chi tiết.",
        "Giao diện chuẩn responsive trên điện thoại và máy tính với hình ảnh sắc nét, bố cục thoáng đãng.",
        "Hệ thống RESTful endpoints sử dụng chuẩn DTO và xử lý ngoại lệ tập trung (Global Exception Handler)."
      ]
    }
  },

  humify: {
    title: "Humify — Human Resource & Workspace Suite",
    type: "Internal HR & Management Tool",
    github: "https://github.com/lamdayne/humify",
    tech: ["Java", "Spring Framework", "JPA", "MySQL", "REST API", "Tailwind / CSS"],
    problem: {
      en: "Small to mid-size companies struggle with fragmented HR data scattered across paper sheets, disparate spreadsheets, and disconnected messaging apps, causing attendance errors and payroll disputes.",
      vi: "Các doanh nghiệp vừa và nhỏ thường gặp khó khăn khi quản lý nhân sự phân tán trên bảng tính rời rạc hoặc tin nhắn, dễ dẫn đến sai sót chấm công và tính lương."
    },
    solution: {
      en: "Humify is a centralized internal workspace suite unifying employee profiles, department hierarchies, daily attendance records, and automated salary calculation matrices.",
      vi: "Humify là giải pháp quản trị nội bộ tập trung, đồng bộ hồ sơ nhân sự, sơ đồ phòng ban, nhật ký chấm công và ma trận tính toán tiền lương tự động."
    },
    highlights: {
      en: [
        "Employee lifecycle directory with role assignments, contact records, and contract timelines.",
        "Department organization structure with hierarchical reporting lines.",
        "Attendance ledger with daily logging and monthly work-hour aggregation.",
        "Audit trail tracking administrative adjustments to maintain historical accountability."
      ],
      vi: [
        "Quản lý vòng đời nhân viên từ tiếp nhận, chức vụ, phòng ban đến thời hạn hợp đồng.",
        "Mô hình hóa cơ cấu phòng ban và cấp bậc quản lý rõ ràng.",
        "Sổ chấm công thông minh tự động tổng hợp số giờ làm việc theo tháng.",
        "Nhật ký kiểm toán (Audit Trail) ghi lại mọi thay đổi dữ liệu của quản trị viên để đối chiếu."
      ]
    }
  }
};

// --- Application State ---
let currentLang = localStorage.getItem("portfolio-lang") || "en";
let currentTheme = localStorage.getItem("portfolio-theme") || "dark";

// --- DOM Elements ---
const langToggleBtn = document.getElementById("lang-toggle");
const themeToggleBtn = document.getElementById("theme-toggle");
const copyEmailBtns = document.querySelectorAll(".js-copy-email");
const toastContainer = document.getElementById("toast-container");
const liveClockEl = document.getElementById("live-clock");
const projectCards = document.querySelectorAll(".project-card");
const filterBtns = document.querySelectorAll(".filter-btn");

// Modals
const deepDiveModal = document.getElementById("deep-dive-modal");
const deepDiveTitle = document.getElementById("modal-project-title");
const deepDiveType = document.getElementById("modal-project-type");
const deepDiveGithub = document.getElementById("modal-project-github");
const deepDiveProblem = document.getElementById("modal-project-problem");
const deepDiveSolution = document.getElementById("modal-project-solution");
const deepDiveHighlights = document.getElementById("modal-project-highlights");
const deepDiveTech = document.getElementById("modal-project-tech");
const modalCloseBtns = document.querySelectorAll(".js-modal-close");

// Command Palette
const cmdPaletteModal = document.getElementById("cmd-palette-modal");
const cmdTriggerBtns = document.querySelectorAll(".js-open-cmd");
const cmdInput = document.getElementById("cmd-input");
const cmdItems = document.querySelectorAll(".cmd-item");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initClock();
  initFilters();
  initCopyEmail();
  initModals();
  initCommandPalette();
  initNavObserver();
});

// --- Theme Management ---
function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("portfolio-theme", currentTheme);
      updateThemeIcon();
      showToast(currentTheme === "dark" ? "Dark mode active" : "Light mode active");
    });
  }
}

function updateThemeIcon() {
  if (!themeToggleBtn) return;
  const isDark = currentTheme === "dark";
  themeToggleBtn.innerHTML = isDark
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  themeToggleBtn.setAttribute("aria-label", isDark ? "Switch to Light mode" : "Switch to Dark mode");
}

// --- Language Management ---
function initLanguage() {
  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "vi" : "en";
      localStorage.setItem("portfolio-lang", currentLang);
      applyLanguage(currentLang);
      showToast(currentLang === "en" ? "Switched to English" : "Đã chuyển sang Tiếng Việt");
    });
  }
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === "en" ? "VI" : "EN";
    langToggleBtn.setAttribute("title", lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English");
  }

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.setAttribute("lang", lang);
}

// --- Live Vietnam Clock ---
function initClock() {
  function update() {
    if (!liveClockEl) return;
    const now = new Date();
    // Format in Vietnam Time (Asia/Ho_Chi_Minh - UTC+7)
    const options = {
      timeZone: "Asia/Ho_Chi_Minh",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    };
    const timeStr = new Intl.DateTimeFormat("en-US", options).format(now);
    const prefix = currentLang === "vi" ? "Việt Nam" : "Vietnam";
    liveClockEl.innerHTML = `<span class="clock-dot"></span> ${prefix} ${timeStr} (ICT)`;
  }
  update();
  setInterval(update, 1000);
}

// --- Copy Email with Toast ---
function initCopyEmail() {
  copyEmailBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = "phuonglam.dev@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        const msg = currentLang === "vi" 
          ? "Đã sao chép phuonglam.dev@gmail.com vào bộ nhớ tạm!"
          : "Copied phuonglam.dev@gmail.com to clipboard!";
        showToast(msg);
      }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast("Copied phuonglam.dev@gmail.com!");
      });
    });
  });
}

// --- Toast System ---
function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg class="toast-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 2800);
}

// --- Project Filtering ---
function initFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory === category || (category === "backend" && cardCategory.includes("backend"))) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// --- Project Detail Modal ---
function initModals() {
  const deepDiveButtons = document.querySelectorAll(".js-open-deepdive");
  
  deepDiveButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      openProjectModal(projectId);
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  // Close modal when clicking outside box
  [deepDiveModal, cmdPaletteModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

function openProjectModal(projectId) {
  const data = projectDetails[projectId];
  if (!data || !deepDiveModal) return;

  const lang = currentLang;
  deepDiveTitle.textContent = data.title;
  deepDiveType.textContent = data.type;
  deepDiveGithub.href = data.github;

  deepDiveProblem.textContent = data.problem[lang] || data.problem.en;
  deepDiveSolution.textContent = data.solution[lang] || data.solution.en;

  // Render highlights
  deepDiveHighlights.innerHTML = "";
  const highlights = data.highlights[lang] || data.highlights.en;
  highlights.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    deepDiveHighlights.appendChild(li);
  });

  // Render tech tags
  deepDiveTech.innerHTML = "";
  data.tech.forEach(t => {
    const span = document.createElement("span");
    span.className = "tech-tag";
    span.textContent = t;
    deepDiveTech.appendChild(span);
  });

  deepDiveModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAllModals() {
  if (deepDiveModal) deepDiveModal.classList.remove("active");
  if (cmdPaletteModal) cmdPaletteModal.classList.remove("active");
  document.body.style.overflow = "";
}

// --- Command Palette (Ctrl+K / Cmd+K) ---
function initCommandPalette() {
  // Global Shortcut
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      toggleCommandPalette();
    }
  });

  cmdTriggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleCommandPalette();
    });
  });

  if (cmdInput) {
    cmdInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      cmdItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(q)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  cmdItems.forEach(item => {
    item.addEventListener("click", () => {
      const action = item.getAttribute("data-action");
      handleCommandAction(action);
      closeAllModals();
    });
  });
}

function toggleCommandPalette() {
  if (!cmdPaletteModal) return;
  const isOpen = cmdPaletteModal.classList.contains("active");
  if (isOpen) {
    closeAllModals();
  } else {
    cmdPaletteModal.classList.add("active");
    document.body.style.overflow = "hidden";
    if (cmdInput) {
      cmdInput.value = "";
      cmdItems.forEach(i => (i.style.display = "flex"));
      setTimeout(() => cmdInput.focus(), 50);
    }
  }
}

function handleCommandAction(action) {
  switch (action) {
    case "nav-projects":
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "nav-experience":
      document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "nav-education":
      document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "nav-stack":
      document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "nav-contact":
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      break;
    case "copy-email":
      copyEmailBtns[0]?.click();
      break;
    case "toggle-theme":
      themeToggleBtn?.click();
      break;
    case "toggle-lang":
      langToggleBtn?.click();
      break;
    case "open-github":
      window.open("https://github.com/lamdayne", "_blank");
      break;
    case "open-linkedin":
      window.open("https://linkedin.com/in/lamdayne", "_blank");
      break;
  }
}

// --- Active Nav Link Observer ---
function initNavObserver() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach(sec => observer.observe(sec));
}
