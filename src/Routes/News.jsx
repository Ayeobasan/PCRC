import React from "react";
import Style from "../Styles/News.module.css";
import PCRCLOGO from "../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../assets/homeImages/loginIcon.png";
import Footer from "../Components/Footer";
import pas from "../assets/NewsImages/Pas.png";
import Optimizing from "../assets/NewsImages/Optimizing.png";
import WRP from "../assets/NewsImages/WRP.png";
import Webinal from "../assets/NewsImages/Webinal.png";
import pre from "../assets/NewsImages/pre.png";
import Foreward from "../assets/NewsImages/Foreward.png";
import Backward from "../assets/NewsImages/Backward.png";
import Icon1 from "../assets/NewsImages/Icon1.png";
import Icon2 from "../assets/NewsImages/Icon2.png";
import Icon3 from "../assets/NewsImages/Icon3.png";
import Screen from "../assets/homeImages/Screen.png";
import { Link } from "react-router-dom";

const News = () => {
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

        {/*             News          */}

        <section>
          <div className={Style.AllNews}>
            <h1>News</h1>
            <div className={Style.AllPress}>
              <div className={Style.Release}>
                <div className={Style.img}>
                  <img src={pas} alt="" />
                </div>
                <img src={pre} alt="" />
                <p>3 February 2023</p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <h5>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h5>
              </div>
              <div className={Style.Release}>
                <div className={Style.img}>
                  <img src={WRP} alt="" />
                </div>
                <img src={pre} alt="" />
                <p>3 February 2023</p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <h5>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h5>
              </div>
              <div className={Style.Release}>
                <div className={Style.img}>
                  <img src={Webinal} alt="" />
                </div>
                <img src={pre} alt="" />
                <p>3 February 2023</p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <h5>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h5>
              </div>
              <div className={Style.Release}>
                <div className={Style.img}>
                  <img src={Optimizing} alt="" />
                </div>
                <img src={pre} alt="" />
                <p>3 February 2023</p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <h5>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h5>
              </div>
              <div className={Style.Release}>
                <div className={Style.img}>
                  <img src={pas} alt="" />
                </div>
                <img src={pre} alt="" />
                <p>3 February 2023</p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <h5>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h5>
              </div>
              <div className={Style.Release}>
                <div className={Style.img}>
                  <img src={Optimizing} alt="" />
                </div>
                <img src={pre} alt="" />
                <p>3 February 2023</p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <h5>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h5>
              </div>
            </div>




            <div className={Style.AllPress}>
              <div className={Style.Release}>
                <div className={Style.img}>
                  <img src={WRP} alt="" />
                </div>
                <img src={pre} alt="" />
                <p>3 February 2023</p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <h5>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h5>
              </div>
              <div className={Style.Release}>
                <div className={Style.img}>
                  <img src={pas} alt="" />
                </div>
                <img src={pre} alt="" />
                <p>3 February 2023</p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <h5>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h5>
              </div>
              <div className={Style.Release}>
                <div className={Style.img}>
                  <img src={Optimizing} alt="" />
                </div>
                <img src={pre} alt="" />
                <p>3 February 2023</p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <h5>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h5>
              </div>
             
            </div>
            <div className={Style.Next}>
              <a>
                 <img src={Foreward} alt="" />
              </a>
               <a>
                 <img src={Icon1} alt="" />
               </a>
               <a>
                <img src={Icon2} alt="" />
               </a>
                <a>
                  <img src={Icon3} alt="" />
                </a>
                <a>
                  <img src={Backward} alt="" />
                </a>
                
              </div>
          </div>
          
        </section>
      </div>
    </>
  );
};

export default News;
