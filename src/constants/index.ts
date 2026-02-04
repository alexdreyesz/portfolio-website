// Dynamically Import All Icons When Using npm build to be able to use it on githubpages
const badgeIcons = import.meta.glob('../assets/icons/badges/**/*.@(svg|png)', { eager: true, import: 'default' });
const logoIcons = import.meta.glob('../assets/icons/logo/*.@(png|svg)', { eager: true, import: 'default' });
const projectThumbnails = import.meta.glob('../assets/thumbnails/**/*.@(png|jpeg)', { eager: true, import: 'default' });

const songPath = import.meta.glob('../assets/music/**/*.mp3', { eager: true, import: 'default' });
const songImage = import.meta.glob('../assets/music/**/*.jpg', { eager: true, import: 'default' });



/* Constants For About Home Section */
export const words= [
    { text: "React", imgPath: badgeIcons['../assets/icons/badges/frameworks/react.svg'] as string },
    { text: "Tailwind", imgPath: badgeIcons['../assets/icons/badges/frameworks/tailwindcss.svg'] as string },
    { text: "Threejs", imgPath: badgeIcons['../assets/icons/badges/frameworks/threejs.png'] as string },
    { text: "GSAP", imgPath: badgeIcons['../assets/icons/badges/frameworks/gsap1.png'] as string },
];

/* Constants For About Section */
export const languages = [
    { text: "C", iconPath: badgeIcons['../assets/icons/badges/languages/c.svg'] as string },
    { text: "C++", iconPath: badgeIcons['../assets/icons/badges/languages/cplusplus.svg'] as string },
    { text: "C#", iconPath: badgeIcons['../assets/icons/badges/languages/csharp.svg'] as string },
    { text: "CSS", iconPath: badgeIcons['../assets/icons/badges/languages/css3.svg'] as string },
    { text: "HTML", iconPath: badgeIcons['../assets/icons/badges/languages/html5.svg'] as string },
    { text: "JavaScript", iconPath: badgeIcons['../assets/icons/badges/languages/javascript.svg'] as string },
    { text: "TypeScript", iconPath: badgeIcons['../assets/icons/badges/languages/typescript.svg'] as string },
    { text: "Java", iconPath: badgeIcons['../assets/icons/badges/languages/java.svg'] as string },
    { text: "JSON", iconPath: badgeIcons['../assets/icons/badges/languages/json.svg'] as string },
    { text: "Python", iconPath: badgeIcons['../assets/icons/badges/languages/python.svg'] as string },
    { text: "PHP", iconPath: badgeIcons['../assets/icons/badges/languages/php.svg'] as string },
    { text: "MySQL", iconPath: badgeIcons['../assets/icons/badges/languages/mysql.svg'] as string },
    // { text: "Go", iconPath: badgeIcons['../assets/icons/badges/languages/go.svg'] as string },
    // { text: "Kotlin", iconPath: badgeIcons['../assets/icons/badges/languages/kotlin.svg'] as string },
    // { text: "Rust", iconPath: badgeIcons['../assets/icons/badges/languages/rust.svg'] as string },
    // { text: "Swift", iconPath: badgeIcons['../assets/icons/badges/languages/swift.svg'] as string },
];

export const frameworks = [
    { text: "React", iconPath: badgeIcons['../assets/icons/badges/frameworks/react.svg'] as string },
    { text: "Angular", iconPath: badgeIcons['../assets/icons/badges/frameworks/angular.svg'] as string },
    { text: "TailwindCSS", iconPath: badgeIcons['../assets/icons/badges/frameworks/tailwindcss.svg'] as string },
    { text: "ThreeJS", iconPath: badgeIcons['../assets/icons/badges/frameworks/threejs.svg'] as string },
    { text: "GSAP", iconPath: badgeIcons['../assets/icons/badges/frameworks/gsap1.png'] as string },
    { text: "Express", iconPath: badgeIcons['../assets/icons/badges/frameworks/express.svg'] as string },
    // { text: "Flask", iconPath: badgeIcons['../assets/icons/badges/frameworks/flask.svg'] as string },
    // { text: "OpenGL", iconPath: badgeIcons['../assets/icons/badges/frameworks/opengl.svg'] as string },
    // { text: "Vue", iconPath: badgeIcons['../assets/icons/badges/frameworks/vuejs.svg'] as string },
    // { text: "Electron", iconPath: badgeIcons['../assets/icons/badges/frameworks/electron.svg'] as string },
    { text: "FastApi", iconPath: badgeIcons['../assets/icons/badges/frameworks/fastapi.svg'] as string },
];

export const libraries = [
    { text: "Bootstrap", iconPath: badgeIcons['../assets/icons/badges/libraries/bootstrap.svg'] as string },
    { text: "React Bootstrap", iconPath: badgeIcons['../assets/icons/badges/libraries/reactbootstrap.svg'] as string },
    { text: "React Navigation", iconPath: badgeIcons['../assets/icons/badges/libraries/reactnavigation.svg'] as string },
    { text: "React Router", iconPath: badgeIcons['../assets/icons/badges/libraries/reactrouter.svg'] as string },
    // { text: "Framermotion", iconPath: badgeIcons['../assets/icons/badges/libraries/framermotion.svg'] as string },
    // { text: "Framework7", iconPath: badgeIcons['../assets/icons/badges/libraries/framework7.svg'] as string },
    // { text: "JQuery", iconPath: badgeIcons['../assets/icons/badges/libraries/jquery.svg'] as string },
    { text: "Anaconda", iconPath: badgeIcons['../assets/icons/badges/libraries/anaconda.svg'] as string },
    { text: "Matlab", iconPath: badgeIcons['../assets/icons/badges/libraries/matlab.svg'] as string },
    { text: "Matplotlib", iconPath: badgeIcons['../assets/icons/badges/libraries/matplotlib.svg'] as string },
    { text: "Pandas", iconPath: badgeIcons['../assets/icons/badges/libraries/pandas.svg'] as string },
    { text: "Numpy", iconPath: badgeIcons['../assets/icons/badges/libraries/numpy.svg'] as string },
    { text: "Pytorch", iconPath: badgeIcons['../assets/icons/badges/libraries/pytorch.svg'] as string },
    // { text: "Poetry", iconPath: badgeIcons['../assets/icons/badges/libraries/poetry.svg'] as string },
    { text: "NPM", iconPath: badgeIcons['../assets/icons/badges/libraries/npm.svg'] as string },
];

export const developmentTools = [
    { text: "VScode", iconPath: badgeIcons['../assets/icons/badges/development-tools/vscode.svg'] as string },
    { text: "Eclipse", iconPath: badgeIcons['../assets/icons/badges/development-tools/eclipse.svg'] as string },
    // { text: "Flutter", iconPath: badgeIcons['../assets/icons/badges/development-tools/flutter.svg'] as string },
    { text: "Git", iconPath: badgeIcons['../assets/icons/badges/development-tools/git.svg'] as string },
    { text: "Github", iconPath: badgeIcons['../assets/icons/badges/development-tools/github.svg'] as string },
    { text: "Jypyter", iconPath: badgeIcons['../assets/icons/badges/development-tools/jupyter.svg'] as string },
    // { text: "Kubernetes", iconPath: badgeIcons['../assets/icons/badges/development-tools/kubernetes.svg'] as string },
    { text: "Linux", iconPath: badgeIcons['../assets/icons/badges/development-tools/linux.svg'] as string },
    // { text: "Maven", iconPath: badgeIcons['../assets/icons/badges/development-tools/maven.svg'] as string },
    { text: "Nodejs", iconPath: badgeIcons['../assets/icons/badges/development-tools/nodejs.svg'] as string },
    { text: "Nodemon", iconPath: badgeIcons['../assets/icons/badges/development-tools/nodemon.svg'] as string },
    { text: "Postman", iconPath: badgeIcons['../assets/icons/badges/development-tools/postman.svg'] as string },
    // { text: "Powershell", iconPath: badgeIcons['../assets/icons/badges/development-tools/powershell.svg'] as string },
    { text: "Ubuntu", iconPath: badgeIcons['../assets/icons/badges/development-tools/ubuntu.svg'] as string },
    { text: "Unity", iconPath: badgeIcons['../assets/icons/badges/development-tools/unity.svg'] as string },
    { text: "Unreal Engine", iconPath: badgeIcons['../assets/icons/badges/development-tools/unrealengine.svg'] as string },
    // { text: "Visual Studio", iconPath: badgeIcons['../assets/icons/badges/development-tools/visualstudio.svg'] as string },
    // { text: "Vite", iconPath: badgeIcons['../assets/icons/badges/development-tools/vite.svg'] as string },
    { text: "Vitejs", iconPath: badgeIcons['../assets/icons/badges/development-tools/vitejs.svg'] as string },
    { text: "Vultr", iconPath: badgeIcons['../assets/icons/badges/development-tools/vultr.svg'] as string },
    { text: "Twilio", iconPath: badgeIcons['../assets/icons/badges/development-tools/twilio.svg'] as string },
    { text: "Resend", iconPath: badgeIcons['../assets/icons/badges/development-tools/resend.svg'] as string },
    { text: "Supabase", iconPath: badgeIcons['../assets/icons/badges/development-tools/supabase.svg'] as string }
];

export const designTools = [
    { text: "Figma", iconPath: badgeIcons['../assets/icons/badges/design-tools/figma.svg'] as string },
    { text: "Blender", iconPath: badgeIcons['../assets/icons/badges/design-tools/blender.svg'] as string },
    { text: "Canva", iconPath: badgeIcons['../assets/icons/badges/design-tools/canva.svg'] as string },
    { text: "Latex", iconPath: badgeIcons['../assets/icons/badges/design-tools/latex.svg'] as string },
    { text: "Photoshop", iconPath: badgeIcons['../assets/icons/badges/design-tools/photoshop.svg'] as string },
    // { text: "Wordpress", iconPath: badgeIcons['../assets/icons/badges/design-tools/wordpress.svg'] as string },
];

export const databases = [
    { text: "MariaDB", iconPath: badgeIcons['../assets/icons/badges/databases/mariadb.svg'] as string },
    { text: "Apache", iconPath: badgeIcons['../assets/icons/badges/databases/apache.svg'] as string },
    { text: "Azure", iconPath: badgeIcons['../assets/icons/badges/databases/azure.svg'] as string },
    { text: "Azure SQL", iconPath: badgeIcons['../assets/icons/badges/databases/azuresqldatabase.svg'] as string },
    // { text: "CosmosDB", iconPath: badgeIcons['../assets/icons/badges/databases/cosmosdb.svg'] as string },
    { text: "mongoDB", iconPath: badgeIcons['../assets/icons/badges/databases/mongodb.svg'] as string },
    // { text: "Postgresql", iconPath: badgeIcons['../assets/icons/badges/databases/postgresql.svg'] as string },
];

export const AILLM = [
    { text: "Chatgpt", iconPath: badgeIcons['../assets/icons/badges/ai-llm/chatgpt.svg'] as string },
    { text: "Claude", iconPath: badgeIcons['../assets/icons/badges/ai-llm/claude.svg'] as string },
    { text: "Copilot", iconPath: badgeIcons['../assets/icons/badges/ai-llm/copilot.svg'] as string },
    { text: "Deepseek", iconPath: badgeIcons['../assets/icons/badges/ai-llm/deepseek.svg'] as string },
    { text: "Google Gemini", iconPath: badgeIcons['../assets/icons/badges/ai-llm/google-gemini.svg'] as string },
    { text: "Huggingface", iconPath: badgeIcons['../assets/icons/badges/ai-llm/huggingface.svg'] as string },
];

export const professional = [
    { text: "Slack", iconPath: badgeIcons['../assets/icons/badges/professional/slack.svg'] as string },
    { text: "Jira", iconPath: badgeIcons['../assets/icons/badges/professional/jira.svg'] as string },
    { text: "LinkedIn", iconPath: badgeIcons['../assets/icons/badges/professional/linkedin.svg'] as string },
    { text: "Notion", iconPath: badgeIcons['../assets/icons/badges/professional/notion.svg'] as string },
    { text: "Stackoverflow", iconPath: badgeIcons['../assets/icons/badges/professional/stackoverflow.svg'] as string },
];

/* Constants For Career Section */
export const cards = {
    hillsborough: {
        imgUrl: logoIcons['../assets/icons/logo/hillsborough.png'] as string,
        date: "January 2019 - May 2021",
        title: "A.A. in Computer Science",
        location: "Hillsborough Community College",
        description: "Completed an Associate of Arts (A.A.) degree with a focus in Computer Science at Hillsborough Community College in Tampa, Florida. Gained a strong foundation in programming, mathematics, and problem-solving, preparing for further studies and a career in technology.",
    },

    xime: {
        imgUrl: logoIcons['../assets/icons/logo/xime.png'] as string,
        date: "November 2019 - August 2022",
        title: "Full Stack Developer",
        location: "Xime Beauty",
        description: "Designed, developed, and deployed LAMP stack websites, managed product databases, and automated wholesale catalog creation. Led the migration of company websites to Shopify and integrated QuickBooks for automated financial tracking, improving operational efficiency and supporting e-commerce growth.",
    },
    
    ucf: {
      imgUrl: logoIcons['../assets/icons/logo/ucf.png'] as string,
      date: "August 2022 - December 2025",
      title: "B.S. in Computer Science",
      location: "University of Central Florida",
      description: "Currently pursuing a Bachelor of Science (B.S.) degree in Computer Science at the University of Central Florida (UCF). Building advanced knowledge in software development, algorithms, data structures, and systems programming while preparing for a career in the technology industry.",
    },
    
    spaceForce: {
      imgUrl: logoIcons['../assets/icons/logo/ussf.png'] as string,
      date: "January 2025 - Present",
      title: "Software Engineer Intern",
      location: "U.S Space Force",
      description: "Developing an AI-powered IT solution that leverages technologies like OpenAI, Azure SQL, ServiceNow, and Archibus to streamline IT operations, reduce ticket volume, and enhance user productivity through intelligent, self-service support.",
    },

    seniorDesign: {
      imgUrl: logoIcons['../assets/icons/logo/ucf-symbol.png'] as string,
      date: "August 2025 - December 2025",
      title: "Senior Design Teaching Assistant",
      location: "University of Central Florida",
      description: "Assisting senior design students in managing their capstone projects, providing guidance on project planning, development, and execution. Facilitating collaboration and ensuring students meet academic and technical requirements for successful project completion.",
    },
};

/* Constants For Projects Section */
export const projects = {
    contactHub: {
         thumbnail: projectThumbnails['../assets/thumbnails/contacthub/contacthub-home.png'] as string,
        imgUrl: logoIcons['../assets/icons/logo/contacthub.png'] as string,
        link: "https://github.com/alexdreyesz/ContactHub",
        title: "ContactHub",
        date: "Jan 2025 - Mar 2025",
        description: "ContactHub is a complete contact management system built with the LAMP stack (Linux, Apache, MySQL, PHP). It offers secure user authentication, easy-to-use CRUD operations, and powerful search and filtering features. With automated database backups and a fully responsive front-end, it ensures data integrity while delivering a smooth and efficient user experience.",
        technologies: [
            {text: "HTML", badgeUrl: badgeIcons['../assets/icons/badges/languages/html5.svg'] as string},
            {text: "CSS", badgeUrl: badgeIcons['../assets/icons/badges/languages/css3.svg'] as string},
            {text: "JavaScript", badgeUrl: badgeIcons['../assets/icons/badges/languages/javascript.svg'] as string},
            {text: "MariaDB", badgeUrl: badgeIcons['../assets/icons/badges/databases/mariadb.svg'] as string},
            {text: "Linux", badgeUrl: badgeIcons['../assets/icons/badges/development-tools/linux.svg'] as string},
            {text: "Apache", badgeUrl: badgeIcons['../assets/icons/badges/databases/apache.svg'] as string},
            {text: "MySQL", badgeUrl: badgeIcons['../assets/icons/badges/languages/mysql.svg'] as string},
            {text: "PHP", badgeUrl: badgeIcons['../assets/icons/badges/languages/php.svg'] as string},
        ]
    },

    ucfGuessr: {
        thumbnail: projectThumbnails['../assets/thumbnails/ucfmapguessr/ucfguessr-home.png'] as string,
        imgUrl: logoIcons['../assets/icons/logo/ucf-pegasus.png'] as string,
        link: "https://github.com/EvanPartidas/UCF-Map",
        title: "UCFMAP",
        date: "Mar 2025 - Apr 2025",
        description: "A dynamic and responsive UCF themed GeoGuesser game built with HTML, CSS, TypeScript, React, and the Leaflet map API. Players are challenged to guess locations around the UCF campus using interactive maps and intuitive navigation. Designed with a focus on performance, smooth user interaction, and a clean, modern interface.",
        technologies: [
            {text: "HTML", badgeUrl: badgeIcons['../assets/icons/badges/languages/html5.svg'] as string},
            {text: "CSS", badgeUrl: badgeIcons['../assets/icons/badges/languages/css3.svg'] as string},
            {text: "TypeScript", badgeUrl: badgeIcons['../assets/icons/badges/languages/typescript.svg'] as string},
            {text: "React", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/react.svg'] as string},
            {text: "leaflet", badgeUrl: badgeIcons['../assets/icons/badges/apis/leaflet.png'] as string},
        ]
    },

    portfolio: {
        thumbnail: projectThumbnails['../assets/thumbnails/portfolio/portfolio-home.png'] as string,
        imgUrl: logoIcons['../assets/icons/logo/kingz.png'] as string,
        link: "https://github.com/alexdreyesz/Portfolio",
        title: "Portfolio",
        date: "April 2025",
        description: "An interactive personal portfolio crafted with React, Tailwind CSS, Three.js, and GSAP. It highlights my projects, technical skills, and experience through responsive design, smooth animations, and 3D visuals to create an engaging and dynamic user experience. Built with modern design principles, and accessibility to ensure a seamless experience across all devices.",
        technologies: [
            {text: "HTML", badgeUrl: badgeIcons['../assets/icons/badges/languages/html5.svg'] as string},
            {text: "CSS", badgeUrl: badgeIcons['../assets/icons/badges/languages/css3.svg'] as string},
            {text: "TypeScript", badgeUrl: badgeIcons['../assets/icons/badges/languages/typescript.svg'] as string},
            {text: "React", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/react.svg'] as string},
            {text: "Tailwind", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/tailwindcss.svg'] as string},
            {text: "ThreeJS", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/threejs.svg'] as string},
            {text: "GSAP", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/gsap1.png'] as string},
        ]
    },

    codelaboration: {
        thumbnail: projectThumbnails['../assets/thumbnails/codelaboartion/codelaboration-home.png'] as string,
        imgUrl: logoIcons['../assets/icons/logo/codelaboration.svg'] as string,
        link: "https://github.com/alexdreyesz/Codelaboration",
        title: "Codelab",
        date: "Oct 2024 - Present",
        description: "Codelaboration is an interactive coding presentation platform built with MongoDB, Express, React, and Node.js. It allows presenters to showcase code live, line by line, with a real-time dynamic editor for live editing and display. Designed to create an engaging and collaborative coding experience for audiences and presenters alike. Still a work in progress.",
        technologies: [
            {text: "HTML", badgeUrl: badgeIcons['../assets/icons/badges/languages/html5.svg'] as string},
            {text: "CSS", badgeUrl: badgeIcons['../assets/icons/badges/languages/css3.svg'] as string},
            {text: "TypeScript", badgeUrl: badgeIcons['../assets/icons/badges/languages/typescript.svg'] as string},
            {text: "Tailwind", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/tailwindcss.svg'] as string},
            {text: "MongoDB", badgeUrl: badgeIcons['../assets/icons/badges/databases/mongodb.svg'] as string},
            {text: "ExpressJs", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/express.svg'] as string},
            {text: "React", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/react.svg'] as string},
            {text: "NodeJs", badgeUrl: badgeIcons['../assets/icons/badges/development-tools/nodejs.svg'] as string},
        ]
    },

    askPolaris: {
        thumbnail: projectThumbnails['../assets/thumbnails/askpolaris/askpolaris-landing.png'] as string,
        imgUrl: logoIcons['../assets/icons/logo/askorb.png'] as string,
        link: "https://github.com/alexdreyesz",
        title: "AskPolaris",
        date: "Jan 2025 - Present",
        description: "Developing an AI-powered IT solution in collaboration with the U.S. Space Force, designed to adapt to user input and technical skill levels. Integrating technologies like OpenAI, Azure SQL Database, ServiceNow, and Archibus to deliver intelligent support, reduce IT ticket volume, and boost overall efficiency by empowering users to resolve common issues independently.",
        technologies: [
            {text: "HTML", badgeUrl: badgeIcons['../assets/icons/badges/languages/html5.svg'] as string},
            {text: "CSS", badgeUrl: badgeIcons['../assets/icons/badges/languages/css3.svg'] as string},
            {text: "TypeScript", badgeUrl: badgeIcons['../assets/icons/badges/languages/typescript.svg'] as string},
            {text: "React", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/react.svg'] as string},
            {text: "AzureSQLDatabse", badgeUrl: badgeIcons['../assets/icons/badges/databases/azuresqldatabase.svg'] as string},
            {text: "Azure", badgeUrl: badgeIcons['../assets/icons/badges/databases/azure.svg'] as string},
            {text: "Flask", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/flask.svg'] as string},
            {text: "Chatgpt", badgeUrl: badgeIcons['../assets/icons/badges/ai-llm/chatgpt.svg'] as string},
        ]
    }, 

    mainLine: {
        thumbnail: projectThumbnails['../assets/thumbnails/mainline/mainline-home.png'] as string,
        imgUrl: logoIcons['../assets/icons/logo/mainline-logo.png'] as string,
        link: "https://github.com/alexdreyesz",
        title: "MainLine",
        date: "Jul 2025",
        description: "Our team built mAIn Line, a web and mobile app that functions as a personal emergency assistant powered by Google Gemini. The app uses Twilio and Gemini to simulate emergency calls, interpret user medical data, and relay critical information to responders in real time.",
        technologies: [
            {text: "HTML", badgeUrl: badgeIcons['../assets/icons/badges/languages/html5.svg'] as string},
            {text: "CSS", badgeUrl: badgeIcons['../assets/icons/badges/languages/css3.svg'] as string},
            {text: "TypeScript", badgeUrl: badgeIcons['../assets/icons/badges/languages/typescript.svg'] as string},
            {text: "React", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/react.svg'] as string},
            {text: "mongoDB", badgeUrl: badgeIcons['../assets/icons/badges/databases/mongodb.svg'] as string },
            {text: "Twilio", badgeUrl: badgeIcons['../assets/icons/badges/development-tools/twilio.svg'] as string },
            {text: "Resend", badgeUrl: badgeIcons['../assets/icons/badges/development-tools/resend.svg'] as string },
            {text: "Gemini", badgeUrl: badgeIcons['../assets/icons/badges/ai-llm/google-gemini.svg'] as string },
        ]
    }, 

    neighborly: {
        thumbnail: projectThumbnails['../assets/thumbnails/neighborly/neighborly-home.jpeg'] as string,
        imgUrl: logoIcons['../assets/icons/logo/neighborly-logo.png'] as string,
        link: "https://github.com/alexdreyesz",
        title: "Neighborly",
        date: "Nov 2025",
        description: "Developed Neighborly, a mutual-aid platform that makes helping neighbors simple. The backend matches offers with requests, while AI including Gemini highlights urgent local needs, creates community events, and guides residents to better understand and act on issues around them.",
        technologies: [
            {text: "HTML", badgeUrl: badgeIcons['../assets/icons/badges/languages/html5.svg'] as string},
            {text: "CSS", badgeUrl: badgeIcons['../assets/icons/badges/languages/css3.svg'] as string},
            {text: "TypeScript", badgeUrl: badgeIcons['../assets/icons/badges/languages/typescript.svg'] as string},
            {text: "React", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/react.svg'] as string},
            { text: "mongoDB", badgeUrl: badgeIcons['../assets/icons/badges/databases/mongodb.svg'] as string },
            {text: "Supabase", badgeUrl: badgeIcons['../assets/icons/badges/development-tools/supabase.svg'] as string },
            {text: "Python", badgeUrl: badgeIcons['../assets/icons/badges/languages/python.svg'] as string},
            { text: "FastApi", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/fastapi.svg'] as string },
            {text: "Gemini", badgeUrl: badgeIcons['../assets/icons/badges/ai-llm/google-gemini.svg'] as string },
        ]
    }, 

    simplyLaw: {
        thumbnail: projectThumbnails['../assets/thumbnails/simplylaw/simplylaw-home.jpeg'] as string,
        imgUrl: logoIcons['../assets/icons/logo/simply-law.png'] as string,
        link: "https://github.com/alexdreyesz",
        title: "SimplyLaw",
        date: "Oct 2025",
        description: "Developing Simply Law, an AI-powered legal workflow platform that transforms emails, texts, call transcripts, and documents into actionable case insights using a multi-agent architecture with OCR, audio transcription, and intelligent intent routing. Integrated Twilio and Resend with deployment on Vultr to automate legal workflows and reduce administrative overhead.",
        technologies: [
            {text: "HTML", badgeUrl: badgeIcons['../assets/icons/badges/languages/html5.svg'] as string},
            {text: "CSS", badgeUrl: badgeIcons['../assets/icons/badges/languages/css3.svg'] as string},
            {text: "TypeScript", badgeUrl: badgeIcons['../assets/icons/badges/languages/typescript.svg'] as string},
            {text: "React", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/react.svg'] as string},
            {text: "Python", badgeUrl: badgeIcons['../assets/icons/badges/languages/python.svg'] as string},
            {text: "FastApi", badgeUrl: badgeIcons['../assets/icons/badges/frameworks/fastapi.svg'] as string },
            {text: "Vultr", badgeUrl: badgeIcons['../assets/icons/badges/development-tools/vultr.svg'] as string },
            {text: "Twilio", badgeUrl: badgeIcons['../assets/icons/badges/development-tools/twilio.svg'] as string },
            {text: "Resend", badgeUrl: badgeIcons['../assets/icons/badges/development-tools/resend.svg'] as string },
            {text: "Gemini", badgeUrl: badgeIcons['../assets/icons/badges/ai-llm/google-gemini.svg'] as string },
        ]
    }, 
};

/* Constants For Music Section */
export const songs = [
    { game: "Moonlighter", name: "Tired Rynoka", imgUrl: songImage['../assets/music/moonlighter/moonlighter-soundtrack.jpg'] as string, songUrl: songPath['../assets/music/moonlighter/Moonlighter-Tired-Rynoka.mp3'] as string},
    { game: "Sea Of Stars", name: "The Great Archives", imgUrl: songImage['../assets/music/sea-of-stars/sea-of-stars-soundtrack.jpg'] as string, songUrl: songPath['../assets/music/sea-of-stars/the-great-archives.mp3'] as string},
    { game: "Hollow Knight", name: "Reflection", imgUrl: songImage['../assets/music/hollow-knight/hollow-knight-soundtrack.jpg'] as string, songUrl: songPath['../assets/music/hollow-knight/reflection.mp3'] as string},
    { game: "Chuy Montana", name: "Perdoname Mama", imgUrl: songImage['../assets/music/pirata/pirata-soundtrack.jpg'] as string, songUrl: songPath['../assets/music/pirata/perdon-mama.mp3'] as string},
];