const projects = [
    {
        id: 0,
        name: "Interactive Dashboard",
        longName: "Interactive Data Visualization Dashboard",
        Logo: "assets/projects/dashboard/dashboard (3).png",
        description: [
            "Created a dynamic data visualization dashboard to provide real-time insights and analytics.",
            "Implemented interactive charts with real-time updates, user-driven data filters, and customizable views.",
            "React for the user interface, Chart.js for visualizations, and Firebase for data storage and real-time updates.",
        ],
        skills: ["react",'chartjs', "Firebase"],
        images: [
            "assets/projects/dashboard/dashboard (1).png",
            "assets/projects/dashboard/dashboard (2).png",
            "assets/projects/dashboard/dashboard (4).png",
        ]
    },
    {
        id: 1,
        name: "E-commerce",
        longName: "Full Stack E-commerce Website",
        Logo: "assets/projects/e-commerce/cart.svg",
        description: [
            "Developed a comprehensive E-Commerce platform.",
            "Implemented the Customer front-end, Admin front-end and back-end.",
            "React for the front-end and Node.js with Express for the back-end.",
            "Integrated MongoDB for robust data storage and management.",
        ],
        skills: ["react", "nodejs", "express", "MongoDB"],
        images: [
            "assets/projects/e-commerce/e-commerce-pic (1).png",
            "assets/projects/e-commerce/e-commerce-pic (2).png",
            "assets/projects/e-commerce/e-commerce-pic (3).png",
            "assets/projects/e-commerce/e-commerce-pic (4).png",
            "assets/projects/e-commerce/e-commerce-pic (5).png"
        ]
    },
    {
        id: 2,
        name: "Athar",
        longName: "أثر من القرآن Athar",
        Logo: "assets/projects/Athar/pic.jpg",
        description: [
            "A website for sharing Quraan verses and their impact",
            "To share the same feeling that the Holy Qur’an inspires, motivates, and influences our lives in indescribable ways.",
            "HTML, CSS, JavaScript, and Firebase API",
            `share your impact <a href="https://atharmnalquraan.web.app/" target="_blank" class="clickhere">here</a>`,
        ],
        skills: ["html", "css", "javascript", "Firebase"],
        images: [
            "assets/projects/Athar/allAthar.jpg",
            "assets/projects/Athar/addAthar.jpg",
            "assets/projects/Athar/Atharfront.jpg",
        ]
    },
    {
        id: 3,
        name: "Hima",
        longName: "Hima حمى",
        Logo: "assets/projects/hima/Hima_logo.png",
        description: [
            "A crowd management system using Artificial Intelligence (AI) detection model",
            "Improve crowd management by continuously relocating officers based on crowd density",
            "Keep abreast of unexpected crowds to offer pilgrims a safe pilgrimeage",
            "Ensure officers are properly distributed among the areas in case any incidents arise",
            "Roboflow annotation tool for the dataset preparation",
            "Python, flutter and dart languages. and firebase API",
        ],
        skills: ["flutter", "dart","roboflow", "Python",  "firebase"],
        images: [
            "assets/projects/hima/hima1.jpg",
            "assets/projects/hima/hima2.jpeg",
            "assets/projects/hima/hima3.jpeg"
        ]
    },
    {
        id: 4,
        name: "Sentences Recognizer",
        longName: "AI Sentences Recognizer",
        Logo: "assets/projects/nlp/nlp.jpg",
        description: [
            "Apply Natural Language Processing (NLP) and Machine Learning (ML) to reconize Arabic sentences.",
            "recognize the arabic sentences as fast and accurate as possible.",
            "89% Accuracy",
            "Python programming language"
        ],
        skills: ["Python"],
        images: [
            "assets/projects/nlp/nlpModeltest.jpg",
        ]
    },
    {
        id: 5,
        name: "Alnorain",
        longName: "Alnorain النورين",
        Logo: "assets/projects/alnorain/alnorainlogo.png",
        description: [
            "An application to help pilgrims in thier journey.",
            "Provide information about holy places and offer advice regarding their visit schedules.",
            "Offering a range of services, including hotels, markets, and bus timetables and schedules.",
            "Java programming language"
        ],
        skills: ["java", "mysql"],
        images: [
            "assets/projects/alnorain/alnorain.jpg",
            "assets/projects/alnorain/alnorain2.jpg",
            "assets/projects/alnorain/alnorain3.jpg",
        ]
    },
    {
        id: 6,
        name: "Gameso",
        longName: "UI/UX Gameso",
        Logo: "assets/projects/gameso/gameso.png",
        description: [
            "Designing the user interface and user experience UI/UX for a game shopping website",
            "Assisting gamers in making cost-effective purchases and leveraging unused games to their advantage",
            "Applying fundamental design principles to enhance the UI/UX",
            "Prototype using Wix.com",
        ],
        skills: ["wix"],
        images: [
            "assets/projects/gameso/gameso.jpg",
            "assets/projects/gameso/gameso2.jpg",
            "assets/projects/gameso/gameso3.jpg",
        ]
    },
    {
        id: 7,
        name: "Hotel System",
        longName: "Hotel Management System",
        Logo: "assets/projects/hotel/hotel.png",
        description: [
            "Hotel management system provides comprehensive assistance to hotels, aiding them in efficiently tracking their reservations and managing them with ease.",
            "Advance programming to make front-end and back-end",
            "Java programming language & MySQL database",
        ],
        skills: ["java", "mysql"],
        poster: "assets/projects/hotel/hotel.jpg",
        video: "assets/projects/hotel/hotelSystem.mp4"
    },
    {
        id: 8,
        name: "Character Recognizer",
        longName: "AI Character Recognizer",
        Logo: "assets/projects/characterReco/onepiece.png",
        description: [
            "Designed and implemented a specialized questionnaire program aimed at identifying personality traits aligning with characters from the popular manga series 'One Piece'.",
            "Prolog programming language",
        ],
        skills: ["prolog"],
        poster: "assets/projects/characterReco/charreco.jpg",
        video: "assets/projects/characterReco/charReco.mp4"
    },
    {
        id: 9,
        name: "Badan",
        longName: "Badan Sport Website",
        Logo: "assets/projects/badan/badan.png",
        description: [
            "An interactive sports-themed website designed to help users discover their ideal sport through tailored testing and analysis",
            "Sports reveal the power in our body(Bdan-بدن)",
            "HTML, CSS and JavaScript",
        ],
        skills: ["html", "css", "javascript"],
        poster: "assets/projects/badan/badan.jpg",
        video: "assets/projects/badan/badan.mp4"
    },
    {
        id: 10,
        name: "Graphics",
        longName: "Minecraft Graphic",
        Logo: "assets/projects/minecraft/minecraft.png",
        description: [
            "Created dynamic graphic designs for Minecraft, showcasing stunning 3D graphics and captivating animations to enhance the visual experience of the game",
            "C++ programming language",
        ],
        skills: ["C++"],
        poster: "",
        video: "assets/projects/minecraft/CGProject.mp4"
    },
];

const skills =
    [
        {
            "name": "html",
            "url": "assets/skills/html.svg",
        },
        {
            "name": "css",
            "url": "assets/skills/css.svg",
        },
        {
            "name": "javascript",
            "url": "assets/skills/javascript.svg",
        },
        {
            "name": "react",
            "url": "assets/skills/react-js.svg",
        },{
            "name": "chartjs",
            "url": "assets/svg/chart-js.svg",
        },
        {
            "name": "flutter",
            "url": "assets/skills/flutter.svg",
        },
        {
            "name": "python",
            "url": "assets/skills/python.svg",
        },{
            "name": "roboflow",
            "url": "assets/svg/roboflow.svg",
        },
        {
            "name": "prolog",
            "url": "assets/svg/prolog.svg",
        },
        {
            "name": "java",
            "url": "assets/skills/java.svg",
        },
        {
            "name": "C++",
            "url": "assets/skills/C++.svg",
        },
        {
            "name": "dart",
            "url": "assets/skills/dart.svg",
        },
        {
            "name": "django",
            "url": "assets/skills/django.svg",
        },

        {
            "name": "flask",
            "url": "assets/skills/flask.svg",
        }, {
            "name": "nodejs",
            "url": "assets/skills/node-js.svg",
        },{
            "name": "express",
            "url": "assets/svg/express.svg",
        }, {
            "name": "firebase",
            "url": "assets/skills/firebase.svg",
        },
        {
            "name": "mysql",
            "url": "assets/skills/mysql.svg",
        },
        {
            "name": "postgresql",
            "url": "assets/skills/postgresql.svg",
        },
        {
            "name": "mongodb",
            "url": "assets/skills/mongodb.svg",
        },
        {
            "name": "wix",
            "url": "assets/svg/wix.svg",
        },
    ];

document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.getElementById('projectsContainer');

    // Function to create project card HTML
    function createProjectCard(project) {
        let invertedLogo = "";
        if (project.id === 9) {
            invertedLogo = "inverted-logo";
        }
        return `
            <div class="project-card" onclick="showMore('${project.id}')" id="${project.id}Card">
                <img src="${project.Logo}" alt="${project.name}" class="${invertedLogo}">
                <h3>${project.name}</h3>
            </div>
        `;
    }

    // Function to render all project cards
    function renderProjects() {
        const projectCards = projects.map(createProjectCard).join('');
        projectsContainer.innerHTML = projectCards;
    }

    // Call renderProjects to populate the container
    renderProjects();
});
let projectDetails = document.getElementById("projectDetailsContainer");
function showMore(projectId) {
    projectDetails.style.display = 'flex';
    const rect = projectDetails.getBoundingClientRect();
    const targetY = rect.top+document.documentElement.scrollTop-50;
    window.scrollTo({
        top: targetY,
        behavior: 'smooth' 
    });
    const project = projects[projectId];
    const descriptionItems = project.description.map(desc => `<li>${desc}</li>`).join('');
    let invertedLogo = "project-logo";

    const projectSkills = new Set(project.skills.map(skill => skill.toLowerCase()));
    const projectSkillsfiltered = skills.filter(skill => projectSkills.has(skill.name.toLowerCase()));
    const skillsitems = projectSkillsfiltered.map(skl => `<img src="${skl.url}" alt="${skl.name}" />`).join('');
    if (projectId > 6) {

        if (project.id === 9) {
            invertedLogo = "project-logo-inverted project-logo";
        }
        projectDetails.innerHTML =
            `<div class="close-project-container">
                <img src="assets/svg/closeCircle.svg" alt="X" class="close-project" onclick="closeProject()">
            </div>
            <img src="${project.Logo}" alt="${project.name}" class="${invertedLogo}">
            <div class="project-text">
                <h3>${project.longName}</h3>
                <ul>
                ${descriptionItems}
                </ul>
                <div class="project-skill">
                ${skillsitems}
                </div>
            </div>
            <video controls poster="${project.poster}" id="video">
                <source src="${project.video}" type="video/mp4">
            </video>`;
    }
    else {
        const imagesItems = project.images.map((img, index) =>
            `<img src="${img}" alt="${project.name}" class="${index === 0 && projectId !== '1' ? 'project-imgs-first' : ''}" onclick="zoomIn('${img}')">`
        ).join('');
        projectDetails.innerHTML =
            `<div class="close-project-container">
                <img src="assets/svg/closeCircle.svg" alt="X" class="close-project" onclick="closeProject()">
            </div>
            <img src="${project.Logo}" alt="${project.name}" class="${invertedLogo}">
            <div class="project-text">
                <h3>${project.longName}</h3>
                <ul>
                ${descriptionItems}
                </ul>
                <div class="project-skill">
                ${skillsitems}
                </div>
            </div>
            <div class="project-imgs">
            ${imagesItems}
            </div>`;
    }

}

function closeProject() {
    projectDetails.style.display = 'none';
}

function zoomIn(imgSrc) {
    const zoomContainer = document.getElementById('zoomContainer');
    const imgZoom = document.getElementById('imgZoom');
    imgZoom.src = imgSrc;
    zoomContainer.style.display = 'flex';
}

function zoomout() {
    const zoomContainer = document.getElementById('zoomContainer');
    zoomContainer.style.display = 'none';
}