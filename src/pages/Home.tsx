import { Link } from "react-router-dom";
import useDocumentTitle from "../utils/useDocumentTitle";
import useMeta, { MetaName } from "../utils/useMeta";

export const Home = () => {
  useDocumentTitle("Home");
  useMeta(
    MetaName.DESCRIPTION,
    `The official HarryPotterSpells minecraft plugin site. HarryPotterSpells is the ultimate Harry Potter plugin.
    Whether you run a Harry Potter server, want to add magic to an RP server, or just an admin looking for a bit of fun,
    this plugin is for you!`
  );

  return (
    <>
      <div className="center">
        <img src="/banner.png" alt="HarryPotterSpells banner" />
      </div>
      <br />
      <p>
        HarryPotterSpells is a Bukkit plugin designed to add magic and fun to any server, HarryPotter-related or not.
        Whether you run a full-fledged Harry Potter server (or plan to), want to add magic to a role-playing server, or
        are just an admin looking for a bit of fun, this plugin is for you!
      </p>
      <p>
        HarryPotterSpells prides itself on being configurable and extensible. Many options are configurable, spells can
        be added and removed, and extensions can be created by anyone. HarryPotterSpells is the ultimate magic plugin.
      </p>
      <p>
        The plugin is currently in the alpha phase, meaning that it is still in its infancy. The development team is
        hard at work, striving to add features, fix bugs, and optimize everything. However, we will release regular
        alpha builds. See the <Link to="/downloads">Downloads page</Link> for more information.
      </p>

      <div className="img-container">
        <a href="https://bstats.org/plugin/bukkit/HarryPotterSpells/2858">
          <img src="https://bstats.org/signatures/bukkit/HarryPotterSpells.svg" alt="HarryPotterSpells usage statistics" />
        </a>
      </div>
    </>
  );
};
