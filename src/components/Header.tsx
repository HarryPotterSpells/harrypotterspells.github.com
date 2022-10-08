import { NavLink } from "react-router-dom";
import { EXTERNAL_LINKS } from "../Constants";
import { ExternalLink } from "../components/ExternalLink";

export const Header = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? `nav-link active` : `nav-link`);
  const getNavText = (text: string) => {
    return ({ isActive }: { isActive: boolean }) =>
      isActive ? (
        <>
          {`${text} `}
          <span className="sr-only">(current)</span>
        </>
      ) : (
        <>{text}</>
      );
  };

  return (
    <header>
      <nav className="navbar navbar-expand-xl fixed-top navbar-light bg-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            HarryPotterSpells
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className={getNavLinkClass} end>
                  {getNavText("Home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/downloads" className={getNavLinkClass}>
                  {getNavText("Downloads")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/spells" className={getNavLinkClass}>
                  {getNavText("Spells")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/commands" className={getNavLinkClass}>
                  {getNavText("Commands")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/config" className={getNavLinkClass}>
                  {getNavText("Configuration")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={getNavLinkClass}>
                  {getNavText("Contact")}
                </NavLink>
              </li>
              <div className="divider-vertical d-none d-xl-block"></div>
              <div className="dropdown-divider"></div>
              <li className="nav-item">
                <ExternalLink className="nav-link" url={EXTERNAL_LINKS.GITHUB}>
                  GitHub
                </ExternalLink>
              </li>
              <li className="nav-item">
                <ExternalLink className="nav-link" url={EXTERNAL_LINKS.TRELLO}>
                  Trello Board
                </ExternalLink>
              </li>
              <li className="nav-item">
                <ExternalLink className="nav-link" url={EXTERNAL_LINKS.PAYPAL}>
                  Donate
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
