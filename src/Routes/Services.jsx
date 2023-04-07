import React from "react";
import Style from "../Styles/Services.module.css";
import PCRCLOGO from "../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../assets/homeImages/loginIcon.png";
import Footer from "../Components/Footer";
import Teacher from "../assets/homeImages/Teacher.jpeg.png";
import Screen from "../assets/homeImages/Screen.png";
import { Link } from "react-router-dom";

const Service = () => {
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
            <Link to='/Publication'>
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


        {/*             Teacher          */}

        <div className={Style.ServiceContainer}>
          <section>
            <h1>Services</h1>
            <div className={Style.Teacher}>
              <div className={Style.img}>
                <img src={Teacher} alt="" />
              </div>
              <div className={Style.Connected}>
                <p>Publications</p>
                <div className={Style.space}></div>
                <div className={Style.p}>
                  Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Continue
                </div>
              </div>
            </div>
          </section>

          {/*  */}

          <section>
            <div className={Style.Zone}>
              <div className={Style.img}>
                <img src={Screen} alt="" />
              </div>
              <div className={Style.Connected}>
                <p>Zones</p>
                <div className={Style.space}></div>
                <div className={Style.p}>
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos procced to page
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Service;
