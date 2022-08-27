import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { BsBehance } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="contact-whatsapp">
        <BsWhatsapp />
        <p>1124515031</p>
      </div>
      <div className="contact-mail">
        <MdOutlineMail />
        <p>natalia.mf@live.com.ar</p>
      </div>
      <div className="contact-behance">
        <BsBehance />
        <p>Natalia Martínez Furió</p>
      </div>
    </footer>
  );
};

export default Footer;
