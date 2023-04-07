import React from "react";
import Style from "../Styles/Structure/Structure.module.css";
import PCRCLOGO from "../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../assets/homeImages/loginIcon.png";
import { Link } from "react-router-dom";

const OurStructure = () => {
  return (
    <>
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
          <div className={Style.Structure}>
            <h2>Our Structure</h2>

            <input type="text" placeholder="Search" />

            <div className={Style.area}>
              <div className={Style.area2}>
                <Link to="/Federal" className={Style.area3}>
                  <h4>Federal</h4>
                  <div className={Style.bar}> </div>
                </Link>

                <p>
                  Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                  vuluptate libero et verlit interdum, ac ealiquet odio mattis.
                  Class aptent tacitisociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                  <a href="">Continue</a>
                </p>
              </div>
              <div className={Style.area2}>
                <Link to="/State" className={Style.area3}>
                  <h4>State</h4>
                  <div className={Style.bar}> </div>
                </Link>
                <p>
                  Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                  vuluptate libero et verlit interdum, ac ealiquet odio mattis.
                  Class aptent tacitisociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                  <a href="">Continue</a>
                </p>
              </div>

              <div className={Style.area2}>
                <Link to="/Zone" className={Style.area3}>
                  <h4>Zone</h4>
                  <div className={Style.bar}> </div>
                </Link>
                <p>
                  Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                  vuluptate libero et verlit interdum, ac ealiquet odio mattis.
                  Class aptent tacitisociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                  <a href="">Continue</a>
                </p>
              </div>

              <div className={Style.area2}>
                <Link to="/Area" className={Style.area3}>
                  <h4>Area</h4>
                  <div className={Style.bar}> </div>
                </Link>
                <p>
                  Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                  vuluptate libero et verlit interdum, ac ealiquet odio mattis.
                  Class aptent tacitisociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                  <a href="">Continue</a>
                </p>
              </div>
              <div className={Style.area2}>
                <div className={Style.area3}>
                  <h4>Division</h4>
                  <div className={Style.bar}> </div>
                </div>
                <p>
                  Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                  vuluptate libero et verlit interdum, ac ealiquet odio mattis.
                  Class aptent tacitisociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                  <a href="">Continue</a>
                </p>
              </div>
              <div className={Style.area2}>
                <div className={Style.area3}>
                  <h4>Unit</h4>
                  <div className={Style.bar}> </div>
                </div>
                <p>
                  Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                  vuluptate libero et verlit interdum, ac ealiquet odio mattis.
                  Class aptent tacitisociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                  <a href="">Continue</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurStructure;
