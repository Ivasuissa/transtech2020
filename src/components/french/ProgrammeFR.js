import React from "react";
import israel from "../../media/israel.jpeg";
import france from "../../media/france.png";

const ProgrammeFR = () => {
  return (
    <div id="programme" className="TransTech2020">
      <div className="TransTech2020Title">
        <h1>Programme</h1>
      </div>
      <div className="TransTech2020Content">
        <div className="presentation">
          <h5>4 thèmes pour cette 11ème Édition:</h5>
          <div className="blocA">
            <div id="security">
              <h3>I. La Cybersécurité</h3>
              <p>
                Israël est le deuxième pays au monde en matière d’exportation de
                cyber-sécurité. En effet, de nombreux pays collaborent
                aujourd’hui avec le pays pour protéger leur système. Israël
                investit des centaines de millions de shekels chaque année sur
                les infrastructures visant à transformer la ville du désert,
                Beersheva, en « plaque tournante de la cyber-sécurité mondiale
                ». Pourquoi l’écosystème israélien de la cybersécurité est-il si
                innovant? Quelles sont les tendances technologiques dans cet
                écosystème?
              </p>
            </div>
            <div id="BitCoin">
              <h3>II. Bitcoin & Cryptomonnaie</h3>
              <p>
                Israël, un des États au monde où l’écosystème crypto est le plus
                développé, s’apprête à prendre un véritable tournant dans ce
                domaine. En effet depuis 2018, les crypto-monnaies sont
                assimilées à des actifs financiers, obligeant les investisseurs
                individuels à payer un impôt sur les plus-values de 25%. La
                Knesset israélienne réexamine le Code des Impôts, envisageant
                d’abandonner l’impôt sur les plus-values du Bitcoin et autres
                Crypto – monnaies, ce qui augmentera ainsi considérablement la
                demande et donc l’intérêt autour de cet écosystème.
              </p>
            </div>
          </div>
          <div class="blocB">
            <div id="HealthTech">
              <h3>III. HealthTech</h3>
              <p>
                Les nombreuses start-ups israéliennes dans le domaine de la
                technologie de la santé suscitent un fort intérêt de l’étranger,
                les géants de la médecine multinationale cherchant à profiter du
                boom technologique actuel du pays. La technologie de la santé
                israélienne est stimulée par une demande mondiale de solutions
                de santé innovantes, accélérée très largement par le COVID 19.
                Considérant que les sciences de la vie représentent à elles
                seules près de 50% de la recherche scientifique en Israël, le
                pays est devenu une plaque tournante de l'innovation médicale et
                sanitaire et, par conséquent, une cible pour les investisseurs.
              </p>
            </div>
            <div id="relations">
              <h3>IV. Les relations France / Israël</h3>
              <p>
                Les relations politiques entre la France et Israël sont solides,
                marquées principalement par une reconnaissance de l’Etat
                d’Israël par la France, et son droit à la sécurité. Les deux
                pays entretiennent des liens solides en matière de défense et de
                renseignement et ont un vif intérêt pour une coopération
                économique croissante. L'économie française est la deuxième en
                Europe et cherche à exploiter le savoir faire israélien en
                matière d’innovation, tandis que les entreprises israéliennes
                bénéficieraient d'un accès accru au marché en France. La
                proximité géographique et les liens culturels jouent un rôle
                important, la France abritant la plus grande communauté juive
                d'Europe, tandis qu'Israël, l'une des plus grandes diasporas
                françaises.
              </p>
            </div>
          </div>
        </div>
        <div className="infoconf">
          <h4 >
            La conférence, qui sera tiendra <b>en français</b> et <b>en anglais</b>, se divisera en deux parties.
            <br></br> L'ensemble sera diffusé via Zoom.
          </h4>
        </div>
        <div className="details">
          <div className="bloc1">
            <div className="place">
              <h3>Tel-Aviv</h3>
              <img src={israel}></img>
            </div>
            <div className="time">
              <i class="fas fa-clock"></i>
              <h4>
                <b>De 15h à 18h, </b> heure israélienne (14h à 17h heure
                française)
              </h4>
            </div>
            <div className="presentateur">
              <i class="fas fa-microphone"></i>
              <h4>
                Animée par <b>Dr. Daniel Rouach</b>, Président de la Chambre de
                Commerce Israël-France (CCIIF) et <b>Mr. Shiran Katz</b>, Board
                member de la CCIIF).
              </h4>
            </div>
            <div className="where">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>
                  <b>Chambre de Commerce Israël – France,</b>
                </h4>
                <h4>29, Hamered Street – Tel-Aviv </h4>
                <h4>Salle de réunion du 13ème étage </h4>
              </div>
            </div>
          </div>

          {/* <div className="icons">
            <i class="fas fa-clock"></i>
            <i class="fas fa-microphone"></i>
            <i class="fas fa-map-marker-alt"></i>
          </div> */}

          <div className="bloc2">
            <div className="place">
              <h3>Paris</h3>
              <img src={france}></img>
            </div>
            <div className="time">
              <i class="fas fa-clock"></i>
              <h4>
                {" "}
                <b>De 19h à 20h30 </b>,heure israélienne (18h à 19h30 heure
                française)
              </h4>
            </div>
            <div className="presentateur">
              <i class="fas fa-microphone"></i>
              <h4>
                {" "}
                <b>Animée par Mr. André Dan</b>, Conférencier & Coach,{" "}
                Co-fondateur de Challengy.
              </h4>
            </div>
            <div className="where">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>
                  {" "}
                  <b>Ecole ESCP Business School,</b>{" "}
                </h4>
                <h4>79 Avenue de la République, Paris 75011 </h4>
                <h4>Amphithéâtre Gélis</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgrammeFR;
