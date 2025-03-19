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
    name: "E-commerce Platform",
    slug: "ecommerce-platform",
    description: "A full-stack e-commerce platform with payment integration and inventory management",
    longDescription:
      "Developed a comprehensive e-commerce solution that handles everything from product listings to checkout and payment processing. The platform includes features such as real-time inventory tracking, user authentication, shopping cart functionality, and integration with multiple payment gateways. The admin dashboard provides detailed analytics and sales reports to help business owners make informed decisions.",
    image: "/EC.jpeg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    startDate: "January 2022",
    endDate: "June 2022",
  },
  {
    id: "2",
    name: "Health & Fitness App",
    slug: "health-fitness-app",
    description: "Mobile application for tracking workouts, nutrition, and health metrics",
    longDescription:
      "Created a comprehensive health and fitness mobile application that allows users to track their workouts, monitor nutrition intake, and record various health metrics. The app includes features such as customizable workout plans, meal planning with nutritional information, progress tracking with visual charts, and integration with wearable devices. Users can set goals and receive personalized recommendations based on their progress and preferences.",
    image: "/HF.jpeg",
    technologies: ["React Native", "Firebase", "TypeScript", "Redux", "HealthKit API"],
    startDate: "July 2022",
    endDate: "December 2022",
  },
  {
    id: "3",
    name: "AI Content Generator",
    slug: "ai-content-generator",
    description: "Web application that uses AI to generate marketing content and social media posts",
    longDescription:
      "Built an AI-powered content generation tool that helps marketers and content creators produce high-quality content efficiently. The application leverages advanced natural language processing models to generate blog posts, social media content, email newsletters, and product descriptions based on user inputs and preferences. Features include content customization options, tone adjustment, SEO optimization suggestions, and a scheduling system for automated content publishing.",
    image: "/AI.png",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel", "PostgreSQL"],
    startDate: "January 2023",
    endDate: "April 2023",
  },
  {
    id: "4",
    name: "Real Estate Management System",
    slug: "real-estate-management",
    description: "Comprehensive platform for real estate agencies to manage properties and clients",
    longDescription:
      "Developed a robust real estate management system that streamlines property listings, client management, and transaction processes for real estate agencies. The platform includes features such as property search with advanced filtering, virtual tours, automated client matching, document management, and financial tracking. The system also provides analytics on market trends and property performance to help agents make data-driven decisions.",
    image: "/RE.png",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Docker", "AWS", "MapBox API"],
    startDate: "May 2023",
    endDate: "October 2023",
  },
  {
    id: "5",
    name: "Sustainable Energy Dashboard",
    slug: "sustainable-energy-dashboard",
    description: "Interactive dashboard for monitoring and optimizing renewable energy systems",
    longDescription:
      "Created an interactive dashboard for monitoring and optimizing renewable energy systems in residential and commercial buildings. The application collects data from various sensors and energy sources, providing real-time visualization of energy production, consumption, and storage. Users can analyze historical data, identify efficiency opportunities, and receive AI-powered recommendations for optimizing their energy usage. The dashboard also includes forecasting features that predict future energy production based on weather data.",
    image: "/SE.jpeg",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "TensorFlow.js", "WebSockets"],
    startDate: "November 2023",
    endDate: "March 2024",
  },
]

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    slug: "senior-frontend-developer",
    company: "TechInnovate Solutions",
    logo: "/TI.jpeg",
    description: "Led the frontend development team in building modern web applications",
    longDescription:
      "Led a team of 5 frontend developers in designing and implementing user interfaces for enterprise-level web applications. Established coding standards, conducted code reviews, and mentored junior developers. Collaborated closely with UX designers and backend engineers to deliver seamless user experiences. Implemented CI/CD pipelines that reduced deployment time by 40% and improved code quality through automated testing. Migrated legacy applications to modern React-based architecture, resulting in a 30% improvement in performance metrics.",
    startDate: "January 2021",
    endDate: "December 2022",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    slug: "full-stack-developer",
    company: "DataViz Analytics",
    logo: "/DV.avif",
    description: "Developed data visualization tools and analytics dashboards",
    longDescription:
      "Designed and developed interactive data visualization tools and analytics dashboards that processed and displayed complex datasets for business intelligence purposes. Created RESTful APIs and microservices to handle data processing and integration with various data sources. Implemented real-time data streaming solutions using WebSockets and server-sent events. Optimized database queries and implemented caching strategies that improved dashboard loading times by 60%. Collaborated with data scientists to implement machine learning models for predictive analytics features.",
    startDate: "March 2019",
    endDate: "December 2020",
  },
  {
    id: "3",
    title: "Mobile Application Developer",
    slug: "mobile-application-developer",
    company: "MobiTech Innovations",
    logo: "/MT.png",
    description: "Built cross-platform mobile applications for iOS and Android",
    longDescription:
      "Developed and maintained cross-platform mobile applications for iOS and Android using React Native. Designed and implemented responsive user interfaces, offline functionality, and push notification systems. Integrated various third-party APIs and services including payment gateways, social media platforms, and mapping services. Collaborated with UX designers to create intuitive and engaging mobile experiences. Implemented analytics tracking and A/B testing frameworks to optimize user engagement and conversion rates. Reduced app crash rates by 75% through comprehensive error handling and testing strategies.",
    startDate: "June 2017",
    endDate: "February 2019",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    slug: "devops-engineer",
    company: "CloudScale Systems",
    logo: "/CS.jpeg",
    description: "Managed cloud infrastructure and implemented CI/CD pipelines",
    longDescription:
      "Designed and maintained cloud infrastructure on AWS and Azure for high-traffic web applications. Implemented infrastructure as code using Terraform and CloudFormation, enabling consistent and repeatable deployments. Set up and optimized CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline. Configured monitoring and alerting systems that improved incident response time by 65%. Implemented security best practices and compliance measures across all infrastructure components. Conducted regular disaster recovery drills and created comprehensive documentation for system architecture and operational procedures.",
    startDate: "January 2016",
    endDate: "May 2017",
  },
  {
    id: "5",
    title: "UI/UX Developer",
    slug: "ui-ux-developer",
    company: "CreativeDigital Agency",
    logo: "/CD.jpeg",
    description: "Created user interfaces and experiences for web and mobile applications",
    longDescription:
      "Collaborated with designers and stakeholders to translate visual designs and user requirements into functional, responsive web and mobile interfaces. Created interactive prototypes and conducted usability testing to validate design decisions. Implemented accessibility features to ensure WCAG compliance across all projects. Developed component libraries and design systems that improved development efficiency by 40%. Conducted user research and usability studies to inform design iterations and product improvements. Worked closely with backend developers to ensure seamless integration of frontend and backend components.",
    startDate: "March 2014",
    endDate: "December 2015",
  },
]

export const personalInfo = {
  name: "Fardeen Maaruf",
  title: "Full Stack Developer",
  bio: "I'm a passionate full stack developer with over 8 years of experience building web and mobile applications. I specialize in creating intuitive, high-performance digital experiences using modern technologies and best practices.",
  longBio:
    "With a background in computer science and a passion for continuous learning, I've had the opportunity to work on a diverse range of projects across multiple industries. I enjoy solving complex problems and turning ideas into reality through clean, efficient code. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.",
  location: "San Francisco, CA",
  email: "fardeenmohd667@gmail.com",
  github: "github.com/F4rdeen",
  linkedin: "linkedin.com/in/alexmorgan",
  skills: [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "GraphQL",
    "AWS",
    "Docker",
    "CI/CD",
    "Database Design",
    "UI/UX Design",
  ],
  avatar: "/avatar.jpg",
}

