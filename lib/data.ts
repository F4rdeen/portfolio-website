export type Project = {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  startDate: string
  endDate: string
}

export type Job = {
  id: string
  title: string
  slug: string
  company: string
  logo: string
  description: string
  longDescription: string
  startDate: string
  endDate: string
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Self-Hosted Automated Job Aggregation Agent",
    slug: "job-aggregation-agent",
    description: "A local automated workflow engine that scrapes, parses, and filters daily job postings using LLM logic",
    longDescription:
      "Architected and deployed a local, automated workflow engine utilizing n8n, fully self-hosted within Docker containers. Integrated LLM logic and API connections to automatically scrape, parse, and filter daily job postings based on specific technical criteria, significantly streamlining the application pipeline.",
    image: "/AI.png",
    technologies: ["Docker", "n8n", "Python", "LLM Integration"],
    startDate: "2025",
    endDate: "Present",
  },
  {
    id: "2",
    name: "Malaysian Economic Trend Visualization",
    slug: "malaysian-economic-trend-visualization",
    description: "Interactive PowerBI dashboard visualizing multi-year historical oil price fluctuations in Malaysia",
    longDescription:
      "Engineered an interactive PowerBI dashboard to visualize multi-year historical oil price fluctuations in Malaysia utilizing open-source datasets from data.gov.my. Executed end-to-end data pipelines: extracted raw CSV data, performed programmatic cleansing, and designed visual models to highlight key economic and pricing trends.",
    image: "/DV.avif",
    technologies: ["PowerBI", "Python", "Pandas", "Data Cleansing"],
    startDate: "2024",
    endDate: "2025",
  },
  {
    id: "3",
    name: "Data Mining & Algorithmic Implementation",
    slug: "data-mining-algorithmic-implementation",
    description: "Clustering and predictive modeling algorithms to identify association rules in multi-variate datasets",
    longDescription:
      "Implemented clustering and predictive modeling algorithms using Scikit-learn and Pandas to identify underlying association rules within multi-variate datasets. Applied data mining techniques including classification, clustering, and association rule mining to extract actionable insights from complex data.",
    image: "/CS.jpeg",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    startDate: "2024",
    endDate: "2024",
  },
  {
    id: "4",
    name: "Helpdesk & Asset Management System",
    slug: "helpdesk-asset-management",
    description: "Comprehensive full-stack helpdesk and asset management system built from scratch",
    longDescription:
      "Co-developed a comprehensive, full-stack Helpdesk and Asset Management system from scratch alongside a senior engineering team during an internship at Synergy. Engineered responsive, modular frontend architectures using Vue.js and the Quasar Framework, implementing Vuex for robust state management. Designed relational database schemas and integrated frontend UI components with backend RESTful APIs to ensure seamless data flow.",
    image: "/SE.jpeg",
    technologies: ["Vue.js", "Quasar Framework", "Vuex", "RESTful API", "PostgreSQL"],
    startDate: "January 2022",
    endDate: "March 2022",
  },
]

export const jobs: Job[] = [
  {
    id: "1",
    title: "Data & Systems Associate (BLESS Platform)",
    slug: "data-systems-associate",
    company: "Formis Network Services",
    logo: "/TI.jpeg",
    description: "Spearheading data migration, cleansing, and backend support for the Kementerian Keusahawanan BLESS platform",
    longDescription:
      "Write and optimize complex SQL scripts to troubleshoot and resolve backend logic issues for incoming enterprise support tickets. Develop Python scripts to automate data cleansing processes, ensuring system stability and accurate data mapping across government platforms. Spearhead data migration and cleansing initiatives for the BLESS platform, utilizing Python scripts and Pentaho Data Integration. Ensure data integrity across large-scale government datasets during active migration cycles by establishing programmatic validation checks.",
    startDate: "April 2026",
    endDate: "Present",
  },
  {
    id: "2",
    title: "Network & Security Technician (Contract)",
    slug: "network-security-technician",
    company: "Formis Network Services",
    logo: "/CS.jpeg",
    description: "Deployed high-availability network environments for the Immigration Department of Malaysia",
    longDescription:
      "Deployed high-availability network environments and performed root-cause analysis on infrastructure bottlenecks for the Immigration Department of Malaysia. Maintained detailed system documentation and performed root-cause analysis on infrastructure bottlenecks to ensure compliance and high availability.",
    startDate: "January 2026",
    endDate: "March 2026",
  },
  {
    id: "3",
    title: "Software Engineering Intern",
    slug: "software-engineering-intern",
    company: "Synergy",
    logo: "/SE.jpeg",
    description: "Co-developed a full-stack Helpdesk and Asset Management system using Vue.js and Quasar Framework",
    longDescription:
      "Co-developed a comprehensive, full-stack Helpdesk and Asset Management system from scratch alongside a senior engineering team. Engineered responsive, modular frontend architectures using Vue.js and the Quasar Framework, implementing Vuex for robust state management. Designed database schemas and integrated frontend UI components with backend RESTful APIs to ensure seamless data flow.",
    startDate: "January 2022",
    endDate: "March 2022",
  },
]

export const personalInfo = {
  name: "Mohamad Fardeen",
  title: "Junior Software Engineer",
  bio: "Junior Software Engineer with hands-on experience in full-stack web development and automated workflow architecture. Adept at building responsive frontend interfaces, designing robust database schemas, and deploying self-hosted containerized applications.",
  longBio:
    "Junior Software Engineer and data professional with hands-on experience in full-stack web development, automated workflow architecture, and data migration. Adept at building responsive frontend interfaces with Vue.js and React.js, designing robust database schemas, and deploying self-hosted containerized applications. Also experienced in data cleansing and restructuring large-scale enterprise datasets using Python and Pentaho, with a strong foundation in statistical modeling and data visualization. Graduated with a Bachelor of Science in Computer Science (Minor in Data Science) from Utah State University, earning a place on the Dean's List from 2023 to 2025.",
  location: "Petaling Jaya, Malaysia",
  email: "fardeenmohd667@gmail.com",
  github: "github.com/F4rdeen",
  linkedin: "linkedin.com/in/fardeenmohd",
  skills: [
    "JavaScript (ES6+)",
    "Python",
    "Vue.js",
    "Quasar Framework",
    "React.js",
    "Node.js",
    "HTML5 / CSS3",
    "PostgreSQL",
    "MSSQL",
    "RESTful API Integration",
    "Docker",
    "AWS (EC2, S3)",
    "n8n Workflow Automation",
    "Pentaho Data Integration",
    "PowerBI",
    "Scikit-learn",
    "Git / GitHub",
  ],
  avatar: "/avatar.jpg",
}

