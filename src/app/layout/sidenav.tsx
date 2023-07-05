import { Link } from 'react-router-dom';
import { links } from '../../assets/content';
import '../../styles/layout/sidenav.css';

type Props = {
  currentPath: string,
  toggle: Function,
}

/**
 * Sidenav component, only used when in mobile view
 */
const SideNav = ({ currentPath, toggle }: Props) => {
  return (
    <div className="sidenav-root" id="sidenav-root">
      {links.map(item => {
        return (
          <Link className="sidenav-link" id={"sidenav-link-" + item.name} to={item.link} onClick={() => toggle()} key={item.link}>
            <p className={item.link === currentPath ? "sidenav-text-selected" : "sidenav-text"}>
              {item.name}
            </p>
          </Link>
        )
      })}
    </div >
  );
};

export default SideNav;