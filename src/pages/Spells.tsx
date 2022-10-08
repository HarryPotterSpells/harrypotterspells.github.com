import { Link } from "react-router-dom";
import { AdRow } from "../components/Ads";
import useDocumentTitle from "../utils/useDocumentTitle";

export const Spells = () => {
  useDocumentTitle("Spells");

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
        <div className="col-xs-12 col-md-6">
          <h3>Accio</h3>
          <p>
            <strong>Function:</strong> Pulls nearby item drops towards the caster
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> Radius (how close items need to be)
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 5s
            <br />
          </p>
          <h3>Aguamenti</h3>
          <p>
            <strong>Function:</strong> Places a block of water on the target block
            <br />
            <strong>Target:</strong> Block
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> Water Drip
            <br />
            <strong>Default Cooldown:</strong> 90s
            <br />
          </p>
          <h3>Alarte Ascendare</h3>
          <p>
            <strong>Function:</strong> Propels the target upwards
            <br />
            <strong>Target:</strong> Living Entity
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 45s
            <br />
          </p>
          <h3>Alohomora</h3>
          <p>
            <strong>Function:</strong> Opens up iron doors and doors locked by Colloportus
            <br />
            <strong>Target:</strong> Block
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> Spell Instant
            <br />
            <strong>Default Cooldown:</strong> 50s
            <br />
          </p>
          <h3>Aparecium</h3>
          <p>
            <strong>Function:</strong> Makes nearby players visible
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> Radius
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 300s
            <br />
          </p>
          <h3>Arania Exumai</h3>
          <p>
            <strong>Function:</strong> Damages and knocks back spiders
            <br />
            <strong>Target:</strong> Spider
            <br />
            <strong>Configurability:</strong> Knockback
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 90s
            <br />
          </p>
          <h3>Avada Kedavra</h3>
          <p>
            <strong>Function:</strong> Instantly kills the target
            <br />
            <strong>Target:</strong> Living Entity
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None (coming soon: green particles)
            <br />
            <strong>Default Cooldown:</strong> 300s
            <br />
          </p>
          <h3>Avis</h3>
          <p>
            <strong>Function:</strong> Shoots a flock of birds (chickens) from your wand
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> Number of chickens
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 300s
            <br />
          </p>
          <h3>Bauleo</h3>
          <p>
            <strong>Function:</strong> Absorbs all nearby items into a nearby chest
            <br />
            <strong>Target:</strong> None
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 10s
            <br />
          </p>
          <h3>Bubble-head Charm</h3>
          <p>
            <strong>Function:</strong> Refills the target's air bar to full
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 45s
            <br />
          </p>
          <h3>Colloportus</h3>
          <p>
            <strong>Function:</strong> Locks single/double doors
            <br />
            <strong>Target:</strong> Block
            <br />
            <strong>Configurability:</strong> Lock time
            <br />
            <strong>Effect:</strong> Instant
            <br />
            <strong>Default Cooldown:</strong> 60s
            <br />
          </p>
          <h3>Confringo</h3>
          <p>
            <strong>Function:</strong> Launches an explosive fireball from your wand
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 45s
            <br />
          </p>
          <h3>Confundo</h3>
          <p>
            <strong>Function:</strong> Applies the confusion effect to the target
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 180s
            <br />
          </p>
          <h3>Crucio</h3>
          <p>
            <strong>Function:</strong> Tortures the target
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 300s
            <br />
          </p>
          <h3>Deprimo</h3>
          <p>
            <strong>Function:</strong> Applies the slowness effect to the target and forces the target to sneak
            <br />
            <strong>Target:</strong> Living Entity (only players are forced to sneak)
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 180s
            <br />
          </p>
          <h3>Duro</h3>
          <p>
            <strong>Function:</strong> Turns a block into stone
            <br />
            <strong>Target:</strong> Block
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> Gray redstone dust
            <br />
            <strong>Default Cooldown:</strong> 90s
            <br />
          </p>
          <h3>Episkey</h3>
          <p>
            <strong>Function:</strong> Applies the regeneration effect to the target
            <br />
            <strong>Target:</strong> Living Entity
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> None (coming soon: hearts?)
            <br />
            <strong>Default Cooldown:</strong> 60s
            <br />
          </p>
          <h3>Evanesco</h3>
          <p>
            <strong>Function:</strong> Makes the caster invisible
            <br />
            <strong>Target:</strong> Caster
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> Explosion
            <br />
            <strong>Default Cooldown:</strong> 45s
            <br />
          </p>
          <h3>Expelliarmus</h3>
          <p>
            <strong>Function:</strong> Disarms the target (removes in-hand wand and drops it)
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> Disarm swords and bows as well as wands
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 120s
            <br />
          </p>
          <h3>Finite Incantatem</h3>
          <p>
            <strong>Function:</strong> Removes all potion effects and unpetrifies the target (undoes Petrificus Totalus)
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> Explosion
            <br />
            <strong>Default Cooldown:</strong> 45s
            <br />
          </p>
          <h3>Flame-freezing Charm</h3>
          <p>
            <strong>Function:</strong> Gives the caster the fire resistance potion effect
            <br />
            <strong>Target:</strong> None
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 300s
            <br />
          </p>
          <h3>Glacius</h3>
          <p>
            <strong>Function:</strong> Traps the target in a case of ice
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None (coming soon: light-blue particles)
            <br />
            <strong>Default Cooldown:</strong> 120s
            <br />
          </p>
        </div>
        <div className="col-xs-12 col-md-6">
          <h3>Homenum Revelio</h3>
          <p>
            <strong>Function:</strong> Reveals players near the caster
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> Firework color, Area where players are revealed
            <br />
            <strong>Effect:</strong> Firework explosion (default: yellow)
            <br />
            <strong>Default Cooldown:</strong> 600s
            <br />
          </p>
          <h3>Incendio</h3>
          <p>
            <strong>Function:</strong> Sets the target on fire
            <br />
            <strong>Target:</strong> Living Entity and Block
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> Mobspawne Flames
            <br />
            <strong>Default Cooldown:</strong> 45s
            <br />
          </p>
          <h3>Legilimens</h3>
          <p>
            <strong>Function:</strong> Shows the target player's inventory
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 180s
            <br />
          </p>
          <h3>Magna Tonitrus</h3>
          <p>
            <strong>Function:</strong> Calls down a bolt of lightning
            <br />
            <strong>Target:</strong> Block
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 60s
            <br />
          </p>
          <h3>Multicorfors</h3>
          <p>
            <strong>Function:</strong> Changes the dye color of the target
            <br />
            <strong>Target:</strong> Sheep or Wool block
            <br />
            <strong>Configurability:</strong> Explosion effect
            <br />
            <strong>Effect:</strong> Explosion
            <br />
            <strong>Default Cooldown:</strong> 30s
            <br />
          </p>
          <h3>Obscuro</h3>
          <p>
            <strong>Function:</strong> Applies the blindness effect to the target
            <br />
            <strong>Target:</strong> Living Entity (erases targeted player if mob)
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 90s
            <br />
          </p>
          <h3>Orchideous</h3>
          <p>
            <strong>Function:</strong> Plants a rose on the target
            <br />
            <strong>Target:</strong> Block
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 45s
            <br />
          </p>
          <h3>Petrificus Totalus</h3>
          <p>
            <strong>Function:</strong> Petrifies the target, cancelling movement
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 300s
            <br />
          </p>
          <h3>Point Me</h3>
          <p>
            <strong>Function:</strong> Sets the player's view to the north
            <br />
            <strong>Target:</strong> None
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 0s
            <br />
          </p>
          <h3>Reducto</h3>
          <p>
            <strong>Function:</strong> Creates an explosion at the target
            <br />
            <strong>Target:</strong> Block
            <br />
            <strong>Configurability:</strong> Replace blocks that have been destroyed
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 300s
            <br />
          </p>
          <h3>Refilling Charm</h3>
          <p>
            <strong>Function:</strong> Refills bowls with mushroom soup, and buckets with water or milk
            <br />
            <strong>Target:</strong> None
            <br />
            <strong>Configurability:</strong> Bucket refill (water or milk)
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 120s
            <br />
          </p>
          <h3>Reparo</h3>
          <p>
            <strong>Function:</strong> Repairs all items and equipped armor in the caster's inventory
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> Explosion
            <br />
            <strong>Default Cooldown:</strong> 14,400s (4hr)
            <br />
          </p>
          <h3>Sectumsempra</h3>
          <p>
            <strong>Function:</strong> Slowly damages the target
            <br />
            <strong>Target:</strong> Living Entity
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 300s
            <br />
          </p>
          <h3>Silencio</h3>
          <p>
            <strong>Function:</strong> Mutes the target
            <br />
            <strong>Target:</strong> Player
            <br />
            <strong>Configurability:</strong> Duration
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 90s
            <br />
          </p>
          <h3>Sonorus</h3>
          <p>
            <strong>Function:</strong> Broadcasts the caster's next message (global chat)
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> Explosion
            <br />
            <strong>Default Cooldown:</strong> 15s
            <br />
          </p>
          <h3>Spongify</h3>
          <p>
            <strong>Function:</strong> Cancels fall damage
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 60s
            <br />
          </p>
          <h3>Stupefy</h3>
          <p>
            <strong>Function:</strong> Confuses and weakens the target
            <br />
            <strong>Target:</strong> Living Entities
            <br />
            <strong>Configurability:</strong> Vertical & horizontal knockbacks, damage, confusion & weakness durations
            <br />
            <strong>Effect:</strong> Red firework
            <br />
            <strong>Default Cooldown:</strong> 120s
            <br />
          </p>
          <h3>Wingardium Leviosa</h3>
          <p>
            <strong>Function:</strong> Allows temporary flight for the caster
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> Duration, canceling fall damage
            <br />
            <strong>Effect:</strong> Explosion
            <br />
            <strong>Default Cooldown:</strong> 180s
            <br />
          </p>
        </div>
      </div>
      <AdRow />
      {/* /div className="row" */}
      <br />
      <h2 id="non-hp-spells">Non-Harry Potter Spells</h2>
      <p>These will eventually be moved into an extension, but for now they are included on this page.</p>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <h3>Arrow</h3>
          <p>
            <strong>Function:</strong> Shoots an arrow out of the wand
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> Arrow velocity
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 90s
            <br />
          </p>
          <h3>Enderchest</h3>
          <p>
            <strong>Function:</strong> Opens the caster's enderchest
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 0s
            <br />
          </p>
          <h3>Time</h3>
          <p>
            <strong>Function:</strong> Toggles day or night
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> Striking lightning
            <br />
            <strong>Effect:</strong> Lightning
            <br />
            <strong>Default Cooldown:</strong> 600s
            <br />
          </p>
          <h3>Tree</h3>
          <p>
            <strong>Function:</strong> Spawns a tree on the target
            <br />
            <strong>Target:</strong> Block
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> Explosion
            <br />
            <strong>Default Cooldown:</strong> 105s
            <br />
          </p>
        </div>
        <div className="col-xs-12 col-md-6">
          <h3>Weather</h3>
          <p>
            <strong>Function:</strong> Toggles the weather
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> Time it takes for spell to take effect after casting
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 600s
            <br />
          </p>
          <h3>Workbench</h3>
          <p>
            <strong>Function:</strong> Opens a crafting table
            <br />
            <strong>Target:</strong> Nothing
            <br />
            <strong>Configurability:</strong> None
            <br />
            <strong>Effect:</strong> None
            <br />
            <strong>Default Cooldown:</strong> 20s
            <br />
          </p>
        </div>
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
