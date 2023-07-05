import { resumeContent, urls } from '../assets/content';
import { saveAs } from 'file-saver';
import { BsDownload } from 'react-icons/bs';
import '../styles/resume.css';

/**
 * Resume page
 */
const Resume = () => {
  const { education, experience } = resumeContent;
  window.scrollTo(0, 0);

  const saveFile = () => {
    saveAs(
      urls.resume,
      "Alex_Salmi_Resume.pdf"
    );
  };

  return (
    <div className="resume-root">
      <div className="resume-header">
        <div></div>
        <p className="resume-title">
          Resume
        </p>
        <button className="download-button" onClick={saveFile}>
          <p className="download-button-text">Download</p>
          <BsDownload />
        </button>
      </div>

      <div className="resume-section-container">
        <div className="resume-section-title">
          Education
        </div>
        <div className="resume-section-content">
          <p className="resume-section-header">
            {education.school}
          </p>
          <p className="resume-section-separated">
            <div>
              {education.degree}
            </div>
            <div>
              {education.startDate} - {education.endDate}
            </div>
          </p>
          {education.notes}
        </div>
      </div>
      <div className="resume-section-container">
        <div className="resume-section-title">
          Work Experience
        </div>
        <div className="resume-section-content">
          {experience.map((item, ind) => {
            return (
              <div className={ind < (experience.length - 1) ? "resume-section-item" : "resume-section-item-last"}>
                <p className="resume-section-header">
                  {item.title}
                </p>
                <p className="resume-section-separated">
                  <div>{item.company}
                  </div>
                  <div>{item.startDate} - {item.endDate}
                  </div>
                </p>
                {item.description}
                <ul>
                  {item.details.map(detail => {
                    return (
                      <li>{detail}</li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  );
};

export default Resume;