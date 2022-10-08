import { Link } from "react-router-dom";
import { AdRow } from "../components/Ads";
import useDocumentTitle from "../utils/useDocumentTitle";

export const Config = () => {
  useDocumentTitle("Config");

  return (
    <>
      <h2>Configuration</h2>
      <p>
        The development team strives to make HarryPotterSpells as configurable as possible. Many of the spells have
        configurable options, and if you'd like to see a specific configurable option added, head over to the{" "}
        <Link to="/contact">Contact page</Link>.
      </p>

      <h3 id="config">config.yml</h3>
      <div className="mt-4 mb-4">
        <div id="config-container">
          <script src="https://pastebin.com/embed_js.php?i=Kn7r0GX5"></script>
        </div>
      </div>

      <AdRow />

      <h3 id="cooldown">cooldown.yml</h3>
      <div className="mt-4 mb-4">
        <div id="cooldown-container">
          <script src="https://pastebin.com/embed_js.php?i=fe3J3Ysm"></script>
        </div>
      </div>

      <AdRow />

      <h3 id="spells">spells.yml</h3>
      <div className="mt-4 mb-4">
        <div id="spells-container">
          <script src="https://pastebin.com/embed_js.php?i=wSBTCJnQ"></script>
        </div>
      </div>

      <AdRow />
    </>
  );
};
