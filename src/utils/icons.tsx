import { SiReact, SiJavascript, SiNodedotjs, SiRedux, SiTypescript, SiSpringboot, SiApachemaven, SiMui, SiFirebase, SiPython, SiDotnet, SiAwsamplify } from 'react-icons/si';
import { FaJava, FaAws, FaDatabase } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io';

// Get the icon corresponding to the different technologies displayed throughout the website
const getSkillIcon = (skill: string): JSX.Element | string => {
  switch (skill) {
    case "React":
      return <SiReact title={skill} />;
    case "Javascript":
      return <SiJavascript title={skill} />;
    case "NodeJS":
      return <SiNodedotjs title={skill} />;
    case "Redux":
      return <SiRedux title={skill} />;
    case "Typescript":
      return <SiTypescript title={skill} />;
    case "Java":
      return <FaJava title={skill} />;
    case "Spring Boot":
      return <SiSpringboot title={skill} />;
    case "Maven":
      return <SiApachemaven title={skill} />;
    case "Material UI":
      return <SiMui title={skill} />;
    case "React Native":
      return <TbBrandReactNative title={skill} />;
    case "Google Firebase":
      return <SiFirebase title={skill} />;
    case "SQL":
      return <FaDatabase title={skill} />;
    case "MySQL":
      return <GrMysql title={skill} />;
    case "Python":
      return <SiPython title={skill} />;
    case "HTML":
      return <IoLogoHtml5 title={skill} />;
    case "CSS":
      return <IoLogoCss3 title={skill} />;
    case "AWS":
      return <FaAws title={skill} />;
    case "AWS Amplify":
      return <SiAwsamplify title={skill} />;
    case ".NET":
      return <SiDotnet title={skill} />;
    default:
      return skill;
  }
}

export default getSkillIcon;