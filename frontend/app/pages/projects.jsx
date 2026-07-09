import styles from "../page.module.css";

export default function Projects() {
  const projects1 = [
    {
      title: "Appointment Scheduling for Dental Clinics",
      description:
        "AI agent connected to Telegram with a web interface: appointments are confirmed automatically, with no missed calls.",
      tools: ["Python", "LangChain", "FastAPI", "ElectronJS", "SQLite"],
    },
    {
      title: "Order Taking System for Fast-Food",
      description:
        "Multi-agent AI system that automatically takes, validates, and forwards orders to the kitchen.",
      tools: ["Python", "LangChain", "SQLite"],
    },
    {
      title: "AI Vault - Password Manager",
      description:
        "Secure conversational agent for storing and retrieving credentials on demand.",
      tools: ["Python", "LangChain", "FastAPI", "Next.js"],
    },
    {
      title: "RAG Chatbot - Konica Minolta Documentation",
      description:
        "Assistant instantly answering technical questions aboute Konika Minolta machines in natural language.",
      tools: ["Python", "LangChain", "Streamlit"],
    },
    {
      title: "RAG Chatbot - Metaheuristics (P. Siarry)",
      description:
        "Assistant capable of citing, explaining, and contextualizing any passage from the book.",
      tools: ["Python", "LangChain", "Streamlit"],
    },
    {
      title: "Portfolio & Skills Chatbot",
      description:
        "Conversational agent answering questions about the owner's background, skills, and projects.",
      tools: ["Python", "LangChain", "FastAPI", "Next.js"],
    },
  ];

  const projects2 = [
    {
      title: "TRN/TIN Collection Portal - BBI Consultancy (UAE)",
      description:
        "Secure portal for entering, validating, and tracking TRN/TIN via a dashboard.",
      tools: [
        "Python",
        "FastAPI",
        "Vite",
        "PostgreSQL",
        "Nginx",
        "Celery",
      ],
    },
    {
      title: "BBM Technologies Showcase Website",
      description:
        "Modern, fast, and responsive website presenting the company's services.",
      tools: ["Next.js"],
    },
    {
      title: "Business Management Software",
      description:
        "Complete application for managing sales, inventory, customers, and reports.",
      tools: ["FastAPI", "Vite", "PostgreSQL"],
    },
    {
      title: "VRPMBTW Route Optimization",
      description:
        "Optimization algorithm generating high-performing routes in seconds for VRP problem with backholes time windows mixed pickup and delivery demands.",
      tools: ["Python", "CustomTkinter"],
    },
  ];

  return (
    <div className={styles.projects}>
      <div className={styles.projectHeader}>
        <span>PROJECTS</span>
        <h1>My Latest Projects</h1>
      </div>

      <div className={styles.projects2Container}>
        <div className={styles.projects2}>
          {projects2.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.out2}>
                {project.tools.map((tool) => (
                  <div key={tool} className={styles.o2}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.projects1Container}>
        <div className={styles.projects1}>
          {projects1.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.out1}>
                {project.tools.map((tool) => (
                  <div key={tool} className={styles.o1}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}