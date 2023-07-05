import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { urls } from '../../assets/content';
import '../../styles/layout/footer.css';

/**
 * Footer component
 */
const Footer = () => {
  return (
    <div className="footer-root">
      <p className="footer-text">© {new Date().getFullYear()} Alexander Salmi</p>
      <div className="footer-links">
        <a className="social-link" href={urls.github} target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub />
        </a>
        <a className="social-link" href={urls.linkedin} target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;