import React from "react";
import Style from "../Styles/Publication/Publication.module.css";
import PCRCLOGO from "../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../assets/homeImages/loginIcon.png";
import Pub1 from "../assets/PublicationImg/Pub1.png";
import Pub2 from "../assets/PublicationImg/Pub2.png";
import Pub3 from "../assets/PublicationImg/Pub3.png";
import Pub4 from "../assets/PublicationImg/Pub4.png";
import Pub5 from "../assets/PublicationImg/Pub5.png";
import Pub6 from "../assets/PublicationImg/Pub6.png";
import Pub7 from "../assets/PublicationImg/Pub7.png";
import Pub8 from "../assets/PublicationImg/Pub8.png";
import Pub9 from "../assets/PublicationImg/Pub9.png";
import Pub10 from "../assets/PublicationImg/Pub10.png";
import Pub11 from "../assets/PublicationImg/Pub11.png";
import Pub12 from "../assets/PublicationImg/Pub12.png";
import { Link } from "react-router-dom";

const Publication = () => {
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
            <li>PUBLICATION</li>
            <Link to="/Event">
              <li>EVENTS </li>
            </Link>

            <Link to="/Advocate">
              <li>ADVOCACY</li>
            </Link>
          </ul>
        </section>
        <section>
          <div className={Style.AllPublication}>
            <h1>Publication</h1>
            <div className={Style.Category}>
              <div className={Style.Year}>
                <select id="country" name="-year-">
                  <option value="">- Year -</option>
                  <option value="2023">2023</option>
                  <option value="2023">2023</option>
                  <option value="2023">2023</option>
                  <option value="2023">2023</option>
                  <option value="2023">2023</option>
                  <option value="2023">2023</option>
                  <option value="2023">2023</option>
                  <option value="2023">2023</option>
                </select>
              </div>

              <div className={Style.InputCategory}>
                <select id="country" ame="Category">
                  <option value="0">- Category -</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                  <option value="5">Honda</option>
                  <option value="6">Jaguar</option>
                  <option value="7">Land Rover</option>
                  <option value="8">Mercedes</option>
                  <option value="9">Mini</option>
                  <option value="10">Nissan</option>
                  <option value="11">Toyota</option>
                  <option value="12">Volvo</option>
                </select>
              </div>
            </div>
            <div className={Style.PublicationContainer}>
              <div className={Style.GoPublic}>
                <img src={Pub1} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                  Forem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.{" "}
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub2} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    {" "}
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub3} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Morem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub4} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub5} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Morem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub6} alt="" />

                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Morem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub7} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub8} alt="" />

                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub9} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Morem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub10} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub11} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    {" "}
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.{" "}
                  </h5>
                </div>
              </div>
              <div className={Style.GoPublic}>
                <img src={Pub12} alt="" />
                <div className={Style.PublicationContent}>
                  <i>13 October 2022</i>
                  <p>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <a href="$">Go to the publication</a>
                  <div className={Style.Download}>
                    <a href="$">Download</a>
                  </div>
                  <div className={Style.Space}></div>
                  <h5 className={Style.wdw}>
                    Morem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Publication;
