import { Link } from "react-router-dom";
import { EXTERNAL_LINKS } from "../Constants";
import { ExternalLink } from "../components/ExternalLink";

export const Footer = () => {
  return (
    <footer className="text-muted bg-light">
      <div className="container">
        <p className="float-left">Hosted by Jacklin213 with Github pages</p>
        <p className="float-right">
          <Link to="/downloads">Download</Link>&nbsp;|&nbsp;
          <Link to="/contact">Contact</Link>&nbsp;|&nbsp;
          <ExternalLink url={EXTERNAL_LINKS.PAYPAL}>Donate</ExternalLink>
        </p>
      </div>
    </footer>
  );
};
