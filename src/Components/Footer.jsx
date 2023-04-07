import React from "react";
// import "../Styles/Homestyles/Footer.css";
import Style from "../Styles/Homestyles/Footer.module.css";
import Submit from "../assets/FooterImage/Submit.png";
import FaceBookIcon from "../assets/FooterImage/FacebookIcon.png";
import TwitterIcon from "../assets/FooterImage/twiterIcon.png";
import InstagramIcon from "../assets/FooterImage/InstaIcon.png";
import FaceBook from "../assets/FooterImage/Vector.png";
import Instagram from "../assets/FooterImage/Vector (2).png";
import EmailIcon from "../assets/FooterImage/EmailIcon.png";
import PCRCLOGO from "../assets/homeImages/PcrcLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={Style.FooterContainer}>
      <div className={Style.stayContainer}>
        <div className={Style.Connected}>
          <h4>Stay Connected</h4>
          <div className={Style.space}></div>
          <h3>Police Community Relations Commision</h3>
          <div className={Style.p}>
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </div>
        </div>
        <div className={Style.emailContainer}>
          <input
            type="search"
            placeholder="youremail@domain.com"
            className={Style.email}
          />
          <label htmlFor="" className={Style.submitBtn}>
            <img src={Submit} alt="" />
          </label>
        </div>
      </div>
      <section>
        <div className={Style.MemberLoginContainer}>
          <div className={Style.MemnberLoginWidth}>
            <div className={Style.Learn}>
              <button className={Style.blue}>Learn About Us</button>
              <button className={Style.border}>Report A Case</button>
            </div>
            <div className={Style.Social}>
              <a href="#">
                <img src={TwitterIcon} alt="" />
              </a>
              <a href="#">
                <img src={FaceBookIcon} alt="" />
              </a>
              <a href="#">
                <img src={InstagramIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={Style.FooterEndContainer}>
          <div className={Style.AboutWhat}>
            <img src={PCRCLOGO} alt="" />
          </div>
          <div className={Style.AboutPCRC}>
            <ul>
              <h1 className={Style.About}>
                <Link to="/About">About PCRC</Link>
              </h1>
              <li>Who we are</li>
              <li>Who we work with</li>
              <li>Our people</li>
              <li>Our story</li>
              <li>General Enquiries</li>
            </ul>
          </div>
          <div className={Style.Ireporter}>
            <ul>
              <h1>Ireporter</h1>
              <li>Report a case</li>
            </ul>
          </div>
          <div className={Style.FollowUs}>
            <ul>
              <h1>Follow Us</h1>
              <div className={Style.FollowUsIcons}>
                <li>
                  <img src={FaceBook} alt="" />
                </li>
                <li>
                  <img src={Instagram} alt="" />
                </li>
                <li>
                  <img src={TwitterIcon} alt="" />
                </li>
                <li>
                  <img src={EmailIcon} alt="" />
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className={Style.Policy}>
          <p>site map</p> <hr />
          <p>Privacy Policy</p> <hr />
          <p>Cookie Policy</p> <hr />
          <p>Terms & Conditions</p> <hr />
          <p>General enquiries</p> <hr />
          <p>Accessibility</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
