import React from "react";
import Footer from "../Components/Footer";
import membersImage from "../assets/homeImages/div.png";
import Benefit from "../assets/homeImages/BenefitImg.png";
import { Link } from "react-router-dom";
import PCRCLOGO from "../assets/homeImages/PcrcLogo.png";
import LoginIcon from "../assets/homeImages/loginIcon.png";
import Style from "../Styles/Membership.module.css";
import Become from "../assets/homeImages/a.png";
import scene from "../assets/homeImages/scene.png";

const History = () => {
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
                <option value="ejiifj">OUR STRUCTURE</option>
                <option value="ejiifj">OUR STRUCTURE</option>
                <option value="ejiifj">OUR STRUCTURE</option>
                <option value="ejiifj">OUR STRUCTURE</option>
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

        <div className="image">
          <img src={membersImage} alt="" />
        </div>
        <section className={Style.AllAboutUS}>
          <div className={Style.AboutUs}>
            <div className={Style.AboutUsContent}>
              <h1 className={Style.h1}>Membership Benefits</h1>
              <div className={Style.space}></div>
              <p>
                About Us Rorem ipsum dolor sit amet, consectetur adipiscing
                elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Praesent auctor purus luctus enim egestas, ac
                scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
                rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                Morbi convallis convallis diam sit amet lacinia. Aliquam in
                elementum tellus.
              </p>

              <p>
                {" "}
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
                felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
                Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
                nibh. Mauris sit amet magna non ligula vestibulum eleifend.
                Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo.
              </p>
              <p>
                Nam pulvinar blandit velit, id condimentum diam faucibus at.
                Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue
                felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus
                non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl
                neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam
                dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin
                felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis
                nisi, consequat dictum risus dapibus a. Duis felis ante, varius
                in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida
                sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra
                consequat. Mauris id mi ut arcu feugiat maximus. Mauris
                consequat tellus id tempus aliquet.
              </p>
              <p>
                Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo
                congue posuere at sit amet ligula. Pellentesque eget augue nec
                nisl sodales blandit sed et sem. Aenean quis finibus arcu, in
                hendrerit purus. Praesent ac aliquet lorem. Morbi feugiat
                aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex
                lorem, pulvinar sed auctor sit amet, molestie a nibh. Ut euismod
                nisl arcu, sed placerat nulla volutpat aliquet. Ut id convallis
                nisl. Ut mauris leo, lacinia sed elit id, sagittis rhoncus odio.
                Pellentesque sapien libero, lobortis a placerat et, malesuada
                sit amet dui. Nam sem sapien, congue eu rutrum nec, pellentesque
                eget ligula.
              </p>
              <p>
                Nunc tempor interdum ex, sed cursus nunc egestas aliquet.
                Pellentesque interdum vulputate elementum. Donec erat diam,
                pharetra nec enim ut, bibendum pretium tellus. Vestibulum et
                turpis nibh. Cras vel ornare velit, ac pretium arcu. Cras justo
                augue, finibus id sollicitudin et, rutrum eget metus.
                Suspendisse ut mauris eu massa pulvinar sollicitudin vel sed
                enim. Pellentesque viverra arcu et dignissim vehicula. Donec a
                velit ac dolor dapibus pellentesque sit amet at erat. Phasellus
                porttitor, justo eu ultrices vulputate, nisi mi placerat lectus,
                sed rutrum tellus est id urna. Aliquam pellentesque odio metus,
                sit amet imperdiet nisl sodales eu. Quisque viverra nunc nec
                vestibulum dapibus. Integer nec diam a libero tincidunt varius
                sed vel odio. Donec rutrum dapibus massa, vel tempor nulla porta
                id. Suspendisse vulputate fermentum sem sollicitudin facilisis.
                Aliquam vehicula sapien nec ante auctor, quis mollis leo
                tincidunt.
              </p>
              <p className={Style.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
              <Link to="/Become-A-Member">
                <img className={Style.BecomeBotton} src={Become} alt="" />
              </Link>
            </div>
            <img className={Style.img} src={Benefit} alt="" />
          </div>
          <div className={Style.AboutUs}>
            <div className={Style.AboutUsContent}>
              <h1 className={Style.h1}>Membership Requirements</h1>
              <div className={Style.space}></div>
              <p>
                About Us Rorem ipsum dolor sit amet, consectetur adipiscing
                elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Praesent auctor purus luctus enim egestas, ac
                scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
                rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                Morbi convallis convallis diam sit amet lacinia. Aliquam in
                elementum tellus.
              </p>

              <p>
                {" "}
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
                felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
                Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
                nibh. Mauris sit amet magna non ligula vestibulum eleifend.
                Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo.
              </p>
              <p>
                Nam pulvinar blandit velit, id condimentum diam faucibus at.
                Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue
                felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus
                non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl
                neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam
                dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin
                felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis
                nisi, consequat dictum risus dapibus a. Duis felis ante, varius
                in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida
                sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra
                consequat. Mauris id mi ut arcu feugiat maximus. Mauris
                consequat tellus id tempus aliquet.
              </p>
              <p>
                Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo
                congue posuere at sit amet ligula. Pellentesque eget augue nec
                nisl sodales blandit sed et sem. Aenean quis finibus arcu, in
                hendrerit purus. Praesent ac aliquet lorem. Morbi feugiat
                aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex
                lorem, pulvinar sed auctor sit amet, molestie a nibh. Ut euismod
                nisl arcu, sed placerat nulla volutpat aliquet. Ut id convallis
                nisl. Ut mauris leo, lacinia sed elit id, sagittis rhoncus odio.
                Pellentesque sapien libero, lobortis a placerat et, malesuada
                sit amet dui. Nam sem sapien, congue eu rutrum nec, pellentesque
                eget ligula.
              </p>
              <p>
                Nunc tempor interdum ex, sed cursus nunc egestas aliquet.
                Pellentesque interdum vulputate elementum. Donec erat diam,
                pharetra nec enim ut, bibendum pretium tellus. Vestibulum et
                turpis nibh. Cras vel ornare velit, ac pretium arcu. Cras justo
                augue, finibus id sollicitudin et, rutrum eget metus.
                Suspendisse ut mauris eu massa pulvinar sollicitudin vel sed
                enim. Pellentesque viverra arcu et dignissim vehicula. Donec a
                velit ac dolor dapibus pellentesque sit amet at erat. Phasellus
                porttitor, justo eu ultrices vulputate, nisi mi placerat lectus,
                sed rutrum tellus est id urna. Aliquam pellentesque odio metus,
                sit amet imperdiet nisl sodales eu. Quisque viverra nunc nec
                vestibulum dapibus. Integer nec diam a libero tincidunt varius
                sed vel odio. Donec rutrum dapibus massa, vel tempor nulla porta
                id. Suspendisse vulputate fermentum sem sollicitudin facilisis.
                Aliquam vehicula sapien nec ante auctor, quis mollis leo
                tincidunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
              <Link to="/Become-A-Member">
                <img className={Style.BecomeBotton} src={Become} alt="" />
              </Link>
            </div>
            <img className={Style.img} src={scene} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
