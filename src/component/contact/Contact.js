import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { HiOutlinePhone } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { Ri24HoursFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { ImTwitter } from "react-icons/im";
const Result = () => {
  return alert(
    "Your Message has been successfully sent. i will contact you soon"
  );
};

const Contact = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eys6hos",
        "template_wr5h6rp",
        e.target,
        "gHWypNqKX20i1EcRs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <>
      <form action="" onSubmit={sendEmail}>
        <div className="form">
          <div className="contact-inner">
            <h3 className="contact-h3">CONTACT US</h3>
            <br />
            {/* <span>FULL NAME : </span> */}
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              required
            />
            <br />

            <br />
            <input
              type="text"
              name="phone"
              placeholder="Your Number"
              required
            />
            <br />

            <br />
            <input type="text" name="email" placeholder="Your Mail" required />
            <br />
            <div className="">
              <br />
              <textarea name="message" placeholder="Your Message " required />
              <br />
              <br></br>
            </div>
            <button className="button"> SUBMIT</button>

            <div>{result ? <Result /> : null}</div>
          </div>
          <div className="contact">
            <h3 className="contact-icon">
              <HiOutlinePhone /> CALL US
            </h3>
            <h5> 9856321452 , 8563259641</h5>
            <br />

            <h3 className="contact-icon">
              <GoLocation /> LOCATION
            </h3>
            <h5>121 Rock sreet , 21 avenue , New York , NY 92103-9000.</h5>
            <br />

            <h3 className="contact-icon">
              <AiOutlineMail /> MAIL US
            </h3>
            <h5> jinalisanghvi99@gmail.com </h5>
            <br />

            <h3 className="contact-icon">
              <Ri24HoursFill />
            </h3>
            <h5>Mon-Fri.... 10 am -8am , Sat,Sun....Closed.</h5>
            <div class="social-container">
              <h3>
                <BsInstagram /> &nbsp; &nbsp;
                <FiYoutube />
                &nbsp; &nbsp;
                <ImTwitter />
              </h3>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
