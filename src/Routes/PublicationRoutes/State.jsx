import React from "react";
import { Link } from "react-router-dom";
import PCRCLOGO from "../../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../../assets/homeImages/loginIcon.png";

import Style from "../../Styles/Publication/States.module.css";

export const States = () => {
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
        <div className={Style.Statespg}>
          <h1>Our Foundation (Lagos state) </h1>
          <input type="text" placeholder="Search" />

          <div className={Style.AllState}>
            <div className={Style.area2}>
              <Link to="/State">
                <h2>States</h2>
                <div className={Style.ba}> </div>
              </Link>
              <Link to="/Zone">
                <h2 className={Style.Blur}>Zones</h2>
              </Link>
              <Link to="/Area">
                <h2 className={Style.Blur}>Areass</h2>
              </Link>
            </div>
            <div>
              <div className={Style.area}>
                <div className={Style.area2}>
                  <h4>A State</h4>
                  <div className={Style.bar}> </div>
                  <p>
                    Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                    vuluptate libero et verlit interdum, ac ealiquet odio
                    mattis. Class aptent tacitisociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                    <a href="">Continue</a>
                  </p>
                </div>

                <div className={Style.area2}>
                  <h4>B State</h4>
                  <div className={Style.bar}> </div>
                  <p>
                    Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                    vuluptate libero et verlit interdum, ac ealiquet odio
                    mattis. Class aptent tacitisociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                    <a href="">Continue</a>
                  </p>
                </div>
              </div>
              <div className={Style.area}>
                <div className={Style.area2}>
                  <h4>A State</h4>
                  <div className={Style.bar}> </div>
                  <p>
                    Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                    vuluptate libero et verlit interdum, ac ealiquet odio
                    mattis. Class aptent tacitisociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                    <a href="">Continue</a>
                  </p>
                </div>
                <div className={Style.area2}>
                  <h4>B State</h4>
                  <div className={Style.bar}> </div>
                  <p>
                    Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                    vuluptate libero et verlit interdum, ac ealiquet odio
                    mattis. Class aptent tacitisociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                    <a href="">Continue</a>
                  </p>
                </div>
              </div>
              <div className={Style.area}>
                <div className={Style.area2}>
                  <h4>A State</h4>
                  <div className={Style.bar}> </div>
                  <p>
                    Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                    vuluptate libero et verlit interdum, ac ealiquet odio
                    mattis. Class aptent tacitisociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                    <a href="">Continue</a>
                  </p>
                </div>

                <div className={Style.area2}>
                  <h4>B State</h4>
                  <div className={Style.bar}> </div>
                  <p>
                    Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                    vuluptate libero et verlit interdum, ac ealiquet odio
                    mattis. Class aptent tacitisociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                    <a href="">Continue</a>
                  </p>
                </div>
              </div>
              <div className={Style.area}>
                <div className={Style.area2}>
                  <h4>A State</h4>
                  <div className={Style.bar}> </div>
                  <p>
                    Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                    vuluptate libero et verlit interdum, ac ealiquet odio
                    mattis. Class aptent tacitisociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                    <a href="">Continue</a>
                  </p>
                </div>
                <div className={Style.area2}>
                  <h4>B State</h4>
                  <div className={Style.bar}> </div>
                  <p>
                    Worem ipsum dolor amet, consecteur adipscing elit. Nunc
                    vuluptate libero et verlit interdum, ac ealiquet odio
                    mattis. Class aptent tacitisociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                    <a href="">Continue</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default States;

{/* <div className={Style.AllHome}>
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

</div> */}

// .AllHome {
//   background: #f5f5f5;
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   /* overflow-x: hidden; */
// }
// a {
//   text-decoration: none;
// }
// .Container {
//   display: flex;
//   justify-content: space-between;
//   width: 91.5%;
// }
// .SearchContainer {
//   display: flex;
//   align-items: flex-end;
// }
// .SearchContainer input {
//   font-size: 15px;
//   color: #757575;
//   width: 150%;
//   font-style: normal;
//   padding: 8px 70px 10px 20px;
//   outline: none;
//   border: none;
//   background-color: #f5f5f5;
// }
// .btn {
//   border: none;
//   /* width: 100%; */
//   padding: 10px 0px 5px 40px;
//   background: #301d73;
//   border: 2px solid #301d73;
//   border-radius: 5px;
//   cursor: pointer;
// }
// button .searchButton {
//   width: 10%;
//   padding: 6px 10px;
//   font-family: sans-serif;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   color: #ffffff;
//   display: flex;
// }
// .HistoryContainer {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2px;
//   align-items: center;
//   margin-left: 10px;
//   margin-bottom: 3px;
// }
// .HistoryContainer li {
//   list-style: none;
//   background-color: white;
//   padding: 15px;
//   padding-left: 60px;
//   gap: 5px;
// }
// .HistoryContainer .About {
//   padding: 15px;
//   padding-left: 100px;
//   display: flex;
//   justify-items: end;
//   width: 100%;
//   background-color: white;
// }

// /* Pcrc Container/ */
// .PcrcSection {
//   margin: auto;
//   width: 100%;
//   background-color: white;
// }
// .PcrcContainer {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 75%;
//   margin: auto;
// }
// .ReportContainer {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 50%;
// }
// .ReportContainer .case {
//   display: flex;
//   justify-content: space-between;
//   width: 50%;
// }
// .ReportContainer .JoinContainer {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 30px;
//   justify-content: space-between;
//   width: 40%;
//   align-items: center;
// }
// .ReportContainer .JoinContainer .Join button {
//   padding: 15px 40px;
//   background-color: #2a166f;
//   color: white;
//   font-size: 15px;
//   border: none;
//   border-radius: 10px;
// }
// .ReportContainer .JoinContainer .Login button {
//   padding: 0px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 15px;
//   border: 1px solid #2a166f;
//   border-radius: 10px;
// }
// .ReportContainer .JoinContainer .Login button p {
//   padding-left: 10px;
// }

// /*  */
// .membershipContainer {
//   background-color: #ffffff;
//   margin-top: 3px;
//   height: 10vh;
//   display: flex;
// }
// .membershipContainer ul {
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 77%;
//   margin: auto;
// }
// .membershipContainer ul li select {
//   cursor: pointer;
//   list-style: none;
//   color: #301d73;
//   font-weight: 900;
//   display: flex;
//   justify-content: space-around;
//   width: 10rem;
//   border: none;
//   outline: none;
// }
// .membershipContainer ul li {
//   list-style: none;
//   color: #301d73;
//   font-weight: 700;
// }

// @media screen and (max-width: 1115px) and (min-width: 0px) {
//   .HistoryContainer {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 2px;
//     align-items: center;
//     margin-left: 10px;
//     margin-bottom: 3px;
//   }
//   .HistoryContainer .About {
//     padding-left: 50px;
//     width: 112%;
//   }
//   .MemContainer .Connected .p {
//     width: 95%;
//     font-size: 13px;
//     line-height: 1.4;
//     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//     font-style: normal;
//     font-weight: 100;
//     margin-bottom: 10px;
//   }
//   .ReportContainer {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 65%;
//   }
// }

// @media screen and (max-width: 950px) and (min-width: 0px) {
//   .HistoryContainer .About {
//     padding-left: 50px;
//     width: 105%;
//   }
// }
// @media screen and (max-width: 900px) and (min-width: 0px) {
//   .membershipContainer ul {
//     width: 89%;
//   }
// }
// @media screen and (max-width: 850px) and (min-width: 0px) {
//   .HistoryContainer .About {
//     padding-left: 50px;
//     width: 102%;
//   }
//   .ReportContainer {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 70%;
//   }
//   .LearnContainer .gorem h1 {
//     font-size: 2.1rem;
//     width: 95%;
//     font-weight: 100;
//   }
//   .LearnContainer .gorem p {
//     width: 83%;
//     font-size: 15px;
//   }
//   .LearnContainer .pcrcOfficer img {
//     width: 100%;
//     height: 60vh;
//   }
//   .PublicationContainer {
//     display: grid;
//     grid-template-columns: 1fr;
//     margin: 0px 6rem 20px;
//   }
//   .ViewBy {
//     width: 100%;
//   }
// }
// @media screen and (max-width: 802px) {
//   .AllHome .Container {
//     display: none;
//   }
//   .PcrcSection {
//     display: none;
//   }
//   .membershipContainer{
//       display: none;
//   }
// }
