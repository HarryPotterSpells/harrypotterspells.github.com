import { Link } from "react-router-dom";
import { AdRow } from "../components/Ads";
import { EXTERNAL_LINKS } from "../Constants";

export const Downloads = () => {
  return (
    <>
      <h2>Downloads</h2>
      <p>
        All officially-released builds of HarryPotterSpells can be downloaded from BukkitDev. These builds have been
        thoroughly tested and there shouldn't be any major bugs. If you do find a bug, simply report it by visiting the{" "}
        <Link to="/contact">Contact page</Link> and we will fix it ASAP.
      </p>
      <div className="d-block text-center pt-3 pb-4">
        <a href={`${EXTERNAL_LINKS.BUKKIT}/files`}>
          <img className="img-fluid" src="/BukkitDev.png" alt="BukkitDev Logo" width="500" />
        </a>
      </div>
      <hr />
      <p>
        Development builds of the plugin can be downloaded from our Jenkins. These builds include all of the latest
        features but are not guaranteed stability. If you wish to use these on a production server (not recommended),
        please thoroughly test on a local server before using. The documentation will not include all of the newest
        features until we promote and release a build.
      </p>
      <div className="d-block text-center pt-3 pb-4">
        <a href="http://lincraft.servegame.com:21398/job/HarryPotterSpells/">
          <img className="img-fluid" src="/Jenkins.png" alt="Jenkins Logo" width="500" />
        </a>
      </div>
      <hr />
      <p>
        Make sure to check out the <Link to="/config">Configuration page</Link> so you can set up HarryPotterSpells as
        painlessly as possibly!
      </p>

      <AdRow />
    </>
  );
};
