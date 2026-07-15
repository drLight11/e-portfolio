import { Link, NavLink, Outlet } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';

const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);

const Layout = () => {
  useFadeIn();

  return (
  <>
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          Portfolio
        </Link>
        <nav className="nav">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/curriculum" className={navLinkClass}>
            Curriculum
          </NavLink>
          <NavLink to="/contatti" className={navLinkClass}>
            Contatti
          </NavLink>
        </nav>
      </div>
    </header>

    <Outlet />

    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; <span>{new Date().getFullYear()}</span> — Tutti i diritti riservati.
        </p>
        <p>Logistica, Controllo Qualità &amp; Gestione Operativa</p>
      </div>
    </footer>
  </>
  );
};

export default Layout;
