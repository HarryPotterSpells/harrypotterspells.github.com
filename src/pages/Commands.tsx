import { AdRow } from "../components/Ads";

export const Commands = () => {
  return (
    <>
      <h2 id="commands-permissions">Commands and Permissions</h2>
      <br />
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Command</th>
            <th scope="col">Alias</th>
            <th scope="col">Function</th>
            <th scope="col">Permission</th>
            <th scope="col">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>/harrypotterspells</td>
            <td>/hps</td>
            <td>Main plugin command, used to reload plugin and for help</td>
            <td>harrypotterspells.harrypotterspells</td>
            <td>op</td>
          </tr>
          <tr>
            <td>/wand</td>
            <td> - </td>
            <td>Gives the sender a wand</td>
            <td>harrypotterspells.wand</td>
            <td>op</td>
          </tr>
          <tr>
            <td>/teach &lt;spell&gt; [player]</td>
            <td> - </td>
            <td>Teaches the specified spell</td>
            <td>harrypotterspells.teach</td>
            <td>op</td>
          </tr>
          <tr>
            <td>/unteach &lt;spell&gt; [player]</td>
            <td> - </td>
            <td>Unteaches the specified spell (the target player will "forget")</td>
            <td>harrypotterspells.unteach</td>
            <td>op</td>
          </tr>
          <tr>
            <td>/spelllist [player]</td>
            <td>/sl</td>
            <td>List all available spells, or all known spells of the specified player</td>
            <td>harrypotterspells.spelllist</td>
            <td>true</td>
          </tr>
          <tr>
            <td>/spellinfo &lt;spell&gt;</td>
            <td>/si</td>
            <td>Shows the description of the specified spell</td>
            <td>harrypotterspells.spellinfo</td>
            <td>true</td>
          </tr>
          <tr>
            <td>/spellswitch &lt;spell&gt;</td>
            <td>/ss</td>
            <td>Changes the current spell to the specified spell</td>
            <td>harrypotterspells.spellswitch</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
      <div className="row mb-4">
        <div className="col-8">
          <p>Notes:</p>
          <ul>
            <li>Argument Syntax: &lt; &gt; brackets are manditory and [ ] brackets are optional</li>
            <li>Default column represents the default permissions granted:</li>
            <ul>
              <li>op - Only server ops have this permission</li>
              <li>true - Every player should have this permission</li>
              <li>false - No one has this permission</li>
            </ul>
            <li>"All" or "*" can be used for spell to denote all spells</li>
            <li>"Me" (or nothing) can be used for [player] to specify yourself</li>
          </ul>
        </div>
        <div className="col-4">
          <div className="card card-body bg-light">
            <p>
              <strong>Remember that all permission nodes are cAsE-sEnSiTiVe!</strong>
            </p>
          </div>
        </div>
      </div>

      <h3 id="other-permissions">Other Permissions</h3>
      <br />
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Permission</th>
            <th scope="col">Function</th>
            <th scope="col">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>harrypotterspells.cast</td>
            <td>Allows the player to cast all spells they know</td>
            <td>op</td>
          </tr>
          <tr>
            <td>harrypotterspells.spell.&lt;spell&gt;</td>
            <td>
              Allows the casting, teaching and spellswitching of the &lt;spell&gt;
              <br />
              <strong>Note: (By default everyone has access to all spells)</strong>
            </td>
            <td>true</td>
          </tr>
          <tr>
            <td>harrypotterspells.nocooldown.&lt;spell&gt;</td>
            <td>Bypass the cooldown of &lt;spell&gt;</td>
            <td>false</td>
          </tr>
          <tr>
            <td>harrypotterspells.nocooldown or harrypotterspells.nocooldown.*</td>
            <td>Bypass ALL spell cooldowns</td>
            <td>op</td>
          </tr>
          <tr>
            <td>harrypotterspells.teach.known</td>
            <td>Restricts player to teaching only spells they know</td>
            <td>false</td>
          </tr>
          <tr>
            <td>harrypotterspells.wand.others</td>
            <td>Allows the player to use /wand to give other players wands</td>
            <td>op</td>
          </tr>
          <tr>
            <td>harrypotterspells.list.others</td>
            <td>Allows the player to use /spelllist to check another players known spells</td>
            <td>op</td>
          </tr>
        </tbody>
      </table>
      <div className="row mb-4">
        <div className="col-12">
          <p>Notes:</p>
          <ul>
            <li>
              Spells like "Homenum Revelio" would have the permission node of harrypotterspells.spell.homenum-revelio
            </li>
            <li>
              All the permission defaults listed here are correct as long as the permission plugin you use does not
              modify Spigot/Bukkits default permission handling system.
            </li>
            <li>
              Permission negation (- -permission.node) is supported as long as the permission plugin you use supports it
            </li>
            <ul>
              <li>Example: - -harrypotterspells.spell.arrow to prevent player from casting/switching/teaching spell</li>
            </ul>
          </ul>
        </div>
      </div>

      <AdRow />
    </>
  );
};
