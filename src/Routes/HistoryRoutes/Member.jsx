import React from "react";
import Footer from "../../Components/Footer";
import Security from "../../assets/AboutImg/Rectangle 1.png";
import Jotter from "../../assets/homeImages/jotter.png";
import Tag from "../../assets/homeImages/tag.png";
import Laptop from "../../assets/homeImages/laptop.png";
import Report from "../../assets/homeImages/a (3).png";
import { Link } from "react-router-dom";
import PCRCLOGO from "../../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../../assets/homeImages/loginIcon.png";
import Style from "../../Styles/HistoryStyle/History.module.css";

const Member = () => {
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
            <Link to="/Publication">
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
        <div className="image">
          <img src={Security} alt="" />
        </div>

        <section>
          <div className={Style.MemContainer}>
            <div className={Style.Connected}>
              <p>Membership</p>
              <div className={Style.space}></div>
              <div className={Style.p}>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </div>
              <Link to="/ReportCase">
                <img src={Report} alt="" />
              </Link>
            </div>
            <div className={Style.Lorem}>
              <div className={Style.top}>
                <div className="box">d</div>
                <div className="box">s</div>
                <p>
                  1<span>/</span>4
                </p>
              </div>
              <div className={Style.bottom}>
                <div className={Style.LoremCards}>
                  <img src={Jotter} alt="" srcset="" />
                  <p>Mission</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className={Style.LoremCards}>
                  <img src={Laptop} alt="" srcset="" />
                  <p>Vision</p>
                  <p>
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                {/* <div className={Style.LoremCards}>
                  <img src={Tag} alt="" srcset="" />
                  <p>Lorem Ipsum</p>
                  <p>
                    Find insurance coverage and discounted services to support
                    you and your writing business.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <div className={Style.AboutUs}>
          <div className={Style.AboutUsContent}>
            <div className={Style.h1}>
              <h1>BiO Data</h1>
              <div className={Style.space}></div>
              <form action="/Become-A-Member">
                <div className={Style.BioInput}>
                  <input type="text" placeholder="Surname" />
                  <input type="text" placeholder="Middle Name" />
                </div>
                <div className={Style.BioInput}>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Occupation" />
                </div>
                <div className={Style.BioInput}>
                  <input type="text" placeholder="Office Address" />
                  <input type="text" placeholder="Home Address" />
                </div>
                <div className={Style.BioInput}>
                  <input type="text" placeholder="Marital Status" />
                  <input type="text" placeholder="Zone" />
                </div>
                <div className={Style.BioInput}>
                  <input type="text" placeholder="PCRC State" />
                  <input type="text" placeholder="Command" />
                </div>
                <div className={Style.BioInput}>
                  <input type="text" placeholder="Division" />
                  <input type="text" placeholder="Membership Status" />
                </div>
                <div className={Style.BioInput}>
                  <input type="text" placeholder="Phone Number (Whatsaap)" />
                  <input type="text" placeholder="Alternative Phone Number" />
                </div>
                <div className={Style.BioInput}>
                  <input type="text" placeholder="Email Address" />
                  <input type="text" placeholder="Next of Kin" />
                </div>
                <div className={Style.BioInput}>
                  <input type="text" placeholder="Phone Number" />
                  <input type="text" placeholder="Relationship" />
                </div>
                <input className={Style.UploadFile} type="file" src="" alt="" />
                <div className={Style.Submit}>
                  <input type="submit" placeholder="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
