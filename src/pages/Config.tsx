import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdRow } from "../components/Ads";
import useDocumentTitle from "../utils/useDocumentTitle";

const YamlCode = (props: any) => {
  const { children } = props;
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
};

export const Config = () => {
  useDocumentTitle("Config");
  const [config, setConfig] = useState("");
  const [cooldownConfig, setCooldownConfig] = useState("");
  const [spellsConfig, setSpellsConfig] = useState("");

  useEffect(() => {
    if (!config) {
      window
        .fetch("https://raw.githubusercontent.com/HarryPotterSpells/HarryPotterSpells/master/src/config.yml")
        .then((response) => response.text())
        .then((data) => setConfig(data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [config]);

  useEffect(() => {
    if (!cooldownConfig) {
      window
        .fetch("https://raw.githubusercontent.com/HarryPotterSpells/HarryPotterSpells/master/src/cooldown.yml")
        .then((response) => response.text())
        .then((data) => setCooldownConfig(data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cooldownConfig]);

  useEffect(() => {
    if (!spellsConfig) {
      window
        .fetch("https://raw.githubusercontent.com/HarryPotterSpells/HarryPotterSpells/master/src/spells.yml")
        .then((response) => response.text())
        .then((data) => setSpellsConfig(data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [spellsConfig]);

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
          {/*
          // Can render embed with iFrame but styling is a pain
          <iframe
            title="config"
            srcDoc={'<script src="https://pastebin.com/embed_js.php?i=Kn7r0GX5"></script>'}
            style={{ borderWidth: 0 }}
          ></iframe> */}
          <YamlCode>{config}</YamlCode>
        </div>
      </div>

      <AdRow />

      <h3 id="cooldown">cooldown.yml</h3>
      <div className="mt-4 mb-4">
        <div id="cooldown-container">
          <YamlCode>{cooldownConfig}</YamlCode>
        </div>
      </div>

      <AdRow />

      <h3 id="spells">spells.yml</h3>
      <div className="mt-4 mb-4">
        <div id="spells-container">
          <YamlCode>{spellsConfig}</YamlCode>
        </div>
      </div>

      <AdRow />
    </>
  );
};
