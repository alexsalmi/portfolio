import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../../styles/layout/layout.css'

/**
 * Root layout component, organizing header, footer, and body
 */
const Layout = () => {
  return (
    <div className="root">
      <div className="header-layout">
        <Header />
      </div>
      <div className="body-layout">
        <Outlet />
      </div>
      <div className="footer-layout">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;