export const sections = [
    {
        section: "Home", 
        link: "#home",
        label: "ph-bold ph-house-simple"
    },
    {
        section: "Portfolio", 
        link: "#portfolio",
        label: "ph-bold ph-squares-four"
    },
    {
        section: "About Me", 
        link: "#about",
        label: "ph-bold ph-user"
    },
    {
        section: "Resume", 
        link: "#resume",
        label: "ph-bold ph-code"
    },
    {
        section: "Contact", 
        link: "#contact",
        label: "ph-bold ph-envelope"
    },
]

export const contact = [
    {
        name: "Phone",
        value: "+1 813-367-6834",
        link: "tel:+8133676834",
        symbol: "ph-bold ph-phone-call"
    },
    {
        name: "Email",
        value: "minhchau.ng1028@gmail.com",
        link: "mailto:minhchau.ng1028@gmail.com",
        symbol: "ph-bold ph-envelope-simple"
    },
    {
        name: "LinkedIn",
        value: "linkedin.com/in/ctrbl",
        link: "https://linkedin.com/in/ctrbl",
        symbol: "ph-bold ph-linkedin-logo"
    },
    {
        name: "GitHub",
        value: "github.com/ctrbl",
        link: "https://github.com/ctrbl",
        symbol: "ph-bold ph-github-logo"
    },
    {
        name: "DevPost",
        link: "https://devpost.com/minhchau-ng1028?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
        symbol: "ph-bold ph-code"
    },    
];

export const experience = [
    {
        name: "Awards & Scholarships",
        number: "12+",
        symbol: "🏆"
    },
    {
        name: "Years of Experience",
        number: "2+",
        symbol: "👩🏻‍💻"
    },
    {
        name: "Projects Completed",
        number: "15+",
        symbol: "🙌"
    },
];

export const skills = [
    {
        name: "Programming Languages", 
        description: "I am most proficient in",
        tags: [
            "Python",
            "C/C++",
            "Objective-C",
            "Java",
            "JavaScript",
            "SQL",
            "HTML/CSS",
            "Swift",
        ],
        imgUrl: "/img/sections/code.png",
    }, 
    {
        name: "Software Development",
        description: "Frameworks and Tools",
        tags: [
            "React", 
            "React Native", 
            "Angular", 
            "MongoDB", 
            "PostgreSQL", 
            "AWS",
            "Node.js", 
            "Express", 
            "RESTful APIs",
            "Git/GitHub",
            "XCode",
            "Pytest",
        ], 
        imgUrl: "/img/sections/sde.png",
    },
    {
        name: "Artificial Intelligence",
        description: "Libraries and Tasks",
        tags: [
            "Keras",
            "Tensorflow", 
            "Pytorch", 
            "Numpy",
            "Pandas", 
            "Matplotlib",
            "OpenCV",
            "Scikit-learn",
            "Seaborn",
            "Fine Tuning",
            "Classification", 
            "NLP"
        ],
        imgUrl: "/img/sections/ai.png",
    },
    {
        name: "Methods & Technology",
        description: "I am most experienced with",
        tags: [
            "Agile Methodologies",
            "Jira", 
            "Test-Driven Development",
            "Selenium",
            "Virtualization",
            "Linux", 
            "Unix",
            "Containerization", 
            "Docker",
        ],
        imgUrl: "/img/sections/tools.png",
    }
];

export const galleryItems = [
    { 
        title: "Em-net",
        imageUrl: "/img/projects/emnet.png",
        thumbnailUrl: "/img/projects/emnet.png",
        link: "https://devpost.com/software/em-sbkiw5",
        description: "An iOS social network mobile app leveraging Solana blockchain technology to incentivize student engagement at USF campus events." + 
        "\nThe app provides real-time updates on 1,500+ events and incorporates an NLP model for personalized recommendations based on user feedback.\nAchieved 1st place in the CockroachDB Serverless Challenge at the USF Hackabull 2023. 🥇",
        tags: [
            "🏆", "Back End Development", "AI/ML",
            'Swift',
            'Objective-C',
            'NLP',
            'DiltilRoberta',
            'Emotion Recognition',
            'Solana',
            'Blockchain',
            'Python',
            'REST API',
            'Flask',
            'SQLAlchemy',
            'CockroachDB',
            'Selenium',
        ],
        visible: 3
    },
    { 
        title: "Remind Me",
        imageUrl: "/img/projects/remindme.png",
        thumbnailUrl: "/img/projects/remindme.png",
        link: "https://devpost.com/software/rem-nd-me",
        description: "A Chrome extension web application that reminds and notifies users to complete tasks on time.\nEnhanced with a user-friendly, responsive UI/UX design crafted to boost productivity, winning an award at the USF Hackabull 2022. 🏅",
        tags: [
            "🏆", "Front End Development", "UI/UX",
            'React.js',
            'Redux', 
            'TypeScript',
            'Material UI',
            'Bootstrap', 
            'Local Storage',
            'Figma',
        ],
        visible: 3
    },
    { 
        title: "Rebye",
        imageUrl: "/img/projects/rebye.png",
        thumbnailUrl: "/img/projects/rebye.png",
        link: "https://github.com/ctrbl/Rebye-App",
        tags: [
            "Full Stack Development", "E-commerce",
            'Swift',
            'Objective-C',
            'SQLite',
            'Data Caching',
            'Firebase',
            'OAuth 2.0', 
            'Stripe',
            'Figma',
        ],
        description: "An iOS consumer-to-consumer e-commerce mobile app for users to sell and buy items seamlessly.\nFeaturing secure user login authentication, end-to-end payments, and optimized database operations, enhancing user experience.",
        visible: 2
    },
    { 
        title: "Capital Quest",
        imageUrl: "/img/projects/capitalquest.gif",
        thumbnailUrl: "/img/projects/capitalquest.gif",
        link: "https://devpost.com/software/capital-quest",
        tags: [
            "🏆", "Front End Development", "UI/UX",
            "React.js", 
            "JavaScript", 
            "Figma", 
            "Bootstrap", 
            "Material UI"
        ],
        description: "A quiz game web application designed to educate users on finance and credit scores.\nAchieved the 'Prettiest Hack' award at the 2022 TechTogether Hackathon. 🏅",
        visible: 3
    },
    {
        title: "Taperk",
        imageUrl: "/img/projects/taperk.png",
        thumbnailUrl: "/img/projects/taperk-thumbnail.png",
        link: "https://chau-portfolio.s3.us-east-2.amazonaws.com/taperk.mp4",
        tags: [
            "Front End Development", "NFC",
            "SwiftUI",
            "Objective-C", 
            "Core Data", 
            "XCTest",
            "Loyalty Program",
        ],
        description: "An iOS mobile app for users to accumulate points and claim rewards at a simple tap of their phone using NFC tags.",
        visible: 2
    },
    { 
        title: "GOGO - Your AI Travel Planner",
        imageUrl: "/img/projects/gogo.png",
        thumbnailUrl: "/img/projects/gogo-thumbnail.png",
        link: "https://github.com/ctrbl/gogo_shellhacks",
        tags: [
            "Full Stack Development", "AI/ML",
            'OpenAI',
            'Flutter',
            'AWS',
            'REST API',
            'Google Cloud Platform',
            'Google Maps API',
            'Postman',
            'Figma',
        ],
        description: "A cross-platform (iOS, Android, web) application that generates personalized travel itineraries based on user's budget and preferences.",
        visible: 2
    },
    {
        title: "A Picnic",
        imageUrl: "https://chau-portfolio.s3.us-east-2.amazonaws.com/A+Picnic.mp4",
        thumbnailUrl: "/img/projects/picnic.gif",
        link: "https://chau-portfolio.s3.us-east-2.amazonaws.com/A+Picnic.mp4",
        tags: [
            "🏆", "Unity", "Blender",
            "Adobe Photoshop",
            "Mixamo",
            "Animation", 
            "Short Film", 
            "Deterministic Finite Automaton (DFA)"
        ],
        description: "A beautiful animated short film about a picnic day of Mr. and Mrs. Wood, crafted from scratch using Unity, Blender, and Adobe Photoshop.\nAwarded 2nd place in the Automata Final Project. 🥈",
        visible: 3
    },
];

export const resume = [
    {
        title: "My Education",
        items: [
            {
                name: "University of South Florida",
                link: "https://www.usf.edu/",
                role: "M.S. in Computer Science",
                date: "2024 - present",
                description: "Specialization: Machine Learning",
                tags: [
                    "Computer Vision", 
                    "Computer Methods for Imaging", 
                    "Algorithms",
                    "Operating Systems",
                ]
            },
            {
                name: "University of South Florida",
                link: "https://www.usf.edu/",
                role: "B.S. in Computer Science",
                date: "2020 - 2023",
                description: "Valedictorian 🎓\nMinor: Mathematics",
                tags: [
                    "Artificial Intelligence", 
                    "Deep Learning", 
                    "Image Processing", 
                    "Brain-Computer Interface",
                    "Software Engineering",
                    "Algorithms", 
                    "Data Structures", 
                    "Graph Theory", 
                    "Automata Theory", 
                    "Cryptography",
                    "Secure Coding",
                    "Computer Architecture", 
                    "Computer Logic & Design",
                    "Database Design",
                    "Discrete Math", 
                    "Object-Oriented Design", 
                    "Vector Calculus",  
                ]
            }
        ]
    },
    {
        title: "Work Experience",
        items: [
            {
                name: "Taperk", 
                link: "https://www.taperk.com/",
                role: "Software Developer Intern",
                date: "09/2023 - 12/2023",
                description: "Developed the UI/UX for an iOS loyalty app utilizing SwiftUI, Objective-C, Figma, RESTful APIs, Git, GitLab, XCTest, and TestFlight.",
            },
            {
                name: "University of South Florida", 
                link: "https://www.usf.edu/",
                role: "Research Assistant",
                date: "01/2023 - 05/2023",
                description: "Fine-tuned GPT 3.5 models for nutrient intake question generation and built a React Native mobile app with MySQL backend and Tableau data visualization dashboards.",
            }
        ]
    },
    {
        title: "Leadership Experience",
        items: [
            {
                name: "Association for Computing Machinery",
                link: "https://www.acm.org/",
                role: "Web Master",
                date: "08/2022 - 08/2023",
                description: "Devised digital marketing strategies which successfully attracted 200+ new members and improved participation rate by 40%.",
            },
            {
                name: "Association for Computing Machinery",
                link: "https://www.acm.org/",
                role: "Treasurer",
                date: "08/2021 - 08/2022",
                description: "Generated $6,000+ in funds for tech workshops and conferences for 500+ members at USF.",
            }
        ]
    }
];

export const tools = [
    {
        name: "Python",
        link: "img/icons/icon-python.svg",
    },
    {
        name: "JavaScript",
        link: "img/icons/icon-javascript.svg",
    },
    {
        name: "React",
        link: "img/icons/icon-react.svg",
    },
    {
        name: "SwiftUI",
        link: "img/icons/icon-swiftui.svg",
    },
    {
        name: "MySQL",
        link: "img/icons/icon-mysql.svg",
    },
    {
        name: "Node.js",
        link: "img/icons/icon-nodejs.svg",
    },
    {
        name: "AWS",
        link: "img/icons/icon-aws.svg",
    },
    {
        name: "HTML5",
        link: "img/icons/icon-html.svg",
    },
    {
        name: "CSS3",
        link: "img/icons/icon-css.svg",
    },
    {
        name: "Figma",
        link: "img/icons/icon-figma.svg",
    }
];

export const awards = [
    {
        name: "Outstanding Graduate Award",
        from: "University of South Florida",
        from_link: "https://www.usf.edu/",
        image: "/img/icons/logo-usf.png",
        description: "Upon the recommendation of the faculty of the Department of Computer Science & Engineering at the University of South Florida, this award is for the Valedictorian of the graduating class of Computer Science in Fall 2023.",
        link: "/img/usf_valedictorian.jpg"
    },
    {
        name: "King O'Neal Award",
        from: "University of South Florida",
        from_link: "https://www.usf.edu/",
        image: "/img/icons/logo-usf.png",
        description: "The granting of this award recognizes the extraordinary accomplishment of maintaining a 4.0 GPA at the University of South Florida.",
        link: "https://chau-portfolio.s3.us-east-2.amazonaws.com/usf_kingoneal_award.jpg"
    },
    {
        name: "Hackathon Awards",
        from: "Major League Hacking",
        from_link: "https://mlh.io/",
        image: "/img/icons/logo-mlh.jpeg",
        description: "Check out my hackathon awards from the USF Hack-a-bull 2022 (Remind Me), USF Hack-a-bull 2023 (Em-net), and TechTogether Miami 2022 (Capital Quest).",
        link: "https://devpost.com/minhchau-ng1028?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    {
        name: "Congressional App Challenge Awards",
        from: "US Congress",
        from_link: "https://www.congressionalappchallenge.us/",
        image: "/img/icons/logo-congress.jpeg",
        description: "Check out my awards from the Congressional App Challenge 2018 (Pinellas County Veteran Services App) and the Congressional App Challenge 2019 (Siren SK).",
        link: "https://www.congressionalappchallenge.us/19-fl13/"
    },
]