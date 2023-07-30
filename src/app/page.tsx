"use client";
import React, { useState } from "react";
import DynmaicButton from "./Component/DynamicButton";
import { BsGooglePlay, BsApple } from "react-icons/bs";
import { BiSolidHeart } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";
import emailjs from "emailjs-com";

import {
  FaCheckCircle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GiConcentricCrescents } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import png from "../app/assests/png/ifone.png";
import logo from "../app/assests/png/logo.png";
import img1 from "../app/assests/img/earn-reward.jpg";
import img2 from "../app/assests/img/clear-video.jpeg";
import img3 from "../app/assests/img/privacy.png";
import contactImage from "../app/assests/img/ContactUs.jpg";
import waveSvg from "../app/assests/svg/wave.svg";
import whiteSvg from "../app/assests/svg/whiteWave.svg";
import Apptsore from "../app/assests/png/coming-soon-on-app-store.png";
import Playstore from "../app/assests/png/coming-soon-on-play-store.png";
import featuresImage from "../app/assests/png/Galaxy Note 20 Ultra.png";

// import Link from "next/link";
import FeaturesCard from "./Component/FeaturesCard";
import WebCard from "./Component/WebCard";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((current) => !current);
  };

  return (
    <>
      <header>
        <div className="widthClass">
          <div className="header_menu">
            <img
              src={logo.src}
              alt="viby logo image"
              style={{
                width: "180px",
                height: "60px",
                objectFit: "cover",
              }}
            />
            <HiMenu
              size={45}
              color="white"
              className="header_menu_icon"
              onClick={handleMenu}
            />
          </div>
          <ul
            className="ul"
            style={{
              display: menu ? "block" : "",
            }}
          >
            <li>
              <Link
                activeClass="active"
                to="#features"
                spy={true}
                smooth={true}
                duration={500}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="#contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section
          className="s1"
          style={{
            paddingTop: "20px",
            // backgroundColor: "#ffffff",
            // backgroundImage: "linear-gradient(315deg, #ffffff 0%, #16204e 74%)",
          }}
        >
          <div className="section_flex">
            <div className="section_heading_container">
              <p className="heading_one">
                Meet new and interesting people nearby
              </p>
              <div className="coming_soon_container">
                <img src={Playstore.src} alt="viby Play Store" />
                <img src={Apptsore.src} alt=" viby App Store" />
              </div>
            </div>
            <div className="s1_image_container">
              <img src={png.src} alt="viby app image" />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 285">
            <path
              fill="white"
              fill-opacity="1"
              d="M0,128L60,149.3C120,171,240,213,360,192C480,171,600,85,720,96C840,107,960,213,1080,256C1200,299,1320,277,1380,266.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section
          style={{ backgroundColor: "white" }}
          id="#features"
          className="section_s2"
        >
          <div className="flex_col s2">
            <p className="s2_feature_title">Features</p>
            <div className="s2_features_container">
              <div className="S2_image_container">
                <img src={featuresImage.src} alt="Viby features image" />
              </div>
              <div className="S2_text_container">
                <FeaturesCard
                  Logo={FaCheckCircle}
                  title="Easy to use"
                  description="So easy to use, anybody can use it very easily"
                />
                <FeaturesCard
                  Logo={GiConcentricCrescents}
                  title="Interest Centric"
                  description="All the people and content are personalized in your way"
                />
                <FeaturesCard
                  Logo={BiSolidHeart}
                  title="Endearment"
                  description="Find the love of your life or your money back"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: "linear-gradient(315deg, #ffffff 0%,#16204e 74%)",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill="white"
              fill-opacity="1"
              d="M0,32L34.3,37.3C68.6,43,137,53,206,74.7C274.3,96,343,128,411,144C480,160,549,160,617,149.3C685.7,139,754,117,823,101.3C891.4,85,960,75,1029,80C1097.1,85,1166,107,1234,133.3C1302.9,160,1371,192,1406,208L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
          </svg>
          <div className="section_flex s3">
            <WebCard
              src={img1.src}
              title="Earn-rewards"
              subTitle="Experience our app's groundbreaking Al- powered rewards system, tailored to your preferences, for an unparalleled and personalized rewards journey"
            />
            <WebCard
              src={img2.src}
              title="Clear video"
              subTitle="Bringing you closer, one pixel at a time - the ultimate video calling app for seamless connections"
            />
            <WebCard
              src={img3.src}
              title="Privacy-focused"
              subTitle="Ensure secure converstation with end-to-end encryption and advanced privacy settings, keeping your personal imformation safe."
            />
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="white"
              fill-opacity="1"
              d="M0,32L34.3,37.3C68.6,43,137,53,206,74.7C274.3,96,343,128,411,144C480,160,549,160,617,149.3C685.7,139,754,117,823,101.3C891.4,85,960,75,1029,80C1097.1,85,1166,107,1234,133.3C1302.9,160,1371,192,1406,208L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg> */}
        </section>

        <section className="s6" id="#contact">
          <div className="s6_contact_us_container">
            {/* <img className="S6_White_wave_svg" src={whiteSvg.src} alt="" /> */}
            <img
              className="S6_contact_image"
              src={contactImage.src}
              alt="Viby Contact image"
            />
            <img className="S6_wave_svg" src={waveSvg.src} alt="" />
            <div className="S6_contact_text_conatiner">
              <h3>VIBY</h3>
              <h1>Contact Us</h1>
              <h3>Connecting the World, One Random Call at a Time!</h3>
            </div>
            <div className="s6_contact_us_email">
              <MdEmail size={20} />
              <p>contactus@vibymedia.com</p>
            </div>
          </div>
          {/* <div className="input_container">
            <h1 className="Input_heading">Help us to Improve</h1>
            <input type="text" placeholder="Email" className="input_form" />
            <textarea className="input_form" placeholder="Message" rows={8} />
            <DynmaicButton
              Text="Send Message"
              Styling={{
                backgroundColor: "#2026b2",
                borderColor: "#2026b2",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              // onclick={sendEmail}
            />
          </div> */}
        </section>
      </main>
      <footer>
        {/* <div className="social_container">
          <Link href="#">
            <FaTwitter size={30} color="#26a7de" />
          </Link>
          <Link href="#">
            <FaInstagram size={30} color="#F56040 " />
          </Link>
          <Link href="#">
            <FaFacebook size={30} color="#3b5998" />
          </Link>
          <Link href="#">
            <MdEmail size={30} color="#DB4437" />
          </Link>
        </div> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,32L34.3,37.3C68.6,43,137,53,206,74.7C274.3,96,343,128,411,144C480,160,549,160,617,149.3C685.7,139,754,117,823,101.3C891.4,85,960,75,1029,80C1097.1,85,1166,107,1234,133.3C1302.9,160,1371,192,1406,208L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg> */}
        <div className="footer_copyright_text">
          © Copyright Viby Info Media Private Limited 2023
        </div>
      </footer>
    </>
  );
}
