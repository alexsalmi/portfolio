import { aboutContent } from '../assets/content';
import getSkillIcon from '../utils/icons';
import '../styles/about.css';

/**
 * About page
 */
const About = () => {
  const { personal, professional, skills } = aboutContent;

  return (
    <div className="about-root">
      <p className="about-title">About Me</p>

      <div className="about-content">
        <p className="content-label">- Professional</p>
        <p className="content-paragraph">
          {professional}
        </p>
        <div className="personal-container">
          <p className="content-label">Personal -</p>
          <p className="content-paragraph">
            {personal}
          </p>
        </div>
        <p className="content-label">- Skills</p>
        <div className='about-skills'>
          {skills.map(skill =>
            <div className='about-skill'>
              <div className='about-skill-icon'>
                {getSkillIcon(skill)}
              </div>
              <div className='about-skill-label'>
                {skill}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;