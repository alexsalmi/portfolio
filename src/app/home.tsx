import { useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import About from './about';
import avatar from '../assets/avatar.png';
import '../styles/home.css';

/**
 * Home page
 */
const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.pathname === "/about") {
      aboutRef.current!.scrollIntoView({ behavior: "smooth" });
    }
    else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  });

  const scrollToAbout = () => {
    aboutRef.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-root">
      <div className="home-container">
        <div className="content-container">
          <div className="title-container">
            <img src={avatar} alt="My Face" className="title-image" />
            <p className="title-name">Alex Salmi</p>
          </div>
          <p className="subtitle-text">Full-stack software engineer based in Brooklyn, NY. Take a look around to find out more about me and what I do!</p>
          <div className="buttons-container">
            <div className="arrow-button" onClick={scrollToAbout}>
              <div className="arrow-icon-top">
                <IoIosArrowDown />
              </div>
              <div className="arrow-icon-bottom">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container" ref={aboutRef}>
        <About />
      </div>
    </div>
  );
};

export default Home;