import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillBehanceSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <AiOutlineWhatsApp />
        <p>Whatsapp</p>
      </div>
      <div>
        <AiOutlineMail />
        <p>Correo</p>
      </div>
      <div>
        <AiFillBehanceSquare />
        <p>Behance</p>
      </div>
    </footer>
  );
};

export default Footer;
