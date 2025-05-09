/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Liwen Liang",
  title: "Hi all, I'm Liwen",
  subTitle: emoji(
    "A product-focused problem solver 🚀 passionate about driving ideas from concept to impactful solutions. Experienced in UX design, prototyping, and working across design, engineering, and user research to build intuitive digital and physical products. I thrive on connecting user needs with business goals, turning insights into clear product strategies and seamless user experiences."
  ),
  resumeLink:
    "https://1drv.ms/b/s!AmsGoHm4YNzdcYMYU-jiMVfzJaQ?e=UlESFJ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/liwen-liang-134b41358/",
  outlook: "Steven.Liang0312@outlook.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PRODUCT DESIGNER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington",
      logo: require("./assets/images/UWlogo.png"),
      subHeader: "Master of Science in Technology Innovation",
      duration: "September 2024 - March 2026",
      desc: "Blending design, technology, and research to craft intuitive and impactful user experiences. Focused on product thinking, UX design, prototyping, and cross-functional collaboration to solve real-world problems.",
      descBullets: [
        "Core Courses: Programming for Digital & Physical User Interfaces, Sensors & Circuits, Managing Data & Signal Processing, User Research and Evaluation, Planning and Managing HW/SW Development, Technology Strategy"
      ]
    },
    {
      schoolName: "Xi'an JiaoTong-Liverpool University",
      logo: require("./assets/images/Ellipse 1.png"),
      subHeader: "Bachelor of Engineering in Industrial Design",
      duration: "September 2019 - June 2023",
      desc: "Developed strong foundations in user-centered design, prototyping, and product development. Gained hands-on experience across physical and digital design, bridging creativity with functionality.",
      descBullets: ["Core Courses: Design Thinking, Human-Computer Interaction, Product Design, User-Centered Research, Design for Manufacturing, Design for Sustainability"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  title: "Experiences",
  experience: [
    {
      role: "Service Designer ",
      company: "Empowefit",
      companylogo: require("./assets/images/Empowerfitlogo.png"),
      date: "September 2023 – December 2023",
      desc: "A community-driven gym platform connecting trainers of all levels to address evolving user needs. The service enables users to find partners, coach others, and host activities, fostering peer interaction and fulfilling both practical and emotional goals.",
      descBullets: [
        "Conducted user research (32 survey responses, 6 interviews) to uncover the emotional and practical needs of Gen-Z gym-goers",
        "Designed an app and service ecosystem to connect gym users as peers and coaches based on experience levels",
        "Created a full stakeholder map and service blueprint to support scalability for university gym settings"
      ]
    },
    {
      role: "AR&UI Designer",
      company: "AR Sports Game for Kids",
      companylogo: require("./assets/images/ARtoollogo.png"),
      date: "August 2023 – November 2023",
      desc: "An interactive toy kit and app that integrates traditional Chinese games with AR technology to improve children concentration and promote healthy lifestyles. Evolved the concept through iterative prototyping and testing, creating a product that enhances both individual focus and family bonding through physical play.",
      descBullets: [
        "Designed an AR-based toy system that blends traditional Chinese games with digital feedback to improve kids' attention and parent-child interaction",
        "Conducted user interviews with parents and translated findings into game logic, physical models, and UI/UX designs",
        "Developed modular and multi-player gameplay experiences supported by app-based interaction"
      ]
    },
    {
      role: "Integrated Designer & Team Leader",
      company: "X+Rehab System",
      companylogo: require("./assets/images/XRehablogo.png"),
      date: "Dec 2022 – June 2023",
      desc: "A rehabilitation system that leverages EEG and VR technology to support cognitive and motor recovery in patients. Evolved through interdisciplinary collaboration, user research, and iterative prototyping, resulting in a clinically relevant product that combines functional EEG-based interaction with ergonomic headgear design.",
      descBullets: [
        "Collaborated with computer scientists and industrial designers, creating a motor rehabilitation system incorporating a brain-computer interface to help brain injury rehab",
        "Led market and user research on EEG cap, built a functional prototype using Open BCI, Modeled and 3D printed the final product, and conducted user testing",
        "In charge of communication with eternal partner like Kunshan Rehabilitation Hospital",
        "Presented the project as team leader; Gained 3rd prize in final competition (12/100+)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

const bigProjects = {
  title: "Research Project",
  subtitle: "RESEARCH PROJECT THAT I HAVE DONE",
  projects: [
    {
      image: require("./assets/images/quest2.webp"),
      projectName: "Object Manipulation in VR/AR Environments",
      projectDesc: "Researched sense of agency (SoA) in AR/VR environments using Unity-based prototypes, comparing tool designs and control methods. Collaborated on experimental design and data analysis, led user testing and insight synthesis. Co-authored a paper accepted at ICVR 2023, translating user behavior into actionable design insights for immersive systems.",
      descBullets: [
        "Conducted user research on sense of agency (SoA) in AR/VR environments using Unity-based prototypes; designed experiments comparing tool designs and control methods",
        "Collaborated with CS students on experimental design, research questions, and data analysis",
        "Led data collection and insight synthesis; Co-authored a paper accepted by ICVR 2023",
        "Gained experience translating user behavior into actionable design considerations for immersive systems"
      ],
      footerLink: [
        {
          name: "View Paper",
          url: "https://ieeexplore.ieee.org/document/10169686"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NICE Entrepreneurship Competition",
      subtitle:
        "Led interdisciplinary teams in design competitions focused on innovative product solutions. Directed user research, concept development, and rapid prototyping while coordinating cross-functional collaboration. Projects were recognized as finalists and praised for creativity, feasibility, and user impact.",
      image: require("./assets/images/NICElogo.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://mp.weixin.qq.com/s/clQ6ZeWbHq9l_dF99SX_PA"
        },
        {
          name: "NICE Official Page",
          url: "https://en.nice.org.cn/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "Steven.Liang0312@outlook.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo
};
