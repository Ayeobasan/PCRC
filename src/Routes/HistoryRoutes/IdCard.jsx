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
import Style from "../../Styles/Homestyles/IdCard.module.css";

const IDCard = () => {
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
                <p>
                  <Link to="/IDCardApplication"> ID Card Appliction </Link>
                </p>
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

        <div className={Style.AboutUs}>
          <div className={Style.AboutUsContent}>
            <div className={Style.h1}>
              <h1>ID Card Application</h1>
              <div className={Style.space}></div>
            </div>
            <div className={Style.RegNo}>
              <div>
                <label htmlFor="#">Membership Registration Number</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="Full Name(Optional)"
                />
              </div>
              <div className={Style.UploadFile}>
                <input className={Style.Upload} type="file" src="" alt="" />
              </div>
            </div>

            <div className={Style.Name}>
              <div className={Style.FullName}>
                <label htmlFor="#">Enter Your Full Name</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className={Style.SmallInput}>
                <label htmlFor="#">Date of Birth</label>
                <input
                  type="date"
                  id="FullName"
                  name="firstname"
                  placeholder="DD / MM / YYY"
                />
              </div>
              <div className={Style.SmallInput}>
                <label htmlFor="#">Phone Number</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="NIN/Passport"
                />
              </div>
            </div>
            <div className={Style.Name}>
              <div className={Style.SmallInput}>
                <label htmlFor="#">ID Card</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="NIN/Passport"
                />
              </div>
              <div className={Style.FullName}>
                <label htmlFor="#">Address</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="Number, street, City"
                />
              </div>
              <div className={Style.SmallInput}>
                <label htmlFor="#">State</label>
                <div className={Style.InputCategory}>
                  <select id="country" ame="Category">
                    <option value="0">State</option>
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
            </div>

            <div className={Style.Name}>
              <div className={Style.FullName}>
                <label htmlFor="#">Email Address</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className={Style.SmallInput}>
                <label htmlFor="#">Place Of Birth</label>
                <div className={Style.InputCategory}>
                  <select id="country" ame="Category">
                    <option value="0">City</option>
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
              <div className={Style.SmallInput}>
                <label htmlFor="#">Place Of Birth</label>
                <div className={Style.InputCategory}>
                  <select id="country" ame="Category">
                    <option value="0">Country</option>
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
            </div>

            <div className={Style.Name}>
              <div className={Style.SmallInput}>
                <label htmlFor="#">PCRC Division</label>
                <div className={Style.InputCategory}>
                  <select id="country" ame="Category">
                    <option value="0">Select Division</option>
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
              <div className={Style.FullName}>
                <label htmlFor="#">PCRC Position (If ANY)</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="Enter Your Position"
                />
              </div>
              <div className={Style.SmallInput}>
                <label htmlFor="#">Publics Position (If Any)</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="Enter Your Position"
                />
              </div>
            </div>

            <div className={Style.SelecName}>
              <div className={Style.SmallInputSelect}>
                <label htmlFor="#">PCRC Division</label>
                <div className={Style.InputCategory}>
                  <select id="country" ame="Category">
                    <option value="0">Select Division</option>
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
              <div className={Style.SmallInputSelect}>
                <label htmlFor="#">PCRC Division</label>
                <div className={Style.InputCategory}>
                  <select id="country" ame="Category">
                    <option value="0">Select Division</option>
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
              <div className={Style.SmallInputSelect}>
                <label htmlFor="#">PCRC Division</label>
                <div className={Style.InputCategory}>
                  <select id="country" ame="Category">
                    <option value="0">Select Division</option>
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
            </div>

            <div className={Style.Name}>
              <div className={Style.FullName}>
                <label htmlFor="#">Enter Full Name (Next Of Kin)</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="Enter Full Name (Next of Kin)"
                />
              </div>
              <div className={Style.SmallInput}>
                <label htmlFor="#">Relationship</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="Input Relationship"
                />
              </div>
              <div className={Style.SmallInput}>
                <label htmlFor="#">Phone Number</label>
                <input
                  type="text"
                  id="FullName"
                  name="firstname"
                  placeholder="Phone Number of "
                />
              </div>
            </div>
            <div className={Style.OfficialsContainer}>
              <h1>Officials Signature(For Official Use Only)</h1>
              <div className={Style.OfficialName}>
                <div className={Style.FullName}>
                  <label htmlFor="#">
                    Chairman/PRO(Airport/Railway/Marine)
                  </label>
                  <input
                    type="text"
                    id="FullName"
                    name="firstname"
                    placeholder="Name & Signature"
                  />
                </div>
                <div className={Style.FullName}>
                  <label htmlFor="#">State PRO</label>
                  <input
                    type="text"
                    id="FullName"
                    name="firstname"
                    placeholder="Name & Signature"
                  />
                </div>
              </div>
              <div className={Style.OfficialName}>
                <div className={Style.FullName}>
                  <label htmlFor="#">State Chairman</label>
                  <input
                    type="text"
                    id="FullName"
                    name="firstname"
                    placeholder="Name & Signature"
                  />
                </div>
                <div className={Style.FullName}>
                  <label htmlFor="#">Zonal PRO</label>
                  <input
                    type="text"
                    id="FullName"
                    name="firstname"
                    placeholder="Name & Signature"
                  />
                </div>
              </div>
              <div className={Style.Checkbox}>
                <input
                  type="Checkbox"
                  id="FullName"
                  name="firstname"
                  placeholder="Name & Signature"
                />
                <p htmlFor="#">
                  I hereby attest that all the information here are true to the
                  best of my knowledge and any false declaration should render
                  this application void.
                </p>
              </div>
              <div className={Style.Chairman}>
              <div>
                  <label htmlFor="">PCRC National Chariman</label>
                  <input type="text" placeholder="Name & Signature" />
                </div>
                <div>
                  <label htmlFor="">PCRC Deputy National Secretary</label>
                  <input type="text" placeholder="Name & Signature" />
                </div>
              </div>
              <a href="">
              <input type="submit" name="" value="Proceed to make payment" id="" />
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
