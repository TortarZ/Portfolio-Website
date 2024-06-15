import React from "react";
import "./Contact.css";
import MapIcon from "@mui/icons-material/Map";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-box">
          <h3 className="text-[#147efb] font-bold text-[17px] mb-[10px]">
            CONTACT
          </h3>
          <h2 className="text-[#2d2e32] font-bold text-[25px]">
            Don't be shy! Hit me up!
          </h2>
        </div>
        <div className="subcontact-box">
          <div className="contact-detail">
            <li className="icon-box">
              <MapIcon className="icon" />
            </li>
            <h3 className="icon-name">Location</h3>
            <p className="icon-detail">Pathumthani, Thailand</p>
          </div>
          <div className="contact-detail">
            <li className="icon-box">
              <MailOutlineIcon className="icon" />
            </li>
            <h3 className="icon-name">Mail</h3>
            <p className="icon-detail">sirikornsutthapas@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
