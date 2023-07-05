import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import SideNav from './sidenav';
import logo from '../../assets/logo_transparent.png';
import { links } from '../../assets/content';
import '../../styles/layout/header.css';

/**
 * Header component
 */
const Header = () => {
  const [width, setWidth] = useState(0);
  const [currentPath, setCurrentPath] = useState('/');
  const [sideNavVisible, setSideNavVisible] = useState(false);

  useEffect(() => {
    // Keep track of window width to switch between navbar and header navigation
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 900) {
        setSideNavVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);

    // Keep track of which page is being viewed
    const handleClick = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('click', handleClick);

    setCurrentPath(window.location.pathname);
    setWidth(window.innerWidth);
  }, []);

  // If in mobile view, expand/hide the sidenav on click
  const toggleSideNav = () => {
    if (sideNavVisible) {
      links.forEach((item) => {
        document.getElementById("sidenav-link-" + item.name)!.style.height = "0";
      });
      document.getElementById("sidenav-root")!.style.opacity = "0";
      document.getElementById("sidenav-container")!.style.height = "0";
      document.body.style.overflow = "visible";
    }
    else {
      links.forEach((item) => {
        document.getElementById("sidenav-link-" + item.name)!.style.height = "4em";
      });
      document.getElementById("sidenav-root")!.style.opacity = "1";
      document.getElementById("sidenav-container")!.style.height = "100%";
      document.body.style.overflow = "hidden";
    }

    setSideNavVisible(!sideNavVisible);
  };

  return (
    <>
      <div className={sideNavVisible ? "header-root-sidenav" : "header-root"}>
        <div className="logo">
          <Link to="/" className="logo-link" onClick={() => sideNavVisible ? toggleSideNav() : null}>
            <img src={logo} alt="Alex Salmi" className="logo-image" />
            <p className="logo-text">Alex Salmi</p>
          </Link>
        </div>
        <div className="navigation">
          {width > 900 ?
            links.map(item => {
              return (
                <Link className="nav-link" to={item.link} key={item.link}>
                  <p className={item.link === currentPath ? "nav-text-selected" : "nav-text"}>
                    {item.name}
                  </p>
                </Link>
              )
            })
            :
            <button className={sideNavVisible ? "sidenav-button-selected" : "sidenav-button"} onClick={toggleSideNav}>
              {sideNavVisible ?
                <CgClose />
                :
                <CgMenu />
              }
            </button>
          }
        </div>
      </div >
      {width <= 900 ?
        <div className="sidenav-container" id="sidenav-container">
          <SideNav currentPath={currentPath} toggle={toggleSideNav} />
        </div>
        : null
      }
    </>
  );
};

export default Header;