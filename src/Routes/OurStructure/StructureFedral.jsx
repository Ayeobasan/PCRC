import React from "react";
import { Link } from "react-router-dom";
import PCRCLOGO from "../../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../../assets/homeImages/loginIcon.png";
import Style from "../../Styles/Structure/StructureFederal.module.css";

export const StructureFederal = () => {
  return (
    <div className={Style.AllHome}>
      <section className={Style.Container}>
        <div class={Style.SearchContainer}>
          <div class={Style.formoutline}>
            <input
              type="search"
              placeholder="Search by state/zone/area command"
            />
          </div>
          <button type="button" class={Style.btn}>
            <div className={Style.searchButton}>
              <i></i>
              <span> Submit</span>
            </div>
          </button>
        </div>
        <div className={Style.HistoryContainer}>
          <li className={Style.History}>
            <Link to="/History">History</Link>
          </li>
          <li className={Style.History}>
            <Link to="/News">News</Link>
          </li>
          <li className={Style.History}>
            <Link to="/Ireporter">Ireporter</Link>
          </li>
          <li className={Style.About}>
            <Link to="/About">About PCRC</Link>
          </li>
        </div>
      </section>
      <section className={Style.PcrcSection}>
        <div className={Style.PcrcContainer}>
          <div className={Style.image}>
            <img src={PCRCLOGO} alt="" />
          </div>
          <div className={Style.ReportContainer}>
            <div className={Style.case}>
              <Link to="/ReportCase">
                <p>Report Case</p>
              </Link>
              <Link to="/Structure">
                <p>Our Structure</p>
              </Link>
            </div>
            <div className={Style.JoinContainer}>
              <div className={Style.Join}>
                <button>Join</button>
              </div>
              <div className={Style.Login}>
                <button>
                  <img src={LoginIcon} alt="" srcset="" />
                  <p> Login</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Style.membershipContainer}>
        <ul>
          <li>
            <Link to="/Membership">MEMBERSHIP</Link>
          </li>
          <li>
            <Link to="/Services">SERVICE</Link>
          </li>
          <li>
            <select>
              Our Structure
              <option value=" Our Structure"> OUR STRUCTURE </option>
              <option value="ejiifj">ihfeiohfi</option>
              <option value="ejiifj">ihfeiohfi</option>
              <option value="ejiifj">ihfeiohfi</option>
              <option value="ejiifj">ihfeiohfi</option>
            </select>
          </li>
          <Link to="/Publication">
            <li>PUBLICATION</li>
          </Link>

          <Link to="/Event">
            <li>EVENTS </li>
          </Link>

          <Link to="/Advocate">
            <li>ADVOCACY</li>
          </Link>
        </ul>
      </section>
      <section>
        <div className={Style.StructureFederal}>
          <h2>Structure (Federal)</h2>
          <input type="text" placeholder="Search" />

          <div className={Style.areas}>
            <div className={Style.places}>
              <Link to="/Federal" className={Style.federal}>
                <h3>Federal</h3>
                <div className={Style.bar}></div>
              </Link>
            </div>
            <div className={Style.Summary}>
              <h3>Summary</h3>
              <p>
                Jorem ipsum dolor sit amet, consectetur adipusciung elit. Nunc
                vuluostste libero et velit interdum. ac aliquert odios mattis.
                Ciass aptent tacitl sociopsqu as litora torwuent per conubia
                hostra, per inceptios hi,enaeosos. Curabitue tempua urna at
                turpis condimentum lobortis. Ut commodo efficitur reque. Ut dia,
                quam, semper laculis condimentum ac, vestibulum eu nisi.
              </p>
              <p>
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl.
              </p>
            </div>
          </div>

          <h4 className={Style.Executive}>Executive Members</h4>
          <div className={Style.images}>
            <div className={Style.threeimages}>
              <div className={Style.images}>
                <div className={Style.backgroundgrey}></div>
                <h4>ALH MOGAJI IBRAHEEM OLANIYAN</h4>
                <p>
                  <small>NATIONAL CHAIRMAN</small>
                </p>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum
                </p>
              </div>
              <div className={Style.images}>
                <div className={Style.backgroundgrey}></div>
                <h4>AMB SADIQ WADA</h4>
                <p>
                  <small>DEPUTY NATIONAL CHAIRMAN NORTH</small>
                </p>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum
                </p>
              </div>
              <div className={Style.images}>
                <div className={Style.backgroundgrey}></div>
                <h4>PROF NICK EZEH</h4>
                <p>
                  <small>DEPUTY NATIONAL CHAIRMAN SOUTH</small>
                </p>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipusciung elit. Nunc
                  vuluostste libero et velit interdum
                </p>
              </div>
            </div>
            <div className={Style.threeimages}>
              <div className={Style.images}>
                <div className={Style.backgroundgrey}></div>
                <h4>Gorem ipsum dolor</h4>
                <p>
                  <small>Gorem ipsum dolor</small>
                </p>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipusciung elit. Nunc
                  vuluostste libero et velit interdum
                </p>
              </div>
              <div className={Style.images}>
                <div className={Style.backgroundgrey}></div>
                <h4>Gorem ipsum dolor</h4>
                <p>
                  <small>Gorem ipsum dolor</small>
                </p>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipusciung elit. Nunc
                  vuluostste libero et velit interdum
                </p>
              </div>
              <div className={Style.images}>
                <div className={Style.backgroundgrey}></div>
                <h4>Gorem ipsum dolor</h4>
                <p>
                  <small>Gorem ipsum dolor</small>
                </p>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipusciung elit. Nunc
                  vuluostste libero et velit interdum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StructureFederal;
