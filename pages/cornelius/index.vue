<template>
  <GamingArticle>
    <h1>Cornelius Debstam</h1>
    <img class="portrait" src="images/cornelius/cornelius.png" width="1600" height="1095"/>
    <section>
      <div class="image" id="ability"><img alt="Ability by Assyifa Art from the Noun Project" src="images/cornelius/ability.svg" /></div>
      <div class="content">
        <h2>Basics</h2>
        <p><strong>Level:</strong> 17th & 12th [<a href="#second-mind">Second Mind</a>]</p>
        <p><strong>Race:</strong> Human</p>
        <p><strong>Class:</strong> Visionary (Shaman) & Psychic [<a href="#second-mind">Second Mind</a>]</p>
        <p><strong>Alignment:</strong> Neutral Good</p>
        <div class="table-wrapper">
          <table>
            <tr>
              <th>Ability</th>
              <th>Score</th>
              <th>Modifier</th>
              <th>Temp Score</th>
              <th>Temp Mod</th>
              <td></td>
            </tr>
            <tr>
              <td>Strength</td>
              <td>7</td>
              <td>-2</td>
              <td></td>
              <td></td>
              <td class="left"><div class="neg2"></div></td>
            </tr>
            <tr>
              <td>Dexterity</td>
              <td>12</td>
              <td>+1</td>
              <td></td>
              <td></td>
              <td class="left"><div class="pos1"></div></td>
            </tr>
            <tr>
              <td>Constitution</td>
              <td>12</td>
              <td>+1</td>
              <td></td>
              <td></td>
              <td class="left"><div class="pos1"></div></td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td>14</td>
              <td>+2</td>
              <td class="enhanced">20*</td>
              <td class="enhanced">+5</td>
              <td class="left"><div class="pos2 aug3"></div></td>
            </tr>
            <tr>
              <td>Wisdom</td>
              <td>25</td>
              <td>+7</td>
              <td class="enhanced">31*</td>
              <td class="enhanced">+10</td>
              <td class="left"><div class="pos7 aug3"></div></td>
            </tr>
            <tr>
              <td>Charisma</td>
              <td>14</td>
              <td>+2</td>
              <td class="enhanced">20*</td>
              <td class="enhanced">+5</td>
              <td class="left"><div class="pos2 aug3"></div></td>
            </tr>
          </table>
        </div>
        <p>* Enhanced with Headband of Mental Superiority</p>
        <p><strong>Initiative:</strong> +17 (+1 Dex, +10 Wis [<a href="#guild">Guild</a>], +4 Improved Initiative, +1 Luckstone, +1 Pale Green Prism)</p>
        <p><strong>Speed:</strong> 70 (+10 Well of Eris [<a href="#campaign">Campaign</a>], +30 <em>Expeditious Retreat</em> [<a href="#permanent">Permanent</a>])</p>
      </div>
    </section>
    <section>
      <div class="image" id="monastery">
        <img alt="Antim Monastery by Eucalyp from the Noun Project" src="images/cornelius/monastery.svg"/>
      </div>
      <div class="content">
        <h2>Character Traits</h2>
        <p id="balanced-education"><strong>Balanced Education (Regional trait):</strong> 1/day use mental ability score in place of physical (Int for Str, Wis for Dex, Cha for Con) on skill check</p>
        <p><strong>Inspired (Faith trait):</strong> 1/day roll twice on skill or ability check and take best roll</p>
      </div>
    </section>
    <section>
      <div class="image" id="human">
        <img alt="Man by Eucalyp from the Noun Project" src="images/cornelius/human.svg"/>
      </div>
      <div class="content">
        <h2>Human Traits</h2>
        <p><strong>Bonus Feat:</strong> <a href="#fast-learner">Fast Learner</a></p>
        <p><strong>Comprehensive Education (alt):</strong> All Knowledge skills are class skills, or +1 trait bonus if already a class skill</p>
      </div>
    </section>
    <section>
      <div class="image" id="books">
        <img alt="Reading by Template from the Noun Project" src="images/cornelius/books.svg"/>
      </div>
      <div class="content">
        <h2>Skills</h2>
        <div class="table-wrapper">
          <table>
            <tr>
              <th>Skill</th>
              <th>Total</th>
              <th>Ranks</th>
              <th>Ability*</th>
              <th>Class</th>
              <th>Misc</th>
            </tr>
            <tr>
              <td>Knowledge (arcana)<sup>1, 6</sup></td>
              <td>46</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Knowledge (dungeoneering)<sup>1, 6</sup></td>
              <td>30</td>
              <td>0</td>
              <td>10</td>
              <td>0</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Knowledge (engineering)<sup>1, 6</sup></td>
              <td>46</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Knowledge (geography)<sup>1, 6</sup></td>
              <td>46</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Knowledge (history)<sup>1, 6</sup></td>
              <td>46</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Knowledge (local)<sup>1, 6</sup></td>
              <td>46</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Knowledge (nature)<sup>1, 6</sup></td>
              <td>46</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Knowledge (nobility)<sup>1, 6</sup></td>
              <td>46</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Knowledge (planes)<sup>1, 6</sup></td>
              <td>46</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Knowledge (religion)<sup>1, 6</sup></td>
              <td>46</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Perception<sup>2, 5</sup></td>
              <td>34</td>
              <td>12</td>
              <td>10</td>
              <td>3</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Sense Motive<sup>2</sup></td>
              <td>27</td>
              <td>12</td>
              <td>10</td>
              <td>3</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Spellcraft<sup>3, 6</sup></td>
              <td>44</td>
              <td>20</td>
              <td>10</td>
              <td>3</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Lore (echo winds)</td>
              <td>32</td>
              <td>17</td>
              <td>10</td>
              <td>3</td>
              <td>2</td>
            </tr>
            <tr>
              <td>(<a href="#spirit-ridden">Spirit Ridden</a> skill)</td>
              <td>~</td>
              <td>17</td>
              <td>~</td>
              <td>3</td>
              <td>2</td>
            </tr>
            <tr>
              <td>(Charisma-based skill)<sup>4</sup></td>
              <td>13</td>
              <td>0</td>
              <td>5</td>
              <td>0</td>
              <td>8</td>
            </tr>
            <tr>
              <td>(Other) [<a href="#improvisation">Improvisation</a>]</td>
              <td>~</td>
              <td>0</td>
              <td>~</td>
              <td>0</td>
              <td>6</td>
            </tr>
          </table>
        </div>
        <p>+1 luck from Luckstone, and +1 competence from Pale Green Prism Ioun Stone on all skill checks</p>
        <p>* Use Wis instead of Int for skills [<a href="#benefit-of-wisdom">Benefit of Wisdom</a>]</p>
        <p><sup>1</sup> Deific Obedience grants +4 sacred bonus on all Knowledge checks, Comprehensive Education grants +1 trait bonus on all Knowledge checks</p>
        <p><sup>2</sup> Ranks gained through <a href="#second-mind">Second Mind</a></p>
        <p><sup>3</sup> Spellcraft max ranks and ranks increased [<a href="#campaign">Campaign</a>, <a href="#guild">Guild</a>]</p>
        <p><sup>4</sup> Circlet of Persuasion grants +3 competence bonus on Cha-based checks</p>
        <p><sup>5</sup> <em>See Beyond</em> grants +5 circumstance bonus on Perception checks, Spirit Animal grants Alertness</p>
        <p><sup>6</sup> +10 competence bonus on Knowledge, Spellcraft, and Linguistics checks from <a href="#perfect-knowledge">Perfect Knowledge</a></p>
        <p>Add Wis mod to physical skill check Wis mod times per day [<a href="#physical-push">Physical Push</a>]</p>
      </div>
    </section>
    <section>
      <div class="image" id="decision"><img alt="decision tree by Trevor Dsouza from the Noun Project" src="images/cornelius/decision.svg"/></div>
      <div class="content">
        <h2>Feats</h2>
        <ul>
          <li id="fast-learner"><strong>Fast Learner:</strong> Gain an extra favored class bonus per level</li>
          <li id="improvisation"><strong>Improvisation:</strong> Make any skill check untrained with a +2 bonus</li>
          <li id="improved-improvisation"><strong>Improved Improvisation:</strong> Untrained skill bonus increases to +4</li>
          <li id="diviners-delving"><strong>Diviner's Delving:</strong> +2 vs divination defenses, get info 1 round faster</li>
          <li id="craft-wondrous"><strong>Craft Wondrous Item:</strong> Create magic items [<a href="#fetish">Fetish</a>]</li>
          <li><strong>Fortune Teller:</strong> Ignore divination component cost &lt; 1,000gp</li>
          <li><strong>Loyal Cohort:</strong> Gain cohort of level -1</li>
          <li><strong>Reach Spell:</strong> Increase range of spell for each +1 level increase</li>
          <li id="zen-archery"><strong>Zen Archery:</strong> Use Wis for ranged attack rolls instead of Dex</li>
          <li id="dreamed-secrets"><strong>Dreamed Secrets:</strong> Learn 2 Wizard spells below highest spell level</li>
          <li id="spirit-ridden"><strong>Spirit Ridden:</strong> 1 hr ritual lets spirit teach you a skill for the day</li>
          <li id="ritual-hex"><strong>Ritual Hex:</strong> Occult ritual teaches 1 hex you don't know for 24 hours</li>
          <li id="spirit-talker"><strong>Spirit Talker:</strong> Ritual teaches you a hex from any spirit</li>
          <li id="deific-obedience"><strong>Deific Obedience:</strong> +4 sacred bonus on Knowledge checks, 1/day Suggestion</li>
          <li><strong>Cartogramancer:</strong> Use Knowledge (geography) to guide teleportation</li>
          <li><strong>Improved Initiative:</strong> Add +4 to initiative</li>
          <li><strong>Quicken Spell:</strong> Cast spell as swift action as if it were 4 levels higher</li>
          <li><strong>Forge Ring:</strong> Craft magic rings</li>
        </ul>
        <p>6 feats gained through <a href="#second-mind">Second Mind</a></p>
      </div>
    </section>
    <section>
      <div class="image" id="light"><img alt="Light by Eucalyp from the Noun Project" src="images/cornelius/light.svg" /></div>
      <div class="content">
        <h2>Attack</h2>
        <p><strong>Ranged Touch:</strong> +23 (+12 Base, +10 Wisdom [<a href="#zen-archery">Zen Archery</a>], +1 competence [<a href="#pale-green-prism">Pale Green Prism]</a>)</p>
        <div class="table-wrapper">
          <table>
            <caption><strong>Range</strong></caption>
            <tbody>
              <tr>
                <td>Close</td>
                <td>70ft</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>280ft</td>
              </tr>
              <tr>
                <td>Long</td>
                <td>1,120ft</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section>
      <div class="image" id="shield"><img alt="Shield by Creaticca Creative Agency from the Noun Project" src="images/cornelius/shield.svg"/></div>
      <div class="content">
        <h2>Defense</h2>
        <div class="table-wrapper">
          <table>
            <tr>
              <th>Armor Class</th>
              <th>Base</th>
              <th>Armor</th>
              <th>Shield</th>
              <th>Natural</th>
              <th>Dex</th>
              <th>Wis<sup>1</sup></th>
              <th>Deflection</th>
            </tr>
            <tr>
              <td>26 (normal)</td>
              <td>10</td>
              <td>4</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>10</td>
              <td>1</td>
            </tr>
            <tr>
              <td class="enhanced">46*</td>
              <td>10</td>
              <td>10</td>
              <td class="enhanced">4</td>
              <td class="enhanced">5</td>
              <td class="enhanced">3</td>
              <td>10</td>
              <td class="enhanced">4</td>
            </tr>
          </table>
        </div>
        <p>* with Air Barrier Hex, <em>Barkskin</em>, <em>Cat's Grace</em>, <em>Shield</em>, and <em>Shield of Faith</em></p>
        <div class="table-wrapper">
          <table>
            <tr>
              <th>Saving Throws<sup>4</sup></th>
              <th>Total</th>
              <th>Base</th>
              <th>Ability</th>
              <th>Resistance</th>
              <th>Misc<sup>2, 3</sup></th>
            </tr>
            <tr>
              <td>Fortitude</td>
              <td>13</td>
              <td>5</td>
              <td>1</td>
              <td>5</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Reflex</td>
              <td>13</td>
              <td>5</td>
              <td>1</td>
              <td>5</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Will</td>
              <td>29</td>
              <td>10</td>
              <td>10</td>
              <td>5</td>
              <td>4</td>
            </tr>
          </table>
        </div>
        <div class="table-wrapper">
          <table>
            <tr>
              <th colspan="6">Combat Maneuver Defense</th>
            </tr>
            <tr>
              <th>Total</th>
              <th>Base</th>
              <th>Base Attack</th>
              <th>Str</th>
              <th>Dex</th>
              <th>Int<sup>5</sup></th>
              <th>Wis<sup>1</sup></th>
              <th>Deflection</th>
            </tr>
            <tr>
              <td>37</td>
              <td>10</td>
              <td>12</td>
              <td>-2</td>
              <td>1</td>
              <td>5</td>
              <td>10</td>
              <td>1</td>
            </tr>
          </table>
        </div>
        <p><sup>1</sup> [<a href="#ac-bonus">Self-Perfection AC Bonus</a>]</p>
        <p><sup>2</sup> +1 luck from Luckstone, +1 competence from Pale Green Prism Ioun Stone</p>
        <p><sup>3</sup> Hedgehog spirit animal grants +2 Will</p>
        <p><sup>4</sup> Dragonbone divination sticks grant a +4 luck bonus to one type of saving throw, determined randomly each day (doesn't stack with +1 from Luckstone)</p>
        <p><sup>5</sup> [<a href="#kinetic-enhancement">Kinetic Enhancement</a>]</p>
        <div class="table-wrapper">
          <table>
            <tr>
              <th>Hit Points</th>
              <td>107</td>
            </tr>
            <tr>
              <th>Wounded</th>
              <td>53</td>
            </tr>
            <tr>
              <th>Stun Limit</th>
              <td>26</td>
            </tr>
            <tr>
              <th>Massive Damage Limit</th>
              <td>52</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <section>
      <div class="image" id="vision"><img alt="Eye by Jesus Jezzini De Anda from the Noun Project" src="images/cornelius/vision.svg"/></div>
      <div class="content">
        <h2>Visionary Class Features</h2>
        <p><strong>Spirit:</strong> Lore</p>
        <p><strong>Bonus Feat:</strong> <a href="#diviners-delving">Diviner's Delving</a></p>
        <p><strong>Monstrous Insight:</strong> Study creature as a standard action to gain +2 bonus to attack and armor class against it</p>
        <p><strong>Discern Magical Expertise:</strong> Study creature for 2 rounds with <em>Detect Magic</em> to discover Bloodlines, Domains, Schools, Hexes, or Mysteries</p>
        <p><strong>Vision Spirit Magic:</strong> Spells added to <a href="#spirit-magic">Spirit Magic</a></p>
        <p><strong>Improved Divination:</strong> Maximum chance of accurate <em>Augury</em> and <em>Divination</em>, <em>Scrying</em> takes only 1 minute to cast and has double the chance to cast spells through it</p>
        <p><strong>Automatic Writing:</strong> 1/day take ten minutes get answer as <em>Divination</em></p>
        <p id="wandering-spirit"><strong>Wandering Spirit:</strong> Temporarily bond with one other spirit per day, gaining spirit magic spells and spirit ability</p>
        <p id="wandering-hex"><strong>Wandering Hex:</strong> Temporarily gain one hex from either spirit each day</p>
        <p id="perfect-knowledge"><strong>Perfect Knowledge:</strong> +10 competence bonus on Knowledge, Spellcraft, and Linguistics, continuous <em>Tongues</em></p>
      </div>
    </section>
    <section>
      <div class="image" id="pentagram">
        <img alt="Pentagram by Flatart from the Noun Project" src="images/cornelius/pentagram.svg"/>
      </div>
      <div class="content">
        <h2>Hexes</h2>
        <ul>
          <li id="benefit-of-wisdom"><strong>Benefit of Wisdom:</strong> Use Wis instead of Int for skill checks</li>
          <li id="fetish"><strong>Fetish:</strong> Gain <a href="#craft-wondrous">Craft Wondrous Item</a> and +4 to identify items</li>
          <li><strong>Brain Drain:</strong> Probe mind of nearby creature and deal 1d4/2 levels</li>
          <li><strong>Murksight:</strong> See through fog, mist, and water</li>
          <li><strong>Disguise:</strong> As <em>Disguise Self</em> in 1hr increments for hours/level</li>
          <li><strong>Share Knowledge:</strong> Touch grants my Knowledge bonus for Cha minutes</li>
          <li>(<a href="#ritual-hex">Ritual Hex</a> chosen each day from hexes you qualify for)</li>
          <li>(<a href="#spirit-talker">Spirit Talker Hex</a> choose from any spirit, lasts 1 hr)</li>
          <li>(<a href="#wandering-hex">Wandering Hex</a> chosen each day from spirit or wandering spirit)</li>
        </ul>
      </div>
    </section>
    <section>
      <div class="image" id="mind"><img alt="mind by priyanka from the Noun Project" src="images/cornelius/mind.svg"/></div>
      <div>
        <h2>Psychic Class Features</h2>
        <p><strong>Discipline:</strong> Self-Perfection</p>
        <p>Discipline Powers</p>
        <ul>
          <li id="ac-bonus"><strong>AC Bonus:</strong> Add Wis to AC and CMD, even when flat-footed</li>
          <li id="physical-push"><strong>Physical Push:</strong> Add Wis mod to physical skill or ability checks</li>
          <li><strong>Bodily Purge:</strong> As standard action, heal 9d8 or spend dice to use Lesser Restoration, Neutralize Poison, Remove Disease, or Restoration</li>
        </ul>
        <p><strong>Phrenic Pool:</strong> Spend up to 16 points to enhance psychic spells</p>
        <p>Phrenic Amplifications</p>
        <ul>
          <li><strong>Mindshield:</strong> Spend 1-2 points to gain double that bonus to Will saves</li>
          <li><strong>Psychofeedback:</strong> Spend 2 points and spell slot to boost physical ability</li>
          <li id="kinetic-enhancement"><strong>Kinetic Enhancement:</strong> Add Int to CMB and CMD, and to Str checks vs objects</li>
          <li><strong>Subordinate Spell (major):</strong> Simultaneously cast spell 5 levels lower at cost of 2 + 2 * subordinate spell level phrenic points</li>
        </ul>
        <p><strong>Telepathic Bond:</strong> Use <em>Telepathic Bond</em> 1/day as spell-like ability, can use 4th level or higher spell slot to cast it</p>
      </div>
    </section>
    <section id="spirit-magic">
      <div class="image" id="candle">
        <img alt="Candle by anbileru adaleru from the Noun Project" src="images/cornelius/candle.svg"/>
      </div>
      <div class="content">
        <h2>Spirit Magic</h2>
        <p>Can spontaneously cast one spell per spell level each day</p>
        <div class="table-wrapper">
          <table>
            <tr>
              <th>Level</th>
              <th class="left">Lore</th>
              <th class="left">Vision</th>
              <th class="left">Wandering Spirit</th>
            </tr>
            <tr>
              <td>1st</td>
              <td class="left">Identify</td>
              <td class="left">See Alignment</td>
              <td class="left">~</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">Tongues</td>
              <td class="left">See Invisibility</td>
              <td class="left">~</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td class="left">Locate Object</td>
              <td class="left">Clairvoyance</td>
              <td class="left">~</td>
            </tr>
            <tr>
              <td>4th</td>
              <td class="left">Legend Lore</td>
              <td class="left">Detect Scrying</td>
              <td class="left">~</td>
            </tr>
            <tr>
              <td>5th</td>
              <td class="left">Contact Other Plane</td>
              <td class="left">Prying Eyes</td>
              <td class="left">~</td>
            </tr>
            <tr>
              <td>6th</td>
              <td class="left">Owl's Wisdom, Mass</td>
              <td class="left">Legend Lore</td>
              <td class="left">~</td>
            </tr>
            <tr>
              <td>7th</td>
              <td class="left">Vision</td>
              <td class="left">Vision</td>
              <td class="left">~</td>
            </tr>
            <tr>
              <td>8th</td>
              <td class="left">Moment of Prescience</td>
              <td class="left">Moment of Prescience</td>
              <td class="left">~</td>
            </tr>
            <tr>
              <td>9th</td>
              <td class="left">Time Stop</td>
              <td class="left">Foresight</td>
              <td class="left">~</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <section>
      <div class="image" id="anahata">
        <img alt="Anahata by rahmat from the Noun Project" src="images/cornelius/anahata.svg"/>
      </div>
      <div class="content">
        <h2>Shaman Spells</h2>
        <div class="table-wrapper">
          <table>
            <caption>Spells per day</caption>
            <thead>
              <tr>
                <th>1st</th>
                <th>2nd</th>
                <th>3rd</th>
                <th>4th</th>
                <th>5th</th>
                <th>6th</th>
                <th>7th</th>
                <th>8th</th>
                <th>9th</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="enhanced">8*</td>
                <td class="enhanced left">8*</td>
                <td class="enhanced left">7*</td>
                <td class="left">6</td>
                <td class="left">6</td>
                <td class="left">6</td>
                <td class="left">4</td>
                <td class="left">3</td>
                <td class="left">2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>* +1 bonus from Dragonshard</p>
        <div class="table-wrapper">
          <table>
            <tr>
              <th colspan="2">Spells learned from Cleric list</th>
            </tr>
            <tr>
              <td>1st</td>
              <td class="left">Shield of Faith</td>
            </tr>
            <tr>
              <td>1st</td>
              <td class="left">Touch of Bloodletting</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">Track Ship</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">Lay of the Land</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">See Enchantment</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td class="left">Channel Vigor</td>
            </tr>
            <tr>
              <td>4th</td>
              <td class="left">Debilitating Portent</td>
            </tr>
            <tr>
              <td>4th</td>
              <td class="left">Dimensional Anchor</td>
            </tr>
            <tr>
              <td>5th</td>
              <td class="left">Plane Shift</td>
            </tr>
            <tr>
              <td>5th</td>
              <td class="left">Spell Resistance</td>
            </tr>
            <tr>
              <td>5th</td>
              <td class="left">Atonement</td>
            </tr>
            <tr>
              <td>6th</td>
              <td class="left">Harm</td>
            </tr>
            <tr>
              <td>6th</td>
              <td class="left">Heal</td>
            </tr>
            <tr>
              <td>7th</td>
              <td class="left">Bestow Curse, Greater</td>
            </tr>
            <tr>
              <td>8th</td>
              <td class="left">Nine Lives</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <section>
      <div class="image" id="palm-reading">
        <img alt="palm reading by Piotrek Chuchla from the Noun Project" src="images/cornelius/palm-reading.svg"/>
      </div>
      <div class="content">
        <h2>Psychic Spells</h2>
        <div class="table-wrapper">
          <table>
            <caption>Spells per day</caption>
            <thead>
              <tr>
                <th>1st</th>
                <th class="left">2nd</th>
                <th class="left">3rd</th>
                <th class="left">4th</th>
                <th class="left">5th</th>
                <th class="left">6th</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="enhanced">9*</td>
                <td class="enhanced left">8*</td>
                <td class="enhanced left">8*</td>
                <td class="left">7</td>
                <td class="left">6</td>
                <td class="left">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>* +1 bonus from Dragonshard</p>
        <div class="table-wrapper">
          <table>
            <tr>
              <th colspan="2">Spells known</th>
            </tr>
            <tr>
              <td>1st</td>
              <td class="left">Expeditious Retreat*</td>
            </tr>
            <tr>
              <td>1st</td>
              <td class="left">Burst of Insight</td>
            </tr>
            <tr>
              <td>1st</td>
              <td class="left">Hermean Potential</td>
            </tr>
            <tr>
              <td>1st</td>
              <td class="left">Ill Omen</td>
            </tr>
            <tr>
              <td>1st</td>
              <td class="left">Mage Armor</td>
            </tr>
            <tr>
              <td>1st</td>
              <td class="left">Shield</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">Bear's Endurance*</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">Acute Senses</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">Cat's Grace</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">Invisibility</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">Touch of Idiocy</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td class="left">Thought Shield</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td class="left">Haste*</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td class="left">Blink</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td class="left">Heroism</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td class="left">Witness</td>
            </tr>
            <tr>
              <td>4th</td>
              <td class="left">Freedom of Movement*</td>
            </tr>
            <tr>
              <td>4th</td>
              <td class="left">Dimension Door</td>
            </tr>
            <tr>
              <td>4th</td>
              <td class="left">Invisibility, Greater</td>
            </tr>
            <tr>
              <td>4th</td>
              <td class="left">Mental Barrier III</td>
            </tr>
            <tr>
              <td>5th</td>
              <td class="left">Echolocation*</td>
            </tr>
            <tr>
              <td>5th</td>
              <td class="left">Psychic Asylum</td>
            </tr>
            <tr>
              <td>5th</td>
              <td class="left">Teleport</td>
            </tr>
            <tr>
              <td>6th</td>
              <td class="left">Transformation*</td>
            </tr>
            <tr>
              <td>6th</td>
              <td class="left">Dust Form</td>
            </tr>
          </table>
        </div>
        <p>* Discipline spell</p>
      </div>
    </section>
    <section id="permanent">
      <div class="image" id="diamond">
        <img alt="Diamond by Ben Davis from the Noun Project" src="images/cornelius/diamond.svg"/>
      </div>
      <div class="content">
        <h2>Permanent Spells</h2>
        <ul>
          <li>Arcane Sight (Brewmaster's potion)</li>
          <li>Aura Sight (Permanency)</li>
          <li>Detect Scrying (24 hr duration)</li>
          <li>Enchantment Sight (Permanency)</li>
          <li>Expeditious Retreat (Brewmaster's potion)</li>
          <li>Eyes of the Void (Sire Cloak)</li>
          <li>See Beyond (Meditative spell)</li>
          <li>See Invisibility (Permanency)</li>
          <li>Telepathic Bond (with Gregory Greythorn, Permanency)</li>
          <li>Tongues [<a href="#perfect-knowledge">Perfect Knowledge</a>]</li>
          <li>Contingency (days/level duration, Heal)</li>
        </ul>
      </div>
    </section>
    <section id="campaign">
      <div class="image" id="banner"><img alt="banner by shashank singh from the Noun Project" src="images/cornelius/banner.svg"/></div>
      <div class="content">
        <h2>Campaign Abilities</h2>
        <p><strong>Lore Skill:</strong> Gain free rank per level in more specific Knowledge like Echo Winds</p>
        <p id="second-mind"><strong>Second Mind</strong></p>
        <ul>
          <li>Gain a second set of class features at level -5</li>
          <li>Gain feats for second mind at level -5 (not incl. human bonus feat)</li>
          <li>Gain skill points for second mind at level -5 (not incl. Int bonus)</li>
          <li>Gain an extra mental standard action per round</li>
          <li>Roll twice and take highest on Knowledge and Perception checks</li>
          <li>Roll twice and take lowest vs mind-affecting effects</li>
        </ul>
        <p><strong>Skill Enhancement:</strong> +1 max ranks and ranks in Spellcraft</p>
        <p><strong>Speed Increase:</strong> +10 feet to base speed from Well of Eris</p>
        <p><strong>Ability Increase:</strong> +3 to Wis from Christmas present</p>
        <p><strong>Navel Chakra ability:</strong> Can drink one potion and store it for later use</p>
      </div>
    </section>
    <section>
      <div class="image" id="scroll"><img alt="Magic Scroll by Rena Rohrbacher from the Noun Project" src="images/cornelius/scroll.svg"/></div>
      <div class="content">
        <h2>Languages</h2>
        <ul>
          <li>Common</li>
          <li>Celestial</li>
          <li>Cyclops</li>
          <li>Draconic</li>
          <li>Elven</li>
          <li>Sphinx</li>
        </ul>
      </div>
    </section>
    <section>
      <div class="image" id="day">
        <img alt="day and night by tezar tantular from the Noun Project" src="images/cornelius/day.svg"/>
      </div>
      <div class="content">
        <h2>Daily Preparation</h2>
        <p>On a typical day&#8230;</p>
        <p><strong><a href="#dreamed-secrets">Dreamed Secrets</a>:</strong> Arcane Eye, Greater Magic Weapon (for Olberic)</p>
        <p><strong>Meditative Spell:</strong> See Beyond</p>
        <p><strong><a href="#ritual-hex">Ritual Hex</a>:</strong> Arcane Enlightenment</p>
        <p><strong><a href="#spirit-ridden">Spirit Ridden</a>:</strong> Diplomacy</p>
        <p><strong><a href="#wandering-spirit">Wandering Spirit</a>:</strong> Life</p>
        <p><strong><a href="#wandering-hex">Wandering Hex:</a></strong> Enhanced Cures</p>
      </div>
    </section>
    <section>
      <div class="image" id="body">
        <img alt="necklace by Smalllike from the Noun Project" src="images/cornelius/necklace.svg"/>
      </div>
      <div class="content">
        <h2>Magic Items</h2>
        <div class="table-wrapper">
          <table>
            <tr>
              <th>Head</th>
              <td class="left">Circlet of Persuasion</td>
            </tr>
            <tr>
              <th>Headband</th>
              <td class="left">Headband of Mental Superiority +6</td>
            </tr>
            <tr>
              <th>Shoulders</th>
              <td class="left">Sire Master's Cloak</td>
            </tr>
            <tr>
              <th>Body</th>
              <td class="left">Robes of the Eminent Scholar</td>
            </tr>
            <tr>
              <th>Chest</th>
              <td class="left">Tunic of Careful Casting</td>
            </tr>
            <tr>
              <th>Belt</th>
              <td class="left">Meridian Belt</td>
            </tr>
            <tr>
              <th>Ring 1</th>
              <td class="left">Ring of Protection and Caster Level +1</td>
            </tr>
            <tr>
              <th>Ring 2</th>
              <td class="left">Ring of Counterspells</td>
            </tr>
            <tr>
              <th>Ring 3</th>
              <td class="left">Ring of Sustenance</td>
            </tr>
            <tr>
              <th>Ring 4</th>
              <td class="left">Ring of Mastery</td>
            </tr>
            <tr>
              <th>Carried</th>
              <td class="left">Dragonbone Divination Sticks</td>
            </tr>
            <tr>
              <th>Carried</th>
              <td class="left">Luckstone</td>
            </tr>
            <tr>
              <th>Carried</th>
              <td class="left" id="pale-green-prism">Wayfinder containing Pale Green Prism Ioun Stone</td>
            </tr>
            <tr>
              <th>Carried</th>
              <td class="left">Red Dragonshard (Enchantment)</td>
            </tr>
            <tr>
              <th>Carried</th>
              <td class="left">Sire Key</td>
            </tr>
            <tr>
              <th>Carried</th>
              <td class="left">Sire Scrollcase and Shadow Paper</td>
            </tr>
            <tr>
              <th>Carried</th>
              <td class="left">Reaching Stone (Pearlstone)</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <section>
      <div class="image" id="scepter">
        <img alt="wand by Eucalyp from the Noun Project" src="images/cornelius/scepter.svg"/>
      </div>
      <div class="content">
        <h2>Leadership</h2>
        <p><strong>Title:</strong> Chancellor</p>
        <p><strong>Rank:</strong> 1</p>
        <p><strong>Influence:</strong> Economy, Loyalty, Stability</p>
      </div>
    </section>
    <section id="guild">
      <div class="image" id="key">
        <img alt="Key by Eucalyp from the Noun Project" src="images/cornelius/key.svg"/>
      </div>
      <div class="content">
        <h2>Guild</h2>
        <p><strong>Guild:</strong> Sire</p>
        <p><strong>Path:</strong> Auspex (Seer)</p>
        <p><strong>Rank:</strong> Master</p>
        <p><strong>Guild Abilities</strong></p>
        <ul>
          <li>Add Wis to Initiative</li>
          <li>+2 max ranks and ranks in Spellcraft</li>
        </ul>
      </div>
    </section>
    <section>
      <div class="image" id="network">
        <img alt="Network by ibrandify from the Noun Project" src="images/cornelius/network.svg"/>
      </div>
      <div class="content">
        <h2>Contacts</h2>
        <ul>
          <li>Gregory Greythorn (King)</li>
          <li>Saerus Greythorn (King's cousin)</li>
          <li>Sargon (Seer)</li>
          <li>Idris Irin (Sage)</li>
          <li>Gavin Giron (Shadow)</li>
          <li>Zyra (The Brotherhood)</li>
          <li>Aidin Zane (Ethereal Halo)</li>
          <li>Harkin Copperhall (Dynasty)</li>
          <li>Aris Baron (Sadiron Kingdom)</li>
          <li>Nigul Burrenbin (Shipwright)</li>
          <li>Kardon Senrin (Captive)</li>
        </ul>
      </div>
    </section>
    <section>
      <div class="image" id="treasure">
        <img alt="treasure by Smalllike from the Noun Project" src="images/cornelius/treasure.svg"/>
      </div>
      <div class="content">
        <h2>Treasure</h2>
        <div class="table-wrapper">
          <table>
            <tr>
              <th class="right">pp</th>
              <th>gp</th>
              <th>sp</th>
              <th>cp</th>
              <th>gems (gp value)</th>
            </tr>
            <tr>
              <td class="right">43</td>
              <td>2,342</td>
              <td>462</td>
              <td>248</td>
              <td>1,500</td>
            </tr>
          </table>
        </div>
        <p><strong>Expendable magic items</strong></p>
        <ul>
          <li>Incense of Clearing</li>
          <li>Incense of Everleaf</li>
          <li>Mythweaver's Incense</li>
          <li>Potion of Nondetection</li>
          <li>Potion of Protection from Evil</li>
          <li>Scroll of Cure Light Wounds</li>
          <li>Scroll of Cure Critical Wounds, Mass</li>
          <li>Scroll of Obscuring Mist</li>
          <li>Scroll of Shield of Faith</li>
          <li>Scroll of Stoneskin</li>
          <li>Scroll of Wall of Stone</li>
          <li>Spell charms, metamagic (3)</li>
        </ul>
        <p><strong>Spell focuses and components</strong></p>
        <ul>
          <li>Book of occult lore for Beseeching the Patron (150 gp)</li>
          <li>Incense (1,825 gp)</li>
          <li>Ivory pieces for Vision (200 gp)</li>
          <li>Square of reflective silver for Akashic Communion (100 gp)</li>
          <li>Prayer beads for Atonement (500 gp)</li>
          <li>Teleportation focus rod (2,500 gp)</li>
          <li>Wyrm acid sacks (3)</li>
          <li>Indigo worm tongue veins (6)</li>
          <li>Shivervine spines (7)</li>
          <li>Ivory statuette of Cornelius for Contingency (1,500 gp)</li>
        </ul>
        <p><strong>Mundane equipment</strong></p>
        <ul>
          <li>Scholar's outfit</li>
          <li>Dagger, masterwork</li>
          <li>Badge of King's Council</li>
          <li>Chancellor signet ring</li>
          <li>Tiny shrunken mug of ale for winning insult contest</li>
          <li>Map of Sigils (planar touchstones)</li>
        </ul>
        <p><strong>Books</strong></p>
        <ul>
          <li>Lineage and heraldry book collection (1,100 gp)</li>
          <li>Nature's wonders book collection</li>
          <li>Sacred Tome IV (out of V), Constitution line</li>
          <li>Ultimate arcana book collection (2,600 gp)</li>
        </ul>
      </div>
    </section>
    <section>
      <div class="image" id="hedgehog">
        <img alt="hedgehog icon" src="images/cornelius/hedgehog.svg"/>
      </div>
      <div class="content">
        <h2>Spirit Animal</h2>
        <p><strong>Kind:</strong> Hedgehog</p>
        <p><strong>Int:</strong> 14</p>
        <p><strong>Lore Spirit:</strong> +2 Initiative, +4 Stealth</p>
        <p><strong>Type:</strong> Native Outsider</p>
        <p><strong>Size:</strong> Diminutive</p>
        <p><strong>Initiative:</strong> +5</p>
        <p><strong>Speed:</strong> 20</p>
        <p><strong>Armor Class:</strong> 26 (10 Natural, 3 Dex, 4 Size)</p>
        <p><strong>Hit Points:</strong> 44</p>
        <p><strong>Saves:</strong> Fort +0, Ref +5, Will +1</p>
        <div class="table-wrapper">
          <table>
            <tr>
              <th colspan="2">Skills*</th>
            </tr>
            <tr>
              <td>Climb</td>
              <td>+5</td>
            </tr>
            <tr>
              <td>Perception</td>
              <td>+3</td>
            </tr>
            <tr>
              <td>Stealth</td>
              <td>+23</td>
            </tr>
            <tr>
              <td>Swim</td>
              <td>+5</td>
            </tr>
          </table>
        </div>
        <p>* Also has same skill ranks as Cornelius</p>
        <p><strong>Special Qualities</strong></p>
        <ul>
          <li>Low-Light Vision</li>
          <li>Improved Evasion</li>
          <li>Share Spells</li>
          <li>Empathic Link</li>
          <li>Spiny Defense</li>
          <li>Deliver Touch Spells</li>
          <li>Speak with Master</li>
          <li>Speak with Hedgehogs</li>
          <li>Spell Resistance 5+ master's level</li>
          <li>Scry on Familiar</li>
        </ul>
      </div>
    </section>
  </GamingArticle>
</template>

<script>
import GamingArticle from '~/components/GamingArticle';

export default {
  components: {
    GamingArticle
  },
  layout: 'blank',
  head() {
    return {
      title: 'Cornelius',
      link: [
        {
          hid: 'fonts',
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Grenze:500|Ubuntu+Mono:400,700&display=swap'
        }
      ]
    };
  }
}
</script>

<style scoped>
td.enhanced {
  font-weight: 700;
  color: #02C2F2;
}

[class^="neg"], [class^="pos"] {
  box-sizing: content-box;
  display: inline-block;
  height: .6rem;
}

[class^="neg"] {
  background-color: #666F79;
}

[class^="pos"] {
  background-color: #D3D5D8;
  margin-left: 1.5rem;
}

[class*="aug"] {
  border-right-style: solid;
  border-right-color: #02C2F2;
}

img.portrait {
  margin: -1rem 0 1rem;
  max-width: 100%;
  border-radius: .25rem;
}

.neg2 {
  width: 1.5rem;
}

.pos1 {
  width: .75rem
}

.pos2 {
  width: 1.5rem;
}

.pos3 {
  width: 2.25rem;
}

.pos7 {
  width: 5.25rem;
}

.aug2 {
  border-right-width: 1.5rem;
}

.aug3 {
  border-right-width: 2.25rem;
}

#ability img, #vision img {
  margin-top: 0;
}

#decision img {
  transform: rotate(180deg);
  margin-top: -.25rem;
}

#diamond img {
  margin-top: .5rem;
}

#light img {
  margin-left: -.25rem;
}

#palm-reading img {
  max-width: 6rem;
  margin-left: -.5rem;
}

#pentagram img {
  transform: rotate(180deg);
  margin-top: -.25rem;
}

#shield img {
  max-width: 2rem;
  margin-left: .25rem;
}

@media screen and (min-width:600px) {
  #decision img {
    margin-top: -.75rem;
  }

  #decision img, #monastery img {
    margin-left: .25rem;
    max-width: 4.5rem;
  }

  #diamond img, #mind img {
    margin-top: .5rem;
  }
  
  #network img {
    max-width: 6rem;
    margin-left: -.5rem;
  }

  #pentagram img {
    margin-top: -.75rem;
    max-width: 4.5rem;
    margin-left: .25rem;
  }
  
  #scroll img, #vision img {
    max-width: 5.5rem;
    margin-left: -.25rem;
  }

  #shield img {
    margin-left: 1rem;
    max-width: 3.5rem;
  }

  #vision img {
    margin-top: -.25rem;
  }
}
</style>