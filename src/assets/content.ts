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
  professional: "I am a full-stack engineer with years of experience creating scalable websites for companies of all sizes. I specialize in front-end/back-end work to deliver web apps specific to any project's requirements. I have experience in UI/UX design, API work, database management, cross-platform mobile app development, and architectural design.",
  personal: "Outside of work, I love reading, running, basketball, comic books, video games, travel or working on side projects. I spent most of my life living in Sweden, before making use of my dual-citizenship and moving to Boston for college in 2015, where I have lived since.",
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
      title: "Full-Stack Software Engineer",
      company: "John Hancock",
      startDate: "June 2020",
      endDate: "Present",
      description: "My first job after college, where I joined John Hancock's Software Engineering Development Program. The program included two year-long rotations, the first with the notification systems team, and the second with the security team. After graduating from the program, I elected to continue working with the security team.",
      details: [
        "Lead development of the Notification Portal UI using ReactJS, including tests in Jest and Cypress",
        "Designed and developed the architecture and flow of the new Voice Notification APIs as well as the system's database schema",
        "Assisted with the creation and maintenance of several notification and document management APIs in both Java Spring Boot and .Net Core, including writing unit tests",
        "Redesigned several ReactJS pages for the login and profile management services",
        "Contributed to the security APIs, including functions such as login, registration, change password, etc."
      ]
    },
    {
      title: "Developer Intern",
      company: "Third Eye Health",
      startDate: "June 2019",
      endDate: "March 2020",
      description: "A summer internship with telehealth startup Third Eye Health, which extended into my senior year of college.",
      details: [
        "Performed full stack development on internal .NET Core dashboard for licensed physicians",
        "Maintained Microsoft Server SQL server, including HIPPA compliant patient information",
        "Designed and developed several front-end reports for patient records, doctor activity, etc."
      ]
    },
    {
      title: "Software Developer",
      company: "Salmi Consulting",
      startDate: "January 2017",
      endDate: "September 2017",
      description: "My first professional software engineering experience during a year off working on a couple of projects for my father's consulatant company.",
      details: [
        "Redesigned Salmi Consulting's website from the ground up using ASP.NET MVC with Razor pages",
        "Developed easy to use web-based medical tests for ADHD patients using ReactJS",
        "Maintained and contributed to the .NET Framework backend API for the medical test website"
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