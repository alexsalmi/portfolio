// Links used in the header/navbar
const links = [
  {
    link: '/about',
    name: 'About Me'
  },
  {
    link: '/resume',
    name: 'Resume'
  },
  {
    link: '/projects',
    name: 'Projects'
  },
  {
    link: '/contact',
    name: 'Contact Me'
  },
];

// URLs used throughout the site
const urls = {
  resume: "https://asalmi-public.s3.amazonaws.com/Alex_Salmi_Resume.pdf",
  github: "https://github.com/alexsalmi",
  linkedin: "https://linkedin.com/in/alexsalmi"
}

// Content for the 'About' page
const aboutContent = {
  professional: "I am a full-stack engineer with years of experience creating scalable websites for companies of all sizes. I specialize in both front-end and back-end work to deliver web apps specific to any project's requirements. I have experience in UI/UX design, API work, database management, cross-platform mobile app development, and architectural design.",
  personal: "Outside of work, I love reading, running, basketball, comic books, video games, travel, and working on side projects. I spent most of my life living in Sweden, before making use of my dual-citizenship and moving to Boston for college in 2015. I currently live in Brooklyn, NY with my girlfriend and dog, and don't plan on leaving any time soon!",
  skills: ["React", "NodeJS", "Javascript", "Typescript", "Java", "Spring Boot", ".NET", "React Native", "HTML", "CSS", "SQL", "AWS"]
};

// Content for the 'Resume' page
const resumeContent = {
  education: {
    school: "Boston University",
    degree: "Bachelor's Degree, Computer Engineering",
    startDate: "2017",
    endDate: "2020",
    notes: "Graduated Cum Laude, 3.53 GPA"
  },
  experience: [
    {
      title: "Senior Full-Stack Software Engineer",
      company: "John Hancock",
      startDate: "March 2023",
      endDate: "Present",
      description: "During the 2022 year end review cycle, I was rewarded for my hard work and increased responsibility by being promoted to senior-level engineer. Since then I have taken on the new challenge of being a mentor figure to several new employees that have joined the team, while continuing to deliver on my own work as I had been the previous 2.5 years.",
      details: [
        "Mentored four new employees joining our team, including teaching them the complexities of our various systems and delegating out user stories",
        "Assumed the role of tech anchor for our team, being the main point of contact for colleagues with any inquiries regarding our security systems",
        "Oversaw the full-stack development of a new set of login and multi-factor authentication pages, guiding four developers through the project"
      ]
    },
    {
      title: "Full-Stack Software Engineer",
      company: "John Hancock",
      startDate: "June 2022",
      endDate: "March 2023",
      description: "After graduating from the development program, I elected to continue working with the security/profile management team, and was promoted to mid-level engineer. As I continued to familiarize myself with the systems behind the login, profile management, and security flows, I became an increasingly vital part of the team, continuously accepting more responsibility when the opportunities came along.",
      details: [
        "Refactored the Password Validation API to comply with new password requirements within John Hancock, improving security for all John Hancock customers",
        "Created a set of Stateful APIs in Node JS to enable account unlock and reset password functionality for the John Hancock Chatbot, used by over 10,000 customers per month",
        "Collaborated with both consuming teams and our design teams to ensure our profile management UIs met the requirements set by each team and the company as a whole"
      ]
    },
    {
      title: "Associate Full-Stack Software Engineer",
      company: "John Hancock",
      startDate: "June 2020",
      endDate: "June 2022",
      description: "My first job after college, where I joined John Hancock's Software Engineering Development Program. The program included two year-long rotations, the first with the notification systems team, and the second with the security/profile management team. These two rotations were a tremendous experience, showing me what it means to be a software engineer in a professional environment, how to collaborate with your teammates, and deliver high quality products.",
      details: [
        "Lead development of a new internal Notification Portal front-end using React JS, which logs and tracks over 700,000 notification emails and text messages per month",
        "Architected and developed a new set of .NET Core Voice Notification APIs, as well as the system's database schema, now utilized by 5,000 customers per month",
        "Redesigned the React JS pages for the forgot username, forgot password, update profile, and account unlock operations to match John Hancock's new look and feel",
        "Implemented a new Rate Limiting API in Node JS, used by the login and multi-factor authentication operations for all of John Hancock's customers"
      ]
    },
    {
      title: "Developer Intern",
      company: "Third Eye Health",
      startDate: "June 2019",
      endDate: "March 2020",
      description: "A summer internship with telehealth startup Third Eye Health, which extended into my senior year of college. This was my first real professional experience as a developer, teaching me a lot about programming and the development lifecycle that aren't taught in college curriculums.",
      details: [
        "Performed full stack development on an internal dashboard using .NET Core with Razor pages, for licensed physicians to keep track of patient records",
        "Maintained and contributed to the company's Microsoft SQL Server, including HIPAA compliant patient information",
        "Designed and created several automated front-end reports for patient records, doctor activity, etc., also using .NET Core with Razor pages"
      ]
    },
    {
      title: "Software Developer",
      company: "Salmi Consulting",
      startDate: "January 2017",
      endDate: "September 2017",
      description: "My first semi-professional software engineering experience during my year off, working on a couple of projects for my father's consulatant company. While these were minor projects, having this experience so early on in my college career was a tremendous benefit.",
      details: [
        "Redesigned Salmi Consulting's website from the ground up using ASP.NET MVC with Razor pages",
        "Developed easy to use web-based medical tests for ADHD patients using React JS",
        "Added features and fixed bugs in the .NET Framework back-end API for the medical test website"
      ]
    }
  ]
};

// Content for the 'Projects' page
const projectsContent = [
  {
    name: "Pay Me",
    description: "A multiplayer card game web app. Utilizes Socket.io to create a real time online card game between you and your friends. Pay Me is a card game that my family plays together all the time, so I wanted to create this web version to be able to play with them even when we're not together!",
    github: null,
    link: null,
    skills: [
      "React",
      "Redux",
      "NodeJS",
      "Javascript",
      "AWS",
      "AWS Amplify"
    ]
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio website. Created over the course of a year to sharpen my React and CSS skills to create a website catered to my own designs.",
    github: "https://github.com/alexsalmi/asalmi-portfolio",
    link: "https://asalmi.com",
    skills: [
      "React",
      "Typescript",
      "CSS",
      "AWS Amplify"
    ]
  },
  {
    name: "Utilities API",
    description: "A REST API used by my various side projects. Created to get more experience working with Java Spring Boot. Connected to a MySQL Database where I store any data used by my projects.",
    github: "https://github.com/alexsalmi/utilities-api",
    link: null,
    skills: [
      "Java",
      "Spring Boot",
      "Maven",
      "MySQL",
      "AWS"
    ]
  },
  {
    name: "Sorting Algorithm Visualizer",
    description: "A website to visualize various sorting algorithms in action. Created in the gap between graduating BU and starting my first full-time job at John Hancock, to get more experience with React.",
    github: "https://github.com/alexsalmi/Sorting-Algorithms-Visualizer",
    link: "https://sort.asalmi.com",
    skills: [
      "React",
      "Javascript",
      "Material UI",
      "AWS Amplify"
    ]
  },
  {
    name: "Clutter App",
    description: "My Senior Design Project at BU. A React Native mobile app that utilized a Neural Network created by a BU grad student, that rates the level of clutter in a room from 1 to 10 based on images taken through the app. Intended to be used by healthcare professionals to treat hoarding disorder, among other conditions.",
    github: null,
    link: null,
    skills: [
      "React Native",
      "Javascript",
      "Python",
      "Google Firebase"
    ]
  }
];

export { links, urls, aboutContent, resumeContent, projectsContent };