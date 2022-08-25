import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillBehanceSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <AiOutlineWhatsApp />
        <p>1124515031</p>
      </div>
      <div>
        <AiOutlineMail />
        <p>natalia.mf@live.com.ar</p>
      </div>
      <div>
        <AiFillBehanceSquare />
        <p>Natalia Martínez Furió</p>
      </div>
    </footer>
  );
};

export default Footer;
