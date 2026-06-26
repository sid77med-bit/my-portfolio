import styles from "../page.module.css";

export default function Projects() {
  const projects1 = [
    {
      title: "Prise de rendez-vous pour cabinets dentaires",
      description:
        "Agent IA relié à Telegram avec interface web : les rendez-vous sont confirmés automatiquement, sans appel manqué.",
      outils: ["Python", "LangChain", "FastAPI", "ElectronJS", "SQLite"],
    },
    {
      title: "Prise de commandes pour fast-food",
      description:
        "Système multi-agents IA qui prend, valide et transmet automatiquement les commandes en cuisine.",
      outils: ["Python", "LangChain", "SQLite"],
    },
    {
      title: "AI Vault - Gestionnaire de mots de passe",
      description:
        "Agent conversationnel sécurisé permettant de stocker et restituer des identifiants à la demande.",
      outils: ["Python", "LangChain", "FastAPI", "Next.js"],
    },
    {
      title: "Chatbot RAG - Documentation Konica Minolta",
      description:
        "Assistant répondant instantanément aux questions techniques en langage naturel.",
      outils: ["Python", "LangChain", "Streamlit"],
    },
    {
      title: "Chatbot RAG - Métaheuristiques (P. Siarry)",
      description:
        "Assistant capable de citer, expliquer et contextualiser n'importe quel passage du livre.",
      outils: ["Python", "LangChain", "Streamlit"],
    },
    {
      title: "Chatbot Portfolio & Compétences",
      description:
        "Agent conversationnel répondant aux questions sur le parcours, les compétences et les projets du propriétaire.",
      outils: ["Python", "LangChain", "FastAPI", "Next.js"],
    },
  ];

  const projects2 = [
    {
      title: "Portail de collecte TRN/TIN - BBI Consultancy (EAU)",
      description:
        "Portail sécurisé permettant la saisie, la validation et le suivi des TRN/TIN via un tableau de bord.",
      outils: [
        "Python",
        "FastAPI",
        "Vite",
        "PostgreSQL",
        "Nginx",
        "Celery",
      ],
    },
    {
      title: "Site vitrine BBM Technologies",
      description:
        "Site web moderne, rapide et responsive présentant les services de l'entreprise.",
      outils: ["Next.js"],
    },
    {
      title: "Logiciel de gestion commerciale",
      description:
        "Application complète de gestion des ventes, des stocks, des clients et des rapports.",
      outils: ["FastAPI", "Vite", "PostgreSQL"],
    },
    {
      title: "Optimisation d'itinéraires VRPMBTW",
      description:
        "Algorithme d'optimisation générant des itinéraires performants en quelques secondes.",
      outils: ["Python", "FastAPI", "CustomTkinter"],
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
                {project.outils.map((tool) => (
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
                {project.outils.map((tool) => (
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