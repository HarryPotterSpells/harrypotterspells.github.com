import { Link } from "react-router-dom";
import { AdRow } from "../components/Ads";
import { Spell, SpellProps } from "../components/Spell";
import useDocumentTitle from "../utils/useDocumentTitle";
import spells from "../data/spells.json";
import otherSpells from "../data/otherSpells.json";
import useMeta, { MetaName } from "../utils/useMeta";

export const Spells = () => {
  useDocumentTitle("Spells");
  useMeta(
    MetaName.DESCRIPTION,
    "Discover the list of over forty spells available within HarryPotterSpells. Find details about each spell's function, target, configurability, particle effects and cooldowns."
  );

  const renderSpell = (spell: SpellProps) => <Spell key={spell.name} {...spell} />;

  return (
    <>
      <h2 id="spells">Spells</h2>
      <p>
        HarryPotterSpells has over forty spells, and the development team is constantly adding more. Currently, there
        are 37 spells from Harry Potter, and 4 spells that aren't. If you'd like to see a spell added, head over the{" "}
        <Link to="/contact">Contact page</Link>, or, if you're familiar with Java, consider making the spell yourself.
      </p>
      <br />
      <p>
        As of <strong>HarryPotterSpells v1.1.1</strong> spells now have permission nodes of
        harrypotterspells.spell.&lt;spell&gt;
        <br />
        Spells like "Homenum Revelio" would have the permission node of "harrypotterspells.spell.homenum-revelio"{" "}
        <strong>NOTE: These are CaSe SenSiTive and must be all in lower case</strong>
      </p>
      <br />
      <p>
        This page gives information on all of the spells currently included in HarryPotterSpells. All of the listed
        spells have five pieces of information: Function, target, configurability, effect, and default cooldown:
      </p>
      <ul>
        <li>
          <strong>Function:</strong> Describes what the spell does
        </li>
        <li>
          <strong>Target:</strong> Gives applicable targets (what the spell can be cast on)
        </li>
        <ul>
          <li>Living Entity = Players and mobs</li>
          <li>Caster = Player who casted the spell</li>
          <li>Block = Block that the caster is looking at</li>
        </ul>
        <li>
          <strong>Configurability:</strong> Describes aspects of the spell can be changed in the config.yml
        </li>
        <li>
          <strong>Effect:</strong> The trail of the spell
        </li>
        <li>
          <strong>Default Cooldown:</strong> Gives the out-of-the-box cooldown of the spell, which can be changed in the
          config.yml
        </li>
      </ul>
      <p>
        For more information about configuring the plugin and changing cooldowns, see the{" "}
        <Link to="/config">Configuration page</Link>.
      </p>
      <p>
        {/* If you'd like to see this list in a tabular format, scroll to the <a href="#spell-table">bottom</a> of this page.*/}
      </p>
      <br />
      <div className="row">
        <div className="col-xs-12 col-md-6">{spells.filter((_, index) => index % 2 === 0).map(renderSpell)}</div>
        <div className="col-xs-12 col-md-6">{spells.filter((_, index) => index % 2 !== 0).map(renderSpell)}</div>
      </div>
      <AdRow />
      {/* /div className="row" */}
      <br />
      <h2 id="non-hp-spells">Non-Harry Potter Spells</h2>
      <p>These will eventually be moved into an extension, but for now they are included on this page.</p>
      <div className="row">
        <div className="col-xs-12 col-md-6">{otherSpells.filter((_, index) => index % 2 === 0).map(renderSpell)}</div>
        <div className="col-xs-12 col-md-6">{otherSpells.filter((_, index) => index % 2 !== 0).map(renderSpell)}</div>
      </div>

      <AdRow />

      {/* <h2>Coming up</h2>
        <p>These are spells that are in development builds but not in any official builds (yet).</p>
        
        <div className="row">
            <div className="span6">
            </div>
        
            <div className="span6">
            </div> */}
    </>
  );
};
