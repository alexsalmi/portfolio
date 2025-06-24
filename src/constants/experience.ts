import rockstarLogo from "../assets/rockstar.svg";
import jhLogo from "../assets/jh.jpg";
import buLogo from "../assets/bu.png";

export const EXPERIENCE = {
  work: [
    {
      role: "Software Engineer",
      company: "Rockstar Games - Technical Art",
      location: "New York, NY (On Site)",
      dates: "October 2024 - Present",
      image: rockstarLogo,
      points: [],
    },
    {
      role: "Senior Full Stack Software Engineer",
      company: "John Hancock - Identity & Access Management",
      location: "Brooklyn, NY (Remote)",
      dates: "March 2023 - September 2024",
      image: jhLogo,
      points: [
        "Contributed to architectural design for a new Login and MFA module built in React and Express.js, now used by 3.5 million users, focusing on performance and scalability to accommodate continued growth",
        "Lead the development of the new Login and MFA module, including delegating work to junior engineers",
        "Mentored several junior engineers new to the team, assisting them with technical questions regarding development, debugging, as well as the intricacies of the team's existing systems and applications",
        "Introduced test driven development to the team, adding requirements for unit tests to be included as part of all user stories as well as minimum code coverage requirements for all of the team's applications",
      ],
    },
    {
      role: "Full Stack Software Engineer",
      company: "John Hancock - Identity & Access Management",
      location: "Brooklyn, NY (Remote)",
      dates: "June 2022 - March 2023",
      image: jhLogo,
      points: [
        "Engineered a new set of Stateful APIs in Express.js, to enable account unlock and reset password functionality for the John Hancock Chatbot, used by over 10,000 customers per month",
        "Revamped the user interface for the profile management pages of several client portals using React, to align with Figma design specifications provided by the Design team",
      ],
    },
    {
      role: "Associate Full Stack Software Engineer",
      company: "John Hancock - Identity & Access Management",
      location: "Boston, MA (Remote)",
      dates: "June 2020 - June 2022",
      image: jhLogo,
      points: [
        "Built a new internal Notification Audit Portal using React, tracking more than 700,000 notification emails and text messages sent to customers and agents per month",
        "Developed new Voice Notification APIs using .NET Core, as well as designing the system's Microsoft SQL Server database schema, now utilized by more than 5,000 customers per month",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. Computer Engineering",
      school: "Boston University, College of Engineering",
      location: "Boston, MA (On Site)",
      dates: "September 2017 - May 2020",
      image: buLogo,
    },
  ],
};
