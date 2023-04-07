import React from "react";
import Security from "../assets/AboutImg/Rectangle 1.png";
import Jotter from "../assets/homeImages/jotter.png";
import Tag from "../assets/homeImages/tag.png";
import Laptop from "../assets/homeImages/laptop.png";
import Report from "../assets/homeImages/a (3).png";
import { Link } from "react-router-dom";
import PCRCLOGO from "../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../assets/homeImages/loginIcon.png";
import Style from "../Styles/ReportCase.module.css";

const ReportCase = () => {
  return (
    <div>
      <div className={Style.AboutContainer}>
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
              <li>ADVOCACY </li>
            </Link>
          </ul>
        </section>
        <section>
          <div className={Style.container}>
            <form action="" className={Style.from}>
              <div className={Style.Case}>
                <h1>Report Case</h1>
                <div className={Style.space}></div>
                <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <input
                type="text"
                id="FullName"
                name="firstname"
                placeholder="Full Name(Optional)"
              />
              <input
                type="text"
                id="Email"
                name="firstname"
                placeholder="Email(Optional)"
              />
              <label htmlFor="">
                Upload Picture <sup>*</sup>
              </label>
              <input className={Style.Upload} type="file" src="" alt="" />

              <label htmlFor="">
                Upload video <sup>*</sup>
              </label>
              <input className={Style.Upload} type="file" src="" alt="" />

              {/* <label for="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select> */}
              <label htmlFor="">
                Report Case <sup>*</sup>
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Report Case...."
                // style="height:200px"
              ></textarea>

              <input type="submit" value="Report Case" />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReportCase;
