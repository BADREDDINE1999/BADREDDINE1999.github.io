/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
// import your custom splash animation if you have one
// import splashAnimation from "./assets/lottie/splashAnimation"; // Uncomment and set your file if needed

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  // animation: splashAnimation, // Uncomment if using a custom animation
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Badreddine Housni",
  title: "Hi all, I'm Badreddine",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience in building Web applications using Java/Spring, Angular, PHP/Laravel, Drupal, Node.js, Python and various other libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1rP2pnoN9j1G6iZz8C_IMAScsXojuIIVG/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BADREDDINE1999", // Replace with your GitHub profile
  linkedin: "https://www.linkedin.com/in/badreddine-housni-46647418b/",
  gmail: "badreddinehousni@gmail.com",
  gitlab: "", // Replace if applicable
  facebook: "", // Add if applicable
  medium: "", // Add if applicable
  stackoverflow: "", // Add if applicable
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications (PWA) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as AWS, IBM Cloud, GCP, and Microsoft Azure"
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "spring",
      fontAwesomeClassname: "fab fa-java" // Spring is Java-based
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ENSIAS",
      logo: require("./assets/images/ENSIAS.jfif"), // Add your ENSIAS logo in assets/images
      subHeader: "State Engineer in Software Engineering",
      duration: "2024 Alumni",
      desc: "Specialized in Software Engineering with a focus on full-stack development, system design, and data management.",
      descBullets: [
        "Completed coursework in Java, Python, C, JavaScript, SQL, and other programming languages.",
        "Engaged in multiple projects involving Spring Boot, Angular, Laravel, and VueJS."
      ]
    },
    {
      schoolName: "Mohammed V Preparatory Classes",
      logo: require("./assets/images/cpge_mohamed_v_casablanca_logo.jfif"), // Add your Prep Classes logo
      subHeader: "Maths-Physics (MP) Track",
     // duration: "September 2018 - June 2020",
      desc: ["Grade : Top 30% of admitted students at the CNC (MP), Admission to ENSIAS in the Software Engineering program (GL).",
      "Two years of intensive academic training in mathematics and physics branch (MP) leading me to join ENSIAS.",
      "Main Courses:",

    ],

    descBullets: [
      " Mathematics: Linear Algebra, Calculus, Geometry, Discrete Mathematics, Logic..",
      " Physics: Mechanics, Optics, Thermodynamics, Electrostatics, Electromagnetic, Quantum, Chemistry..",
      " Computer Science: Python, SQL..",
      "Engineering Science",
      " Philosophy",
     ]
    },
    {
      schoolName: "Errazi High School",
      logo: require("./assets/images/ERRAZI.jfif"), // Add your High School logo
      subHeader: "Mathematical Sciences B",
     // duration: "September 2015 - June 2018",
      desc: "Completed high school with a focus on mathematical sciences.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", // Insert stack or technology you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer Intern",
      company: "SQLI Digital Experience",
      companylogo: require("./assets/images/sqli_logo.jfif"), // Add SQLI logo
      date: "March 2024 – July 2024",
      desc: "Contributed to the data migration for the client Thales to a Drupal site by developing the 'Thales Migration' module.",
      descBullets: [
        "Developed the 'Thales Migration' module using PHP and Drupal.",
        "Utilized Visual Paradigm and Visual Studio for project management and development.",
        "Worked in a hybrid environment, collaborating with both on-site and remote teams."
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Atlantic Machinery Manufacturing",
      companylogo: require("./assets/images/AMM.jfif"), // Add Atlantic Machinery logo
      date: "July 2022 – August 2022",
      desc: "Designed and developed a web application for customer visit management using SCRUM methodology.",
      descBullets: [
        "Implemented the application using Laravel for the backend and VueJS for the frontend.",
        "Managed the database with MySQL and utilized Git and GitHub for version control.",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Lenddoo",
      companylogo: require("./assets/images/lenddoomortgages_logo.jfif"), // Add Lenddoo logo
      date: "March 2022 – June 2022",
      desc: "Developed a chatbot for evaluating the eligibility of credit files in collaboration with a partner.",
      descBullets: [
        "Built the chatbot using Node.js and Python-Flask integrated with Twilio API.",
        "Coordinated project tasks remotely using Jira with the team and collaborated with my partner."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Ministry of National Territory Planning, Urban Planning, Housing and City Policy",
      companylogo: require("./assets/images/Logo-Ministere.png"), // Add Ministry logo
      date: "July 2021 – August 2021",
      desc: "Designed and developed a leave management web application using SCRUM methodology.",
      descBullets: [
        "Implemented the application using PHP for the backend and JavaScript with Bootstrap for the frontend.",
        "Managed the database with MySQL and utilized Git and GitHub for version control.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF THE MOST COMPLEX PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/att.PNG"), // Add your project image
      projectName: "Attendance Monitoring and Management System",
      projectDesc: "A distributed system for monitoring and managing attendance using Spring Boot and Angular.",
      footerLink: [
       
       
       /*
        {
          name: "GitHub",
          url: "https://github.com/your-github-username/attendance-system" // Replace with your project URL
        },
        {
          name: "Live Demo",
          url: "https://attendance-system-demo.com" // Replace with your live demo URL
        }
        */

      ]
    },
    {
      image: require("./assets/images/eventAPP.PNG"), // Add your project image
      projectName: "Sports Event Management System",
      projectDesc: "A distributed system to manage sports events efficiently using Spring Boot and Angular.",
      footerLink: [
       
       
        /*
        {
          name: "GitHub",
          url: "https://github.com/your-github-username/sports-event-management" // Replace with your project URL
        },
        {
          name: "Live Demo",
          url: "https://sports-event-demo.com" // Replace with your live demo URL
        }
          
        */
      ]
    },
    {
     image: require("./assets/images/AutoENSIAS.PNG"), // Add your project image
      projectName: "Hitch-Hiking Web System",
      projectDesc: "Developed a web system for hitch-hiking management using PHP and MySQL.",
      footerLink: [
      /*
        {
          name: "GitHub",
          url: "https://github.com/your-github-username/hitch-hiking-system" // Replace with your project URL
        },
        {
          name: "Live Demo",
          url: "https://hitch-hiking-demo.com" // Replace with your live demo URL
        }
        */
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Artificial Intelligence Analyst Certificate",
      subtitle: "Issued by IBM",
      image: require("./assets/images/IA_IBM.png"), // Add IBM logo
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/eb22b904-3bc1-4566-981e-82a30c0c6892" // Replace with your certificate link
        }
      ]
    },
    {
      title: "Big Data Engineer Certificate",
      subtitle: "Issued by IBM",
      image: require("./assets/images/BIG-DATA_IBM.png"), // Add IBM logo
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/413700e6-f3b4-48be-b10e-09de976a7e6d" // Replace with your certificate link
        }
      ]
    },
    {
      title: "HTML5 and CSS3",
      subtitle: "Completed Certification from OpenClassrooms",
      image: require("./assets/images/OPENCLASSROOM.png"), // Add OpenClassrooms logo
      imageAlt: "OpenClassrooms Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Vmt6n-0H1dEkoFqKI48t5qyFza7DIj_A/view" // Replace with your certificate link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With love for developing cool stuff, I love to write and teach others what I have learned.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://yourblog.com/post1",
      title: "Understanding Full Stack Development",
      description:
        "An in-depth look into what full stack development entails and the technologies involved."
    },
    {
      url: "https://yourblog.com/post2",
      title: "Building a Chatbot with Node.js and Flask",
      description:
        "Step-by-step guide on creating a chatbot for credit file evaluation using Node.js and Python Flask."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE AND HAVE GIVEN SOME TALKS AT CONFERENCES 😅"
  ),

  talks: [
    {
      title: "Building Scalable Web Applications",
      subtitle: "Tech Conference Morocco 2023",
      slides_url: "https://slides.com/your-talk-slides", // Replace with your slides URL
      event_url: "https://techconference-morocco.com/events/building-scalable-web-apps" // Replace with your event URL
    },
    {
      title: "Data Migration Strategies",
      subtitle: "SQLI Digital Experience Webinar 2024",
      slides_url: "https://slides.com/your-talk-slides", // Replace with your slides URL
      event_url: "https://sqli.com/events/data-migration-strategies" // Replace with your event URL
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embedded Link
  podcast: [
    "https://anchor.fm/yourpodcast/embed/episodes/Your-Episode-URL" // Replace with your podcast embed links
  ],
  display: false // Set false to hide this section, defaults to true
};




// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Resume Link
  resumeFile: "https://drive.google.com/file/d/1rP2pnoN9j1G6iZz8C_IMAScsXojuIIVG/view?usp=sharing", // Replace with your resume link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+212 6 13 54 68 81",
  email_address: "badreddinehousni@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "your-twitter-username", // Replace "your-twitter-username" with your actual Twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set true if you are looking for a job, false otherwise

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

