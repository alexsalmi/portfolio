import { projectsContent } from '../assets/content';
import { SiGithub } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi'
import getSkillIcon from '../utils/icons';
import '../styles/projects.css';

/**
 * Projects page
 */
const Projects = () => {
  window.scrollTo(0, 0);

  const navigate = (url: string | null) => {
    if (url !== null)
      window.open(url, "_blank");
  }

  return (
    <div className="projects-root">
      <p className='projects-header'>
        Projects
      </p>
      <div className='projects-section'>
        {projectsContent.map(project =>
          <div className='project-container'>
            <div className='project-top-row'>
              <p className='project-name'>
                {project.name}
              </p>
              <div className='project-links'>
                {project.github &&
                  <div className='project-link-icon' onClick={() => { navigate(project.github) }}>
                    <SiGithub />
                  </div>
                }
                {project.link &&
                  <div className='project-link-icon' onClick={() => { navigate(project.link) }}>
                    <HiOutlineExternalLink />
                  </div>
                }
              </div>
            </div>
            <p className='project-description'>
              {project.description}
            </p>
            <div className='project-skills'>
              {project.skills.map(skill =>
                <div className='project-skill-icon'>
                  {getSkillIcon(skill)}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default Projects;