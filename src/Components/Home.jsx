import React from "react";
import Style from "../Styles/Homestyles/Home.module.css";
import PCRCLOGO from "../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../assets/homeImages/loginIcon.png";
import Officer from "../assets/homeImages/Police.png";
import Footer from "./Footer";
import Jotter from "../assets/homeImages/jotter.png";
import Tag from "../assets/homeImages/tag.png";
import Laptop from "../assets/homeImages/laptop.png";
import Become from "../assets/homeImages/a.png";
import View from "../assets/homeImages/a (1).png";
import Before from "../assets/homeImages/li_before.png";
import Teacher from "../assets/homeImages/Teacher.jpeg.png";
import Training from "../assets/homeImages/Training.png";
import News from "../assets/homeImages/p.png";
import Authors from "../assets/homeImages/Authors.png";
import Literary from "../assets/homeImages/Literary.png";
import Screen from "../assets/homeImages/Screen.png";
import All from "../assets/homeImages/a (2).png";
import Feature from "../assets/homeImages/Featured.png";
import House from "../assets/homeImages/House.png";
import { Link } from "react-router-dom";

const Homr = () => {
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
          <div className={Style.LearnContainer}>
            <div className={Style.pcrcOfficer}>
              <img src={Officer} alt="" srcset="" />
            </div>
            <div className={Style.gorem}>
              <h1>Gorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className={Style.Learn}>
                <Link to="/About">
                  <button className={Style.blue}>Learn About Us</button>
                </Link>
                <Link>
                  <button className={Style.border}>Report A Case</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
              <Link to="/Become-A-Member">
                <img src={Become} alt="" />
              </Link>
              <div className={Style.renew}>
                <a href="$">Renew Membership</a>
              </div>
            </div>
            <div className={Style.Lorem}>
              <div className={Style.top}>
                {/* <div className="box">d</div>
                <div className="box">s</div> */}
                <p>
                  1<span>/</span>4
                </p>
              </div>
              <div className={Style.bottom}>
                <div className={Style.LoremCards}>
                  <img src={Jotter} alt="" srcset="" />
                  <p>Lorem Ipsum</p>
                  <p>
                    Navigate the legal aspects of writing with the help of our
                    experienced lawyers.
                  </p>
                </div>
                <div className={Style.LoremCards}>
                  <img src={Laptop} alt="" srcset="" />
                  <p>Lorem Ipsum</p>
                  <p>
                    Manage your online presence with our web services for
                    members.
                  </p>
                </div>
                <div className={Style.LoremCards}>
                  <img src={Tag} alt="" srcset="" />
                  <p>Lorem Ipsum</p>
                  <p>
                    Find insurance coverage and discounted services to support
                    you and your writing business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={Style.section}>
          <div className={Style.PublicationContainer}>
            <div className="left">
              <div className={Style.Connected}>
                <p>Publications</p>
                <div className={Style.space}></div>
                <div className={Style.p}>
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
              <div className={Style.ViewBy}>
                <p>View By</p>
                <div className={Style.poepleView}>
                  <img src={Before} alt="" srcset="" />
                  <p>Researchers</p>
                </div>
                <div className={Style.poepleView}>
                  <img src={Before} alt="" srcset="" />
                  <p>Members</p>
                </div>
                <div className={Style.poepleView}>
                  <img src={Before} alt="" srcset="" />
                  <p>Government</p>
                </div>
              </div>
              <a href="">
                <img src={View} alt="" />
              </a>
            </div>
            <div className="">
              <div className={Style.Resources}>
                <h3>Resources</h3>
                <p>Model Trade Book Contract </p>
                <h5>Legal</h5>
                <div className={Style.Space}></div>
              </div>
              <div className={Style.Resources}>
                <h3>Resources</h3>
                <p>The Authors Guild Guide to Self-Publishing </p>
                <h5>Self-Publishing</h5>
                <div className={Style.Space}></div>
              </div>
              <div className={Style.Resources}>
                <h3>Resources</h3>
                <p>​​Avoiding Publishing Scams </p>
                <h5>Reports</h5>
              </div>
            </div>
          </div>
        </section>

        {/*             Teacher          */}

        <section className={Style.section}>
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
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Continue
              </div>
            </div>
          </div>
        </section>

        {/*          Upcoming          */}

        <section>
          <div className={Style.UpcomingCotainer}>
            <div className={Style.Upcoming}>
              <div className="left">
                <h1>Upcoming Events</h1>
                <div className={Style.EventContainer}>
                  <img src={Training} alt="" srcset="" />
                  <div className={Style.Event}>
                    <h1>Event</h1>
                    <h3>
                      Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                    <p>
                      Forem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                    <small>February 7 - February 7, 2023</small>
                  </div>
                </div>
                <div className={Style.EventContainer}>
                  <img src={Authors} alt="" srcset="" />
                  <div className={Style.Event}>
                    <h1>Event</h1>
                    <h3>
                      Horem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                    <small>February 7 - February 7, 2023</small>
                  </div>
                </div>
                <div className={Style.EventContainer}>
                  <img src={Literary} alt="" srcset="" />
                  <div className={Style.Event}>
                    <h1>Event</h1>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                    <p>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                    <small>February 7 - February 7, 2023 </small>
                    <img src={All} alt="" />
                  </div>
                </div>
              </div>
              <div className="Right">
                <div className={Style.LatestContainer}>
                  <div className={Style.Space}></div>
                  <di>
                    <h1>Latest</h1>
                    <div className={Style.NewsBoarder}>
                      <img src={News} alt="" />
                      <p>
                        Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <small>February 1, 2023</small>
                    </div>
                    <div className={Style.NewsBoarder}>
                      <img src={News} alt="" />
                      <p>
                        Worem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <small>February 1, 2023</small>
                    </div>
                    <div className={Style.NewsBoarder}>
                      <img src={News} alt="" />
                      <p>
                        Horem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <small>February 1, 2023</small>
                    </div>
                    <a href="$">
                      <span>></span> View All News{" "}
                    </a>
                  </di>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  */}

        <section className={Style.section}>
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

        {/*  */}

        <section className={Style.section}>
          <div className={Style.AdvocateContainer}>
            <div className={Style.left}>
              <img className={Style.img} src={Feature} alt="" srcset="" />
              <div className={Style.AdvocateMain}>
                <img src={House} alt="" srcset="" />
                <div className={Style.Advocate}>
                  <h1>Advocate</h1>
                    <p>
                      Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>

                  <small> February 7, 2023</small>
                </div>
              </div>
            </div>
            <div className={Style.Space}></div>
            <div className={Style.right}>
              <div className={Style.MemberBorder}>
                <h1>Members Community</h1>
                <p>
                  Meet fellow members and discuss the business of writing in our
                  online forum.
                </p>
                <a href="#">
                  <small>Become a Member</small>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homr;
